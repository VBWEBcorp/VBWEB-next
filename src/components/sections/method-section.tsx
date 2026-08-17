'use client'

import { useHomeLang, t } from '@/components/home/lang'
import { AuditButton } from '@/components/ui/audit-button'
import { Reveal } from '@/components/ui/reveal'
import { ScrollProgress } from '@/components/ui/scroll-progress'

export function MethodSection() {
  const { lang } = useHomeLang()
  const steps = t.method.steps[lang]

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
            {t.method.eyebrow[lang]}
          </p>
          <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
            {t.method.h2Part1[lang]}{' '}
            <span className="italic text-muted-foreground/80">{t.method.h2Part2[lang]}</span>
          </h2>
        </Reveal>

        {/* Timeline horizontale — progression gauche → droite, moitié moins haute */}
        <div className="timeline-container relative mx-auto mt-12 max-w-5xl sm:mt-14">
          {/* La ligne continue n'a de sens que sur une seule rangée (sm+) ;
              en dessous, chaque étape porte son propre segment. */}
          <div aria-hidden className="hidden sm:block">
            <ScrollProgress orientation="horizontal" />
          </div>

          <ol className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 sm:gap-x-6">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 0.08} className="relative pt-7">
                {/* Segment mobile — prolongé dans la gouttière pour rejoindre l'étape suivante */}
                <span
                  aria-hidden
                  className="absolute left-0 -right-4 top-[13.5px] h-px bg-border/50 sm:hidden"
                />

                {/* Nœud sur la ligne */}
                <span
                  aria-hidden
                  className="absolute left-0 top-[7px] z-10 flex size-3.5 items-center justify-center rounded-full border border-primary/50 bg-card"
                >
                  <span className="size-1.5 rounded-full bg-primary" />
                </span>

                <p className="font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
                  Étape {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-1.5 font-display text-[15px] font-semibold leading-snug tracking-[-0.01em] text-foreground sm:text-base">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground sm:text-[14px]">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="mt-12 flex justify-center">
          <AuditButton />
        </div>
      </div>
    </section>
  )
}
