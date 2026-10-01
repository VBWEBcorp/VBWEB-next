'use client'

import { X } from 'lucide-react'
import { useState, useEffect, useCallback } from 'react'

import { useHomeLang, t } from '@/components/home/lang'
import { CallbackForm } from '@/components/ui/callback-form'

export function useAuditPopup() {
  const [open, setOpen] = useState(false)
  return { open, openPopup: () => setOpen(true), closePopup: () => setOpen(false) }
}

export function AuditPopup({ open, onClose }: { open: boolean; onClose: () => void }) {
  // Une fois la demande envoyée, l'animation de validation prend toute la place.
  const [sent, setSent] = useState(false)
  const { lang } = useHomeLang()
  const tp = t.popup

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
          <div className="relative overflow-hidden rounded-[1.5rem] border border-border/60 bg-background p-4 shadow-2xl sm:p-8">
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

          {!sent && <div className="mb-4 sm:mb-5 pr-6">
            <h3 className="font-display text-lg font-medium tracking-[-0.01em] text-foreground sm:text-2xl">
              {tp.title[lang]}
            </h3>
            <p className="mt-1.5 text-[13px] leading-snug text-muted-foreground sm:text-[14px] sm:leading-relaxed">
              {tp.subtitle[lang]}
            </p>
          </div>}
          <CallbackForm lang={lang} onLeave={onClose} onSent={() => setSent(true)} />
          </div>
        </div>
      </div>
    </div>
  )
}
