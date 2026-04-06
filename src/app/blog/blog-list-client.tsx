'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar, User, Search, Clock } from 'lucide-react'

interface BlogPost {
  _id: string
  title: string
  slug: string
  excerpt: string
  coverImage: string
  category: string
  tags: string[]
  author: string
  publishedAt: string
}

interface BlogSettings {
  enabled: boolean
  title: string
  description?: string
  eyebrow?: string
  heroImage?: string
  categories?: string[]
}

const ease = [0.22, 1, 0.36, 1] as const

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease, delay: index * 0.06 }}
    >
      <Link href={`/blog/${post.slug}`} className="group block">
        <div className="flex flex-row rounded-2xl border border-border/40 bg-card overflow-hidden transition-all hover:border-primary/20 hover:-translate-y-1 duration-300 h-[180px] sm:h-[200px]">
          {post.coverImage && (
            <div className="w-[140px] sm:w-[260px] shrink-0 overflow-hidden">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          )}

          <div className="flex flex-1 flex-col justify-center p-4 sm:p-6 min-w-0">
            <div className="flex items-center gap-2 sm:gap-3 text-xs text-muted-foreground">
              {post.category && (
                <span className="font-medium text-primary bg-primary/10 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs">
                  {post.category}
                </span>
              )}
              {post.publishedAt && (
                <span className="hidden sm:flex items-center gap-1">
                  <Calendar className="size-3" />
                  {formatDate(post.publishedAt)}
                </span>
              )}
            </div>

            <h2 className="mt-2 font-display text-sm sm:text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h2>

            {post.excerpt && (
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
            )}

            <div className="mt-auto pt-2 flex items-center justify-between">
              {post.author && (
                <span className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground">
                  <User className="size-3" />
                  {post.author}
                </span>
              )}
              <span className="flex items-center gap-1.5 text-xs font-medium text-primary group-hover:gap-2.5 transition-all">
                Lire
                <ArrowRight className="size-3.5" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export function BlogListClient({
  settings,
  posts,
}: {
  settings: BlogSettings
  posts: BlogPost[]
}) {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filteredPosts =
    activeCategory === 'all'
      ? posts
      : posts.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero with background image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=80"
            alt="Bureau avec ordinateur portable, carnet et café pour la rédaction d'articles de blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-36 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase mb-4">
              {settings.eyebrow || 'Blog'}
            </p>
            <h1 className="font-display text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl font-bold">
              {settings.title || 'Nos dernières actualités'}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed sm:text-xl max-w-2xl mx-auto">
              {settings.description ||
                'Retrouvez nos conseils, nos projets récents et les tendances du secteur.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category filters */}
      {(settings.categories?.length ?? 0) > 0 && (
        <div className="border-b border-border/40 bg-card/50 backdrop-blur-sm sticky top-16 z-30">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-1 py-3 overflow-x-auto scrollbar-hide">
              <button
                onClick={() => setActiveCategory('all')}
                className={`shrink-0 px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                Tous
              </button>
              {settings.categories?.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Posts */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
            {filteredPosts.map((post, i) => (
              <PostCard key={post._id} post={post} index={i} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Search className="size-12 text-muted-foreground/20 mx-auto mb-4" />
            <p className="text-muted-foreground text-lg font-medium">
              {activeCategory !== 'all'
                ? `Aucun article dans la catégorie "${activeCategory}"`
                : 'Aucun article pour le moment.'}
            </p>
            <p className="text-sm text-muted-foreground/60 mt-2">
              Revenez bientôt !
            </p>
          </motion.div>
        )}
      </section>
    </div>
  )
}
