import { consentementDonne } from '@/lib/consentement'

/*
 * Pixel OpenAI Ads (pub ChatGPT). RGPD : le script n'est chargé, et rien n'est
 * mesuré, qu'après « Accepter » dans le bandeau cookies.
 */
export const OPENAI_PIXEL_ID = 'G2vxjESFCSreSn3EURdjLC'
const SDK = 'https://bzrcdn.openai.com/sdk/oaiq.min.js'

type Oaiq = ((...args: unknown[]) => void) & { q?: unknown[] }
type FenetreOaiq = Window & { oaiq?: Oaiq }

function oaiq(...args: unknown[]) {
  const fn = (window as unknown as FenetreOaiq).oaiq
  if (typeof fn === 'function') fn(...args)
}

// File d'attente prévue par OpenAI : elle garde les appels jusqu'au chargement.
function charger() {
  const w = window as unknown as FenetreOaiq
  if (w.oaiq) return
  const file: Oaiq = function () {
    // eslint-disable-next-line prefer-rest-params
    file.q!.push(arguments)
  }
  file.q = []
  w.oaiq = file
  const script = document.createElement('script')
  script.async = true
  script.src = SDK
  document.head.appendChild(script)
  oaiq('consent', true)
  oaiq('init', { pixelId: OPENAI_PIXEL_ID, debug: window.location.hostname !== 'vbweb.fr' })
}

export function setPixelConsent(granted: boolean) {
  if (granted) charger()
  oaiq('consent', granted)
}

// Le SDK ne voit pas les changements de route côté client : OaiqPageView l'appelle.
export function trackPageView() {
  if (!consentementDonne()) return
  charger()
  oaiq('measure', 'page_viewed', { type: 'contents' })
}

async function sha256(v: string) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(v))
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

// 06 12 34 56 78 -> 33612345678
function normPhone(p: string) {
  let d = p.replace(/[^\d]/g, '')
  if (d.length === 10 && d.startsWith('0')) d = '33' + d.slice(1)
  return d
}

const cleanName = (s: string) => s.toLowerCase().replace(/[\s!-/:-@[-`{-~]/g, '')

// Conversion de la campagne : une demande de rappel réellement envoyée.
// leadId sert d'event_id, pour qu'un double envoi ne compte qu'une fois.
export async function trackLead(form: { email?: string; phone?: string; name?: string }, leadId: string) {
  if (!consentementDonne()) return
  charger()
  try {
    const user: Record<string, string> = { country: 'FR' }
    if (form.email) user.email_sha256 = await sha256(form.email.trim().toLowerCase())
    if (form.phone) user.phone_number_sha256 = await sha256(normPhone(form.phone))
    if (form.name) {
      const [first, ...rest] = form.name.trim().split(/\s+/)
      user.first_name_sha256 = await sha256(cleanName(first))
      if (rest.length) user.last_name_sha256 = await sha256(cleanName(rest.join('')))
    }
    // Ré-init avec les données du visiteur, comme le prévoit la doc OpenAI.
    oaiq('init', { pixelId: OPENAI_PIXEL_ID, user })
  } catch {
    // crypto.subtle absent (page hors https) : la conversion part sans données hachées.
  }
  oaiq('measure', 'lead_created', { type: 'customer_action' }, { event_id: leadId })
}
