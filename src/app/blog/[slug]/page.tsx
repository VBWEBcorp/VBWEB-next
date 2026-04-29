import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { connectDB } from '@/lib/db'
import { BlogPost, BlogComment } from '@/models/Blog'
import { siteConfig } from '@/lib/seo'
import {
  blogPostingJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from '@/components/seo/json-ld'
import { BlogPostContent } from './blog-post-client'

export const revalidate = 3600

type Props = {
  params: Promise<{ slug: string }>
}

async function getPost(slug: string) {
  await connectDB()
  const post = await BlogPost.findOne({ slug, published: true }).lean()
  if (!post) return null
  return JSON.parse(JSON.stringify(post)) as {
    _id: string
    title: string
    slug: string
    excerpt: string
    content: string
    coverImage: string
    coverImageAlt: string
    category: string
    tags: string[]
    author: string
    published: boolean
    publishedAt: string
    metaTitle?: string
    metaDescription?: string
    focusKeyword?: string
    secondaryKeywords: string[]
    canonicalUrl?: string
    noIndex: boolean
    faq: { question: string; answer: string }[]
    createdAt: string
    updatedAt: string
  }
}

type RelatedPost = {
  _id: string
  title: string
  slug: string
  excerpt: string
  coverImage: string
  category: string
  publishedAt: string
}

async function getRelatedPosts(
  currentSlug: string,
  tags: string[],
  category: string
): Promise<RelatedPost[]> {
  try {
    const query: Record<string, unknown> = {
      slug: { $ne: currentSlug },
      published: true,
    }
    const or: Record<string, unknown>[] = []
    if (tags?.length) or.push({ tags: { $in: tags } })
    if (category) or.push({ category })
    if (or.length) query.$or = or

    const posts = await BlogPost.find(query)
      .sort({ publishedAt: -1, createdAt: -1 })
      .limit(3)
      .select('title slug excerpt coverImage category publishedAt')
      .lean()

    return JSON.parse(JSON.stringify(posts)) as RelatedPost[]
  } catch {
    return []
  }
}

type CommentItem = {
  _id: string
  author: string
  content: string
  createdAt: string
}

async function getComments(slug: string): Promise<CommentItem[]> {
  try {
    const comments = await BlogComment.find({ postSlug: slug, approved: true })
      .sort({ createdAt: -1 })
      .select('author content createdAt')
      .lean()
    return JSON.parse(JSON.stringify(comments)) as CommentItem[]
  } catch {
    return []
  }
}

export async function generateStaticParams() {
  if (!process.env.MONGODB_URI) return []
  try {
    await connectDB()
    const posts = await BlogPost.find({ published: true }).select('slug').lean()
    return posts.map((post) => ({ slug: post.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}

  const title = post.metaTitle || post.title
  const description = post.metaDescription || post.excerpt
  const canonical = post.canonicalUrl || `/blog/${slug}`

  return {
    title,
    description,
    alternates: { canonical },
    ...(post.noIndex && { robots: { index: false, follow: true } }),
    openGraph: {
      type: 'article',
      title,
      description,
      url: `${siteConfig.url}/blog/${slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author || siteConfig.founder],
      tags: post.tags,
      section: post.category || undefined,
      images: post.coverImage
        ? [{ url: post.coverImage, alt: post.coverImageAlt || title }]
        : [{ url: siteConfig.ogImage }],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const [relatedPosts, comments] = await Promise.all([
    getRelatedPosts(post.slug, post.tags || [], post.category || ''),
    getComments(post.slug),
  ])

  const graph: Record<string, unknown>[] = [
    blogPostingJsonLd({
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      slug: post.slug,
      image: post.coverImage || undefined,
      publishedAt: post.publishedAt,
      updatedAt: post.updatedAt,
      author: post.author || siteConfig.founder,
      tags: post.tags,
    }),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
  ]

  // FAQ schema — only if there are valid FAQ items
  const validFaqs = (post.faq || []).filter(f => f.question && f.answer)
  if (validFaqs.length > 0) {
    graph.push(faqJsonLd(validFaqs))
  }

  const jsonLd = { '@context': 'https://schema.org', '@graph': graph }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostContent
        post={{
          ...post,
          coverImageAlt: post.coverImageAlt || '',
          faq: validFaqs,
        }}
        relatedPosts={relatedPosts}
        initialComments={comments}
      />
    </>
  )
}
