import type { Metadata } from 'next'

import { connectDB } from '@/lib/db'
import { BlogPost, BlogSettings } from '@/models/Blog'
import { siteConfig } from '@/lib/seo'
import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'
import { BlogListClient } from './blog-list-client'

export const revalidate = 3600

async function getBlogData() {
  await connectDB()
  const [settings, posts] = await Promise.all([
    BlogSettings.findOne().lean(),
    BlogPost.find({ published: true })
      .sort({ publishedAt: -1, createdAt: -1 })
      .lean(),
  ])

  return {
    settings: settings
      ? JSON.parse(JSON.stringify(settings))
      : {
          enabled: false,
          title: 'Nos dernières actualités',
          description:
            'Retrouvez nos conseils, nos projets récents et les tendances du secteur.',
          eyebrow: 'Blog',
          heroImage: '',
          categories: [],
        },
    posts: JSON.parse(JSON.stringify(posts)) as Array<{
      _id: string
      title: string
      slug: string
      excerpt: string
      coverImage: string
      category: string
      tags: string[]
      author: string
      publishedAt: string
    }>,
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const { settings } = await getBlogData()
  const title = settings.title || 'Blog'
  const description =
    settings.description ||
    `Articles et conseils SEO par ${siteConfig.founder}, consultant SEO à Rennes.`

  return {
    title,
    description,
    alternates: { canonical: '/blog' },
    openGraph: {
      type: 'website',
      title,
      description,
      url: `${siteConfig.url}/blog`,
    },
  }
}

export default async function BlogPage() {
  const { settings, posts } = await getBlogData()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: settings.title || 'Blog',
        description:
          settings.description ||
          `Articles et conseils SEO par ${siteConfig.founder}.`,
        url: `${siteConfig.url}/blog`,
        isPartOf: { '@id': `${siteConfig.url}/#website` },
        inLanguage: 'fr-FR',
      },
      breadcrumbJsonLd([
        { name: 'Accueil', path: '/' },
        { name: 'Blog', path: '/blog' },
      ]),
    ],
  }

  if (!settings.enabled) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">
          Le blog n&apos;est pas disponible pour le moment.
        </p>
      </div>
    )
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogListClient settings={settings} posts={posts} />
    </>
  )
}
