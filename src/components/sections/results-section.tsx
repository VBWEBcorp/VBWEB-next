'use client'

import { ArrowUpRight, TrendingDown, TrendingUp } from 'lucide-react'
import Link from 'next/link'

import { useHomeLang, t } from '@/components/home/lang'
import { Reveal } from '@/components/ui/reveal'

export function ResultsSection() {
  const { lang } = useHomeLang()
  const before = {
    icon: TrendingDown,
    title: t.results.beforeTitle[lang],
    bullets: t.results.beforeBullets[lang],
  }
  const after = {
    icon: TrendingUp,
    title: t.results.afterTitle[lang],
    bullets: t.results.afterBullets[lang],
  }
  return (
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

      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Header */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
            {t.results.eyebrow[lang]}
          </p>
          <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[2.75rem]">
            {t.results.h2Part1[lang]}{' '}
            <span className="italic text-muted-foreground/80">{t.results.h2Part2[lang]}</span>
          </h2>
        </Reveal>

        {/* Grille Avant / Après */}
        <Reveal className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] border border-border/50 bg-border/40 sm:mt-16 sm:grid-cols-2">
          {/* Cellule AVANT — éteinte */}
          <div className="group relative bg-background/95 p-8 transition-colors duration-500 hover:bg-card/40 sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  'radial-gradient(circle at center top, rgba(255,255,255,0.04), transparent 70%)',
              }}
            />

            <div className="relative flex flex-col items-center text-center">
              <div className="flex size-12 items-center justify-center rounded-full border border-border/60 bg-background text-muted-foreground/60">
                <before.icon className="size-5" aria-hidden />
              </div>

              <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.01em] text-muted-foreground sm:text-2xl">
                {before.title}
              </h3>

              <div className="mt-4 h-px w-12 bg-gradient-to-r from-transparent via-border to-transparent" />

              <ul className="mt-5 space-y-2 text-[14px] leading-relaxed text-muted-foreground/80 sm:text-[15px]">
                {before.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cellule APRÈS — accentuée */}
          <div className="group relative bg-background/95 p-8 transition-colors duration-500 hover:bg-card/60 sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  'radial-gradient(circle at center top, rgba(78,186,236,0.10), transparent 70%)',
              }}
            />

            <div className="relative flex flex-col items-center text-center">
              <div className="flex size-12 items-center justify-center rounded-full border border-primary/40 bg-primary/5 text-primary transition-colors duration-500 group-hover:border-primary group-hover:bg-primary/10">
                <after.icon className="size-5" aria-hidden />
              </div>

              <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.01em] text-foreground sm:text-2xl">
                {after.title}
              </h3>

              <div className="mt-4 h-px w-12 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

              <ul className="mt-5 space-y-2 text-[14px] leading-relaxed text-foreground sm:text-[15px]">
                {after.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Attribution */}
        <div className="mt-6 flex justify-center">
          <Link
            href="/etudes-de-cas/referencement"
            className="group inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors hover:text-primary"
          >
            <span>
              <span className="font-medium text-foreground">Rennes Pneus</span> · {t.results.caseStudyLink[lang]}
            </span>
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
