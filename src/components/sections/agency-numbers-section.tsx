'use client'

import { useHomeLang, t } from '@/components/home/lang'
import { CountUp } from '@/components/ui/count-up'
import { Reveal } from '@/components/ui/reveal'

// Les chiffres de l'agence, en une bande : compteurs qui montent, trait qui se
// dessine sous chaque chiffre, reflet qui balaie la bande une seule fois.
// Tout en transform et opacity, declenche a l'arrivee dans l'ecran, jamais
// sur le premier ecran (styles .numbers-* dans index.css).
export function AgencyNumbersSection() {
  const { lang } = useHomeLang()
  const facts = t.agency.facts[lang]

  return (
    <section id="agence" className="relative scroll-mt-20 overflow-hidden bg-card">
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

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
            {t.agency.eyebrow[lang]}
          </p>
          <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[2.75rem]">
            {t.agency.h2Part1[lang]}{' '}
            <span className="italic text-muted-foreground/80">{t.agency.h2Part2[lang]}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-10 sm:mt-12">
          <dl className="numbers-band relative grid grid-cols-2 gap-y-10 overflow-hidden rounded-[1.5rem] border border-border/60 bg-background/40 px-6 py-10 sm:grid-cols-4 sm:gap-y-0 sm:px-8 sm:py-12">
            <span aria-hidden className="numbers-sheen" />
            {facts.map((f, i) => (
              <div
                key={f.label}
                className={
                  'numbers-item relative flex flex-col items-center text-center' +
                  (i > 0 ? ' sm:border-l sm:border-border/50' : '')
                }
                style={{ '--i': i } as React.CSSProperties}
              >
                <dd className="order-1 font-display text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.5rem]">
                  <CountUp value={f.value} suffix={f.suffix} duration={1.4} />
                </dd>
                <span aria-hidden className="numbers-line order-2" />
                <dt className="order-3 mt-3 max-w-[11rem] text-[12.5px] leading-snug text-muted-foreground sm:text-[13.5px]">
                  {f.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
