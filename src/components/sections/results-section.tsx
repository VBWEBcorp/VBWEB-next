'use client'

import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useRef, useState } from 'react'

import { useHomeLang, t } from '@/components/home/lang'
import { Reveal } from '@/components/ui/reveal'
import { cn } from '@/lib/utils'

export function ResultsSection() {
  const { lang } = useHomeLang()
  const r = t.results
  const cases = r.cases[lang]
  const scroller = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const onScroll = () => {
    const el = scroller.current
    if (!el) return
    const i = Math.round((el.scrollLeft / el.scrollWidth) * cases.length)
    setActive(Math.min(cases.length - 1, Math.max(0, i)))
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

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Header */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
            {r.eyebrow[lang]}
          </p>
          <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[2.75rem]">
            {r.h2Part1[lang]}{' '}
            <span className="italic text-muted-foreground/80">{r.h2Part2[lang]}</span>
          </h2>
        </Reveal>

        {/* Carrousel */}
        <div className="mt-12 sm:mt-14">
          <div
            ref={scroller}
            onScroll={onScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 lg:gap-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {cases.map((c, i) => (
              <Reveal
                as="div"
                key={c.name}
                delay={i * 0.08}
                className="flex w-[84%] shrink-0 snap-center flex-col rounded-[1.35rem] border border-border/60 bg-card/40 p-6 transition-colors duration-500 hover:border-primary/30 sm:w-[47%] sm:p-8 lg:w-[calc((100%-3rem)/3)]"
              >
                <span className="inline-flex items-center gap-2 self-start rounded-full border border-primary/30 bg-primary/5 px-3.5 py-1.5 text-[13px] font-semibold text-foreground">
                  <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                  {c.type}
                </span>
                <p className="mt-2.5 text-[12px] text-muted-foreground/70">{c.name}</p>

                <div className="mt-7">
                  <p className="font-display text-[2.75rem] font-bold leading-none tracking-[-0.03em] text-foreground sm:text-5xl">
                    {c.big}
                  </p>
                  <p className="mt-2.5 text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground/55">
                    {c.unit}
                  </p>
                </div>

                <div className="mt-6 border-t border-border/50 pt-4">
                  <p className="text-[13px] leading-relaxed text-muted-foreground">{c.support}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Points de navigation (mobile / tablette) */}
          <div className="mt-6 flex justify-center gap-1.5 lg:hidden">
            {cases.map((c, i) => (
              <span
                key={c.name}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-300',
                  i === active ? 'w-5 bg-primary' : 'w-1.5 bg-muted-foreground/30'
                )}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/etudes-de-cas"
            className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-5 py-2.5 text-[14px] font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            {r.caseStudyLink[lang]}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-[12.5px] leading-relaxed text-muted-foreground/55">
          {r.disclaimer[lang]}
        </p>
      </div>
    </section>
  )
}
