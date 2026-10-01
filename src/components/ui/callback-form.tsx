'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Loader2, Star } from 'lucide-react'

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

/*
 * Mène à la section des avis de l'accueil (vidéo des avis clients). Dans la
 * popup, onLeave la ferme d'abord ; depuis une autre page, on va sur /#avis.
 */
function goToReviews(onLeave?: () => void) {
  onLeave?.()
  window.setTimeout(() => {
    const el = document.getElementById('avis')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    else window.location.href = '/#avis'
  }, onLeave ? 60 : 0)
}

function ReviewsLink({ lang, onLeave }: { lang: 'fr' | 'en'; onLeave?: () => void }) {
  return (
    <button
      type="button"
      onClick={() => goToReviews(onLeave)}
      className="mx-auto mt-2.5 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
    >
      <span className="flex items-center gap-0.5" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-3 fill-amber-400 text-amber-400" />
        ))}
      </span>
      <span className="underline decoration-foreground/30 underline-offset-4">
        {lang === 'fr' ? 'Voir les avis clients' : 'See client reviews'}
      </span>
    </button>
  )
}

const SPARKS = [0, 45, 90, 135, 180, 225, 270, 315]

function SuccessCheck() {
  return (
    <div className="cb-anim relative mx-auto flex size-20 items-center justify-center" aria-hidden>
      <span className="absolute inset-0 rounded-full bg-primary/40" style={{ animation: 'cb-ring 1.1s ease-out 0.25s both' }} />
      <span className="absolute inset-0 rounded-full bg-primary/30" style={{ animation: 'cb-ring 1.1s ease-out 0.55s both' }} />
      {SPARKS.map((a, i) => (
        <span
          key={a}
          className={`absolute left-1/2 top-1/2 -ml-1 -mt-1 size-2 rounded-full ${i % 2 ? 'bg-amber-400' : 'bg-primary'}`}
          style={{ ['--a' as string]: `${a}deg`, animation: 'cb-spark 0.8s ease-out 0.35s both' } as React.CSSProperties}
        />
      ))}
      <span
        className="relative flex size-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_40px_-8px_rgba(78,186,236,0.8)]"
        style={{ animation: 'cb-pop 0.55s cubic-bezier(0.22,1,0.36,1) both' }}
      >
        <svg viewBox="0 0 24 24" className="size-10" fill="none" stroke="currentColor" strokeWidth={2.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.5l4.5 4.5L19 7.5" strokeDasharray="24" strokeDashoffset="24" style={{ animation: 'cb-draw 0.45s ease-out 0.4s forwards' }} />
        </svg>
      </span>
    </div>
  )
}

export function CallbackForm({ lang, onLeave, onSent }: { lang: 'fr' | 'en'; onLeave?: () => void; onSent?: () => void }) {
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
      onSent?.()
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
      <div className="cb-anim w-full py-4 text-center" role="status">
        <SuccessCheck />
        <p className="mt-6 font-display text-xl font-medium text-foreground" style={{ animation: 'cb-rise 0.5s ease-out 0.6s both' }}>
          {fr ? 'C’est noté !' : 'Got it!'}
        </p>
        <p className="mx-auto mt-1.5 max-w-xs text-[14px] leading-snug text-muted-foreground" style={{ animation: 'cb-rise 0.5s ease-out 0.75s both' }}>
          {fr
            ? 'Je vous rappelle sous 24 heures, du lundi au vendredi. Un email de confirmation vient de partir.'
            : 'I will call you back within 24 hours, Monday to Friday. A confirmation email is on its way.'}
        </p>
        <div style={{ animation: 'cb-rise 0.5s ease-out 0.9s both' }}>
          <ReviewsLink lang={lang} onLeave={onLeave} />
        </div>
      </div>
    )
  }

  const input =
    'h-12 w-full min-w-0 rounded-xl border border-foreground/30 bg-card px-3.5 text-base text-foreground placeholder:text-muted-foreground outline-none transition hover:border-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/30'
  const ph = (f: string, e: string) => (fr ? f : e)

  return (
    <form onSubmit={onSubmit} className="@container w-full text-left">
      <div className="grid grid-cols-2 gap-2.5">
        <label className="sr-only" htmlFor="cb-name">{ph('Nom et prénom', 'Full name')}</label>
        <input id="cb-name" name="name" required autoComplete="name" placeholder={ph('Nom et prénom', 'Full name')} className={`${input} col-span-2`} />
        <label className="sr-only" htmlFor="cb-phone">{ph('Téléphone', 'Phone')}</label>
        <input id="cb-phone" name="phone" required type="tel" inputMode="tel" autoComplete="tel" placeholder={ph('Téléphone', 'Phone')} className={input} />
        <label className="sr-only" htmlFor="cb-email">Email</label>
        <input id="cb-email" name="email" required type="email" autoComplete="email" placeholder="Email" className={input} />
        <label className="sr-only" htmlFor="cb-budget">{ph('Budget', 'Budget')}</label>
        <select id="cb-budget" name="budget" required defaultValue="" className={`${input} col-span-2 invalid:text-muted-foreground/70`}>
          <option value="" disabled>{ph('Budget mensuel envisagé', 'Monthly budget')}</option>
          {t.popup.budgetOptions[lang].map((b) => (
            <option key={b} value={b} className="text-foreground">{b}</option>
          ))}
        </select>
        <label className="sr-only" htmlFor="cb-entreprise">{ph('Entreprise (facultatif)', 'Company (optional)')}</label>
        <input id="cb-entreprise" name="entreprise" autoComplete="organization" placeholder={ph('Entreprise (facultatif)', 'Company (optional)')} className={`${input} col-span-2 @lg:col-span-1`} />
        <label className="sr-only" htmlFor="cb-site">{ph('Votre site (facultatif)', 'Your website (optional)')}</label>
        <input id="cb-site" name="website" autoComplete="url" placeholder={ph('Votre site (facultatif)', 'Your website (optional)')} className={`${input} col-span-2 @lg:col-span-1`} />
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
      <ReviewsLink lang={lang} onLeave={onLeave} />
    </form>
  )
}
