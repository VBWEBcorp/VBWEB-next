'use client'

import { ArrowRight, Search, BarChart3, FileText, CheckCircle, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface FaqItem { question: string; answer: string }

const auditPoints = [
  { icon: Search, title: 'Positionnement Google', desc: 'Où apparaissez-vous sur les mots-clés qui comptent pour votre activité ?' },
  { icon: BarChart3, title: 'Performance technique', desc: 'Vitesse de chargement, mobile-friendly, erreurs techniques qui freinent votre référencement.' },
  { icon: FileText, title: 'Contenu & SEO on-page', desc: 'Balises, structure, mots-clés : votre contenu est-il optimisé pour Google ?' },
  { icon: CheckCircle, title: 'Analyse concurrentielle', desc: 'Ce que font vos concurrents et comment les dépasser dans les résultats.' },
]

const steps = [
  { number: '1', title: 'Vous me contactez', desc: 'Envoyez-moi l\'URL de votre site via le formulaire. Aucune information technique requise.' },
  { number: '2', title: 'J\'analyse votre site', desc: 'Je passe votre site au crible : technique, contenu, positionnement, concurrence.' },
  { number: '3', title: 'Vous recevez votre rapport', desc: 'Un document clair avec vos forces, faiblesses et un plan d\'action concret et priorisé.' },
]

const relatedServices = [
  { title: 'Référencement SEO', href: '/referencement-seo-rennes' },
  { title: 'Référencement local', href: '/referencement-local-rennes' },
  { title: 'Création de site', href: '/creation-site-internet-rennes' },
  { title: 'Freelance SEO Rennes', href: '/freelance-seo-rennes' },
]

/* ------------------------------------------------------------------ */
/*  Grain overlay (shared)                                             */
/* ------------------------------------------------------------------ */

function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
      style={{
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        backgroundRepeat: 'repeat',
        backgroundSize: '180px 180px',
      }}
    />
  )
}

/* ------------------------------------------------------------------ */
/*  FAQ Accordion                                                      */
/* ------------------------------------------------------------------ */

function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <Reveal key={i} delay={i * 0.06} className="rounded-[1.35rem] border border-border/60 bg-card/40">
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
          >
            <span className="text-[0.9375rem] font-medium leading-snug text-foreground">{faq.question}</span>
            <ChevronDown
              className={`size-4 shrink-0 text-primary transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
            />
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: open === i ? '20rem' : '0', opacity: open === i ? 1 : 0 }}
          >
            <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main export                                                        */
/* ------------------------------------------------------------------ */

export function AuditSeoContent({ faqs }: { faqs: FaqItem[] }) {
  return (
    <>
      {/* ───────────────────── HERO ───────────────────── */}
      <section className="relative bg-background py-16 sm:py-20 lg:py-24">
        <Grain />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            className="mx-auto max-w-3xl text-center"
            style={{ animation: 'hero-fade-up 0.65s cubic-bezier(0.22,1,0.36,1) both' }}
          >
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Audit gratuit
            </p>
            <h1 className="mt-5 font-display text-balance text-4xl font-medium leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.5rem]">
              Découvrez pourquoi votre site{' '}
              <span className="italic text-muted-foreground">n&apos;attire pas assez de clients</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              En 30 minutes, je vous montre exactement ce qui bloque votre visibilité sur Google et comment y remédier. Gratuit, sans engagement.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
                <Link href="/contact">
                  Demander mon audit gratuit
                  <ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── AUDIT POINTS ────────────────── */}
      <section className="relative bg-card py-16 sm:py-20 lg:py-24">
        <Grain />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Diagnostic complet
            </p>
            <h2 className="mt-4 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] sm:text-4xl lg:text-[3rem]">
              Ce que vous allez{' '}
              <span className="italic text-muted-foreground">découvrir</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Un diagnostic complet de votre présence en ligne
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {auditPoints.map((item, i) => (
              <Reveal
                key={i}
                delay={i * 0.08}
                className="group rounded-[1.35rem] border border-border/60 bg-card/40 p-8 transition-colors duration-300 hover:border-primary/25 hover:bg-card/70"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
                  <item.icon className="size-6 text-primary" />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── 3 STEPS PROCESS ──────────────── */}
      <section className="relative bg-background py-16 sm:py-20 lg:py-24">
        <Grain />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Comment ça marche
            </p>
            <h2 className="mt-4 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] sm:text-4xl lg:text-[3rem]">
              3 étapes{' '}
              <span className="italic text-muted-foreground">simples</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal
                key={i}
                delay={i * 0.1}
                className="group rounded-[1.35rem] border border-border/60 bg-card/40 p-8 transition-colors duration-300 hover:border-primary/25 hover:bg-card/70"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 font-display text-lg font-bold text-primary transition-colors duration-300 group-hover:bg-primary/15">
                  {step.number}
                </span>
                <h3 className="mt-5 font-display text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────── FAQ ─────────────────────── */}
      <section className="relative bg-card py-16 sm:py-20 lg:py-24">
        <Grain />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              FAQ
            </p>
            <h2 className="mt-4 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] sm:text-4xl lg:text-[3rem]">
              Questions sur{' '}
              <span className="italic text-muted-foreground">l&apos;audit SEO</span>
            </h2>
          </Reveal>

          <div className="mt-12">
            <FaqSection faqs={faqs} />
          </div>
        </div>
      </section>

      {/* ──────────── RELATED SERVICES ──────────────────── */}
      <section className="relative bg-background py-16 sm:py-20 lg:py-24">
        <Grain />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Aller plus loin
            </p>
            <h2 className="mt-4 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] sm:text-4xl lg:text-[3rem]">
              Services{' '}
              <span className="italic text-muted-foreground">complémentaires</span>
            </h2>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
            {relatedServices.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <Link
                  href={s.href}
                  className="block rounded-[1.35rem] border border-border/60 bg-card/40 px-5 py-5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary/25 hover:bg-card/70"
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
              Voir nos études de cas SEO
              <ArrowRight className="size-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ────────────────── FINAL CTA ──────────────────── */}
      <section className="relative bg-card py-16 sm:py-20 lg:py-24">
        <Grain />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] sm:text-4xl lg:text-[3rem]">
              Prêt à savoir ce que Google{' '}
              <span className="italic text-muted-foreground">pense de votre site ?</span>
            </h2>
            <p className="mt-5 text-base text-muted-foreground">
              Audit gratuit, résultats concrets, zéro engagement.
            </p>
            <div className="mt-10">
              <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
                <Link href="/contact">
                  Demander mon audit gratuit
                  <ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
