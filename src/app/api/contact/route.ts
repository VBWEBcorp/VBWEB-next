import { NextResponse } from 'next/server'

import { siteConfig } from '@/lib/seo'

/**
 * Réception des deux formulaires du site (popup « audit gratuit » et page
 * contact) et envoi par Resend : une notification à contact@vbweb.fr avec le
 * prospect en reply-to, puis un accusé de réception au prospect.
 */

const RESEND_URL = 'https://api.resend.com/emails'
const FROM = 'VBWEB <contact@vbweb.fr>'
const CALENDLY = 'https://calendly.com/web-rdv/echange-vbweb-30-minutes'

type Payload = {
  source?: 'audit' | 'contact'
  name?: string
  email?: string
  website?: string
  budget?: string
  message?: string
  /** Pot de miel : champ invisible, rempli uniquement par les robots */
  company?: string
}

const clean = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '')
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)
const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] ?? c)

async function sendMail(apiKey: string, mail: Record<string, unknown>) {
  const res = await fetch(RESEND_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(mail),
  })
  if (!res.ok) throw new Error(`Resend ${res.status} : ${await res.text()}`)
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY manquante')
    return NextResponse.json({ error: 'Envoi indisponible' }, { status: 500 })
  }

  let body: Payload
  try {
    body = (await req.json()) as Payload
  } catch {
    return NextResponse.json({ error: 'Corps invalide' }, { status: 400 })
  }

  // Un robot a rempli le champ caché : on répond OK sans rien envoyer.
  if (clean(body.company, 10)) return NextResponse.json({ ok: true })

  const source = body.source === 'audit' ? 'audit' : 'contact'
  const name = clean(body.name, 200)
  const email = clean(body.email, 200)
  const website = clean(body.website, 500)
  const budget = clean(body.budget, 100)
  const message = clean(body.message, 5000)

  if (!name || !isEmail(email)) {
    return NextResponse.json({ error: 'Nom et email requis' }, { status: 400 })
  }
  if (!website) {
    return NextResponse.json({ error: 'Site requis' }, { status: 400 })
  }

  const hasSite = /^https?:\/\//i.test(website)
  const subject = `${source === 'audit' ? 'Audit gratuit' : 'Contact'} : ${name} (${website})`
  const fields: Array<[string, string]> = [
    ['Nom', name],
    ['Email', email],
    ['Site', website],
    ['Budget', budget],
  ].filter((f): f is [string, string] => Boolean(f[1]))

  const text = [
    ...fields.map(([k, v]) => `${k} : ${v}`),
    message ? `\n${message}` : '',
  ]
    .filter(Boolean)
    .join('\n')

  const html = `
    <div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6;color:#111">
      <p style="margin:0 0 12px"><strong>${source === 'audit' ? 'Demande d’audit gratuit' : 'Message depuis la page contact'}</strong></p>
      <table style="border-collapse:collapse">
        ${fields
          .map(
            ([k, v]) =>
              `<tr><td style="padding:2px 12px 2px 0;color:#666">${k}</td><td style="padding:2px 0">${
                k === 'Email'
                  ? `<a href="mailto:${escapeHtml(v)}">${escapeHtml(v)}</a>`
                  : k === 'Site' && hasSite
                    ? `<a href="${escapeHtml(v)}">${escapeHtml(v)}</a>`
                    : escapeHtml(v)
              }</td></tr>`,
          )
          .join('')}
      </table>
      ${message ? `<p style="margin:16px 0 0;white-space:pre-wrap">${escapeHtml(message)}</p>` : ''}
    </div>`

  try {
    await sendMail(apiKey, {
      from: FROM,
      to: [siteConfig.email],
      reply_to: email,
      subject,
      text,
      html,
      tags: [{ name: 'source', value: source }],
    })
  } catch (err) {
    console.error('[contact] notification', err)
    return NextResponse.json({ error: 'Envoi impossible' }, { status: 502 })
  }

  // Accusé de réception au prospect : sa réussite ne conditionne pas la réponse.
  const ack =
    source === 'audit'
      ? `Bonjour ${name},\n\nBien reçu. ${hasSite ? `Je regarde ${website} et je` : 'Je'} vous envoie votre audit en vidéo sous 48 heures.\n\nSi vous préférez en parler de vive voix, réservez un créneau : ${CALENDLY}\n\nVictor Béasse\nVBWEB\n${siteConfig.url}`
      : `Bonjour ${name},\n\nBien reçu, je vous réponds sous 24 heures.\n\nSi vous préférez en parler de vive voix, réservez un créneau : ${CALENDLY}\n\nVictor Béasse\nVBWEB\n${siteConfig.url}`

  sendMail(apiKey, {
    from: FROM,
    to: [email],
    subject: source === 'audit' ? 'Bien reçu : votre audit gratuit arrive sous 48 h' : 'Bien reçu : je vous réponds sous 24 h',
    text: ack,
  }).catch((err) => console.error('[contact] accusé de réception', err))

  return NextResponse.json({ ok: true })
}
