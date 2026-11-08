import { NextResponse } from 'next/server'

import { escapeHtml, FROM, NOTIFY_TO, sendMail } from '@/lib/notification'
import { siteConfig } from '@/lib/seo'
import { incrementerStats, jourParis, reserverTestIa } from '@/lib/stats-site'
import { estCitee, hacherIp, interroger, nomsCites, question, type Demande } from '@/lib/test-ia'

/*
 * Test « ChatGPT recommande-t-il votre entreprise ? » (voir src/lib/test-ia.ts) :
 * plafonds du jour, question à ChatGPT, verdict. Victor reçoit chaque test par
 * mail (c'est un prospect chaud), le visiteur aussi s'il a laissé son adresse.
 */

export const dynamic = 'force-dynamic'
export const maxDuration = 60

// 15 tests par jour au plus : chaque test envoie 1 ou 2 mails par Resend, compte gratuit de 100 mails par jour partagé
// avec les formulaires des clients et la prospection Ille-et-Vilaine (72 mails le jour le plus chargé de la semaine du 02/11).
const MAX_JOUR = Number(process.env.TEST_IA_MAX_JOUR) || 15
const PAR_IP = 3

const clean = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().replace(/\s+/g, ' ').slice(0, max) : '')
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)

function ipDe(req: Request) {
  return (
    req.headers.get('x-nf-client-connection-ip') ||
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    req.headers.get('x-real-ip') ||
    'inconnue'
  )
}

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = (await req.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: 'Corps invalide' }, { status: 400 })
  }
  // Pot de miel rempli : un robot, aucun appel n'est fait.
  if (clean(body.company, 10)) return NextResponse.json({ error: 'Test indisponible' }, { status: 400 })

  const d: Demande = {
    metier: clean(body.metier, 60),
    ville: clean(body.ville, 60),
    entreprise: clean(body.entreprise, 100),
    site: clean(body.site, 200),
    email: clean(body.email, 200),
  }
  if (d.metier.length < 3 || d.ville.length < 2 || d.entreprise.length < 2) {
    return NextResponse.json({ error: 'Indiquez votre métier, votre ville et le nom de votre entreprise.' }, { status: 400 })
  }
  if (d.email && !isEmail(d.email)) return NextResponse.json({ error: 'Adresse email invalide' }, { status: 400 })

  const jour = jourParis()
  try {
    if (!(await reserverTestIa(hacherIp(ipDe(req), jour), MAX_JOUR, PAR_IP, jour))) {
      return NextResponse.json(
        { error: 'Le test est très demandé aujourd’hui. Revenez demain, ou laissez vos coordonnées plus bas : nous faisons le test pour vous.' },
        { status: 429 },
      )
    }
  } catch (err) {
    console.error('[test-ia] plafonds', err instanceof Error ? err.message : err)
    return NextResponse.json({ error: 'Le test est indisponible pour le moment. Réessayez dans quelques minutes.' }, { status: 503 })
  }

  let reponse
  try {
    reponse = await interroger(d)
  } catch (err) {
    console.error('[test-ia] ChatGPT', err instanceof Error ? err.message : err)
    return NextResponse.json({ error: 'ChatGPT n’a pas pu répondre cette fois. Réessayez dans quelques minutes.' }, { status: 502 })
  }

  const noms = nomsCites(reponse.texte)
  const citee = estCitee(d, reponse.texte, noms, reponse.sources)
  try {
    await incrementerStats({ [`testsIa.${citee ? 'cites' : 'nonCites'}`]: 1 }, jour)
    await notifier(d, citee, noms, reponse.texte)
  } catch (err) {
    console.error('[test-ia] notification', err instanceof Error ? err.message : err)
  }
  return NextResponse.json({ citee, noms, question: question(d), sources: reponse.sources.slice(0, 6) })
}

async function notifier(j: Demande, citee: boolean, noms: string[], texte: string) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return
  const verdict = citee ? 'citée par ChatGPT' : 'absente de la réponse de ChatGPT'
  const fields: Array<[string, string]> = [
    ['Entreprise', j.entreprise],
    ['Métier', j.metier],
    ['Ville', j.ville],
    ['Site', j.site],
    ['Email', j.email],
    ['Verdict', verdict],
    ['Noms cités', noms.join(', ') || '(aucun nom lisible)'],
  ].filter((f): f is [string, string] => Boolean(f[1]))

  await sendMail(apiKey, {
    from: FROM,
    to: NOTIFY_TO,
    ...(j.email ? { reply_to: j.email } : {}),
    subject: `Test IA : ${j.entreprise} (${j.metier}, ${j.ville}), ${citee ? 'citée' : 'pas citée'}`,
    text: [
      'Une entreprise vient de tester sa visibilité dans ChatGPT sur vbweb.fr : prospect chaud.',
      '',
      ...fields.map(([k, v]) => `${k} : ${v}`),
      '',
      `Question posée : ${question(j)}`,
      '',
      'Réponse de ChatGPT :',
      texte.slice(0, 3000),
    ].join('\n'),
    html: `
      <div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6;color:#111">
        <p style="margin:0 0 12px"><strong>Test IA sur vbweb.fr : prospect chaud</strong></p>
        <table style="border-collapse:collapse">
          ${fields.map(([k, v]) => `<tr><td style="padding:2px 12px 2px 0;color:#666">${k}</td><td style="padding:2px 0">${escapeHtml(v)}</td></tr>`).join('')}
        </table>
        <p style="margin:16px 0 4px;color:#666">Question posée : ${escapeHtml(question(j))}</p>
        <pre style="white-space:pre-wrap;font-family:inherit;font-size:13px;color:#333;background:#f5f5f5;padding:12px;border-radius:8px">${escapeHtml(texte.slice(0, 3000))}</pre>
      </div>`,
    tags: [{ name: 'source', value: 'test-ia' }],
  })

  if (!j.email) return
  // Le résultat au visiteur : sa réussite ne conditionne rien.
  await sendMail(apiKey, {
    from: FROM,
    to: [j.email],
    subject: `${j.entreprise} et ChatGPT : le résultat de votre test`,
    text: [
      'Bonjour,',
      '',
      `Nous avons posé à ChatGPT la question d'un de vos clients : « ${question(j)} »`,
      '',
      citee
        ? `Bonne nouvelle : ${j.entreprise} fait partie de sa réponse.`
        : `${j.entreprise} ne fait pas partie de sa réponse.`,
      noms.length ? `Les noms qu'il donne : ${noms.join(', ')}.` : '',
      '',
      citee
        ? "La réponse change d'un jour à l'autre et d'une question à l'autre : nous pouvons regarder avec vous les autres questions de vos clients."
        : "ChatGPT recommande les entreprises dont il trouve des informations claires et concordantes sur le web : site, fiche Google, annuaires, avis. C'est ce que nous travaillons avec nos clients.",
      '',
      `Pour en parler, répondez simplement à ce mail ou laissez votre numéro sur ${siteConfig.url}/test-ia : nous vous rappelons sous 24 heures.`,
      '',
      'Victor Béasse',
      'VBWEB',
      siteConfig.url,
    ]
      .filter((l, i, a) => l !== '' || a[i - 1] !== '')
      .join('\n'),
  }).catch((err) => console.error('[test-ia] mail au visiteur', err instanceof Error ? err.message : err))
}
