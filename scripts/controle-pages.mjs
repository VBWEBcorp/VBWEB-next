// Controle navigateur avant mise en ligne : pour chaque page et chaque largeur
// (1440 et 375 px), compte les h1, verifie l'absence de defilement horizontal,
// fait defiler toute la page pour declencher les revelations, puis enregistre
// une capture pleine page dans scripts/out/controle/.
//
//   node scripts/controle-pages.mjs http://localhost:3123 / /a-propos /etudes-de-cas/applications-web

import { spawn } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const outDir = join(here, 'out', 'controle')
mkdirSync(outDir, { recursive: true })

const [base, ...paths] = process.argv.slice(2)
if (!base || paths.length === 0) {
  console.error('usage: node scripts/controle-pages.mjs <base> <chemin> [chemin...]')
  process.exit(1)
}

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
const PORT = 9334
const VIEWPORTS = [
  { name: '1440', width: 1440, height: 900, mobile: false },
  { name: '375', width: 375, height: 812, mobile: true },
]
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch(base)
      if (r.ok) return
    } catch {}
    await sleep(1000)
  }
  throw new Error(`serveur injoignable : ${base}`)
}

const chrome = spawn(CHROME, [
  '--headless=new', `--remote-debugging-port=${PORT}`, '--window-size=1440,900', '--hide-scrollbars',
  '--no-first-run', '--disable-gpu', `--user-data-dir=${join(outDir, 'chrome-profile')}`, 'about:blank',
], { stdio: 'ignore' })

async function waitForChrome() {
  for (let i = 0; i < 40; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${PORT}/json/version`)
      return (await r.json()).webSocketDebuggerUrl
    } catch { await sleep(250) }
  }
  throw new Error('Chrome ne repond pas')
}

function cdp(ws) {
  let id = 0
  const pending = new Map()
  const listeners = new Map()
  ws.addEventListener('message', (ev) => {
    const msg = JSON.parse(ev.data)
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id)
      pending.delete(msg.id)
      msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result)
    } else if (msg.method) {
      for (const fn of listeners.get(msg.method) ?? []) fn(msg.params)
    }
  })
  return {
    send: (method, params = {}, sessionId) => new Promise((resolve, reject) => {
      const msgId = ++id
      pending.set(msgId, { resolve, reject })
      ws.send(JSON.stringify({ id: msgId, method, params, ...(sessionId ? { sessionId } : {}) }))
    }),
    once: (method) => new Promise((resolve) => {
      const fn = (params) => {
        listeners.set(method, (listeners.get(method) ?? []).filter((f) => f !== fn))
        resolve(params)
      }
      listeners.set(method, [...(listeners.get(method) ?? []), fn])
    }),
  }
}

async function main() {
  await waitForServer()
  const ws = new WebSocket(await waitForChrome())
  await new Promise((r) => ws.addEventListener('open', r))
  const c = cdp(ws)
  const { targetId } = await c.send('Target.createTarget', { url: 'about:blank' })
  const { sessionId: s } = await c.send('Target.attachToTarget', { targetId, flatten: true })
  await c.send('Page.enable', {}, s)
  await c.send('Runtime.enable', {}, s)

  const problems = []
  for (const vp of VIEWPORTS) {
    await c.send('Emulation.setDeviceMetricsOverride', { width: vp.width, height: vp.height, deviceScaleFactor: 1, mobile: vp.mobile }, s)
    for (const path of paths) {
      const url = base + path
      // Premier chargement : on pose le consentement cookies, puis on recharge
      // pour que le bandeau ne masque rien.
      let loaded = c.once('Page.loadEventFired')
      await c.send('Page.navigate', { url }, s)
      await loaded
      await c.send('Runtime.evaluate', { expression: `try{localStorage.setItem('cookie-consent','accepted');localStorage.setItem('cookie_consent', JSON.stringify({analytics:true,marketing:true,accepted:true,status:'accepted'}))}catch(e){};'ok'` }, s)
      loaded = c.once('Page.loadEventFired')
      await c.send('Page.reload', {}, s)
      await loaded
      await sleep(1200)
      // Defilement complet, assez lent pour que chaque revelation se declenche.
      const { result } = await c.send('Runtime.evaluate', {
        awaitPromise: true,
        returnByValue: true,
        expression: `(async () => {
          const step = Math.round(window.innerHeight * 0.5);
          for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
            window.scrollTo(0, y); await new Promise(r => setTimeout(r, 220));
          }
          window.scrollTo(0, document.documentElement.scrollHeight); await new Promise(r => setTimeout(r, 600));
          window.scrollTo(0, 0); await new Promise(r => setTimeout(r, 700));
          const h1 = [...document.querySelectorAll('h1')].map(h => h.textContent.trim().replace(/\\s+/g, ' '));
          return {
            h1,
            scrollWidth: document.documentElement.scrollWidth,
            innerWidth: window.innerWidth,
            height: document.documentElement.scrollHeight,
            title: document.title,
          };
        })()`,
      }, s)
      const info = result.value
      const overflow = info.scrollWidth > info.innerWidth
      const h1ok = info.h1.length === 1
      const line = `${vp.name} ${path} : ${info.h1.length} h1 ${h1ok ? 'OK' : 'PROBLEME'} | largeur ${info.scrollWidth}/${info.innerWidth} ${overflow ? 'DEBORDEMENT' : 'OK'} | ${info.height} px | ${info.h1.join(' / ')}`
      console.log(line)
      if (!h1ok || overflow) problems.push(line)

      const slug = path.replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '') || 'accueil'
      const { data } = await c.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true }, s)
      writeFileSync(join(outDir, `${vp.name}-${slug}.png`), Buffer.from(data, 'base64'))

      // Captures a la taille de l'ecran sur des sections precises (FOCUS="#agence,#etudes-de-cas").
      for (const sel of (process.env.FOCUS ?? '').split(',').filter(Boolean)) {
        const { result: r } = await c.send('Runtime.evaluate', {
          awaitPromise: true, returnByValue: true,
          expression: `(async () => { const el = document.querySelector(${JSON.stringify(sel)}); if (!el) return false; el.scrollIntoView({ block: 'start' }); await new Promise(r => setTimeout(r, 1500)); return true })()`,
        }, s)
        if (!r.value) continue
        const shot = await c.send('Page.captureScreenshot', { format: 'png' }, s)
        writeFileSync(join(outDir, `${vp.name}-${slug}-${sel.replace(/[^a-z0-9]+/gi, '')}.png`), Buffer.from(shot.data, 'base64'))
      }
    }
  }
  ws.close()
  chrome.kill()
  console.log(problems.length ? `\n${problems.length} probleme(s)` : '\nAucun probleme : un seul h1, aucun debordement')
}

main().catch((e) => { console.error(e); chrome.kill(); process.exit(1) })
