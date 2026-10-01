'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Check, Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

/*
 * Formulaire de rappel du haut de la page d'accueil : trois champs, un bouton.
 * Pensé pour la publicité ChatGPT : le visiteur laisse un numéro, Victor rappelle.
 *
 * Le site n'a aucun outil de statistiques : la provenance (paramètres utm_* et
 * campaign_id / ad_id ajoutés par la régie) est lue dans l'adresse d'arrivée,
 * gardée le temps de la visite, et part avec la demande dans l'e-mail reçu.
 */

const TRACKING_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'campaign_id', 'ad_id', 'gclid']
const STORAGE_KEY = 'vbweb-provenance'

function readProvenance(): Record<string, string> {
  const fromUrl: Record<string, string> = {}
  try {
    const params = new URLSearchParams(window.location.search)
    for (const k of TRACKING_KEYS) {
      const v = params.get(k)
      if (v) fromUrl[k] = v.slice(0, 200)
    }
    if (Object.keys(fromUrl).length) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl))
      return fromUrl
    }
    const saved = sessionStorage.getItem(STORAGE_KEY)
    return saved ? (JSON.parse(saved) as Record<string, string>) : {}
  } catch {
    return fromUrl
  }
}

export function HeroCallbackForm({ lang }: { lang: 'fr' | 'en' }) {
  const fr = lang === 'fr'
  const [provenance, setProvenance] = useState<Record<string, string>>({})
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')

  useEffect(() => {
    setProvenance(readProvenance())
  }, [])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    setState('sending')
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'rappel',
          name: data.get('name'),
          phone: data.get('phone'),
          website: data.get('website'),
          company: data.get('company'),
          provenance: { ...provenance, page: window.location.pathname },
        }),
      })
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(j.error || 'Envoi impossible')
      }
      setState('sent')
    } catch (err) {
      setState('error')
      setError(
        err instanceof Error && err.message.includes('téléphone')
          ? err.message
          : fr
            ? 'L’envoi a échoué. Réessayez, ou appelez-moi directement.'
            : 'Sending failed. Please try again, or call me directly.',
      )
    }
  }

  if (state === 'sent') {
    return (
      <div className="flex w-full max-w-md items-start gap-3 rounded-2xl border border-primary/30 bg-card/80 p-4 text-left backdrop-blur-sm">
        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-4" />
        </span>
        <p className="text-[14px] leading-snug text-foreground">
          {fr
            ? 'C’est noté. Je vous rappelle sous 24 heures, du lundi au vendredi.'
            : 'Got it. I will call you back within 24 hours, Monday to Friday.'}
        </p>
      </div>
    )
  }

  const input =
    'h-11 w-full rounded-xl border border-border/70 bg-background/80 px-3.5 text-[15px] text-foreground placeholder:text-muted-foreground/70 outline-none backdrop-blur-sm transition focus:border-primary focus:ring-2 focus:ring-primary/30'

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md text-left" noValidate={false}>
      <div className="grid gap-2.5 sm:grid-cols-2">
        <label className="sr-only" htmlFor="cb-name">{fr ? 'Prénom' : 'First name'}</label>
        <input id="cb-name" name="name" required autoComplete="given-name" placeholder={fr ? 'Prénom' : 'First name'} className={input} />
        <label className="sr-only" htmlFor="cb-phone">{fr ? 'Téléphone' : 'Phone'}</label>
        <input id="cb-phone" name="phone" required type="tel" inputMode="tel" autoComplete="tel" placeholder={fr ? 'Téléphone' : 'Phone'} className={input} />
        <label className="sr-only" htmlFor="cb-site">{fr ? 'Votre site (facultatif)' : 'Your website (optional)'}</label>
        <input id="cb-site" name="website" autoComplete="url" placeholder={fr ? 'Votre site (facultatif)' : 'Your website (optional)'} className={`${input} sm:col-span-2`} />
        {/* Pot de miel : invisible pour un humain, rempli par les robots */}
        <input name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={state === 'sending'}
        className="group mt-3 w-full bg-primary text-primary-foreground hover:bg-primary/85"
      >
        {state === 'sending' ? <Loader2 className="animate-spin" /> : null}
        {fr ? 'Être rappelé sous 24 h' : 'Get a call back within 24 h'}
        {state === 'sending' ? null : <ArrowRight className="transition-transform group-hover:translate-x-0.5" />}
      </Button>
      <p className="mt-2 text-center text-[12px] text-muted-foreground lg:text-left">
        {fr ? 'Gratuit et sans engagement · 88 avis 5 étoiles sur Google' : 'Free, no commitment · 88 five-star Google reviews'}
      </p>
      {state === 'error' && <p className="mt-2 text-[13px] text-red-400" role="alert">{error}</p>}
    </form>
  )
}
