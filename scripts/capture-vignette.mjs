// Capture une vignette 1440x900 d'un site (Chrome headless pilote par CDP,
// sans puppeteer ni playwright), la compresse en webp sous 60 Ko et l'envoie
// dans le bucket R2 `vbweb-images`, celui des visuels ecrits en dur dans le code.
//
//   node scripts/capture-vignette.mjs <url> <NOM-DU-SITE> [--no-upload] [--wait=ms]
//
// Les cles R2 viennent de .env.local (R2_ACCOUNT_ID, R2_ACCESS_KEY_ID,
// R2_SECRET_ACCESS_KEY). Le bandeau cookies est ecarte en ecrivant le
// consentement dans localStorage avant un second chargement.

import { spawn } from 'node:child_process'
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')
const outDir = join(here, 'out')
mkdirSync(outDir, { recursive: true })

const [url, name, ...flags] = process.argv.slice(2)
if (!url || !name) {
  console.error('usage: node scripts/capture-vignette.mjs <url> <NOM-DU-SITE> [--no-upload] [--wait=ms]')
  process.exit(1)
}
const upload = !flags.includes('--no-upload')
const waitMs = Number((flags.find((f) => f.startsWith('--wait=')) ?? '--wait=3000').slice(7))

const env = Object.fromEntries(
  readFileSync(join(root, '.env.local'), 'utf8')
    .split(/\r?\n/)
    .filter((l) => /^[A-Z_0-9]+=/.test(l))
    .map((l) => {
      const i = l.indexOf('=')
      return [l.slice(0, i), l.slice(i + 1).replace(/^"|"$/g, '')]
    }),
)

// Chrome du poste Windows, ou celui indiqué par CHROME_PATH (sur le VPS : le Chromium de Playwright).
const CHROME = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe'
const PORT = 9333
const PUBLIC_BASE = 'https://pub-698f857760da42999dac8854114fbc41.r2.dev'
const BUCKET = 'vbweb-images'

const chrome = spawn(CHROME, [
  '--headless=new',
  `--remote-debugging-port=${PORT}`,
  '--window-size=1440,900',
  '--hide-scrollbars',
  '--no-first-run',
  '--disable-gpu',
  // Sur Linux (VPS), Chromium refuse de démarrer sans ce drapeau.
  ...(process.platform === 'linux' ? ['--no-sandbox'] : []),
  `--user-data-dir=${join(outDir, 'chrome-profile')}`,
  'about:blank',
], { stdio: 'ignore' })

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function waitForChrome() {
  for (let i = 0; i < 40; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${PORT}/json/version`)
      return (await r.json()).webSocketDebuggerUrl
    } catch {
      await sleep(250)
    }
  }
  throw new Error('Chrome ne repond pas sur le port de debogage')
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
      for (const fn of listeners.get(msg.method) ?? []) fn(msg.params, msg.sessionId)
    }
  })
  return {
    send: (method, params = {}, sessionId) =>
      new Promise((resolve, reject) => {
        const msgId = ++id
        pending.set(msgId, { resolve, reject })
        ws.send(JSON.stringify({ id: msgId, method, params, ...(sessionId ? { sessionId } : {}) }))
      }),
    once: (method) =>
      new Promise((resolve) => {
        const fn = (params) => {
          listeners.set(method, (listeners.get(method) ?? []).filter((f) => f !== fn))
          resolve(params)
        }
        listeners.set(method, [...(listeners.get(method) ?? []), fn])
      }),
  }
}

async function main() {
  const wsUrl = await waitForChrome()
  const ws = new WebSocket(wsUrl)
  await new Promise((r) => ws.addEventListener('open', r))
  const c = cdp(ws)

  const { targetId } = await c.send('Target.createTarget', { url: 'about:blank' })
  const { sessionId: s } = await c.send('Target.attachToTarget', { targetId, flatten: true })
  await c.send('Page.enable', {}, s)
  await c.send('Runtime.enable', {}, s)
  await c.send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false }, s)

  const load = async () => {
    const loaded = c.once('Page.loadEventFired')
    await c.send('Page.navigate', { url }, s)
    await loaded
    await sleep(waitMs)
  }

  await load()
  // Consentement cookies des sites du template et des sites courants, puis rechargement.
  await c.send('Runtime.evaluate', {
    expression: `
      try {
        localStorage.setItem('cookie_consent', JSON.stringify({ analytics: true, marketing: true, accepted: true, status: 'accepted' }));
        localStorage.setItem('cookie-consent', 'accepted');
        localStorage.setItem('cookieConsent', 'accepted');
        localStorage.setItem('consent', 'accepted');
        sessionStorage.setItem('promo_popup_code_recu', '1');
        sessionStorage.setItem('promo_popup_dismissed', '1');
      } catch (e) {}
      'ok'
    `,
  }, s)
  await load()
  // Retire ce qui ressemble encore a un bandeau fixe en bas (dernier recours).
  await c.send('Runtime.evaluate', {
    expression: `
      for (const el of document.querySelectorAll('[class*="cookie" i], [id*="cookie" i], [class*="consent" i], [id*="consent" i]')) {
        const cs = getComputedStyle(el); if (cs.position === 'fixed') el.remove();
      }
      window.scrollTo(0, 0); 'ok'
    `,
  }, s)
  await sleep(600)

  const { data } = await c.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false }, s)
  const png = Buffer.from(data, 'base64')
  const pngPath = join(outDir, `${name}.png`)
  writeFileSync(pngPath, png)

  let quality = 82
  let webp
  do {
    webp = await sharp(png).resize(1440, 900, { fit: 'cover', position: 'top' }).webp({ quality }).toBuffer()
    quality -= 6
  } while (webp.length > 60_000 && quality > 30)
  const suffix = Math.random().toString(36).slice(2, 10)
  const key = `${name}-${suffix}.webp`
  const webpPath = join(outDir, key)
  writeFileSync(webpPath, webp)
  console.log(`capture: ${pngPath}`)
  console.log(`webp: ${webpPath} (${Math.round(webp.length / 1024)} Ko, qualite ${quality + 6})`)

  ws.close()
  chrome.kill()

  if (!upload) return
  const s3 = new S3Client({
    region: 'auto',
    endpoint: `https://${env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId: env.R2_ACCESS_KEY_ID, secretAccessKey: env.R2_SECRET_ACCESS_KEY },
  })
  await s3.send(new PutObjectCommand({ Bucket: BUCKET, Key: key, Body: webp, ContentType: 'image/webp', CacheControl: 'public, max-age=31536000, immutable' }))
  const publicUrl = `${PUBLIC_BASE}/${key}`
  const check = await fetch(publicUrl, { method: 'HEAD' })
  console.log(`url: ${publicUrl} (${check.status})`)
}

main().catch((e) => {
  console.error(e)
  chrome.kill()
  process.exit(1)
})
