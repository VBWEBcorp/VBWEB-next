/*
 * Choix du visiteur dans le bandeau cookies, gardé 6 mois puis redemandé.
 * Un choix sans date (bandeau d'avant le 25/11/2026, qui ne nommait que Google
 * Analytics) est redemandé.
 */
const CLE = 'cookie-consent'
const CLE_DATE = 'cookie-consent-date'
const DUREE_MS = 182 * 24 * 60 * 60 * 1000

export const EVENEMENT_CONSENTEMENT = 'cookie-consent-change'
export const EVENEMENT_OUVRIR_BANDEAU = 'cookie-consent-open'

export type Choix = 'accepted' | 'refused'

export function lireConsentement(): Choix | null {
  try {
    const choix = window.localStorage.getItem(CLE)
    const date = Number(window.localStorage.getItem(CLE_DATE))
    if (choix !== 'accepted' && choix !== 'refused') return null
    if (!date || Date.now() - date > DUREE_MS) return null
    return choix
  } catch {
    return null
  }
}

export function consentementDonne() {
  return lireConsentement() === 'accepted'
}

export function enregistrerConsentement(choix: Choix) {
  try {
    window.localStorage.setItem(CLE, choix)
    window.localStorage.setItem(CLE_DATE, String(Date.now()))
  } catch {
    // Stockage bloqué : le choix vaut pour la page en cours.
  }
  if (choix === 'refused') effacerCookiesAnalyse()
  window.dispatchEvent(new Event(EVENEMENT_CONSENTEMENT))
}

// Retrait de l'accord : les cookies de Google Analytics déjà posés sont effacés.
function effacerCookiesAnalyse() {
  const domaine = window.location.hostname.replace(/^www\./, '')
  for (const c of document.cookie.split(';')) {
    const nom = c.split('=')[0].trim()
    if (!/^_ga/.test(nom)) continue
    document.cookie = `${nom}=; Max-Age=0; path=/`
    document.cookie = `${nom}=; Max-Age=0; path=/; domain=.${domaine}`
  }
}
