import { createHash } from 'node:crypto'

/*
 * Test « ChatGPT recommande-t-il votre entreprise ? » (page /test-ia).
 *
 * On pose à ChatGPT, par l'API OpenAI (Responses + recherche web, localisée sur
 * la ville), la question d'un client : « Qui me conseilles-tu comme plombier à
 * Rennes ? Donne 5 noms. », puis on regarde si l'entreprise est dans la réponse.
 * La recherche web prend 10 à 30 s : l'appel est fait d'un bloc, sous la limite
 * de 60 s des fonctions Netlify (le mode « background » d'OpenAI restait en file
 * d'attente plus de trois minutes, essayé le 08/11/2026).
 */

const OPENAI = 'https://api.openai.com/v1/responses'
const MODELE_SECOURS = 'gpt-4o-mini'

export type Demande = { metier: string; ville: string; entreprise: string; site: string; email: string }

export const question = (d: Pick<Demande, 'metier' | 'ville'>) =>
  `Qui me conseilles-tu comme ${d.metier} à ${d.ville} ? Donne 5 noms.`

// ---------------------------------------------------------------- IP

function secret() {
  const s = process.env.TEST_IA_SECRET || process.env.JWT_SECRET
  if (!s) throw new Error('TEST_IA_SECRET ou JWT_SECRET manquant')
  return s
}

/** IP hachée avec le jour : impossible à relier d'un jour à l'autre, jamais stockée en clair. */
export const hacherIp = (ip: string, jour: string) =>
  createHash('sha256').update(`${secret()}|${jour}|${ip}`).digest('hex').slice(0, 16)

// ---------------------------------------------------------------- OpenAI

const modele = () => process.env.OPENAI_MODEL_TEST_IA || 'gpt-5-mini'
const DELAI_OPENAI = 45000

function creer(model: string, d: Demande, signal: AbortSignal) {
  return fetch(OPENAI, {
    method: 'POST',
    headers: { authorization: `Bearer ${process.env.OPENAI_API_KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      model,
      input: question(d),
      tools: [
        {
          type: 'web_search',
          search_context_size: 'low',
          user_location: { type: 'approximate', country: 'FR', city: d.ville },
        },
      ],
      store: false,
      ...(/^(gpt-5|o\d)/.test(model) ? { reasoning: { effort: 'low' } } : {}),
    }),
    signal,
  })
}

type Sortie = {
  type?: string
  content?: { type?: string; text?: string; annotations?: { type?: string; url?: string }[] }[]
}

/** Pose la question et rend la réponse de ChatGPT avec les sites qu'il cite. */
export async function interroger(d: Demande): Promise<{ texte: string; sources: string[] }> {
  if (!process.env.OPENAI_API_KEY) throw new Error('OPENAI_API_KEY manquante')
  const signal = AbortSignal.timeout(DELAI_OPENAI)
  let res = await creer(modele(), d, signal)
  // Modèle inconnu ou sans recherche web pour cette clé : on retombe sur un modèle sûr.
  if (res.status === 400 || res.status === 404) res = await creer(MODELE_SECOURS, d, signal)
  const data = (await res.json().catch(() => ({}))) as { output?: Sortie[]; error?: { message?: string } }
  if (!res.ok) throw new Error(`OpenAI ${res.status} : ${data.error?.message ?? 'échec'}`)
  const parts = (data.output ?? []).filter((o) => o.type === 'message').flatMap((o) => o.content ?? [])
  const texte = parts.filter((c) => c.type === 'output_text').map((c) => c.text ?? '').join('\n').trim()
  if (!texte) throw new Error('réponse vide')
  const sources = [
    ...new Set(
      parts
        .flatMap((c) => c.annotations ?? [])
        .filter((a) => a.type === 'url_citation' && a.url)
        .map((a) => hote(a.url as string))
        .filter(Boolean),
    ),
  ]
  return { texte, sources }
}

// ---------------------------------------------------------------- lecture de la réponse

const sansAccents = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
const FORMES = /\b(sarl|sas|sasu|eurl|sa|sci|scop|ets|etablissements|eirl|ei|et fils|groupe)\b/g

function hote(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return ''
  }
}

/** Les noms recommandés : les éléments de liste, ou à défaut les passages en gras. */
export function nomsCites(texte: string): string[] {
  const propre = (s: string) =>
    s
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/[*_`#]/g, '')
      .split(/\s[–—-]\s|\s?:\s| \(/)[0]
      .trim()
      .replace(/[.:,;]+$/, '')
  const lignes = texte
    .split('\n')
    .map((l) => l.match(/^\s*(?:\d+[.)]|[-*•])\s+(.+)$/)?.[1])
    .filter((l): l is string => Boolean(l))
  const gras = [...texte.matchAll(/\*\*([^*]{2,80})\*\*/g)].map((m) => m[1])
  const bruts = lignes.length >= 2 ? lignes.map((l) => (l.match(/\*\*([^*]{2,80})\*\*/)?.[1] ?? l)) : gras
  const noms = bruts.map(propre).filter((n) => n.length >= 2 && n.length <= 80)
  return [...new Set(noms)].slice(0, 8)
}

/** L'entreprise est-elle citée ? Nom complet, tous ses mots distinctifs dans un même nom cité, ou son domaine. */
export function estCitee(d: Demande, texte: string, noms: string[], sources: string[]) {
  const t = sansAccents(texte)
  const nom = sansAccents(d.entreprise).replace(FORMES, ' ').replace(/[^a-z0-9]+/g, ' ').trim()
  if (nom.length >= 3 && t.replace(/[^a-z0-9]+/g, ' ').includes(nom)) return true
  const banals = new Set([...sansAccents(`${d.metier} ${d.ville}`).split(/[^a-z0-9]+/), 'les', 'des', 'and', 'the'])
  const mots = nom.split(' ').filter((w) => w.length >= 3 && !banals.has(w))
  if (mots.length && noms.some((n) => {
    const m = sansAccents(n).split(/[^a-z0-9]+/)
    return mots.every((w) => m.includes(w))
  })) return true
  const dom = hote(/^https?:\/\//.test(d.site) ? d.site : `https://${d.site}`)
  if (d.site && dom.includes('.')) {
    const racine = dom.split('.').slice(0, -1).join('.')
    if (sources.some((s) => s === dom || s.endsWith(`.${dom}`)) || (racine.length >= 4 && t.includes(racine))) return true
  }
  return false
}
