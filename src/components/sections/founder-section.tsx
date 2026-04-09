import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Reveal } from '@/components/ui/reveal'

const VIDEO_ID = 'w_Tg2rnwrSE'

export function FounderSection() {
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
            {/* Header — texte au-dessus */}
            <div className="relative flex flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-xl">
                <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
                  Les mots du fondateur
                </p>
                <h2 className="mt-4 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[2.75rem]">
                  La vision derrière{' '}
                  <span className="italic text-muted-foreground/80">VBWEB</span>
                </h2>
              </div>

              {/* Mini bloc auteur à droite (desktop) */}
              <div className="flex items-center gap-3">
                <div className="size-10 overflow-hidden rounded-full ring-1 ring-border/60">
                  <Image
                    src="/victor.jpg"
                    alt=""
                    width={40}
                    height={40}
                    sizes="40px"
                    className="size-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-foreground">Victor Béasse</p>
                  <p className="text-[11px] text-muted-foreground/70">Fondateur VBWEB</p>
                </div>
              </div>
            </div>

            {/* Vidéo plein largeur */}
            <div
              className="relative mt-10 sm:mt-12"
            >
              <div className="relative aspect-video overflow-hidden rounded-[1.25rem] border border-border/60 bg-background ring-1 ring-foreground/5 sm:rounded-[1.5rem]">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&rel=0&modestbranding=1&playsinline=1`}
                  title="Victor Béasse, Fondateur VBWEB"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 size-full"
                />
              </div>
            </div>

            {/* Footer — description + liens sous la vidéo */}
            <div className="relative mt-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <p className="max-w-md text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                Découvrez en 2 minutes comment je transforme un site classique en véritable générateur de clients qualifiés.
              </p>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                <Link
                  href="/a-propos"
                  className="group/link inline-flex items-center gap-1.5 text-[13px] font-medium text-primary transition-colors hover:text-primary/80"
                >
                  En savoir plus
                  <ArrowUpRight className="size-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
                <Link
                  href="/services"
                  className="group/link inline-flex items-center gap-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Voir les services
                  <ArrowRight className="size-3.5 transition-transform group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
