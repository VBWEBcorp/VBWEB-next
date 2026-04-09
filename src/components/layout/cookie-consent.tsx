'use client'

import { useEffect, useState } from 'react'
import { X, Cookie } from 'lucide-react'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'refused')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-6 right-24 z-[100] w-[320px] max-w-[calc(100vw-7rem)] animate-[slide-up_0.4s_ease-out_both]"
    >
      <div className="relative overflow-hidden rounded-2xl border border-border bg-[#1a2c45] p-6 shadow-xl">
        {/* Background cookie */}
        <div className="absolute -top-6 -right-6 size-24 opacity-5 animate-[spin_8s_linear_infinite]">
          <Cookie className="size-full" />
        </div>

        {/* Cookie icon */}
        <div className="mb-4">
          <Cookie className="size-10 text-primary" />
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={handleDecline}
          aria-label="Fermer la bannière cookies"
          className="absolute top-4 right-4 text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="size-5" aria-hidden />
        </button>

        <p className="mb-4 text-sm text-foreground/80">
          Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant votre navigation, vous acceptez notre utilisation des cookies.
        </p>

        <div className="flex gap-3">
          <button
            onClick={handleAccept}
            className="flex-1 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-primary/90 active:scale-[0.98]"
          >
            Accepter
          </button>
          <button
            onClick={handleDecline}
            className="rounded-lg border border-border bg-foreground/5 px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-foreground/10 active:scale-[0.98]"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  )
}
