/*
 * Pixel OpenAI Ads (pub ChatGPT). Le script de base est posé dans le <head> de
 * layout.tsx ; ici, ce qui l'appelle depuis les composants. Si le script n'est
 * pas encore chargé, la file oaiq garde l'appel et le rejoue au chargement.
 *
 * RGPD : rien n'est suivi avant « Accepter » dans le bandeau cookies.
 */
export const OPENAI_PIXEL_ID = 'G2vxjESFCSreSn3EURdjLC'

type Oaiq = (...args: unknown[]) => void

function oaiq(...args: unknown[]) {
  const fn = (window as unknown as { oaiq?: Oaiq }).oaiq
  if (typeof fn === 'function') fn(...args)
}

export function setPixelConsent(granted: boolean) {
  oaiq('consent', granted)
}

// Le SDK ne voit pas les changements de route côté client : OaiqPageView l'appelle.
export function trackPageView() {
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

// Script de base : consentement à false, sauf si le visiteur a déjà accepté.
export const OPENAI_PIXEL_SNIPPET = `!function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");var c=false;try{c=localStorage.getItem("cookie-consent")==="accepted"}catch(e){}oaiq("consent",c);oaiq("init",{pixelId:"${OPENAI_PIXEL_ID}",debug:location.hostname!=="vbweb.fr"});`
