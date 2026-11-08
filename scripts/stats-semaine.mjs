// Mesure d'audience de vbweb.fr sur les 7 derniers jours, en JSON, lecture seule.
// Lue par l'analyste du dimanche (VBWEB/amelioreur). Les compteurs viennent de
// /api/visite (pages vues, sources des visites), de /api/contact (demandes) et
// de /api/test-ia (tests IA), un document par jour « stats:AAAA-MM-JJ » dans la
// collection sitecontents (voir src/lib/stats-site.ts).
//
//   node scripts/stats-semaine.mjs [--jours=7]
//
// MONGODB_URI vient de l'environnement, sinon de .env.local.

import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import mongoose from 'mongoose'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const jours = Number((process.argv.find((a) => a.startsWith('--jours=')) ?? '--jours=7').slice(8)) || 7

function uri() {
  if (process.env.MONGODB_URI) return process.env.MONGODB_URI
  const ligne = readFileSync(join(root, '.env.local'), 'utf8').split(/\r?\n/).find((l) => l.startsWith('MONGODB_URI='))
  if (!ligne) throw new Error('MONGODB_URI introuvable')
  return ligne.slice(12).trim().replace(/^["']|["']$/g, '')
}

const jourParis = (d) => d.toLocaleDateString('sv-SE', { timeZone: 'Europe/Paris' })
const dates = Array.from({ length: jours }, (_, i) => jourParis(new Date(Date.now() - i * 864e5))).reverse()
const decoder = (k) => k.replace(/%2E/g, '.').replace(/%24/g, '$').replace(/%25/g, '%')

function ajouter(cible, source) {
  for (const [k, v] of Object.entries(source ?? {})) {
    const cle = decoder(k)
    cible[cle] = (cible[cle] ?? 0) + (typeof v === 'number' ? v : 0)
  }
}
const trier = (o, n = 15) => Object.fromEntries(Object.entries(o).sort((a, b) => b[1] - a[1]).slice(0, n))

const conn = await mongoose.createConnection(uri()).asPromise()
try {
  const docs = await conn.db
    .collection('sitecontents')
    .find({ pageId: { $in: dates.map((d) => `stats:${d}`) } })
    .toArray()
  const parJour = Object.fromEntries(dates.map((d) => [d, { visites: 0, pagesVues: 0, demandes: 0, testsIa: 0 }]))
  const sources = {}, pages = {}, entrees = {}, demandesSources = {}, demandesTypes = {}, demandesPages = {}
  const tests = { total: 0, cites: 0, nonCites: 0 }
  for (const doc of docs) {
    const c = doc.content ?? {}
    const jour = doc.pageId.slice(6)
    parJour[jour] = {
      visites: c.visites?.total ?? 0,
      pagesVues: c.vues?.total ?? 0,
      demandes: c.demandes?.total ?? 0,
      testsIa: c.testsIa?.total ?? 0,
    }
    ajouter(sources, c.visites?.sources)
    ajouter(entrees, c.visites?.entrees)
    ajouter(pages, c.vues?.pages)
    ajouter(demandesSources, c.demandes?.sources)
    ajouter(demandesTypes, c.demandes?.types)
    ajouter(demandesPages, c.demandes?.pages)
    tests.total += c.testsIa?.total ?? 0
    tests.cites += c.testsIa?.cites ?? 0
    tests.nonCites += c.testsIa?.nonCites ?? 0
  }
  const somme = (k) => Object.values(parJour).reduce((n, j) => n + j[k], 0)
  console.log(
    JSON.stringify(
      {
        periode: { du: dates[0], au: dates.at(-1) },
        visites: somme('visites'),
        pagesVues: somme('pagesVues'),
        demandes: somme('demandes'),
        testsIa: tests,
        parJour,
        sources: trier(sources),
        pagesDEntree: trier(entrees),
        pagesLesPlusVues: trier(pages),
        demandesParSource: trier(demandesSources),
        demandesParType: demandesTypes,
        demandesParPage: trier(demandesPages),
      },
      null,
      2,
    ),
  )
} finally {
  await conn.close()
}
