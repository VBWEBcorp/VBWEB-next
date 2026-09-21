'use client'

import { ArrowRight } from 'lucide-react'
import { FormEvent, useState } from 'react'

import { useHomeLang, t } from '@/components/home/lang'

/**
 * Le formulaire unique du site, utilisé par le popup « audit gratuit » et par
 * la page contact. Toujours les mêmes champs : nom, email, site (ou « pas de
 * site »), budget, message optionnel. L'envoi passe par /api/contact (Resend).
 */
export function ContactForm({
  source,
  submitLabel,
  onSent,
}: {
  source: 'audit' | 'contact'
  submitLabel?: string
  onSent: () => void
}) {
  const [sending, setSending] = useState(false)
  const [noSite, setNoSite] = useState(false)
  const [error, setError] = useState('')
  const { lang } = useHomeLang()
  const tp = t.popup

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    setError('')

    const data = new FormData(e.currentTarget)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source,
          name: data.get('name'),
          email: data.get('email'),
          website: noSite ? tp.siteNone[lang] : data.get('website'),
          budget: data.get('budget'),
          message: data.get('message'),
          company: data.get('company'),
        }),
      })
      if (res.ok) onSent()
      else setError(tp.errorGeneric[lang])
    } catch {
      setError(tp.errorNetwork[lang])
    } finally {
      setSending(false)
    }
  }

  const field =
    'w-full rounded-xl border border-border/60 bg-card/40 px-4 py-2.5 text-base text-foreground placeholder:text-muted-foreground/40 outline-none transition-all focus:border-primary/60 focus:ring-2 focus:ring-primary/10 disabled:opacity-40'
  const label = 'mb-1.5 block text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground/70'

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      {/* Pot de miel : invisible, rempli uniquement par les robots */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={label}>{tp.nameLabel[lang]}</label>
          <input id="cf-name" name="name" required autoComplete="name" placeholder="Victor Béasse" className={field} />
        </div>
        <div>
          <label htmlFor="cf-email" className={label}>{tp.emailLabel[lang]}</label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" placeholder="vous@email.com" className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="cf-site" className={label}>{tp.urlLabel[lang]}</label>
        {/* Texte libre : « votresite.fr » suffit, le serveur complète l'adresse */}
        <input
          id="cf-site"
          name="website"
          type="text"
          inputMode="url"
          autoComplete="url"
          required={!noSite}
          disabled={noSite}
          placeholder="votresite.fr"
          className={field}
        />
        <label className="mt-2 flex cursor-pointer items-center gap-2 text-[13px] text-muted-foreground">
          <input
            type="checkbox"
            checked={noSite}
            onChange={(e) => setNoSite(e.target.checked)}
            className="size-4 rounded border-border/60 accent-primary"
          />
          {tp.siteNone[lang]}
        </label>
      </div>

      <div>
        <label htmlFor="cf-budget" className={label}>{tp.budgetLabel[lang]}</label>
        <select id="cf-budget" name="budget" required defaultValue="" className={`${field} appearance-none`}>
          <option value="" disabled>{tp.budgetPlaceholder[lang]}</option>
          {tp.budgetOptions[lang].map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className={label}>
          {tp.messageLabel[lang]}
          <span className="ml-1.5 normal-case tracking-normal text-muted-foreground/40">({tp.optional[lang]})</span>
        </label>
        <textarea id="cf-message" name="message" rows={3} placeholder={tp.messagePlaceholder[lang]} className={`${field} resize-none`} />
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
            {submitLabel ?? tp.submit[lang]}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </form>
  )
}
