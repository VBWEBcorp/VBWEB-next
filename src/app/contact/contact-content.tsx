'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Calendar, CheckCircle2, Send, Mail, Phone } from 'lucide-react'
import Image from 'next/image'

import { siteConfig } from '@/lib/seo'

const ease = [0.22, 1, 0.36, 1] as const

const col1 = [
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80',
]
const col2 = [
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=400&q=80',
]
const col3 = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80',
]

function ScrollColumn({
  images,
  direction = 'up',
  duration = 35,
}: {
  images: string[]
  direction?: 'up' | 'down'
  duration?: number
}) {
  const doubled = [...images, ...images]
  return (
    <div className="relative h-full overflow-hidden">
      <div
        className={direction === 'up' ? 'animate-scroll-up' : 'animate-scroll-down'}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((src, i) => (
          <div key={i} className="p-1.5">
            <Image
              src={src}
              alt=""
              width={300}
              height={400}
              loading="lazy"
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 20vw, 14vw"
              className="aspect-[3/4] w-full rounded-xl object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

const FORMSPREE = 'https://formspree.io/f/xojppgjr'
const CALENDLY = 'https://calendly.com/web-rdv/echange-vbweb-30-minutes'

const services = [
  'Site internet',
  'SEO',
  'SEO local',
  'Application web',
  'Audit SEO',
  'Autre',
]

const budgets = ['< 1 000 €', '1 - 3k €', '3 - 5k €', '5 - 10k €', '10k € +']

export function ContactContent() {
  const [service, setService] = useState('')
  const [budget, setBudget] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    setError('')

    const form = e.currentTarget
    const data = new FormData(form)
    data.set('service', service)
    data.set('budget', budget)

    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSent(true)
      } else {
        setError('Une erreur est survenue. Réessayez ou appelez-nous directement.')
      }
    } catch {
      setError('Erreur réseau. Vérifiez votre connexion.')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      {/* HERO style Framer */}
      <section className="relative isolate overflow-hidden bg-background">
        {/* Photo columns pleine largeur */}
        <div className="absolute inset-0 grid grid-cols-3 gap-3 opacity-25 sm:grid-cols-5 lg:grid-cols-7">
          <ScrollColumn images={col1} direction="up" duration={40} />
          <ScrollColumn images={col2} direction="down" duration={35} />
          <ScrollColumn images={col3} direction="up" duration={38} />
          <ScrollColumn images={col1.slice().reverse()} direction="down" duration={42} />
          <ScrollColumn images={col2.slice().reverse()} direction="up" duration={36} />
          <ScrollColumn images={col3.slice().reverse()} direction="down" duration={44} />
          <ScrollColumn images={col1} direction="up" duration={39} />
        </div>

        {/* Overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
        <div className="pointer-events-none absolute inset-0 bg-background/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(78,186,236,0.08),transparent_60%)]" aria-hidden />

        <div className="relative z-10 mx-auto max-w-4xl px-4 pt-24 pb-16 text-center sm:px-6 sm:pt-32 sm:pb-20 lg:px-8 lg:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
          >
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Contact
            </p>
            <h1 className="mt-5 font-display text-balance text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.5rem]">
              Parlons de{' '}
              <span className="italic text-muted-foreground/80">votre projet</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Réponse sous 24h, devis gratuit, sans engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT — card style Framer */}
      <section className="relative overflow-hidden bg-background">
        {/* Grain */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-[120px]"
        />

        <div className="relative mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="group relative"
          >
            {/* Glow border */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px rounded-[1.6rem] bg-gradient-to-br from-primary/30 via-primary/0 to-primary/20 opacity-60 blur-[3px]"
            />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-border/60 bg-card/40 backdrop-blur-sm">
              {/* Spotlight interne */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/[0.06] blur-3xl"
              />

              <div className="relative grid lg:grid-cols-[360px_1fr]">
                {/* Left panel */}
                <div className="relative flex flex-col items-center border-b border-border/40 p-8 text-center lg:items-start lg:border-b-0 lg:border-r lg:p-10 lg:text-left">
                  {/* Avatar */}
                  <div className="relative mb-6">
                    <div
                      aria-hidden
                      className="absolute -inset-3 rounded-full bg-primary/10 blur-2xl"
                    />
                    <div className="relative size-28 overflow-hidden rounded-full border-2 border-primary/20 ring-1 ring-foreground/5 lg:size-32">
                      <Image
                        src="/victor.jpg"
                        alt="Victor Béasse"
                        width={128}
                        height={128}
                        sizes="(max-width: 1024px) 112px, 128px"
                        className="size-full object-cover object-center"
                      />
                    </div>
                  </div>

                  <h2 className="font-display text-xl font-semibold tracking-[-0.01em] text-foreground sm:text-2xl">
                    Victor Béasse
                  </h2>
                  <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.18em] text-primary/80">
                    Consultant SEO & Dev web
                  </p>
                  <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
                    Je vous accompagne pour transformer votre site en un véritable levier de croissance.
                  </p>

                  {/* Coordonnées */}
                  <div className="mt-6 w-full space-y-2 text-left">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="group/contact flex items-center gap-3 rounded-xl border border-border/40 bg-background/40 px-3 py-2.5 text-[13px] text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:bg-background/70 hover:text-foreground"
                    >
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-border/40 bg-background/60 text-muted-foreground transition-colors group-hover/contact:border-primary/40 group-hover/contact:text-primary">
                        <Mail className="size-3.5" />
                      </span>
                      <span className="truncate">{siteConfig.email}</span>
                    </a>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                      className="group/contact flex items-center gap-3 rounded-xl border border-border/40 bg-background/40 px-3 py-2.5 text-[13px] text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:bg-background/70 hover:text-foreground"
                    >
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-border/40 bg-background/60 text-muted-foreground transition-colors group-hover/contact:border-primary/40 group-hover/contact:text-primary">
                        <Phone className="size-3.5" />
                      </span>
                      {siteConfig.phone}
                    </a>
                  </div>

                  {/* Divider */}
                  <div className="my-7 h-px w-full bg-gradient-to-r from-transparent via-border/60 to-transparent" />

                  {/* WhatsApp + Calendly CTAs */}
                  <div className="w-full space-y-3">
                    <a
                      href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/cta flex h-11 w-full items-center justify-center gap-2 rounded-full border border-border/60 bg-background/60 px-5 text-[13px] font-medium text-foreground/90 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-background/80"
                    >
                      <MessageCircle className="size-4 text-primary" />
                      WhatsApp
                    </a>
                    <a
                      href={CALENDLY}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/cta flex h-11 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-primary/85"
                    >
                      <Calendar className="size-4" />
                      Réserver un appel
                      <ArrowRight className="size-3.5 transition-transform group-hover/cta:translate-x-0.5" />
                    </a>
                    <p className="text-center text-[11px] text-muted-foreground/60">
                      30 min · Gratuit · Sans engagement
                    </p>
                  </div>
                </div>

                {/* Right panel — Form */}
                <div className="p-8 lg:p-10">
                  {sent ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex h-full flex-col items-center justify-center space-y-5 py-12 text-center"
                    >
                      <div className="relative">
                        <div
                          aria-hidden
                          className="absolute -inset-4 rounded-full bg-primary/15 blur-2xl"
                        />
                        <div className="relative flex size-16 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
                          <CheckCircle2 className="size-8" />
                        </div>
                      </div>
                      <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-foreground sm:text-3xl">
                        Message envoyé !
                      </h3>
                      <p className="max-w-sm text-[14px] text-muted-foreground">
                        Merci pour votre message. Je reviens vers vous sous 24h.
                      </p>
                      <a
                        href={CALENDLY}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-[13px] font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        <Calendar className="size-4" />
                        Ou réservez un appel directement
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    </motion.div>
                  ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      {/* Eyebrow */}
                      <div>
                        <p className="font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/80">
                          Formulaire
                        </p>
                        <h3 className="mt-2 font-display text-xl font-medium tracking-[-0.01em] text-foreground sm:text-2xl">
                          Décrivez votre projet
                        </h3>
                      </div>

                      {/* Name + Email */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="mb-2 block text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground/70"
                          >
                            Nom
                          </label>
                          <input
                            id="name"
                            name="name"
                            required
                            autoComplete="name"
                            placeholder="Votre nom"
                            className="w-full rounded-xl border border-border/60 bg-background/60 px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground/40 outline-none backdrop-blur-sm transition-all focus:border-primary/60 focus:bg-background/90 focus:ring-2 focus:ring-primary/10"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="mb-2 block text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground/70"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="vous@email.com"
                            className="w-full rounded-xl border border-border/60 bg-background/60 px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground/40 outline-none backdrop-blur-sm transition-all focus:border-primary/60 focus:bg-background/90 focus:ring-2 focus:ring-primary/10"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground/70"
                        >
                          Téléphone <span className="font-normal normal-case text-muted-foreground/40">— optionnel</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="06 00 00 00 00"
                          className="w-full rounded-xl border border-border/60 bg-background/60 px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground/40 outline-none backdrop-blur-sm transition-all focus:border-primary/60 focus:bg-background/90 focus:ring-2 focus:ring-primary/10"
                        />
                      </div>

                      {/* Service */}
                      <div>
                        <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground/70">
                          Je cherche
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {services.map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => setService(service === s ? '' : s)}
                              className={`rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300 ${
                                service === s
                                  ? 'border border-primary/40 bg-primary/15 text-primary'
                                  : 'border border-border/60 bg-background/40 text-muted-foreground hover:border-foreground/30 hover:text-foreground'
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Budget */}
                      <div>
                        <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground/70">
                          Budget estimé
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {budgets.map((b) => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => setBudget(budget === b ? '' : b)}
                              className={`rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300 ${
                                budget === b
                                  ? 'border border-primary/40 bg-primary/15 text-primary'
                                  : 'border border-border/60 bg-background/40 text-muted-foreground hover:border-foreground/30 hover:text-foreground'
                              }`}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2 block text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground/70"
                        >
                          Votre projet
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          placeholder="Décrivez votre projet en quelques mots…"
                          className="w-full resize-none rounded-xl border border-border/60 bg-background/60 px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground/40 outline-none backdrop-blur-sm transition-all focus:border-primary/60 focus:bg-background/90 focus:ring-2 focus:ring-primary/10"
                        />
                      </div>

                      {error && (
                        <p className="text-[13px] text-red-400">{error}</p>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={sending}
                        className="group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-[14px] font-medium text-primary-foreground transition-all hover:bg-primary/85 disabled:opacity-50"
                      >
                        {sending ? (
                          'Envoi en cours…'
                        ) : (
                          <>
                            Envoyer ma demande
                            <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
