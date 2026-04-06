const { MongoClient } = require('mongodb')

const uri = process.env.MONGODB_URI || 'mongodb+srv://vbweb:mwLtZRnKL40UGo6q@vbweb.mdm1f65.mongodb.net/VBWEB'

async function main() {
  const client = new MongoClient(uri)
  await client.connect()
  const db = client.db('VBWEB')
  const col = db.collection('blogposts')

  const posts = await col.find({}).toArray()

  for (const post of posts) {
    console.log(`\n--- ${post.title} ---`)
    console.log(`Cover: ${post.coverImage}`)
    console.log(`Cover alt: ${post.coverImageAlt}`)

    // Check for inline images
    const imgs = post.content.match(/<img[^>]*>/gi) || []
    imgs.forEach((img, i) => {
      const src = img.match(/src="([^"]*)"/)?.[1] || ''
      const alt = img.match(/alt="([^"]*)"/)?.[1] || ''
      console.log(`Inline img ${i+1}: src=${src.substring(0, 60)}... alt="${alt}"`)
    })
  }

  await client.close()
}

main().catch(console.error)
