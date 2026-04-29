import { Search, Rocket, TrendingUp, Gift, ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'
import { ScrollProgress } from '@/components/ui/scroll-progress'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Audit et diagnostic',
    description:
      "J'analyse votre site, votre positionnement Google et celui de vos concurrents pour identifier précisément vos opportunités de croissance.",
  },
  {
    number: '02',
    icon: Rocket,
    title: 'Site internet et stratégie SEO',
    description:
      'Un site moderne et performant, associé à une stratégie de référencement adaptée à votre marché et à vos clients.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Suivi mensuel et croissance',
    description:
      'Optimisations continues, reporting clair et accompagnement régulier. Vous gardez votre énergie pour votre métier, je m\'occupe de votre visibilité.',
  },
]

export function MethodSection() {
  return (
    <section className="relative overflow-hidden bg-card">
      {/* Background grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />


      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Header épuré */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
            Ma méthode
          </p>
          <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
            De l&apos;invisible à{' '}
            <span className="italic text-muted-foreground/80">générateur de clients</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            Une approche structurée en 3 étapes pour transformer votre site en véritable levier de croissance pour votre entreprise.
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="timeline-container relative mx-auto mt-16 max-w-3xl">
          <ScrollProgress />

          <ol className="space-y-6 sm:space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <Reveal
                  as="li"
                  key={step.number}
                  delay={i * 0.08}
                  className="relative pl-14 sm:pl-20"
                >
                  {/* Node de la timeline */}
                  <div className="absolute left-0 top-1 sm:top-2">
                    <div className="flex size-9 items-center justify-center rounded-full border border-primary/30 bg-background text-primary shadow-[0_0_0_4px_rgba(0,0,0,0.4)] sm:size-12">
                      <Icon className="size-4 sm:size-5" aria-hidden />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="group relative">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-px rounded-[1.2rem] bg-gradient-to-br from-primary/40 via-primary/0 to-primary/20 opacity-0 blur-[2px] transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div className="relative overflow-hidden rounded-[1.15rem] border border-border/60 bg-background/50 p-6 transition-colors duration-500 group-hover:border-primary/30 group-hover:bg-background/70 sm:p-7">

                      <div className="relative flex items-baseline gap-4">
                        <span className="font-display text-[2.25rem] font-bold leading-none tracking-[-0.03em] text-muted-foreground/30 sm:text-[2.75rem]">
                          {step.number}
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-border/60 to-transparent" />
                      </div>

                      <h3 className="relative mt-5 font-display text-lg font-semibold leading-snug tracking-[-0.01em] text-foreground sm:text-xl">
                        {step.title}
                      </h3>
                      <p className="relative mt-3 text-[15px] leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </ol>
        </div>

        <div className="mt-12 flex justify-center">
          <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
            <Link href="/contact">
              Prendre RDV
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        {/* Bonus card */}
        <Reveal delay={0.35} className="mx-auto mt-12 max-w-3xl">
          <div className="group relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px rounded-[1.3rem] bg-gradient-to-br from-primary/50 via-primary/10 to-primary/30 opacity-60 blur-[3px] transition-opacity duration-500 group-hover:opacity-100"
            />
            <div className="relative overflow-hidden rounded-[1.25rem] border border-primary/30 bg-background/70 p-7 sm:p-8">
              <div className="relative flex items-start gap-5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 text-primary">
                  <Gift className="size-5" aria-hidden />
                </div>
                <div className="flex-1">
                  <span className="font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                    En bonus
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-foreground sm:text-xl">
                    Des outils sur-mesure pour gagner du temps
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    CRM, tableaux de bord et automatisations adaptés à votre activité. Des outils simples qui simplifient votre quotidien et libèrent du temps pour ce qui compte vraiment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
