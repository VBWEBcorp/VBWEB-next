import { connectDB } from '@/lib/db'
import { BlogPost } from '@/models/Blog'
import { siteConfig } from '@/lib/seo'

function escapeXml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, '').trim()
}

export const dynamic = 'force-dynamic'

export async function GET() {
  await connectDB()
  const posts = await BlogPost.find({ published: true })
    .sort({ publishedAt: -1 })
    .limit(50)
    .lean()

  const items = posts
    .map((post) => {
      const title = escapeXml(post.metaTitle || post.title)
      const description = escapeXml(
        post.metaDescription || post.excerpt || stripHtml(post.content).slice(0, 200)
      )
      const link = `${siteConfig.url}/blog/${post.slug}`
      const pubDate = post.publishedAt
        ? new Date(post.publishedAt).toUTCString()
        : new Date(post.createdAt).toUTCString()

      return `    <item>
      <title>${title}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${description}</description>
      <pubDate>${pubDate}</pubDate>
      <author>${siteConfig.email} (${siteConfig.founder})</author>${
        post.category ? `\n      <category>${escapeXml(post.category)}</category>` : ''
      }
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteConfig.name)} | Blog</title>
    <link>${siteConfig.url}/blog</link>
    <description>Articles et conseils SEO par ${escapeXml(siteConfig.founder)}, consultant SEO à Rennes.</description>
    <language>fr</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteConfig.url}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
