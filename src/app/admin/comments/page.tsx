'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Check, Trash2, Clock, MessageCircle, Loader2 } from 'lucide-react'

import { cn } from '@/lib/utils'

interface Comment {
  _id: string
  postSlug: string
  author: string
  email: string
  content: string
  approved: boolean
  createdAt: string
}

type Filter = 'all' | 'pending' | 'approved'

export default function AdminCommentsPage() {
  const router = useRouter()
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<Filter>('pending')
  const [busy, setBusy] = useState<string | null>(null)

  useEffect(() => {
    if (!localStorage.getItem('authToken')) router.push('/admin/login')
  }, [router])

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const token = localStorage.getItem('authToken')
      const url = filter === 'all' ? '/api/blog/comments' : `/api/blog/comments?status=${filter}`
      const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } })
      const data = await res.json()
      setComments(data.comments || [])
    } catch (error) {
      console.error('Failed to load comments:', error)
    } finally {
      setLoading(false)
    }
  }, [filter])

  useEffect(() => {
    load()
  }, [load])

  async function approve(id: string) {
    setBusy(id)
    try {
      const token = localStorage.getItem('authToken')
      await fetch(`/api/blog/comments/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ approved: true }),
      })
      await load()
    } finally {
      setBusy(null)
    }
  }

  async function remove(id: string) {
    if (!confirm('Supprimer ce commentaire ?')) return
    setBusy(id)
    try {
      const token = localStorage.getItem('authToken')
      await fetch(`/api/blog/comments/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      })
      await load()
    } finally {
      setBusy(null)
    }
  }

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })

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
            <MessageCircle className="size-5 text-primary" />
            <h1 className="text-lg font-bold text-foreground">Commentaires</h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-6 flex gap-1 p-1 rounded-lg bg-muted/50 w-fit">
          {(['pending', 'approved', 'all'] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-colors',
                filter === f
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {f === 'pending' ? 'En attente' : f === 'approved' ? 'Approuvés' : 'Tous'}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="size-6 animate-spin text-muted-foreground" />
          </div>
        ) : comments.length === 0 ? (
          <div className="rounded-2xl border border-border/40 bg-card p-12 text-center">
            <MessageCircle className="size-10 text-muted-foreground/30 mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">Aucun commentaire {filter === 'pending' ? 'en attente' : filter === 'approved' ? 'approuvé' : ''}.</p>
          </div>
        ) : (
          <ul className="space-y-3">
            {comments.map((c) => (
              <li
                key={c._id}
                className="rounded-xl border border-border/40 bg-card p-5"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center flex-wrap gap-2 mb-1">
                      <span className="font-semibold text-sm text-foreground">{c.author}</span>
                      <span className="text-xs text-muted-foreground/60">{c.email}</span>
                      {!c.approved && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-400">
                          <Clock className="size-3" />
                          En attente
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-muted-foreground/60">
                      <time>{formatDate(c.createdAt)}</time>
                      <span>·</span>
                      <Link
                        href={`/blog/${c.postSlug}#commentaires`}
                        target="_blank"
                        className="hover:text-primary transition-colors truncate"
                      >
                        /blog/{c.postSlug}
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    {!c.approved && (
                      <button
                        onClick={() => approve(c._id)}
                        disabled={busy === c._id}
                        className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400 hover:bg-emerald-500/20 transition-colors disabled:opacity-50"
                      >
                        <Check className="size-3.5" />
                        Approuver
                      </button>
                    )}
                    <button
                      onClick={() => remove(c._id)}
                      disabled={busy === c._id}
                      className="inline-flex items-center gap-1 rounded-lg bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-400 hover:bg-red-500/20 transition-colors disabled:opacity-50"
                    >
                      <Trash2 className="size-3.5" />
                      Supprimer
                    </button>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap">
                  {c.content}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
