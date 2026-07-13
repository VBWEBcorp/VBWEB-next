'use client'

import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { useHomeLang, t } from '@/components/home/lang'
import { Reveal } from '@/components/ui/reveal'

export function CaseStudiesSection() {
  const { lang } = useHomeLang()
  const items = t.offers.items[lang]

  return (
    <section id="etudes-de-cas" className="relative scroll-mt-20 overflow-hidden bg-background">
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

      <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
            {t.offers.eyebrow[lang]}
          </p>
          <h2 className="mt-4 font-display text-balance text-2xl font-medium leading-[1.15] tracking-[-0.02em] text-foreground sm:text-[1.75rem]">
            {t.offers.title[lang]}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            {t.offers.intro[lang]}
          </p>
        </Reveal>

        {/* Liste simple et discrète — chaque offre cliquable vers sa page dédiée */}
        <Reveal className="mt-8 divide-y divide-border/50 border-y border-border/50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-4 py-4 transition-colors hover:text-primary"
            >
              <span className="font-display text-[15px] font-medium text-foreground transition-colors group-hover:text-primary sm:text-base">
                {item.label}
              </span>
              <span className="rounded-full border border-border/50 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground/70">
                {item.tag}
              </span>
              <ArrowUpRight className="ml-auto size-4 shrink-0 text-muted-foreground/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
