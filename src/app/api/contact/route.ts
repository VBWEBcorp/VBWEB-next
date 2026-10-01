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
  source?: 'audit' | 'contact' | 'rappel'
  name?: string
  email?: string
  /** Formulaire de rappel du haut de l'accueil : le téléphone remplace l'email */
  phone?: string
  /** Paramètres de la publicité (utm_*, campaign_id, ad_id) et page d'envoi */
  provenance?: Record<string, unknown>
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

/**
 * Demande de rappel (haut de l'accueil, cible des publicités) : prénom et
 * téléphone obligatoires, site facultatif, aucun accusé de réception puisqu'il
 * n'y a pas d'email. Le sujet dit d'où vient la demande, pour trier d'un coup
 * d'œil ce que rapporte la publicité ChatGPT.
 */
async function demandeDeRappel(apiKey: string, body: Payload) {
  const name = clean(body.name, 200)
  const phone = clean(body.phone, 40)
  const rawSite = clean(body.website, 500)
  const website = /^[\w-]+(\.[\w-]+)+(\/\S*)?$/.test(rawSite) ? `https://${rawSite}` : rawSite

  if (!name) return NextResponse.json({ error: 'Prénom requis' }, { status: 400 })
  if (phone.replace(/\D/g, '').length < 9) {
    return NextResponse.json({ error: 'Numéro de téléphone incomplet' }, { status: 400 })
  }

  const prov: Record<string, string> = {}
  if (body.provenance && typeof body.provenance === 'object') {
    for (const [k, v] of Object.entries(body.provenance).slice(0, 12)) {
      const val = clean(v, 200)
      if (/^[a-z_]{2,20}$/.test(k) && val) prov[k] = val
    }
  }
  const sourcePub = prov.utm_source || (prov.campaign_id || prov.ad_id ? 'publicité' : '')
  const origine = sourcePub
    ? `${sourcePub}${prov.campaign_id || prov.utm_campaign ? ` · campagne ${prov.campaign_id || prov.utm_campaign}` : ''}${prov.ad_id || prov.utm_content ? ` · annonce ${prov.ad_id || prov.utm_content}` : ''}`
    : 'site (accès direct ou recherche)'

  const fields: Array<[string, string]> = [
    ['Prénom', name],
    ['Téléphone', phone],
    ['Site', website],
    ['Provenance', origine],
    ['Page', prov.page || ''],
  ].filter((f): f is [string, string] => Boolean(f[1]))
  const details = Object.entries(prov).filter(([k]) => k !== 'page')

  const text = [
    ...fields.map(([k, v]) => `${k} : ${v}`),
    details.length ? `\nParamètres : ${details.map(([k, v]) => `${k}=${v}`).join(' ')}` : '',
  ]
    .filter(Boolean)
    .join('\n')

  const tel = phone.replace(/[^\d+]/g, '')
  const html = `
    <div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6;color:#111">
      <p style="margin:0 0 12px"><strong>Demande de rappel</strong> (formulaire du haut de l’accueil)</p>
      <table style="border-collapse:collapse">
        ${fields
          .map(
            ([k, v]) =>
              `<tr><td style="padding:2px 12px 2px 0;color:#666">${k}</td><td style="padding:2px 0">${
                k === 'Téléphone'
                  ? `<a href="tel:${escapeHtml(tel)}">${escapeHtml(v)}</a>`
                  : escapeHtml(v)
              }</td></tr>`,
          )
          .join('')}
      </table>
      ${details.length ? `<p style="margin:16px 0 0;color:#666;font-size:13px">${details.map(([k, v]) => `${escapeHtml(k)}=${escapeHtml(v)}`).join(' · ')}</p>` : ''}
    </div>`

  try {
    await sendMail(apiKey, {
      from: FROM,
      to: [siteConfig.email],
      subject: `À rappeler : ${name} (${phone})${sourcePub ? ` · ${sourcePub}` : ''}`,
      text,
      html,
      tags: [{ name: 'source', value: 'rappel' }],
    })
  } catch (err) {
    console.error('[contact] rappel', err)
    return NextResponse.json({ error: 'Envoi impossible' }, { status: 502 })
  }
  return NextResponse.json({ ok: true })
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

  if (body.source === 'rappel') return demandeDeRappel(apiKey, body)

  const source = body.source === 'audit' ? 'audit' : 'contact'
  const name = clean(body.name, 200)
  const email = clean(body.email, 200)
  // « votresite.fr » ou « www.votresite.fr/page » deviennent une adresse complète ;
  // une vraie URL ou la mention « pas de site » restent telles quelles.
  const rawSite = clean(body.website, 500)
  const website = /^[\w-]+(\.[\w-]+)+(\/\S*)?$/.test(rawSite) ? `https://${rawSite}` : rawSite
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
