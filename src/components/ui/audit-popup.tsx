'use client'

import { ArrowRight, CheckCircle2, X } from 'lucide-react'
import { useState, FormEvent, useEffect, useCallback } from 'react'

const FORMSPREE = 'https://formspree.io/f/xojppgjr'

export function useAuditPopup() {
  const [open, setOpen] = useState(false)
  return { open, openPopup: () => setOpen(true), closePopup: () => setOpen(false) }
}

export function AuditPopup({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKey)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [open, handleKey])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    setError('')

    const data = new FormData(e.currentTarget)
    data.set('service', 'Audit SEO gratuit')

    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSent(true)
      } else {
        setError('Une erreur est survenue. Réessayez ou contactez-nous directement.')
      }
    } catch {
      setError('Erreur réseau. Vérifiez votre connexion.')
    } finally {
      setSending(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Fermer"
        onClick={onClose}
        className="absolute inset-0 bg-black/60 animate-[fade-in_0.2s_ease-out_both]"
      />

      {/* Modal */}
      <div className="relative w-full max-w-md animate-[hero-scale-in_0.25s_cubic-bezier(0.22,1,0.36,1)_both]">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-border/60 bg-background p-6 shadow-2xl sm:p-8">
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="size-4" />
          </button>

          {sent ? (
            <div className="flex flex-col items-center space-y-4 py-6 text-center">
              <div className="flex size-14 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
                <CheckCircle2 className="size-7" />
              </div>
              <h3 className="font-display text-xl font-medium text-foreground">
                Demande envoyée !
              </h3>
              <p className="text-[14px] text-muted-foreground">
                Je vous envoie votre audit vidéo sous 48h. Pensez à vérifier vos spams.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-2 text-[13px] font-medium text-primary transition-colors hover:text-primary/80"
              >
                Fermer
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
                  Gratuit, sans engagement
                </p>
                <h3 className="mt-2 font-display text-xl font-medium tracking-[-0.01em] text-foreground sm:text-2xl">
                  Votre audit SEO en vidéo
                </h3>
                <p className="mt-2 text-[14px] text-muted-foreground">
                  Je vous envoie une analyse vidéo personnalisée de 10 minutes de votre site. Sous 48h.
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="audit-name" className="mb-1.5 block text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground/70">
                    Votre nom
                  </label>
                  <input
                    id="audit-name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Victor Béasse"
                    className="w-full rounded-xl border border-border/60 bg-card/40 px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground/40 outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                  />
                </div>
                <div>
                  <label htmlFor="audit-email" className="mb-1.5 block text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground/70">
                    Votre email
                  </label>
                  <input
                    id="audit-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="vous@email.com"
                    className="w-full rounded-xl border border-border/60 bg-card/40 px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground/40 outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                  />
                </div>
                <div>
                  <label htmlFor="audit-url" className="mb-1.5 block text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground/70">
                    URL de votre site
                  </label>
                  <input
                    id="audit-url"
                    name="website"
                    type="url"
                    required
                    placeholder="https://votresite.fr"
                    className="w-full rounded-xl border border-border/60 bg-card/40 px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground/40 outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                {error && <p className="text-[13px] text-red-400">{error}</p>}

                <button
                  type="submit"
                  disabled={sending}
                  className="group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-[14px] font-medium text-primary-foreground transition-all hover:bg-primary/85 disabled:opacity-50"
                >
                  {sending ? (
                    'Envoi en cours…'
                  ) : (
                    <>
                      Recevoir mon audit gratuit
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
