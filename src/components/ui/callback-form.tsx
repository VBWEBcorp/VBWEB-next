'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Check, Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { t } from '@/components/home/lang'

/*
 * Formulaire de rappel, le même partout : la popup que tous les boutons du site
 * ouvrent, et la page contact. Il qualifie un minimum la demande : nom, téléphone,
 * email et budget obligatoires, entreprise et site facultatifs. Victor rappelle.
 *
 * Le site n'a aucun outil de statistiques : la provenance (paramètres utm_* et
 * campaign_id / ad_id ajoutés par la régie publicitaire) est lue dans l'adresse
 * d'arrivée, gardée le temps de la visite, et part avec la demande dans l'email.
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

/** À appeler au chargement de chaque page : garde la provenance avant toute navigation. */
export function useKeepProvenance() {
  useEffect(() => {
    readProvenance()
  }, [])
}

export function CallbackForm({ lang }: { lang: 'fr' | 'en' }) {
  const fr = lang === 'fr'
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')

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
          email: data.get('email'),
          budget: data.get('budget'),
          entreprise: data.get('entreprise'),
          website: data.get('website'),
          company: data.get('company'),
          provenance: { ...readProvenance(), page: window.location.pathname },
        }),
      })
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(j.error || '')
      }
      setState('sent')
    } catch (err) {
      setState('error')
      const msg = err instanceof Error ? err.message : ''
      setError(
        /téléphone|email/i.test(msg)
          ? msg
          : fr
            ? 'L’envoi a échoué. Vérifiez les champs et réessayez.'
            : 'Sending failed. Please check the fields and try again.',
      )
    }
  }

  if (state === 'sent') {
    return (
      <div className="flex w-full items-start gap-3 rounded-2xl border border-primary/30 bg-card/80 p-4 text-left">
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
    'h-11 w-full rounded-xl border border-border/70 bg-background/80 px-3.5 text-[15px] text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30'
  const ph = (f: string, e: string) => (fr ? f : e)

  return (
    <form onSubmit={onSubmit} className="w-full text-left">
      <div className="grid gap-2.5 sm:grid-cols-2">
        <label className="sr-only" htmlFor="cb-name">{ph('Nom et prénom', 'Full name')}</label>
        <input id="cb-name" name="name" required autoComplete="name" placeholder={ph('Nom et prénom', 'Full name')} className={`${input} sm:col-span-2`} />
        <label className="sr-only" htmlFor="cb-phone">{ph('Téléphone', 'Phone')}</label>
        <input id="cb-phone" name="phone" required type="tel" inputMode="tel" autoComplete="tel" placeholder={ph('Téléphone', 'Phone')} className={input} />
        <label className="sr-only" htmlFor="cb-email">Email</label>
        <input id="cb-email" name="email" required type="email" autoComplete="email" placeholder="Email" className={input} />
        <label className="sr-only" htmlFor="cb-budget">{ph('Budget', 'Budget')}</label>
        <select id="cb-budget" name="budget" required defaultValue="" className={`${input} sm:col-span-2 invalid:text-muted-foreground/70`}>
          <option value="" disabled>{ph('Budget mensuel envisagé', 'Monthly budget')}</option>
          {t.popup.budgetOptions[lang].map((b) => (
            <option key={b} value={b} className="text-foreground">{b}</option>
          ))}
        </select>
        <label className="sr-only" htmlFor="cb-entreprise">{ph('Entreprise (facultatif)', 'Company (optional)')}</label>
        <input id="cb-entreprise" name="entreprise" autoComplete="organization" placeholder={ph('Entreprise (facultatif)', 'Company (optional)')} className={input} />
        <label className="sr-only" htmlFor="cb-site">{ph('Votre site (facultatif)', 'Your website (optional)')}</label>
        <input id="cb-site" name="website" autoComplete="url" placeholder={ph('Votre site (facultatif)', 'Your website (optional)')} className={input} />
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
        {ph('Être rappelé sous 24 h', 'Get a call back within 24 h')}
        {state === 'sending' ? null : <ArrowRight className="transition-transform group-hover:translate-x-0.5" />}
      </Button>
      {state === 'error' && <p className="mt-2 text-[13px] text-red-400" role="alert">{error}</p>}
    </form>
  )
}
