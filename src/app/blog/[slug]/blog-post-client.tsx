'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Tag, Clock, ArrowRight, ChevronRight } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

interface FaqItem {
  question: string
  answer: string
}

interface BlogPostData {
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  coverImageAlt: string
  category: string
  tags: string[]
  author: string
  publishedAt: string
  faq: FaqItem[]
}

function estimateReadTime(html: string) {
  const text = html.replace(/<[^>]*>/g, '')
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

interface TocItem { id: string; text: string; level: number }

function extractToc(html: string): { toc: TocItem[]; html: string } {
  const toc: TocItem[] = []
  const processed = html.replace(/<(h[23])[^>]*>(.*?)<\/h[23]>/gi, (match, tag, text) => {
    const clean = text.replace(/<[^>]*>/g, '').trim()
    const id = clean
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
    const level = tag.toLowerCase() === 'h2' ? 2 : 3
    toc.push({ id, text: clean, level })
    return `<${tag} id="${id}">${text}</${tag}>`
  })
  return { toc, html: processed }
}

export function BlogPostContent({ post }: { post: BlogPostData }) {
  const readTime = estimateReadTime(post.content)
  const { html: processedContent } = extractToc(post.content)
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <article className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative overflow-hidden bg-card">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(78,186,236,0.06),transparent_60%)]" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-10 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground/60 mb-8">
              <Link href="/" className="hover:text-foreground transition-colors">Accueil</Link>
              <ChevronRight className="size-3" />
              <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
              <ChevronRight className="size-3" />
              <span className="text-muted-foreground truncate max-w-[200px]">{post.title}</span>
            </nav>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-5">
              {post.category && (
                <span className="font-medium text-primary bg-primary/10 px-3 py-1 rounded-full text-xs">
                  {post.category}
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Calendar className="size-3.5" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5" />
                {readTime} min de lecture
              </span>
              {post.author && (
                <span className="flex items-center gap-1.5">
                  <User className="size-3.5" />
                  {post.author}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-foreground leading-[1.15]">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="mt-5 text-lg text-muted-foreground/80 leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.1 }}
        >
          {/* Cover image */}
          {post.coverImage && (
            <div className="mb-10 overflow-hidden rounded-2xl border border-border/40">
              <img
                src={post.coverImage}
                alt={post.coverImageAlt || post.title}
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
          )}

          {/* Article card */}
          <div className="rounded-2xl border border-border/40 bg-card p-6 sm:p-8 lg:p-10">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />
          </div>

          {/* Tags */}
          {post.tags?.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Tag className="size-4 text-muted-foreground/50" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-muted-foreground bg-card border border-border/40 px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* FAQ */}
          {post.faq?.length > 0 && (
            <div className="mt-10">
              <h2 className="font-display text-xl font-bold text-foreground mb-5">Questions fréquentes</h2>
              <div className="space-y-3">
                {post.faq.map((item, i) => (
                  <div key={i} className="rounded-xl border border-border/40 bg-card p-5">
                    <h3 className="text-sm font-semibold text-foreground">{item.question}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="mt-14 rounded-2xl border border-border/40 bg-card p-8 sm:p-10 text-center"
          >
            <p className="font-display text-xl font-bold text-foreground">Cet article vous a été utile ?</p>
            <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
              Découvrez nos autres articles ou contactez-nous pour discuter de votre projet.
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <Link
                href="/blog"
                className="rounded-xl border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-foreground/5 transition-colors"
              >
                Tous les articles
              </Link>
              <Link
                href="/contact"
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/85 transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Blog content styles */}
      <style jsx global>{`
        .blog-content {
          font-size: 1rem;
          line-height: 1.85;
          color: var(--muted-foreground);
        }
        .blog-content > *:first-child {
          margin-top: 0;
        }
        .blog-content > *:last-child {
          margin-bottom: 0;
        }
        .blog-content h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
          color: var(--foreground);
          font-family: var(--font-display);
          line-height: 1.3;
        }
        .blog-content h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 0.5rem;
          color: var(--foreground);
          font-family: var(--font-display);
          line-height: 1.4;
        }
        .blog-content p {
          margin-bottom: 1.25rem;
        }
        .blog-content strong {
          font-weight: 600;
          color: var(--foreground);
        }
        .blog-content em {
          font-style: italic;
        }
        .blog-content a {
          color: hsl(var(--primary));
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        .blog-content a:hover {
          opacity: 0.8;
        }
        .blog-content ul,
        .blog-content ol {
          padding-left: 1.5rem;
          margin-bottom: 1.25rem;
        }
        .blog-content ul { list-style: disc; }
        .blog-content ol { list-style: decimal; }
        .blog-content li {
          margin-bottom: 0.5rem;
          padding-left: 0.25rem;
        }
        .blog-content blockquote {
          border-left: 3px solid hsl(var(--primary));
          padding: 1rem 1.5rem;
          margin: 1.75rem 0;
          font-style: italic;
          background: var(--muted);
          border-radius: 0 0.75rem 0.75rem 0;
          color: var(--foreground);
        }
        .blog-content blockquote p:last-child {
          margin-bottom: 0;
        }
        .blog-content img {
          border-radius: 0.75rem;
          max-width: 100%;
          height: auto;
          margin: 1.75rem 0;
        }
        .blog-content pre {
          background: var(--muted);
          padding: 1.25rem;
          border-radius: 0.75rem;
          overflow-x: auto;
          margin: 1.75rem 0;
          font-size: 0.8125rem;
          border: 1px solid var(--border);
        }
        .blog-content code {
          background: var(--muted);
          padding: 0.15rem 0.4rem;
          border-radius: 0.25rem;
          font-size: 0.85em;
        }
        .blog-content pre code {
          background: none;
          padding: 0;
        }
        .blog-content table {
          border-collapse: collapse;
          width: 100%;
          margin: 1.75rem 0;
          font-size: 0.875rem;
          overflow: hidden;
          border: 1px solid var(--border);
          border-radius: 0.75rem;
        }
        .blog-content th,
        .blog-content td {
          border: 1px solid var(--border);
          padding: 0.75rem 1rem;
          text-align: left;
          vertical-align: top;
        }
        .blog-content th {
          background: var(--muted);
          font-weight: 600;
          color: var(--foreground);
        }
        .blog-content td {
          color: var(--muted-foreground);
        }
        .blog-content tr:nth-child(even) td {
          background: var(--muted);
          opacity: 0.5;
        }
      `}</style>
    </article>
  )
}
