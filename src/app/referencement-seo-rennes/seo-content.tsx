'use client'

import { ArrowRight, Search, TrendingUp, BarChart3, Star, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { CountUp } from '@/components/ui/count-up'
import { Reveal } from '@/components/ui/reveal'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Audit complet de votre visibilité',
    description:
      "J'analyse votre site, vos concurrents et votre marché pour identifier exactement où vous perdez des clients sur Google.",
  },
  {
    number: '02',
    icon: BarChart3,
    title: 'Stratégie sur mesure',
    description:
      "Un plan d'action personnalisé : optimisation technique, contenu stratégique et maillage interne pour maximiser votre visibilité.",
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Mise en œuvre & suivi',
    description:
      "J'implémente les optimisations et suis vos positions chaque mois. Vous voyez concrètement votre progression sur Google.",
  },
]

const results = [
  { value: 180, prefix: '+', suffix: '%', label: 'de trafic organique en moyenne' },
  { value: 75, prefix: '', suffix: '', label: 'avis clients 5 étoiles' },
  { value: 3, prefix: 'Top ', suffix: '', label: 'Google pour mes clients' },
]

const painPoints = [
  { icon: Search, text: 'Votre site est invisible sur Google' },
  { icon: TrendingUp, text: 'Vos concurrents sont mieux positionnés' },
  { icon: BarChart3, text: 'Vous dépendez de la publicité payante' },
]

const services = [
  {
    title: 'Référencement local',
    desc: 'Dominez Google Maps et la recherche locale à Rennes.',
    href: '/referencement-local-rennes',
  },
  {
    title: 'Création de site internet',
    desc: 'Un site optimisé SEO dès sa conception.',
    href: '/creation-site-internet-rennes',
  },
  {
    title: 'Audit SEO gratuit',
    desc: 'Analysez votre visibilité en 30 minutes.',
    href: '/audit-seo-gratuit',
  },
]

/* ------------------------------------------------------------------ */
/*  Grain overlay (reusable)                                           */
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
/*  FAQ Accordion                                                      */
/* ------------------------------------------------------------------ */

interface FaqItem {
  question: string
  answer: string
}

function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <Reveal key={i} delay={i * 0.04}>
          <div className="rounded-[1.35rem] border border-border/60 bg-card/40 transition-colors duration-200 hover:border-primary/20">
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
              <span className="text-sm font-medium text-foreground pr-4">{faq.question}</span>
              <ChevronDown
                className={`size-4 shrink-0 text-primary transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              style={{ maxHeight: open === i ? '500px' : '0px' }}
              className="overflow-hidden transition-all duration-300"
            >
              <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Hero fade-up keyframes (injected once via <style>)                 */
/* ------------------------------------------------------------------ */

const heroKeyframes = `
@keyframes hero-fade-up {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
`

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export function SeoRennesContent({ faqs }: { faqs: FaqItem[] }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: heroKeyframes }} />

      {/* ─── Hero ─── */}
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
              Consultant SEO à Rennes
            </p>

            <h1 className="mt-5 font-display text-balance text-4xl font-medium leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.5rem]">
              Soyez trouvé en premier{' '}
              <span className="italic text-muted-foreground/80">sur Google</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-lg">
              Vos futurs clients vous cherchent sur Google en ce moment. Je vous aide à apparaître devant vos concurrents, durablement.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="group bg-primary text-primary-foreground hover:bg-primary/85"
                asChild
              >
                <Link href="/audit-seo-gratuit">
                  Audit SEO gratuit
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/15 bg-foreground/5 text-foreground hover:bg-foreground/10 hover:text-foreground"
                asChild
              >
                <Link href="/contact">Me contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-border via-border/60 to-transparent" />

      {/* ─── Probleme ─── */}
      <section className="relative overflow-hidden bg-card">
        <Grain />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Le constat
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
              <CountUp value={93} suffix="%" className="text-primary" /> des parcours d&apos;achat{' '}
              <span className="italic text-muted-foreground/80">commencent sur Google</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Si vous n&apos;apparaissez pas dans les premiers résultats, vos concurrents récupèrent vos clients. Chaque jour sans référencement optimisé, c&apos;est du chiffre d&apos;affaires perdu.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {painPoints.map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal key={i} delay={i * 0.06}>
                  <div className="group flex items-center gap-4 rounded-[1.35rem] border border-border/60 bg-background/40 px-5 py-5 transition-colors duration-200 hover:border-red-400/30">
                    <div className="flex size-10 items-center justify-center rounded-xl border border-border/60 bg-background/40">
                      <Icon className="size-4 text-red-400" />
                    </div>
                    <span className="text-sm text-foreground/70">{item.text}</span>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-border via-border/60 to-transparent" />

      {/* ─── Methode ─── */}
      <section className="relative overflow-hidden bg-background">
        <Grain />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Ma méthode
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
              Comment je vous fais gagner{' '}
              <span className="italic text-muted-foreground/80">en visibilité</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <Reveal key={step.number} delay={i * 0.08}>
                  <div className="group rounded-[1.35rem] border border-border/60 bg-card/40 p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20">
                    <div className="flex size-10 items-center justify-center rounded-xl border border-border/60 bg-background/40">
                      <Icon className="size-4 text-primary" />
                    </div>
                    <span className="mt-4 block font-display text-[11px] font-semibold tracking-[0.24em] text-primary/60 uppercase">
                      Étape {step.number}
                    </span>
                    <h3 className="mt-2 font-display text-base font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-border via-border/60 to-transparent" />

      {/* ─── Resultats ─── */}
      <section className="relative overflow-hidden bg-card">
        <Grain />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Résultats
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
              Des résultats concrets,{' '}
              <span className="italic text-muted-foreground/80">pas des promesses</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {results.map((r, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="rounded-[1.35rem] border border-border/60 bg-background/40 p-8 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20">
                  <div className="flex items-center justify-center">
                    <Star className="mr-2 size-5 text-primary/40" />
                    <CountUp
                      value={r.value}
                      prefix={r.prefix}
                      suffix={r.suffix}
                      className="font-display text-4xl font-bold text-primary"
                    />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{r.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-border via-border/60 to-transparent" />

      {/* ─── FAQ ─── */}
      <section className="relative overflow-hidden bg-background">
        <Grain />

        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mb-12 text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Questions fréquentes
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
              Vos questions sur le référencement{' '}
              <span className="italic text-muted-foreground/80">à Rennes</span>
            </h2>
          </Reveal>

          <FaqSection faqs={faqs} />
        </div>
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-border via-border/60 to-transparent" />

      {/* ─── Services connexes ─── */}
      <section className="relative overflow-hidden bg-card">
        <Grain />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Aller plus loin
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
              Services{' '}
              <span className="italic text-muted-foreground/80">complémentaires</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <Link
                  href={s.href}
                  className="group block rounded-[1.35rem] border border-border/60 bg-background/40 p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20"
                >
                  <h3 className="font-display text-sm font-semibold text-foreground transition-colors duration-200 group-hover:text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary/60 transition-colors duration-200 group-hover:text-primary">
                    Découvrir
                    <ArrowRight className="size-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
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

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-border via-border/60 to-transparent" />

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden bg-background">
        <Grain />

        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 text-center">
          <Reveal>
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Passons à l&apos;action
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
              Prêt à être trouvé{' '}
              <span className="italic text-muted-foreground/80">sur Google ?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              30 minutes gratuites pour analyser votre visibilité et identifier vos opportunités de croissance.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                className="group bg-primary text-primary-foreground hover:bg-primary/85"
                asChild
              >
                <Link href="/contact">
                  Prendre rendez-vous
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
