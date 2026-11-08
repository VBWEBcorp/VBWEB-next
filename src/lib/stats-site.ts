import mongoose from 'mongoose'

import { connectDB } from '@/lib/db'

/*
 * Mesure d'audience du site, sans cookie ni donnée personnelle : seulement des
 * compteurs agrégés par jour (pages vues, sources des visites, demandes envoyées,
 * tests IA). Aucune IP, aucun identifiant de visiteur.
 *
 * Le cluster Atlas est au plafond de 500 collections (novembre 2026) : pas de
 * nouvelle collection. Un document par jour dans `sitecontents`, sous le pageId
 * « stats:AAAA-MM-JJ », que l'API publique /api/content refuse de servir. Les
 * compteurs sont des sous-documents incrémentés par $inc (atomique, sans lecture).
 */

const COLLECTION = 'sitecontents'
export const PREFIXE_STATS = 'stats:'

export function jourParis(d = new Date()) {
  return d.toLocaleDateString('sv-SE', { timeZone: 'Europe/Paris' })
}

/** Une clé de sous-document : pas de point (Mongo y verrait un chemin) ni de $ en tête. */
export function cleStats(s: string) {
  return s.slice(0, 80).replace(/%/g, '%25').replace(/\./g, '%2E').replace(/^\$/, '%24') || 'inconnu'
}

async function collection() {
  await connectDB()
  return mongoose.connection.db!.collection(COLLECTION)
}

const idDuJour = (jour: string) => `${PREFIXE_STATS}${jour}`

/** Ajoute aux compteurs du jour (chemins relatifs à `content`). */
export async function incrementerStats(champs: Record<string, number>, jour = jourParis()) {
  const inc = Object.fromEntries(Object.entries(champs).map(([k, v]) => [`content.${k}`, v]))
  const c = await collection()
  const maj = { $inc: inc, $set: { updatedAt: new Date() }, $setOnInsert: { createdAt: new Date() } }
  try {
    await c.updateOne({ pageId: idDuJour(jour) }, maj, { upsert: true })
  } catch (err) {
    // Deux premières visites du jour en même temps : l'une crée le document,
    // l'autre bute sur l'index unique de pageId et repasse en simple mise à jour.
    if ((err as { code?: number }).code !== 11000) throw err
    await c.updateOne({ pageId: idDuJour(jour) }, maj)
  }
}

/**
 * Réserve un test IA si les plafonds du jour le permettent (par IP hachée et au
 * total). Rend false quand un plafond est atteint ; rien n'est alors compté.
 */
export async function reserverTestIa(ipHachee: string, max: number, parIp: number, jour = jourParis()) {
  const c = await collection()
  const id = idDuJour(jour)
  try {
    await c.updateOne({ pageId: id }, { $setOnInsert: { createdAt: new Date() } }, { upsert: true })
  } catch (err) {
    if ((err as { code?: number }).code !== 11000) throw err
  }
  const ip = `content.testsIa.ip.${cleStats(ipHachee)}`
  const r = await c.updateOne(
    { pageId: id, 'content.testsIa.total': { $not: { $gte: max } }, [ip]: { $not: { $gte: parIp } } },
    { $inc: { 'content.testsIa.total': 1, [ip]: 1 }, $set: { updatedAt: new Date() } },
  )
  return r.modifiedCount === 1
}

/** Pour les formulaires : la mesure ne doit jamais les ralentir ni les faire échouer. */
export async function compterSansBloquer(champs: Record<string, number>, delaiMs = 1500) {
  try {
    await Promise.race([
      incrementerStats(champs),
      new Promise((_, rej) => setTimeout(() => rej(new Error('délai dépassé')), delaiMs)),
    ])
  } catch (err) {
    console.error('[stats]', err instanceof Error ? err.message : err)
  }
}
