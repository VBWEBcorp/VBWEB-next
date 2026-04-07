'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Search, Rocket, TrendingUp, Sparkles, Gift } from 'lucide-react'
import { useRef } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Diagnostic précis de vos fuites',
    description:
      "J'identifie exactement où vous perdez vos futurs clients et comment vos concurrents vous devancent sur Google.",
  },
  {
    number: '02',
    icon: Rocket,
    title: 'Site premium + stratégie SEO sur-mesure',
    description:
      'Un site qui inspire confiance ET qui convertit, couplé à une stratégie SEO qui vous positionne devant vos concurrents.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Croissance continue et sérénité',
    description:
      'Accompagnement mensuel premium : votre visibilité grandit, vos clients aussi. Vous vous concentrez sur votre métier, moi sur votre croissance digitale.',
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Automatisation & gain de temps',
    description:
      "Plus de clients, plus de sérénité, plus de temps pour votre métier grâce à l'automatisation intelligente.",
  },
]

export function MethodSection() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 70%', 'end 60%'],
  })
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  })
  const progressHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%'])
  const glowOpacity = useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0])

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

      {/* Glow ambiance */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/[0.04] blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Header épuré */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
            Ma méthode
          </p>
          <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
            De l&apos;invisible à{' '}
            <span className="italic text-muted-foreground/80">générateur de clients</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            Une approche premium en 4 étapes pour que votre site attire, convertisse et vous libère du stress du digital.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative mx-auto mt-16 max-w-3xl">
          {/* Ligne verticale background (statique, discrète) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-[18px] top-2 bottom-2 w-px bg-border/50 sm:left-6"
          />

          {/* Ligne verticale animée au scroll (le fil conducteur qui s'illumine) */}
          <motion.div
            aria-hidden
            style={{ height: progressHeight }}
            className="pointer-events-none absolute left-[18px] top-2 w-px bg-gradient-to-b from-primary via-primary to-primary/60 sm:left-6"
          >
            {/* Glow autour de la ligne */}
            <motion.div
              style={{ opacity: glowOpacity }}
              className="absolute inset-0 -inset-x-1 bg-gradient-to-b from-primary/40 via-primary/40 to-primary/40 blur-md"
            />
            {/* Point lumineux en bas (la "tête" qui descend) */}
            <motion.div
              style={{ opacity: glowOpacity }}
              className="absolute -bottom-1.5 -left-[5px] size-3 rounded-full bg-primary shadow-[0_0_20px_rgba(78,186,236,0.8),0_0_40px_rgba(78,186,236,0.4)]"
            />
          </motion.div>

          <ol className="space-y-6 sm:space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.li
                  key={step.number}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, ease, delay: i * 0.08 }}
                  className="relative pl-14 sm:pl-20"
                >
                  {/* Node de la timeline */}
                  <div className="absolute left-0 top-1 sm:top-2">
                    <div className="relative">
                      <div
                        aria-hidden
                        className="absolute -inset-2 rounded-full bg-primary/10 blur-md"
                      />
                      <div className="relative flex size-9 items-center justify-center rounded-full border border-primary/30 bg-background text-primary shadow-[0_0_0_4px_rgba(0,0,0,0.4)] sm:size-12">
                        <Icon className="size-4 sm:size-5" aria-hidden />
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="group relative">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-px rounded-[1.2rem] bg-gradient-to-br from-primary/40 via-primary/0 to-primary/20 opacity-0 blur-[2px] transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div className="relative overflow-hidden rounded-[1.15rem] border border-border/60 bg-background/50 p-6 backdrop-blur-sm transition-all duration-500 group-hover:border-primary/30 group-hover:bg-background/70 sm:p-7">
                      {/* Spotlight interne */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/[0.05] blur-3xl transition-opacity duration-500 group-hover:bg-primary/[0.12]"
                      />

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
                </motion.li>
              )
            })}
          </ol>
        </div>

        {/* Bonus card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease, delay: 0.35 }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <div className="group relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px rounded-[1.3rem] bg-gradient-to-br from-primary/50 via-primary/10 to-primary/30 opacity-60 blur-[3px] transition-opacity duration-500 group-hover:opacity-100"
            />
            <div className="relative overflow-hidden rounded-[1.25rem] border border-primary/30 bg-background/70 p-7 backdrop-blur-sm sm:p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/[0.1] blur-3xl"
              />
              <div className="relative flex items-start gap-5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 text-primary">
                  <Gift className="size-5" aria-hidden />
                </div>
                <div className="flex-1">
                  <span className="font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                    Bonus premium
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-foreground sm:text-xl">
                    Outils sur-mesure pour votre croissance
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    CRM personnalisé, tableaux de bord, automatisations… Des outils qui vous font gagner des heures chaque semaine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
