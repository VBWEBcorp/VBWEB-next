'use client'

import { ArrowRight, CalendarClock, CheckCircle2, ShieldCheck, X } from 'lucide-react'
import { useState, FormEvent, useEffect, useCallback } from 'react'

import { useHomeLang, t } from '@/components/home/lang'

const FORMSPREE = 'https://formspree.io/f/xojppgjr'
const CALENDLY = 'https://calendly.com/web-rdv/echange-vbweb-30-minutes'

export function useAuditPopup() {
  const [open, setOpen] = useState(false)
  return { open, openPopup: () => setOpen(true), closePopup: () => setOpen(false) }
}

export function AuditPopup({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const { lang } = useHomeLang()
  const tp = t.popup
  const budgetOptions = tp.budgetOptions[lang]

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
    data.set('service', 'Diagnostic SEO/GEO gratuit')

    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSent(true)
      } else {
        setError(tp.errorGeneric[lang])
      }
    } catch {
      setError(tp.errorNetwork[lang])
    } finally {
      setSending(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[200] overflow-y-auto">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Fermer"
        onClick={onClose}
        className="fixed inset-0 bg-black/60 animate-[fade-in_0.2s_ease-out_both]"
      />

      {/* Modal wrapper — handles centering and overflow scroll */}
      <div className="relative flex min-h-full items-center justify-center p-3 sm:p-4">
        <div className="relative my-4 w-full max-w-md animate-[hero-scale-in_0.25s_cubic-bezier(0.22,1,0.36,1)_both]">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-border/60 bg-background p-5 shadow-2xl sm:p-8">
          {/* Top accent gradient */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
          />
          {/* Subtle radial glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 size-48 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
          />
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="absolute right-4 top-4 z-10 flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="size-4" />
          </button>

          {sent ? (
            <div className="flex flex-col items-center space-y-4 py-6 text-center">
              <div className="flex size-14 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
                <CheckCircle2 className="size-7" />
              </div>
              <h3 className="font-display text-xl font-medium text-foreground">
                {tp.successTitle[lang]}
              </h3>
              <p className="text-[14px] text-muted-foreground">
                {tp.successMessage[lang]}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-2 text-[13px] font-medium text-primary transition-colors hover:text-primary/80"
              >
                {tp.close[lang]}
              </button>
            </div>
          ) : (
            <>
              <div className="mb-4 sm:mb-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 shadow-[0_0_20px_-8px_rgba(78,186,236,0.5)]">
                  <ShieldCheck className="size-3.5 text-primary" />
                  <span className="font-display text-[11px] font-bold uppercase tracking-[0.14em] text-primary sm:text-[12px] sm:tracking-[0.16em]">
                    {tp.badge[lang]}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-medium tracking-[-0.01em] text-foreground sm:text-2xl">
                  {tp.title[lang]}
                </h3>
                <p className="mt-1.5 text-[13px] leading-snug text-muted-foreground sm:text-[14px] sm:leading-relaxed">
                  {tp.subtitle[lang]}
                </p>
              </div>

              <form className="space-y-3" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="audit-name" className="mb-1.5 block text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground/70">
                    {tp.nameLabel[lang]}
                  </label>
                  <input
                    id="audit-name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Victor Béasse"
                    className="w-full rounded-xl border border-border/60 bg-card/40 px-4 py-2.5 text-base text-foreground placeholder:text-muted-foreground/40 outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                  />
                </div>
                <div>
                  <label htmlFor="audit-email" className="mb-1.5 block text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground/70">
                    {tp.emailLabel[lang]}
                  </label>
                  <input
                    id="audit-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="vous@email.com"
                    className="w-full rounded-xl border border-border/60 bg-card/40 px-4 py-2.5 text-base text-foreground placeholder:text-muted-foreground/40 outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                  />
                </div>
                <div>
                  <label htmlFor="audit-url" className="mb-1.5 block text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground/70">
                    {tp.urlLabel[lang]}
                  </label>
                  <input
                    id="audit-url"
                    name="website"
                    type="url"
                    required
                    placeholder="https://votresite.fr"
                    className="w-full rounded-xl border border-border/60 bg-card/40 px-4 py-2.5 text-base text-foreground placeholder:text-muted-foreground/40 outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                  />
                </div>
                <div>
                  <label htmlFor="audit-budget" className="mb-1.5 block text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground/70">
                    {tp.budgetLabel[lang]}
                    <span className="ml-1.5 normal-case tracking-normal text-muted-foreground/40">
                      ({lang === 'en' ? 'optional' : 'optionnel'})
                    </span>
                  </label>
                  <select
                    id="audit-budget"
                    name="budget"
                    defaultValue=""
                    className="w-full appearance-none rounded-xl border border-border/60 bg-card/40 px-4 py-2.5 text-base text-foreground outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                  >
                    <option value="" disabled>{tp.budgetPlaceholder[lang]}</option>
                    <option value="<1500">{budgetOptions[0]}</option>
                    <option value="1500-3000">{budgetOptions[1]}</option>
                    <option value="3000-5000">{budgetOptions[2]}</option>
                    <option value=">5000">{budgetOptions[3]}</option>
                    <option value="discuter">{budgetOptions[4]}</option>
                  </select>
                </div>

                {error && <p className="text-[13px] text-red-400">{error}</p>}

                <button
                  type="submit"
                  disabled={sending}
                  className="group flex h-11 w-full items-center justify-center gap-2 rounded-full bg-primary text-[14px] font-medium text-primary-foreground transition-all hover:bg-primary/85 disabled:opacity-50"
                >
                  {sending ? (
                    tp.submitting[lang]
                  ) : (
                    <>
                      {tp.submit[lang]}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </form>

              {/* Séparateur "ou" */}
              <div className="relative my-3 sm:my-4">
                <div aria-hidden className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border/40" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-background px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
                    {tp.or[lang]}
                  </span>
                </div>
              </div>

              {/* Bouton Calendly direct */}
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-full items-center justify-center gap-2 rounded-full border border-border/60 bg-card/40 text-[13px] font-medium text-foreground transition-all hover:border-primary/40 hover:bg-card/60 sm:h-11"
              >
                <CalendarClock className="size-4 text-primary" />
                {tp.calendly[lang]}
              </a>
            </>
          )}
          </div>
        </div>
      </div>
    </div>
  )
}
