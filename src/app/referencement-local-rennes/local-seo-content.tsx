'use client'

import { ArrowRight, MapPin, Star, Users, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'

/* ------------------------------------------------------------------ */
/*  Grain overlay reusable                                            */
/* ------------------------------------------------------------------ */
function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }}
    />
  )
}

/* ------------------------------------------------------------------ */
/*  FAQ accordion (useState + CSS max-height)                         */
/* ------------------------------------------------------------------ */
interface FaqItem { question: string; answer: string }

function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = open === i
        return (
          <Reveal key={i} delay={i * 0.06}>
            <div className="group rounded-[1.35rem] border border-border/60 bg-card/40 transition-colors duration-300 hover:border-primary/20">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-[15px] font-medium leading-snug text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`size-4 shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: isOpen ? '300px' : '0px', opacity: isOpen ? 1 : 0 }}
              >
                <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main export                                                       */
/* ------------------------------------------------------------------ */
export function LocalSeoContent({ faqs }: { faqs: FaqItem[] }) {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-background">
        <Grain />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div
            className="mx-auto max-w-3xl text-center"
            style={{
              animation: 'hero-fade-up 0.65s cubic-bezier(0.22,1,0.36,1) both',
            }}
          >
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Référencement local
            </p>
            <h1 className="mt-5 font-display text-balance text-4xl font-medium leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.25rem]">
              Soyez le premier résultat quand on cherche{' '}
              <span className="italic text-muted-foreground/80">près de chez vous</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Google Maps, pack local, avis clients : je mets votre entreprise en avant pour les recherches locales à Rennes et en Bretagne.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="group bg-primary text-primary-foreground hover:bg-primary/85"
                asChild
              >
                <Link href="/contact">
                  Prendre rendez-vous
                  <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-card">
        <Grain />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Avantages
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
              Ce que le SEO local{' '}
              <span className="italic text-muted-foreground/80">vous apporte</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: MapPin,
                title: 'Visible sur Google Maps',
                desc: 'Votre fiche apparaît dans le pack local quand vos clients cherchent votre activité à Rennes.',
              },
              {
                icon: Star,
                title: 'Avis qui convertissent',
                desc: "Une stratégie d'avis Google qui inspire confiance et améliore votre positionnement.",
              },
              {
                icon: Users,
                title: 'Plus de clients locaux',
                desc: 'Les personnes qui cherchent localement sont prêtes à acheter. Captez-les avant vos concurrents.',
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="group relative h-full">
                    {/* Glow on hover */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-px rounded-[1.4rem] bg-gradient-to-br from-primary/40 via-primary/0 to-primary/20 opacity-0 blur-[2px] transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div className="relative h-full rounded-[1.35rem] border border-border/60 bg-card/40 p-8 transition-colors duration-500 group-hover:border-primary/30 group-hover:bg-background/70">
                      <div className="flex size-10 items-center justify-center rounded-xl border border-border/60 bg-background/40">
                        <Icon className="size-5 text-primary" aria-hidden />
                      </div>
                      <h3 className="mt-5 font-display text-base font-semibold leading-snug text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-background">
        <Grain />

        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              FAQ
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
              Questions sur le{' '}
              <span className="italic text-muted-foreground/80">SEO local</span>
            </h2>
          </Reveal>

          <div className="mt-12">
            <FaqSection faqs={faqs} />
          </div>
        </div>
      </section>

      {/* ── Related services ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-card">
        <Grain />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 text-center">
          <Reveal>
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Aller plus loin
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
              Services{' '}
              <span className="italic text-muted-foreground/80">complémentaires</span>
            </h2>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
            {[
              { title: 'Référencement SEO', href: '/referencement-seo-rennes' },
              { title: 'Création de site', href: '/creation-site-internet-rennes' },
              { title: 'Audit SEO gratuit', href: '/audit-seo-gratuit' },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <Link
                  href={s.href}
                  className="block rounded-[1.35rem] border border-border/60 bg-card/40 px-6 py-5 text-[15px] font-medium text-foreground transition-colors duration-300 hover:border-primary/30 hover:bg-background/70"
                >
                  {s.title}
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-10">
            <Link
              href="/etudes-de-cas/referencement"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors duration-200 hover:text-primary/80"
            >
              Voir nos résultats en référencement local
              <ArrowRight className="size-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-background">
        <Grain />

        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 text-center">
          <Reveal>
            <h2 className="font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
              Prêt à dominer la{' '}
              <span className="italic text-muted-foreground/80">recherche locale</span> ?
            </h2>
            <p className="mt-5 text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Discutons de votre visibilité locale à Rennes.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                className="group bg-primary text-primary-foreground hover:bg-primary/85"
                asChild
              >
                <Link href="/contact">
                  Prendre rendez-vous
                  <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
