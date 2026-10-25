// Envoie un webp deja produit par capture-vignette.mjs dans le bucket R2
// `vbweb-images` sous un nouveau nom : node scripts/upload-vignette.mjs <fichier.webp> <NOM-DU-SITE>
import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const [file, name] = process.argv.slice(2)
if (!file || !name) {
  console.error('usage: node scripts/upload-vignette.mjs <fichier.webp> <NOM-DU-SITE>')
  process.exit(1)
}
const env = Object.fromEntries(
  readFileSync(join(root, '.env.local'), 'utf8')
    .split(/\r?\n/)
    .filter((l) => /^[A-Z_0-9]+=/.test(l))
    .map((l) => {
      const i = l.indexOf('=')
      return [l.slice(0, i), l.slice(i + 1).replace(/^"|"$/g, '')]
    }),
)
const key = `${name}-${Math.random().toString(36).slice(2, 10)}.webp`
const s3 = new S3Client({
  region: 'auto',
  endpoint: `https://${env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: { accessKeyId: env.R2_ACCESS_KEY_ID, secretAccessKey: env.R2_SECRET_ACCESS_KEY },
})
await s3.send(new PutObjectCommand({ Bucket: 'vbweb-images', Key: key, Body: readFileSync(file), ContentType: 'image/webp', CacheControl: 'public, max-age=31536000, immutable' }))
const url = `https://pub-698f857760da42999dac8854114fbc41.r2.dev/${key}`
const r = await fetch(url, { method: 'HEAD' })
console.log(`${name}: ${url} (${r.status})`)
