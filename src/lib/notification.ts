import { siteConfig } from '@/lib/seo'

/*
 * Envoi des mails du site par Resend : notifications à Victor (formulaires,
 * tests IA) et réponses aux visiteurs.
 */

const RESEND_URL = 'https://api.resend.com/emails'
export const FROM = 'VBWEB <contact@vbweb.fr>'
// Les demandes partent AUSSI directement sur le Gmail de Victor. Envoyées de
// contact@vbweb.fr à contact@vbweb.fr depuis Resend, Infomaniak les acceptait
// (statut « delivered ») mais ne les transmettait jamais à Gmail : aucune demande
// de la pub ChatGPT n'a été vue du 30/09 au 02/10/2026. Un seul envoi, un seul
// Message-ID : Gmail n'affiche qu'un exemplaire si Infomaniak finit par relayer.
export const NOTIFY_TO = [siteConfig.email, 'contact.vbweb.entreprise@gmail.com']

export const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] ?? c)

export async function sendMail(apiKey: string, mail: Record<string, unknown>) {
  const res = await fetch(RESEND_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(mail),
  })
  if (!res.ok) throw new Error(`Resend ${res.status} : ${await res.text()}`)
}
