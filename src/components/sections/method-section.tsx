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

        {/* Timeline verticale — style Framer, épurée */}
        <div className="timeline-container relative mx-auto mt-16 max-w-xl sm:mt-20">
          <ScrollProgress />

          <ol className="space-y-11 sm:space-y-14">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 0.08} className="relative pl-12 sm:pl-16">
                {/* Nœud sur la ligne */}
                <span
                  aria-hidden
                  className="absolute left-[18px] top-1 z-10 flex size-3.5 -translate-x-1/2 items-center justify-center rounded-full border border-primary/50 bg-card sm:left-6"
                >
                  <span className="size-1.5 rounded-full bg-primary" />
                </span>

                <p className="font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
                  Étape {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug tracking-[-0.01em] text-foreground sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="mt-16 flex justify-center">
          <AuditButton />
        </div>
      </div>
    </section>
  )
}
