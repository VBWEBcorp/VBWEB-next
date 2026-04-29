'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Linkedin, Sparkles, Copy, Check, Loader2, RefreshCw, ExternalLink } from 'lucide-react'

import { cn } from '@/lib/utils'

interface BlogPost {
  _id: string
  title: string
  slug: string
  excerpt: string
  coverImage: string
  category: string
  published: boolean
  publishedAt?: string
}

export default function AdminLinkedInGeneratorPage() {
  const router = useRouter()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedId, setSelectedId] = useState<string>('')
  const [generating, setGenerating] = useState(false)
  const [result, setResult] = useState<string>('')
  const [resultArticle, setResultArticle] = useState<{ title: string; url: string } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('authToken')) router.push('/admin/login')
  }, [router])

  useEffect(() => {
    const load = async () => {
      try {
        const token = localStorage.getItem('authToken')
        const res = await fetch('/api/blog/posts', {
          headers: { Authorization: `Bearer ${token}` },
        })
        const data = await res.json()
        const published = (data as BlogPost[]).filter((p) => p.published)
        setPosts(published)
        if (published.length > 0) setSelectedId(published[0]._id)
      } catch (err) {
        console.error('Failed to load posts:', err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  async function handleGenerate() {
    if (!selectedId) return
    setGenerating(true)
    setError(null)
    setResult('')
    setResultArticle(null)
    setCopied(false)
    try {
      const token = localStorage.getItem('authToken')
      const res = await fetch('/api/admin/linkedin-generator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ postId: selectedId }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Erreur lors de la génération.')
      } else {
        setResult(data.post)
        setResultArticle(data.article)
      }
    } catch {
      setError('Connexion impossible au serveur.')
    } finally {
      setGenerating(false)
    }
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(result)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setError('Copie impossible — sélectionne et copie manuellement.')
    }
  }

  const selected = posts.find((p) => p._id === selectedId)

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border/40 bg-card/30">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center gap-4">
          <Link
            href="/admin"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" />
            Retour
          </Link>
          <div className="flex items-center gap-2">
            <Linkedin className="size-5 text-primary" />
            <h1 className="text-lg font-bold text-foreground">Générateur de post LinkedIn</h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8 space-y-6">
        <div className="rounded-2xl border border-border/40 bg-card p-6 sm:p-8">
          <div className="flex items-start gap-3 mb-5">
            <div className="rounded-lg bg-primary/10 p-2">
              <Sparkles className="size-5 text-primary" />
            </div>
            <div>
              <h2 className="font-display text-base font-bold text-foreground">
                Transforme un article en post LinkedIn accrocheur
              </h2>
              <p className="text-xs text-muted-foreground/70 mt-1">
                Sélectionne un article publié. Claude analyse le contenu et génère un post LinkedIn
                "putaclic" intelligent, avec hook, structure, et CTA vers l&apos;article.
              </p>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="size-5 animate-spin text-muted-foreground" />
            </div>
          ) : posts.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-8">
              Aucun article publié pour le moment.
            </p>
          ) : (
            <div className="space-y-4">
              <div>
                <label htmlFor="post-select" className="block text-xs font-medium text-muted-foreground mb-1.5">
                  Article à analyser
                </label>
                <select
                  id="post-select"
                  value={selectedId}
                  onChange={(e) => setSelectedId(e.target.value)}
                  className="w-full rounded-lg border border-border/60 bg-background px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                >
                  {posts.map((p) => (
                    <option key={p._id} value={p._id}>
                      {p.title}
                    </option>
                  ))}
                </select>
              </div>

              {selected && (
                <div className="flex gap-3 rounded-xl border border-border/40 bg-background/40 p-3">
                  {selected.coverImage && (
                    <img
                      src={selected.coverImage}
                      alt=""
                      className="size-16 shrink-0 rounded-lg object-cover"
                    />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-foreground truncate">{selected.title}</p>
                    {selected.excerpt && (
                      <p className="text-xs text-muted-foreground/70 line-clamp-2 mt-0.5">
                        {selected.excerpt}
                      </p>
                    )}
                    <Link
                      href={`/blog/${selected.slug}`}
                      target="_blank"
                      className="inline-flex items-center gap-1 mt-1 text-[11px] text-primary hover:underline"
                    >
                      Voir l&apos;article <ExternalLink className="size-3" />
                    </Link>
                  </div>
                </div>
              )}

              <button
                onClick={handleGenerate}
                disabled={generating || !selectedId}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/85 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {generating ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Génération en cours...
                  </>
                ) : result ? (
                  <>
                    <RefreshCw className="size-4" />
                    Régénérer
                  </>
                ) : (
                  <>
                    <Sparkles className="size-4" />
                    Générer le post LinkedIn
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {error && (
          <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-4">
            <p className="text-sm text-red-400">{error}</p>
          </div>
        )}

        {result && (
          <div className="rounded-2xl border border-border/40 bg-card p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-base font-bold text-foreground">
                Post LinkedIn généré
              </h2>
              <button
                onClick={handleCopy}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors',
                  copied
                    ? 'bg-emerald-500/10 text-emerald-400'
                    : 'bg-foreground/5 text-foreground hover:bg-foreground/10'
                )}
              >
                {copied ? (
                  <>
                    <Check className="size-3.5" />
                    Copié
                  </>
                ) : (
                  <>
                    <Copy className="size-3.5" />
                    Copier
                  </>
                )}
              </button>
            </div>

            <textarea
              value={result}
              onChange={(e) => setResult(e.target.value)}
              rows={Math.max(12, result.split('\n').length + 2)}
              className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm leading-relaxed text-foreground font-mono focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors resize-y"
            />

            <p className="mt-3 text-[11px] text-muted-foreground/60">
              Tu peux éditer directement avant de copier. {result.length} caractères.
            </p>

            {resultArticle && (
              <div className="mt-4 rounded-lg border border-border/40 bg-background/40 p-3 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground/50 font-semibold">
                    Lien article dans le post
                  </p>
                  <p className="text-xs text-muted-foreground truncate">{resultArticle.url}</p>
                </div>
                <a
                  href={`https://www.linkedin.com/`}
                  target="_blank"
                  rel="noopener"
                  className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-[#0A66C2] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#0A66C2]/85 transition-colors"
                >
                  <Linkedin className="size-3.5" />
                  Ouvrir LinkedIn
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
