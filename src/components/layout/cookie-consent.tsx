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

  // Le bouton d'appel flottant vit dans le meme coin : on previent la page
  // pour qu'il remonte au-dessus de la banniere au lieu de passer dessous.
  useEffect(() => {
    if (visible) document.body.dataset.cookieBanner = '1'
    else delete document.body.dataset.cookieBanner
    return () => {
      delete document.body.dataset.cookieBanner
    }
  }, [visible])

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
    // Sur mobile : barre plaquee en bas, la ou l'utilisateur attend un bandeau
    // de consentement. Elle flottait auparavant au milieu de l'ecran et
    // interceptait les clics destines au contenu, dont le bouton du hero.
    // A partir de sm : la carte d'origine, dans le coin.
    <div className="fixed inset-x-0 bottom-0 z-[100] animate-[slide-up_0.4s_ease-out_both] sm:inset-x-auto sm:bottom-6 sm:right-24 sm:w-[320px] sm:max-w-[calc(100vw-7rem)]">
      <div className="relative border-t border-border bg-[#1a2c45] px-4 pb-[max(0.625rem,env(safe-area-inset-bottom))] pt-3 shadow-xl sm:overflow-hidden sm:rounded-2xl sm:border sm:p-6 sm:pb-6">
        {/* Background cookie */}
        <div className="pointer-events-none absolute -top-6 -right-6 hidden size-24 opacity-5 animate-[spin_8s_linear_infinite] sm:block">
          <Cookie className="size-full" />
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={handleDecline}
          aria-label="Fermer la bannière cookies"
          className="absolute top-3 right-3 text-muted-foreground transition-colors hover:text-foreground sm:top-4 sm:right-4"
        >
          <X className="size-5" aria-hidden />
        </button>

        <div className="flex items-start gap-2.5 pr-7 sm:block sm:pr-0">
          <Cookie className="mt-px size-4 shrink-0 text-primary sm:mb-4 sm:mt-0 sm:size-10" />
          <p className="text-[11.5px] leading-[1.35] text-foreground/80 sm:mb-4 sm:text-sm sm:leading-relaxed">
            Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant votre navigation, vous acceptez notre utilisation des cookies.
          </p>
        </div>

        <div className="mt-2.5 flex gap-2.5 sm:mt-0 sm:gap-3">
          <button
            onClick={handleAccept}
            className="flex-1 rounded-lg bg-primary px-4 py-1.5 text-[13px] font-medium text-foreground transition-all hover:bg-primary/90 active:scale-[0.98] sm:py-2 sm:text-sm"
          >
            Accepter
          </button>
          <button
            onClick={handleDecline}
            className="rounded-lg border border-border bg-foreground/5 px-4 py-1.5 text-[13px] font-medium text-foreground transition-all hover:bg-foreground/10 active:scale-[0.98] sm:py-2 sm:text-sm"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  )
}
