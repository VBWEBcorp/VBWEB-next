'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Calendar, CheckCircle2, Send } from 'lucide-react'

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

function ScrollColumn({ images, direction = 'up', duration = 35 }: { images: string[]; direction?: 'up' | 'down'; duration?: number }) {
  const doubled = [...images, ...images]
  return (
    <div className="relative h-full overflow-hidden">
      <div
        className={direction === 'up' ? 'animate-contact-scroll-up' : 'animate-contact-scroll-down'}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((src, i) => (
          <div key={i} className="p-1.5">
            <img
              src={src}
              alt=""
              loading="lazy"
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

const budgets = [
  '< 1 000 €',
  '1 - 3k €',
  '3 - 5k €',
  '5 - 10k €',
  '10k € +',
]

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
    <div className="min-h-screen bg-background">

      {/* Hero with scrolling photo background */}
      <div className="relative overflow-hidden">
        {/* Photo columns */}
        <div className="absolute inset-0 flex justify-center gap-3 opacity-50 px-4">
          <div className="hidden w-44 sm:block">
            <ScrollColumn images={col1} direction="up" duration={40} />
          </div>
          <div className="w-44">
            <ScrollColumn images={col2} direction="down" duration={35} />
          </div>
          <div className="w-44">
            <ScrollColumn images={col3} direction="up" duration={38} />
          </div>
          <div className="hidden w-44 lg:block">
            <ScrollColumn images={col1.slice().reverse()} direction="down" duration={42} />
          </div>
        </div>

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
        <div className="pointer-events-none absolute inset-0 bg-background/35" />

        {/* Heading */}
        <div className="relative z-10 pt-20 pb-16 lg:pt-28 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="text-center"
          >
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase mb-4">
              Contact
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Parlons de votre projet
            </h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
              Réponse sous 24h, devis gratuit, sans engagement.
            </p>
          </motion.div>
        </div>

        {/* CSS animations */}
        <style jsx global>{`
          @keyframes contact-scroll-up {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          @keyframes contact-scroll-down {
            0% { transform: translateY(-50%); }
            100% { transform: translateY(0); }
          }
          .animate-contact-scroll-up {
            animation: contact-scroll-up linear infinite;
          }
          .animate-contact-scroll-down {
            animation: contact-scroll-down linear infinite;
          }
        `}</style>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 pb-24 lg:pb-32">

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease, delay: 0.06 }}
          className="rounded-3xl border border-border/50 bg-card overflow-hidden shadow-sm"
        >
          <div className="grid lg:grid-cols-[340px_1fr]">

            {/* Left panel with photo + info */}
            <div className="relative bg-gradient-to-b from-primary/8 via-primary/4 to-transparent p-8 lg:p-10 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-border/40">
              <div className="relative mb-6">
                <div aria-hidden className="absolute -inset-3 rounded-full bg-primary/10 blur-2xl" />
                <div className="relative size-28 lg:size-32 overflow-hidden rounded-full border-2 border-primary/20 ring-1 ring-foreground/5">
                  <img
                    src="https://i.ibb.co/1fRDj4NP/Victor.jpg"
                    alt="Victor Beasse, Consultant SEO à Rennes"
                    className="size-full object-cover object-center"
                    width={128}
                    height={128}
                  />
                </div>
              </div>

              <h2 className="font-display text-xl font-bold text-foreground">
                Victor Beasse
              </h2>
              <p className="text-sm text-primary font-medium mt-1">
                Consultant SEO & Développeur web
              </p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Je vous accompagne pour transformer votre site en un véritable levier de croissance.
              </p>

              {/* WhatsApp CTA */}
              <div className="mt-8 w-full">
                <a
                  href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full rounded-full border border-primary/20 bg-primary/5 px-5 py-3 text-sm font-semibold text-primary hover:bg-primary/10 hover:border-primary/30 transition-all group"
                >
                  <MessageCircle className="size-4" />
                  Me contacter sur WhatsApp
                </a>
              </div>

              {/* Calendly CTA */}
              <div className="mt-auto pt-8 w-full">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full rounded-full border border-primary/20 bg-primary/5 px-5 py-3 text-sm font-semibold text-primary hover:bg-primary/10 hover:border-primary/30 transition-all group"
                >
                  <Calendar className="size-4" />
                  Réserver un appel gratuit
                  <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <p className="text-xs text-muted-foreground/50 text-center mt-2.5">
                  30 min, gratuit, sans engagement
                </p>
              </div>
            </div>

            {/* Right panel with form */}
            <div className="p-8 lg:p-10">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center py-12 space-y-4"
                >
                  <CheckCircle2 className="size-14 text-primary" />
                  <p className="text-2xl font-bold text-foreground">Message envoyé !</p>
                  <p className="text-muted-foreground max-w-sm">
                    Merci pour votre message. Je reviens vers vous sous 24h.
                  </p>
                  <a
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <Calendar className="size-4" />
                    Ou réservez un appel directement
                  </a>
                </motion.div>
              ) : (
                <form className="space-y-7" onSubmit={handleSubmit}>
                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nom
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        placeholder="Votre nom"
                        className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="Votre email"
                        className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Téléphone <span className="text-muted-foreground/50 font-normal">(optionnel)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="06 00 00 00 00"
                      className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <p className="text-sm font-medium text-foreground mb-3">Je cherche</p>
                    <div className="flex flex-wrap gap-2">
                      {services.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setService(service === s ? '' : s)}
                          className={`rounded-full px-4 py-2 text-sm transition-all duration-200 ${
                            service === s
                              ? 'bg-primary text-primary-foreground shadow-sm'
                              : 'border border-border/60 text-muted-foreground hover:text-foreground hover:border-foreground/30'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <p className="text-sm font-medium text-foreground mb-3">Budget estimé</p>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setBudget(budget === b ? '' : b)}
                          className={`rounded-full px-4 py-2 text-sm transition-all duration-200 ${
                            budget === b
                              ? 'bg-primary text-primary-foreground shadow-sm'
                              : 'border border-border/60 text-muted-foreground hover:text-foreground hover:border-foreground/30'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Votre projet
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Décrivez votre projet en quelques mots..."
                      className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10 resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-400">{error}</p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full h-12 rounded-full bg-primary text-primary-foreground text-sm font-semibold transition-all hover:bg-primary/85 disabled:opacity-50 flex items-center justify-center gap-2 group shadow-sm hover:shadow-md"
                  >
                    {sending ? (
                      'Envoi en cours...'
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
        </motion.div>

      </div>
    </div>
  )
}
