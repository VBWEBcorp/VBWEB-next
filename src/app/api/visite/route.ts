import { cleStats, incrementerStats } from '@/lib/stats-site'

/*
 * Balise de mesure d'audience (composant MesureAudience) : une page vue à chaque
 * changement de page, et la source de la visite sur la première page seulement.
 * Uniquement des compteurs du jour, aucune IP, aucun identifiant. Les robots et
 * l'espace /admin ne sont pas comptés. Répond toujours 204, même en cas d'échec.
 */

export const dynamic = 'force-dynamic'

const ROBOTS =
  /bot|crawl|spider|slurp|headless|lighthouse|pagespeed|gtmetrix|pingdom|uptime|monitor|preview|facebookexternalhit|embedly|whatsapp|telegram|discord|curl|wget|python|axios|node-fetch|undici|go-http|java\/|httpclient|okhttp/i

const vide = () => new Response(null, { status: 204 })

function source(s: string) {
  const v = s.toLowerCase().replace(/^www\./, '').slice(0, 60)
  return /^(direct|utm:[\w.-]+|[a-z0-9.-]+\.[a-z]{2,})$/.test(v) ? v : 'autre'
}

export async function POST(req: Request) {
  const ua = req.headers.get('user-agent') ?? ''
  if (!ua || ROBOTS.test(ua)) return vide()

  let corps: { p?: unknown; s?: unknown }
  try {
    corps = JSON.parse(await req.text())
  } catch {
    return vide()
  }

  const page = typeof corps.p === 'string' ? corps.p.split(/[?#]/)[0].slice(0, 120) : ''
  if (!/^\/[\w\-/%.]*$/.test(page) || /^\/(admin|api)(\/|$)/.test(page)) return vide()

  const champs: Record<string, number> = { 'vues.total': 1, [`vues.pages.${cleStats(page)}`]: 1 }
  if (typeof corps.s === 'string' && corps.s) {
    champs['visites.total'] = 1
    champs[`visites.sources.${cleStats(source(corps.s))}`] = 1
    champs[`visites.entrees.${cleStats(page)}`] = 1
  }

  try {
    await incrementerStats(champs)
  } catch (err) {
    console.error('[visite]', err instanceof Error ? err.message : err)
  }
  return vide()
}
