/**
 * Migration des images externes (i.ibb.co, images.unsplash.com) vers Cloudflare R2.
 *
 * Ce que fait le script :
 *   1. Scanne tous les fichiers .ts/.tsx de src/ et collecte les URLs externes.
 *   2. Télécharge chaque image, l'optimise (Sharp -> WebP, sauf SVG), l'upload sur R2.
 *   3. Réécrit les fichiers source en remplaçant l'ancienne URL par l'URL publique R2.
 *
 * Pré-requis : remplir .env.local (ou .env) avec les variables R2_*.
 *
 * Usage :
 *   node scripts/migrate-images-to-r2.js            # migration complète (upload + réécriture)
 *   node scripts/migrate-images-to-r2.js --dry-run  # aperçu : ni upload ni réécriture
 *   node scripts/migrate-images-to-r2.js --no-rewrite  # upload seulement, ne touche pas au code
 *
 * Un rapport JSON (mapping ancienne URL -> nouvelle URL) est écrit dans scripts/r2-migration-report.json
 */

const fs = require('fs')
const path = require('path')
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3')
const sharp = require('sharp')

const ROOT = path.resolve(__dirname, '..')
const SRC = path.join(ROOT, 'src')
const REPORT_PATH = path.join(__dirname, 'r2-migration-report.json')

const DRY_RUN = process.argv.includes('--dry-run')
const NO_REWRITE = process.argv.includes('--no-rewrite')

// --- Chargement des variables d'env depuis .env.local puis .env -----------
function loadEnv() {
  for (const file of ['.env.local', '.env']) {
    const p = path.join(ROOT, file)
    if (!fs.existsSync(p)) continue
    const txt = fs.readFileSync(p, 'utf8')
    for (const rawLine of txt.split(/\r?\n/)) {
      const line = rawLine.trim()
      if (!line || line.startsWith('#')) continue
      const eq = line.indexOf('=')
      if (eq === -1) continue
      const key = line.slice(0, eq).trim()
      let val = line.slice(eq + 1).trim()
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1)
      }
      if (!(key in process.env)) process.env[key] = val
    }
  }
}
loadEnv()

const {
  R2_ACCOUNT_ID,
  R2_ACCESS_KEY_ID,
  R2_SECRET_ACCESS_KEY,
  R2_BUCKET_NAME,
  R2_PUBLIC_URL,
  R2_PREFIX = '',
} = process.env

function assertConfig() {
  const missing = []
  for (const k of ['R2_ACCOUNT_ID', 'R2_ACCESS_KEY_ID', 'R2_SECRET_ACCESS_KEY', 'R2_BUCKET_NAME', 'R2_PUBLIC_URL']) {
    if (!process.env[k]) missing.push(k)
  }
  if (missing.length) {
    console.error('❌ Variables R2 manquantes dans .env.local : ' + missing.join(', '))
    console.error('   Copie .env.local.example -> .env.local et remplis-le.')
    process.exit(1)
  }
}

const s3 = () =>
  new S3Client({
    region: 'auto',
    endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId: R2_ACCESS_KEY_ID, secretAccessKey: R2_SECRET_ACCESS_KEY },
  })

// --- Découverte des fichiers source ---------------------------------------
function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, acc)
    else if (/\.(tsx?|jsx?)$/.test(entry.name)) acc.push(full)
  }
  return acc
}

