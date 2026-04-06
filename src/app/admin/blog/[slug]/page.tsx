'use client'

import { useEffect, useState, use, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft, Save, Check, Eye, EyeOff, Trash2,
  ChevronDown, Plus, X, AlertTriangle, CheckCircle,
  Circle, Target, FileText, Search,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ImageField } from '@/components/admin/field-editor'
import { RichEditor } from '@/components/admin/rich-editor'
import { cn } from '@/lib/utils'

interface FaqItem {
  question: string
  answer: string
}

interface BlogPost {
  _id?: string
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
  publishedAt?: string
  metaTitle?: string
  metaDescription?: string
  focusKeyword?: string
  secondaryKeywords: string[]
  canonicalUrl?: string
  noIndex: boolean
  faq: FaqItem[]
}

const emptyPost: BlogPost = {
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  coverImage: '',
  coverImageAlt: '',
  category: '',
  tags: [],
  author: '',
  published: false,
  metaTitle: '',
  metaDescription: '',
  focusKeyword: '',
  secondaryKeywords: [],
  canonicalUrl: '',
  noIndex: false,
  faq: [],
}

/* ─── SEO Analysis Engine ─── */
interface SeoCheck {
  id: string
  label: string
  status: 'good' | 'warning' | 'bad'
  detail: string
}

