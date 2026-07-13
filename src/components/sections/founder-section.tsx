'use client'

import { ArrowUpRight, TrendingUp, Users, Layers } from 'lucide-react'
import Link from 'next/link'

import { useHomeLang, t } from '@/components/home/lang'
import { LazyYouTube } from '@/components/sections/lazy-youtube'
import { Reveal } from '@/components/ui/reveal'

const VIDEO_ID = 'w_Tg2rnwrSE'

const RESULT_ICONS = [TrendingUp, Users, Layers]

export function FounderSection() {
  const { lang } = useHomeLang()
  const tags = t.founder.resultTags[lang]

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

      <div className="relative px-3 py-4 sm:px-4 sm:py-5">
        {/* GRANDE CARD edge-to-edge */}
        <Reveal
          className="relative overflow-hidden rounded-[1.5rem] border border-border/60 bg-card/40 sm:rounded-[1.75rem]"
        >

          <div className="relative p-6 sm:p-10 lg:p-14">
            {/* Header — titre */}
            <div className="relative max-w-2xl">
              <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
                {t.founder.eyebrow[lang]}
              </p>
              <h2 className="mt-4 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[2.75rem]">
                {t.founder.h2Part1[lang]}{' '}
                <span className="italic text-muted-foreground/80">{t.founder.h2Part2[lang]}</span>
              </h2>
            </div>

            {/* Votre résultat — mis en avant : 3 bénéfices clairs + lien études de cas */}
            <div className="relative mt-10 sm:mt-12">
              <div className="flex items-center gap-3">
                <p className="font-display text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/80">
                  {t.founder.resultLabel[lang]}
                </p>
                <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
              </div>

              <div className="mt-4 flex flex-wrap gap-2.5">
                {tags.map((tag, i) => {
                  const Icon = RESULT_ICONS[i] ?? TrendingUp
                  return (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/50 px-3.5 py-2 text-[13px] font-medium text-foreground sm:text-[14px]"
                    >
                      <Icon className="size-3.5 shrink-0 text-primary" aria-hidden />
                      {tag}
                    </span>
                  )
                })}
              </div>

              <div className="mt-5">
                <Link
                  href="/etudes-de-cas"
                  className="group/link inline-flex items-center gap-1.5 text-[13px] font-medium text-primary transition-colors hover:text-primary/80"
                >
                  {t.founder.resultCta[lang]}
                  <ArrowUpRight className="size-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Vidéo plein largeur */}
            <div
              className="relative mt-10 sm:mt-12"
            >
              <div className="relative aspect-video overflow-hidden rounded-[1.25rem] border border-border/60 bg-background ring-1 ring-foreground/5 sm:rounded-[1.5rem]">
                <LazyYouTube
                  videoId={VIDEO_ID}
                  title="Victor Béasse, Fondateur VBWEB"
                  params={`autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&rel=0&modestbranding=1&playsinline=1`}
                />
              </div>
            </div>

            {/* Liens sous la vidéo */}
            <div className="relative mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                <Link
                  href="/a-propos"
                  className="group/link inline-flex items-center gap-1.5 text-[13px] font-medium text-primary transition-colors hover:text-primary/80"
                >
                  {t.founder.learnMore[lang]}
                  <ArrowUpRight className="size-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
                <Link
                  href="/services"
                  className="group/link inline-flex items-center gap-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.founder.seeServices[lang]}
                  <ArrowUpRight className="size-3.5 transition-transform group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
