'use client'

import { ArrowUpRight, TrendingUp, Users, Layers } from 'lucide-react'
import Link from 'next/link'

import { useHomeLang, t } from '@/components/home/lang'
import { AutoplayYouTube } from '@/components/sections/autoplay-youtube'
import { Reveal } from '@/components/ui/reveal'

const VIDEO_ID = 'M9_8FHzDsl4'

const RESULT_ICONS = [TrendingUp, Users, Layers]

export function FounderSection() {
  const { lang } = useHomeLang()
  const tags = t.founder.resultTags[lang]

  return (
    <section id="video" className="relative scroll-mt-20 overflow-hidden bg-background">
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

      {/* Bord à bord sur mobile ; sur grand écran la carte est bornée pour que la vidéo tienne dans la fenêtre */}
      <div className="relative mx-auto max-w-5xl px-3 py-4 sm:px-4 sm:py-5 lg:px-6 lg:py-8">
        {/* CARD */}
        <Reveal
          className="relative overflow-hidden rounded-[1.5rem] border border-border/60 bg-card/40 sm:rounded-[1.75rem]"
        >

          <div className="relative p-2.5 sm:p-5 lg:p-8">
            {/* Vidéo : premier élément de la carte, juste sous le hero, quasi bord à bord sur mobile */}
            <div className="relative aspect-video overflow-hidden rounded-[1.1rem] border border-border/60 bg-black ring-1 ring-foreground/5 sm:rounded-[1.4rem]">
              <AutoplayYouTube videoId={VIDEO_ID} title="Victor Béasse, Fondateur VBWEB" />
            </div>

            <div className="px-3 pb-3 pt-8 sm:px-5 sm:pb-5 sm:pt-10 lg:px-6 lg:pb-6 lg:pt-12">
            {/* Votre résultat — les bénéfices en grand, un par bloc */}
            <div className="relative">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {t.founder.resultLabel[lang]}
              </p>

              <ul className="mt-5 grid gap-3 sm:grid-cols-3 sm:gap-4">
                {tags.map((tag, i) => {
                  const Icon = RESULT_ICONS[i] ?? TrendingUp
                  return (
                    <li
                      key={tag}
                      className="flex items-center gap-3.5 rounded-2xl border border-border/60 bg-background/50 px-5 py-4 sm:flex-col sm:items-start sm:gap-4 sm:px-6 sm:py-6"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <span className="font-display text-[17px] font-semibold leading-snug text-foreground sm:text-lg">
                        {tag}
                      </span>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-6">
                <Link
                  href="/etudes-de-cas"
                  className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  {t.founder.resultCta[lang]}
                  <ArrowUpRight className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