function analyzeSeo(post: BlogPost): SeoCheck[] {
  const checks: SeoCheck[] = []
  const kw = (post.focusKeyword || '').toLowerCase().trim()
  const title = post.metaTitle || post.title
  const desc = post.metaDescription || post.excerpt
  const contentText = post.content.replace(/<[^>]*>/g, '').toLowerCase()
  const contentWords = contentText.trim().split(/\s+/).length

  // 1. Focus keyword defined
  if (!kw) {
    checks.push({ id: 'kw', label: 'Mot-clé principal', status: 'bad', detail: 'Définissez un mot-clé principal pour cet article' })
  } else {
    checks.push({ id: 'kw', label: 'Mot-clé principal', status: 'good', detail: `Mot-clé « ${kw} » défini` })
  }

  // 2. Keyword in title
  if (kw && title.toLowerCase().includes(kw)) {
    checks.push({ id: 'kw-title', label: 'Mot-clé dans le titre', status: 'good', detail: 'Le mot-clé est dans le titre SEO' })
  } else if (kw) {
    checks.push({ id: 'kw-title', label: 'Mot-clé dans le titre', status: 'bad', detail: 'Ajoutez le mot-clé dans le titre SEO' })
  }

  // 3. Keyword in meta description
  if (kw && desc.toLowerCase().includes(kw)) {
    checks.push({ id: 'kw-desc', label: 'Mot-clé dans la meta description', status: 'good', detail: 'Le mot-clé est dans la meta description' })
  } else if (kw) {
    checks.push({ id: 'kw-desc', label: 'Mot-clé dans la meta description', status: 'warning', detail: 'Ajoutez le mot-clé dans la meta description' })
  }

  // 4. Keyword in URL
  if (kw && post.slug.toLowerCase().includes(kw.replace(/\s+/g, '-'))) {
    checks.push({ id: 'kw-url', label: 'Mot-clé dans l\'URL', status: 'good', detail: 'Le mot-clé est dans l\'URL' })
  } else if (kw) {
    checks.push({ id: 'kw-url', label: 'Mot-clé dans l\'URL', status: 'warning', detail: 'Essayez d\'inclure le mot-clé dans l\'URL' })
  }

  // 5. Keyword in first paragraph
  if (kw) {
    const firstP = post.content.match(/<p[^>]*>(.*?)<\/p>/i)
    if (firstP && firstP[1].toLowerCase().includes(kw)) {
      checks.push({ id: 'kw-intro', label: 'Mot-clé dans l\'introduction', status: 'good', detail: 'Le mot-clé apparaît dans le premier paragraphe' })
    } else {
      checks.push({ id: 'kw-intro', label: 'Mot-clé dans l\'introduction', status: 'bad', detail: 'Placez le mot-clé dans le premier paragraphe' })
    }
  }

  // 6. Keyword in H2
  if (kw) {
    const h2s = post.content.match(/<h2[^>]*>(.*?)<\/h2>/gi) || []
    const kwInH2 = h2s.some(h => h.toLowerCase().includes(kw))
    if (kwInH2) {
      checks.push({ id: 'kw-h2', label: 'Mot-clé dans un H2', status: 'good', detail: 'Le mot-clé apparaît dans au moins un H2' })
    } else {
      checks.push({ id: 'kw-h2', label: 'Mot-clé dans un H2', status: 'warning', detail: 'Ajoutez le mot-clé dans au moins un sous-titre H2' })
    }
  }

  // 7. Keyword density
  if (kw && contentWords > 50) {
    const regex = new RegExp(kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi')
    const count = (contentText.match(regex) || []).length
    const density = (count / contentWords) * 100
    if (density >= 0.5 && density <= 2.5) {
      checks.push({ id: 'kw-density', label: 'Densité du mot-clé', status: 'good', detail: `${density.toFixed(1)}% : idéale (0.5-2.5%)` })
    } else if (density < 0.5) {
      checks.push({ id: 'kw-density', label: 'Densité du mot-clé', status: 'warning', detail: `${density.toFixed(1)}% : trop faible, visez 0.5-2.5%` })
    } else {
      checks.push({ id: 'kw-density', label: 'Densité du mot-clé', status: 'warning', detail: `${density.toFixed(1)}% : trop élevée, risque de suroptimisation` })
    }
  }

  // 8. Title length
  if (title.length >= 50 && title.length <= 60) {
    checks.push({ id: 'title-len', label: 'Longueur du titre SEO', status: 'good', detail: `${title.length} caractères, parfait (50-60)` })
  } else if (title.length > 0 && title.length < 50) {
    checks.push({ id: 'title-len', label: 'Longueur du titre SEO', status: 'warning', detail: `${title.length} caractères, trop court, visez 50-60` })
  } else if (title.length > 60) {
    checks.push({ id: 'title-len', label: 'Longueur du titre SEO', status: 'warning', detail: `${title.length} caractères, trop long, sera tronqué par Google` })
  }

  // 9. Meta description length
  if (desc.length >= 120 && desc.length <= 160) {
    checks.push({ id: 'desc-len', label: 'Longueur meta description', status: 'good', detail: `${desc.length} caractères, parfait (120-160)` })
  } else if (desc.length > 0 && desc.length < 120) {
    checks.push({ id: 'desc-len', label: 'Longueur meta description', status: 'warning', detail: `${desc.length} caractères, trop courte, visez 120-160` })
  } else if (desc.length > 160) {
    checks.push({ id: 'desc-len', label: 'Longueur meta description', status: 'warning', detail: `${desc.length} caractères, sera tronquée (max 160)` })
  } else {
    checks.push({ id: 'desc-len', label: 'Meta description', status: 'bad', detail: 'Rédigez une meta description' })
  }

  // 10. Content length
  if (contentWords >= 1500) {
    checks.push({ id: 'length', label: 'Longueur du contenu', status: 'good', detail: `${contentWords} mots, excellent pour le SEO` })
  } else if (contentWords >= 800) {
    checks.push({ id: 'length', label: 'Longueur du contenu', status: 'warning', detail: `${contentWords} mots, correct, visez 1500+ pour un meilleur classement` })
  } else if (contentWords > 0) {
    checks.push({ id: 'length', label: 'Longueur du contenu', status: 'bad', detail: `${contentWords} mots, trop court, minimum recommandé 800 mots` })
  }

  // 11. H2 headings
  const h2Count = (post.content.match(/<h2/gi) || []).length
  if (h2Count >= 2) {
    checks.push({ id: 'h2', label: 'Sous-titres H2', status: 'good', detail: `${h2Count} sous-titres H2, bonne structuration` })
  } else if (h2Count === 1) {
    checks.push({ id: 'h2', label: 'Sous-titres H2', status: 'warning', detail: '1 seul H2, ajoutez-en pour mieux structurer' })
  } else if (contentWords > 200) {
    checks.push({ id: 'h2', label: 'Sous-titres H2', status: 'bad', detail: 'Aucun H2, structurez votre contenu avec des sous-titres' })
  }

  // 12. Images with alt
  const images = post.content.match(/<img[^>]*>/gi) || []
  const imagesWithAlt = images.filter(img => /alt="[^"]+"/i.test(img))
  if (images.length > 0) {
    if (imagesWithAlt.length === images.length) {
      checks.push({ id: 'img-alt', label: 'Alt text des images', status: 'good', detail: `${images.length} image(s) avec alt text` })
    } else {
      checks.push({ id: 'img-alt', label: 'Alt text des images', status: 'bad', detail: `${images.length - imagesWithAlt.length} image(s) sans alt text` })
    }
  }

  // 13. Cover image alt
  if (post.coverImage) {
    if (post.coverImageAlt) {
      checks.push({ id: 'cover-alt', label: 'Alt de l\'image de couverture', status: 'good', detail: 'Alt text défini pour l\'image de couverture' })
    } else {
      checks.push({ id: 'cover-alt', label: 'Alt de l\'image de couverture', status: 'bad', detail: 'Ajoutez un alt text à l\'image de couverture' })
    }
  }

  // 14. Internal links
  const internalLinks = (post.content.match(/href="\/[^"]*"/gi) || []).length
  if (internalLinks >= 2) {
    checks.push({ id: 'internal', label: 'Liens internes', status: 'good', detail: `${internalLinks} liens internes, bon maillage` })
  } else if (internalLinks === 1) {
    checks.push({ id: 'internal', label: 'Liens internes', status: 'warning', detail: '1 lien interne, ajoutez-en au moins 2-3' })
  } else if (contentWords > 200) {
    checks.push({ id: 'internal', label: 'Liens internes', status: 'bad', detail: 'Aucun lien interne, ajoutez des liens vers vos pages' })
  }

  // 15. External links
  const externalLinks = (post.content.match(/href="https?:\/\/[^"]*"/gi) || []).length
  if (externalLinks >= 1) {
    checks.push({ id: 'external', label: 'Liens externes', status: 'good', detail: `${externalLinks} lien(s) externe(s)` })
  } else if (contentWords > 500) {
    checks.push({ id: 'external', label: 'Liens externes', status: 'warning', detail: 'Aucun lien externe, ajoutez une source de référence' })
  }

  // 16. FAQ schema
  if (post.faq.length >= 3) {
    checks.push({ id: 'faq', label: 'FAQ Schema', status: 'good', detail: `${post.faq.length} questions FAQ, Google affichera le rich snippet` })
  } else if (post.faq.length > 0) {
    checks.push({ id: 'faq', label: 'FAQ Schema', status: 'warning', detail: `${post.faq.length} question(s), ajoutez-en pour atteindre 3-5` })
  } else {
    checks.push({ id: 'faq', label: 'FAQ Schema', status: 'warning', detail: 'Ajoutez 3-5 questions FAQ pour les rich snippets Google' })
  }

  // 17. Excerpt defined
  if (post.excerpt && post.excerpt.length >= 50) {
    checks.push({ id: 'excerpt', label: 'Résumé / Excerpt', status: 'good', detail: 'Résumé défini, sera utilisé pour les aperçus' })
  } else {
    checks.push({ id: 'excerpt', label: 'Résumé / Excerpt', status: 'warning', detail: 'Rédigez un résumé de 50-160 caractères' })
  }

  return checks
}

function SeoScore({ checks }: { checks: SeoCheck[] }) {
  const good = checks.filter(c => c.status === 'good').length
  const total = checks.length
  const score = total > 0 ? Math.round((good / total) * 100) : 0

  const color = score >= 80 ? 'text-emerald-500' : score >= 50 ? 'text-amber-500' : 'text-red-500'
  const bgColor = score >= 80 ? 'bg-emerald-500' : score >= 50 ? 'bg-amber-500' : 'bg-red-500'

  return (
    <div className="flex items-center gap-3">
      <div className="relative size-12">
        <svg className="size-12 -rotate-90" viewBox="0 0 36 36">
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="text-muted/40"
          />
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeDasharray={`${score}, 100`}
            className={color}
          />
        </svg>
        <span className={cn('absolute inset-0 flex items-center justify-center text-xs font-bold', color)}>
          {score}
        </span>
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">Score SEO</p>
        <p className="text-xs text-muted-foreground">{good}/{total} critères validés</p>
      </div>
      <div className={cn('ml-auto h-2 w-24 rounded-full bg-muted/50 overflow-hidden')}>
        <div className={cn('h-full rounded-full transition-all', bgColor)} style={{ width: `${score}%` }} />
      </div>
    </div>
  )
}

function SeoCheckItem({ check }: { check: SeoCheck }) {
  return (
    <div className="flex items-start gap-2.5 py-1.5">
      {check.status === 'good' ? (
        <CheckCircle className="size-4 shrink-0 text-emerald-500 mt-0.5" />
      ) : check.status === 'warning' ? (
        <AlertTriangle className="size-4 shrink-0 text-amber-500 mt-0.5" />
      ) : (
        <Circle className="size-4 shrink-0 text-red-500 mt-0.5" />
      )}
      <div className="min-w-0">
        <p className="text-xs font-medium text-foreground">{check.label}</p>
        <p className="text-[11px] text-muted-foreground">{check.detail}</p>
      </div>
    </div>
  )
}

/* ─── Main Component ─── */
export default function BlogPostEditor({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const isNew = slug === 'new'
  const router = useRouter()
  const [post, setPost] = useState<BlogPost>(emptyPost)
  const [loading, setLoading] = useState(!isNew)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [tagsInput, setTagsInput] = useState('')
  const [secondaryKwInput, setSecondaryKwInput] = useState('')
  const [categories, setCategories] = useState<string[]>([])
  const [seoOpen, setSeoOpen] = useState(true)

  const seoChecks = useMemo(() => analyzeSeo(post), [post])

  useEffect(() => {
    if (!localStorage.getItem('authToken')) {
      router.push('/admin/login')
    }
    fetch('/api/blog/settings')
      .then((r) => r.json())
      .then((s) => setCategories(s.categories || []))
      .catch(() => {})
  }, [router])

  useEffect(() => {
    if (isNew) return
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/blog/posts/${slug}`)
        if (response.ok) {
          const data = await response.json()
          setPost({
            ...emptyPost,
            ...data,
            coverImageAlt: data.coverImageAlt || '',
            secondaryKeywords: data.secondaryKeywords || [],
            faq: data.faq || [],
            noIndex: data.noIndex || false,
          })
          setTagsInput(data.tags?.join(', ') || '')
          setSecondaryKwInput(data.secondaryKeywords?.join(', ') || '')
        }
      } catch (error) {
        console.error('Failed to load post:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPost()
  }, [slug, isNew])

  const updateField = (field: string, value: any) => {
    setSaved(false)
    setPost((prev) => ({ ...prev, [field]: value }))
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }

  const handleSave = async () => {
    if (!post.title) {
      alert('Le titre est obligatoire')
      return
    }

    setSaving(true)
    try {
      const token = localStorage.getItem('authToken')
      const postSlug = post.slug || generateSlug(post.title)
      const tags = tagsInput.split(',').map((t) => t.trim()).filter(Boolean)
      const secondaryKeywords = secondaryKwInput.split(',').map((t) => t.trim()).filter(Boolean)
      const body = { ...post, slug: postSlug, tags, secondaryKeywords }

      const url = isNew ? '/api/blog/posts' : `/api/blog/posts/${postSlug}`
      const method = isNew ? 'POST' : 'PUT'

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(body),
      })

      if (response.ok) {
        const savedPost = await response.json()
        setSaved(true)
        setTimeout(() => setSaved(false), 3000)

        if (isNew) {
          router.push(`/admin/blog/${savedPost.slug}`)
        } else {
          setPost({ ...emptyPost, ...savedPost, secondaryKeywords: savedPost.secondaryKeywords || [], faq: savedPost.faq || [] })
        }
      } else {
        const err = await response.json()
        alert(err.error || 'Erreur')
      }
    } catch {
      alert('Erreur lors de la sauvegarde')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!confirm('Supprimer définitivement cet article ?')) return
    try {
      const token = localStorage.getItem('authToken')
      await fetch(`/api/blog/posts/${post.slug}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      })
      router.push('/admin/blog')
    } catch {
      alert('Erreur')
    }
  }

  // FAQ handlers
  const addFaq = () => {
    updateField('faq', [...post.faq, { question: '', answer: '' }])
  }

  const updateFaq = (index: number, field: 'question' | 'answer', value: string) => {
    const updated = [...post.faq]
    updated[index] = { ...updated[index], [field]: value }
    updateField('faq', updated)
  }

  const removeFaq = (index: number) => {
    updateField('faq', post.faq.filter((_, i) => i !== index))
  }

  if (loading) return <div className="p-6">Chargement...</div>

  return (
    <div className="p-6 lg:p-8">
      {/* Sticky header */}
      <div className="sticky top-0 z-10 -mx-6 -mt-6 lg:-mx-8 lg:-mt-8 px-6 lg:px-8 pt-6 lg:pt-8 pb-4 bg-muted/30 backdrop-blur-sm border-b border-border/30 mb-6">
        <div className="flex items-center justify-between max-w-5xl">
          <div className="flex items-center gap-3">
            <Link
              href="/admin/blog"
              className="flex size-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-card hover:text-foreground transition-colors"
            >
              <ArrowLeft className="size-4" />
            </Link>
            <h1 className="text-lg font-bold text-foreground">
              {isNew ? 'Nouvel article' : 'Modifier l\'article'}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            {!isNew && (
              <Button size="sm" variant="ghost" onClick={handleDelete} className="text-destructive hover:text-destructive">
                <Trash2 className="size-3.5" />
              </Button>
            )}
            <Button
              size="sm"
              variant="outline"
              onClick={() => updateField('published', !post.published)}
            >
              {post.published ? (
                <><EyeOff className="size-3.5" /> Brouillon</>
              ) : (
                <><Eye className="size-3.5" /> Publier</>
              )}
            </Button>
            <Button
              onClick={handleSave}
              disabled={saving}
              size="sm"
              className={saved ? 'bg-emerald-600 hover:bg-emerald-600' : ''}
            >
              {saved ? (
                <><Check className="size-3.5" /> Sauvegardé</>
              ) : (
                <><Save className="size-3.5" /> {saving ? 'Sauvegarde...' : 'Sauvegarder'}</>
              )}
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5">
        {/* ═══ LEFT COLUMN — Content ═══ */}
        <div className="space-y-5 min-w-0">
          {/* Main info */}
          <div className="rounded-xl bg-card border border-border/40 overflow-hidden">
            <div className="px-5 py-3 border-b border-border/40 bg-muted/30">
              <h3 className="text-xs font-bold text-muted-foreground/60 uppercase tracking-widest">
                Informations principales
              </h3>
            </div>
            <div className="p-5 space-y-4">
              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Titre de l&apos;article
                </Label>
                <Input
                  value={post.title}
                  onChange={(e) => {
                    updateField('title', e.target.value)
                    if (isNew) updateField('slug', generateSlug(e.target.value))
                  }}
                  placeholder="Ex : Comment améliorer sa visibilité en ligne"
                  className="text-base"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  URL de la page
                </Label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground shrink-0">/blog/</span>
                  <Input
                    value={post.slug}
                    onChange={(e) => updateField('slug', e.target.value)}
                    placeholder="comment-ameliorer-sa-visibilite"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Introduction / Résumé (excerpt)
                </Label>
                <textarea
                  value={post.excerpt}
                  onChange={(e) => updateField('excerpt', e.target.value)}
                  placeholder="Court résumé (50-160 car.), apparaît sur la page blog et dans les résultats Google si aucune meta description n'est définie"
                  rows={2}
                  className="w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 resize-y"
                />
                <p className="text-[11px] text-muted-foreground/60">
                  {post.excerpt.length} caractères {post.excerpt.length >= 50 && post.excerpt.length <= 160 ? '✓' : ', visez 50-160'}
                </p>
              </div>

              <div className="space-y-1.5">
                <ImageField
                  label="Image de couverture"
                  value={post.coverImage}
                  onChange={(v) => updateField('coverImage', v)}
                />
              </div>
              {post.coverImage && (
                <div className="space-y-1.5">
                  <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Texte alternatif de l&apos;image (alt text)
                  </Label>
                  <Input
                    value={post.coverImageAlt}
                    onChange={(e) => updateField('coverImageAlt', e.target.value)}
                    placeholder="Décrivez l'image pour Google et l'accessibilité"
                  />
                  <p className="text-[11px] text-muted-foreground/60">
                    Indispensable pour le SEO image et l&apos;accessibilité. Décrivez ce que montre l&apos;image.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="rounded-xl bg-card border border-border/40 overflow-hidden">
            <div className="px-5 py-3 border-b border-border/40 bg-muted/30">
              <h3 className="text-xs font-bold text-muted-foreground/60 uppercase tracking-widest">
                Contenu de l&apos;article
              </h3>
            </div>
            <div className="p-5 space-y-4">
              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Texte complet
                </Label>
                <RichEditor
                  content={post.content}
                  onChange={(html) => updateField('content', html)}
                  placeholder="Commencez à rédiger votre article..."
                />
                <p className="text-[11px] text-muted-foreground/60">
                  Barre d&apos;outils : titres, gras, listes, liens, images, tableaux. Visez 1500+ mots pour un bon SEO.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Builder */}
          <div className="rounded-xl bg-card border border-border/40 overflow-hidden">
            <div className="px-5 py-3 border-b border-border/40 bg-muted/30 flex items-center justify-between">
              <h3 className="text-xs font-bold text-muted-foreground/60 uppercase tracking-widest">
                FAQ, Questions fréquentes (Schema Google)
              </h3>
              <span className="text-[10px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                Rich Snippet
              </span>
            </div>
            <div className="p-5 space-y-4">
              <p className="text-xs text-muted-foreground">
                Les FAQ génèrent un schema FAQPage qui affiche vos questions directement dans les résultats Google.
                Ajoutez 3 à 5 questions avec le mot-clé principal.
              </p>

              {post.faq.map((item, i) => (
                <div key={i} className="rounded-lg border border-border/40 bg-muted/10 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-muted-foreground">Question {i + 1}</span>
                    <button onClick={() => removeFaq(i)} className="text-destructive/60 hover:text-destructive transition-colors">
                      <X className="size-3.5" />
                    </button>
                  </div>
                  <Input
                    value={item.question}
                    onChange={(e) => updateFaq(i, 'question', e.target.value)}
                    placeholder="Ex : Combien coûte un site internet à Rennes ?"
                  />
                  <textarea
                    value={item.answer}
                    onChange={(e) => updateFaq(i, 'answer', e.target.value)}
                    placeholder="Réponse concise et informative (2-4 phrases)"
                    rows={2}
                    className="w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 resize-y"
                  />
                </div>
              ))}

              <Button onClick={addFaq} variant="outline" size="sm" className="w-full">
                <Plus className="size-4" />
                Ajouter une question
              </Button>
            </div>
          </div>

          {/* Organization */}
          <div className="rounded-xl bg-card border border-border/40 overflow-hidden">
            <div className="px-5 py-3 border-b border-border/40 bg-muted/30">
              <h3 className="text-xs font-bold text-muted-foreground/60 uppercase tracking-widest">
                Organisation
              </h3>
            </div>
            <div className="p-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Catégorie
                  </Label>
                  {categories.length > 0 ? (
                    <select
                      value={post.category}
                      onChange={(e) => updateField('category', e.target.value)}
                      className="w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                    >
                      <option value="">Choisir une catégorie</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  ) : (
                    <Input
                      value={post.category}
                      onChange={(e) => updateField('category', e.target.value)}
                      placeholder="Ex : Conseils, Actualités, Tutoriel..."
                    />
                  )}
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Auteur
                  </Label>
                  <Input
                    value={post.author}
                    onChange={(e) => updateField('author', e.target.value)}
                    placeholder="Nom de l'auteur"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Tags / Mots-clés
                </Label>
                <Input
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  placeholder="seo, rennes, référencement local (séparés par des virgules)"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ═══ RIGHT COLUMN — SEO Panel ═══ */}
        <div className="space-y-5">
          {/* SEO Score */}
          <div className="rounded-xl bg-card border border-border/40 overflow-hidden sticky top-24">
            <button
              type="button"
              onClick={() => setSeoOpen(!seoOpen)}
              className="w-full px-5 py-3 border-b border-border/40 bg-muted/30 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Target className="size-4 text-primary" />
                <h3 className="text-xs font-bold text-muted-foreground/60 uppercase tracking-widest">
                  Analyse SEO
                </h3>
              </div>
              <ChevronDown className={cn('size-4 text-muted-foreground transition-transform', seoOpen && 'rotate-180')} />
            </button>

            {seoOpen && (
              <div className="p-5 space-y-4">
                <SeoScore checks={seoChecks} />

                <div className="space-y-1 max-h-[400px] overflow-y-auto pr-1">
                  {seoChecks.filter(c => c.status === 'bad').map(c => <SeoCheckItem key={c.id} check={c} />)}
                  {seoChecks.filter(c => c.status === 'warning').map(c => <SeoCheckItem key={c.id} check={c} />)}
                  {seoChecks.filter(c => c.status === 'good').map(c => <SeoCheckItem key={c.id} check={c} />)}
                </div>
              </div>
            )}

            {/* Focus Keyword */}
            <div className="border-t border-border/40 p-5 space-y-4">
              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide flex items-center gap-1.5">
                  <Search className="size-3" />
                  Mot-clé principal (Focus Keyword)
                </Label>
                <Input
                  value={post.focusKeyword || ''}
                  onChange={(e) => updateField('focusKeyword', e.target.value)}
                  placeholder="Ex : consultant seo rennes"
                  className="text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Mots-clés secondaires
                </Label>
                <Input
                  value={secondaryKwInput}
                  onChange={(e) => setSecondaryKwInput(e.target.value)}
                  placeholder="référencement local, seo bretagne"
                  className="text-sm"
                />
                <p className="text-[11px] text-muted-foreground/60">Séparés par des virgules</p>
              </div>
            </div>

            {/* Meta SEO */}
            <div className="border-t border-border/40 p-5 space-y-4">
              <h4 className="text-xs font-bold text-muted-foreground/60 uppercase tracking-widest flex items-center gap-1.5">
                <FileText className="size-3" />
                Référencement (Meta)
              </h4>

              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Titre SEO Google
                </Label>
                <Input
                  value={post.metaTitle || ''}
                  onChange={(e) => updateField('metaTitle', e.target.value)}
                  placeholder="Vide = titre de l'article"
                  className="text-sm"
                />
                <div className="flex items-center justify-between">
                  <p className="text-[11px] text-muted-foreground/60">50-60 caractères</p>
                  <p className={cn(
                    'text-[11px] font-medium',
                    (post.metaTitle || post.title).length >= 50 && (post.metaTitle || post.title).length <= 60
                      ? 'text-emerald-500' : 'text-amber-500'
                  )}>
                    {(post.metaTitle || post.title).length}
                  </p>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Meta description
                </Label>
                <textarea
                  value={post.metaDescription || ''}
                  onChange={(e) => updateField('metaDescription', e.target.value)}
                  placeholder="Vide = résumé de l'article"
                  rows={3}
                  className="w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 resize-y"
                />
                <div className="flex items-center justify-between">
                  <p className="text-[11px] text-muted-foreground/60">120-160 caractères</p>
                  <p className={cn(
                    'text-[11px] font-medium',
                    (post.metaDescription || post.excerpt).length >= 120 && (post.metaDescription || post.excerpt).length <= 160
                      ? 'text-emerald-500' : 'text-amber-500'
                  )}>
                    {(post.metaDescription || post.excerpt).length}
                  </p>
                </div>
              </div>

              {/* Google Preview */}
              <div className="rounded-lg border border-border/40 bg-white p-3.5 space-y-0.5">
                <p className="text-[11px] font-medium text-muted-foreground/60 uppercase tracking-wide mb-2">
                  Aperçu Google
                </p>
                <p className="text-[#1a0dab] text-sm font-medium truncate leading-tight">
                  {post.metaTitle || post.title || 'Titre de l\'article'}
                </p>
                <p className="text-[#006621] text-[11px] truncate">
                  consultant-seo-rennes.fr/blog/{post.slug || 'url-article'}
                </p>
                <p className="text-[11px] text-[#545454] line-clamp-2 leading-relaxed">
                  {post.metaDescription || post.excerpt || 'Description de l\'article...'}
                </p>
              </div>
            </div>

            {/* Advanced SEO */}
            <div className="border-t border-border/40 p-5 space-y-4">
              <h4 className="text-xs font-bold text-muted-foreground/60 uppercase tracking-widest">
                SEO Avancé
              </h4>

              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  URL canonique (optionnel)
                </Label>
                <Input
                  value={post.canonicalUrl || ''}
                  onChange={(e) => updateField('canonicalUrl', e.target.value)}
                  placeholder="Vide = URL par défaut"
                  className="text-sm"
                />
                <p className="text-[11px] text-muted-foreground/60">
                  Uniquement si le contenu existe déjà sur une autre URL
                </p>
              </div>

              <label className="flex items-center gap-2.5 cursor-pointer">
                <div
                  className={cn(
                    'relative w-9 h-5 rounded-full transition-colors',
                    post.noIndex ? 'bg-red-500' : 'bg-muted-foreground/30'
                  )}
                  onClick={() => updateField('noIndex', !post.noIndex)}
                >
                  <div
                    className={cn(
                      'absolute top-0.5 left-0.5 size-4 rounded-full bg-white shadow transition-transform',
                      post.noIndex && 'translate-x-4'
                    )}
                  />
                </div>
                <div>
                  <span className="text-xs font-medium text-foreground">noIndex</span>
                  <p className="text-[11px] text-muted-foreground/60">Empêche Google d&apos;indexer cette page</p>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