// Capture une URL externe jusqu'au prochain délimiteur (quote, backtick, espace, parenthèse, < >)
const URL_RE = /https:\/\/(?:i\.ibb\.co|images\.unsplash\.com)\/[^\s'"`)<>\\]+/g

function collectUrls(files) {
  const set = new Set()
  for (const f of files) {
    const txt = fs.readFileSync(f, 'utf8')
    const matches = txt.match(URL_RE)
    if (matches) matches.forEach((u) => set.add(u))
  }
  return [...set]
}

// --- Nom de fichier déterministe pour R2 ----------------------------------
function sanitize(s) {
  return s.replace(/[^a-zA-Z0-9._-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
}

function targetFilename(url) {
  const u = new URL(url)
  if (u.hostname === 'i.ibb.co') {
    // /9HsCRCV6/YUZU-BRANDING.jpg -> YUZU-BRANDING-9HsCRCV6
    const parts = u.pathname.split('/').filter(Boolean)
    const id = parts[0] || 'img'
    const base = sanitize((parts[1] || 'image').replace(/\.[^.]+$/, ''))
    return `${base}-${id}.webp`
  }
  // Unsplash : /photo-1460925895917-... + ?w=800
  const base = sanitize(u.pathname.replace(/^\//, '').replace(/\.[^.]+$/, ''))
  const w = u.searchParams.get('w')
  return `unsplash-${base}${w ? `-w${w}` : ''}.webp`
}

function publicUrlFor(filename) {
  const key = R2_PREFIX ? `${R2_PREFIX}/${filename}` : filename
  const base = (R2_PUBLIC_URL || 'https://PUBLIC_URL_NON_CONFIGUREE').replace(/\/$/, '')
  return { key, url: `${base}/${key}` }
}

// --- Téléchargement + optimisation + upload -------------------------------
async function fetchBuffer(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'vbweb-migration/1.0' } })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return Buffer.from(await res.arrayBuffer())
}

async function optimize(buffer) {
  const img = sharp(buffer)
  const meta = await img.metadata()
  if ((meta.width && meta.width > 1920) || (meta.height && meta.height > 1080)) {
    img.resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
  }
  return img.webp({ quality: 80 }).toBuffer()
}

async function migrate() {
  const files = walk(SRC)
  const urls = collectUrls(files)
  console.log(`🔎 ${urls.length} images externes uniques trouvées dans ${files.length} fichiers.\n`)

  const mapping = {} // ancienne URL -> nouvelle URL
  const errors = []
  const client = DRY_RUN ? null : s3()

  let i = 0
  for (const url of urls) {
    i++
    const filename = targetFilename(url)
    const { key, url: newUrl } = publicUrlFor(filename)
    const tag = `[${i}/${urls.length}]`
    try {
      if (DRY_RUN) {
        console.log(`${tag} (dry) ${url}\n        -> ${newUrl}`)
        mapping[url] = newUrl
        continue
      }
      const raw = await fetchBuffer(url)
      const optimized = await optimize(raw)
      await client.send(
        new PutObjectCommand({
          Bucket: R2_BUCKET_NAME,
          Key: key,
          Body: optimized,
          ContentType: 'image/webp',
          CacheControl: 'public, max-age=31536000, immutable',
        })
      )
      const kb = (raw.length / 1024).toFixed(0)
      const okb = (optimized.length / 1024).toFixed(0)
      console.log(`${tag} ✅ ${filename}  (${kb}Ko -> ${okb}Ko)`)
      mapping[url] = newUrl
    } catch (e) {
      console.warn(`${tag} ⚠️  échec ${url} : ${e.message} (URL conservée)`)
      errors.push({ url, error: e.message })
    }
  }

  fs.writeFileSync(REPORT_PATH, JSON.stringify({ mapping, errors }, null, 2))
  console.log(`\n📝 Rapport écrit : ${path.relative(ROOT, REPORT_PATH)}`)

  if (NO_REWRITE || DRY_RUN) {
    console.log('↪️  Réécriture du code ignorée.')
    return
  }

  // --- Réécriture des fichiers : remplace les URLs (les plus longues d'abord) ---
  const pairs = Object.entries(mapping).sort((a, b) => b[0].length - a[0].length)
  let changedFiles = 0
  let totalReplacements = 0
  for (const f of files) {
    let txt = fs.readFileSync(f, 'utf8')
    let changed = false
    for (const [oldUrl, newUrl] of pairs) {
      if (txt.includes(oldUrl)) {
        const before = txt
        txt = txt.split(oldUrl).join(newUrl)
        const count = before.split(oldUrl).length - 1
        totalReplacements += count
        changed = true
      }
    }
    if (changed) {
      fs.writeFileSync(f, txt)
      changedFiles++
    }
  }
  console.log(`\n✏️  ${totalReplacements} remplacements dans ${changedFiles} fichiers.`)
  if (errors.length) {
    console.log(`\n⚠️  ${errors.length} image(s) en échec (URL d'origine conservée) — voir le rapport.`)
  }
  console.log('\n✅ Migration terminée.')
}

if (!DRY_RUN) assertConfig()
migrate().catch((e) => {
  console.error('Erreur fatale :', e)
  process.exit(1)
})
