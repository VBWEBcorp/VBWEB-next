'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { Calendar, User, Tag, Clock, ChevronRight, MessageCircle, Send, Loader2 } from 'lucide-react'

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

interface RelatedPost {
  _id: string
  title: string
  slug: string
  excerpt: string
  coverImage: string
  category: string
  publishedAt: string
}

interface CommentItem {
  _id: string
  author: string
  content: string
  createdAt: string
}

function formatCommentDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

const URL_REGEX = /(https?:\/\/[^\s<>]+)/g

function renderCommentContent(content: string): React.ReactNode {
  const parts = content.split(URL_REGEX)
  return parts.map((part, i) => {
    if (URL_REGEX.test(part)) {
      URL_REGEX.lastIndex = 0
      return (
        <a
          key={i}
          href={part}
          rel="nofollow ugc noopener"
          target="_blank"
          className="text-primary underline underline-offset-2 break-all"
        >
          {part}
        </a>
      )
    }
    return <span key={i}>{part}</span>
  })
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

export function BlogPostContent({
  post,
  relatedPosts,
  initialComments,
}: {
  post: BlogPostData
  relatedPosts: RelatedPost[]
  initialComments: CommentItem[]
}) {
  const readTime = estimateReadTime(post.content)
  const { html: processedContent } = extractToc(post.content)
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const [comments, setComments] = useState<CommentItem[]>(initialComments)
  const [author, setAuthor] = useState('')
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')
  const [website, setWebsite] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const [pendingMsg, setPendingMsg] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSuccess(false)
    setPendingMsg(false)
    setSubmitting(true)
    try {
      const res = await fetch(`/api/blog/posts/${post.slug}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author, email, content, website }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Une erreur est survenue.')
      } else if (data.pending) {
        setAuthor('')
        setEmail('')
        setContent('')
        setPendingMsg(true)
      } else if (data.comment) {
        setComments((prev) => [data.comment, ...prev])
        setAuthor('')
        setEmail('')
        setContent('')
        setSuccess(true)
      }
    } catch {
      setError('Impossible d\'envoyer le commentaire.')
    } finally {
      setSubmitting(false)
    }
  }

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
              Laissez un commentaire ou contactez-moi pour discuter de votre projet.
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

          {/* Comments section */}
          <section className="mt-16" id="commentaires">
            <div className="flex items-center gap-2 mb-6">
              <MessageCircle className="size-5 text-primary" />
              <h2 className="font-display text-xl font-bold text-foreground">
                Commentaires {comments.length > 0 && <span className="text-muted-foreground/60 font-normal">({comments.length})</span>}
              </h2>
            </div>

            {/* Existing comments */}
            {comments.length > 0 ? (
              <ul className="space-y-4 mb-8">
                {comments.map((c) => (
                  <li
                    key={c._id}
                    className="rounded-xl border border-border/40 bg-card p-5"
                  >
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <span className="font-semibold text-sm text-foreground">{c.author}</span>
                      <time className="text-xs text-muted-foreground/60">
                        {formatCommentDate(c.createdAt)}
                      </time>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap">
                      {renderCommentContent(c.content)}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground/60 mb-8">
                Aucun commentaire pour l&apos;instant. Soyez le premier à réagir.
              </p>
            )}

            {/* Comment form */}
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border/40 bg-card p-6 sm:p-8 space-y-4"
            >
              <h3 className="font-display text-base font-semibold text-foreground">
                Laisser un commentaire
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="comment-author" className="block text-xs font-medium text-muted-foreground mb-1.5">
                    Nom <span className="text-primary">*</span>
                  </label>
                  <input
                    id="comment-author"
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                    maxLength={80}
                    className="w-full rounded-lg border border-border/60 bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label htmlFor="comment-email" className="block text-xs font-medium text-muted-foreground mb-1.5">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="comment-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    maxLength={160}
                    className="w-full rounded-lg border border-border/60 bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                    placeholder="votre@email.fr"
                  />
                  <p className="mt-1 text-[10px] text-muted-foreground/50">Ne sera pas publié.</p>
                </div>
              </div>

              <div>
                <label htmlFor="comment-content" className="block text-xs font-medium text-muted-foreground mb-1.5">
                  Commentaire <span className="text-primary">*</span>
                </label>
                <textarea
                  id="comment-content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  rows={5}
                  maxLength={2000}
                  className="w-full rounded-lg border border-border/60 bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors resize-y"
                  placeholder="Partagez votre avis, posez une question..."
                />
              </div>

              {/* Honeypot — hidden from humans */}
              <div aria-hidden className="hidden">
                <label>
                  Site web
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </label>
              </div>

              {error && (
                <p className="text-xs text-red-400" role="alert">{error}</p>
              )}
              {success && (
                <p className="text-xs text-emerald-400">Merci, votre commentaire a été publié.</p>
              )}
              {pendingMsg && (
                <p className="text-xs text-amber-400">
                  Merci, votre commentaire est en attente de modération.
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/85 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Envoi...
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    Publier le commentaire
                  </>
                )}
              </button>
            </form>
          </section>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-16">
              <div className="mb-6">
                <p className="font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                  À lire ensuite
                </p>
                <h2 className="mt-2 font-display text-xl font-bold text-foreground">
                  Articles similaires
                </h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((related) => (
                  <Link
                    key={related._id}
                    href={`/blog/${related.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                  >
                    {related.coverImage && (
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={related.coverImage}
                          alt={related.title}
                          loading="lazy"
                          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-4">
                      {related.category && (
                        <span className="mb-2 inline-block self-start rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-medium text-primary">
                          {related.category}
                        </span>
                      )}
                      <h3 className="font-display text-sm font-semibold leading-snug text-foreground transition-colors duration-200 group-hover:text-primary">
                        {related.title}
                      </h3>
                      {related.excerpt && (
                        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                          {related.excerpt}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
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
