'use client'

import { ArrowRight, ArrowUpRight, Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const VIDEO_ID = 'w_Tg2rnwrSE'

function VideoFacade() {
  const [loaded, setLoaded] = useState(false)

  if (loaded) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&rel=0&modestbranding=1`}
        title="Victor Béasse, Fondateur VBWEB"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 size-full"
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label="Lire la vidéo de Victor Béasse"
      className="group/play absolute inset-0 size-full"
    >
      <Image
        src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
        alt="Aperçu de la vidéo : la vision derrière VBWEB"
        fill
        sizes="(max-width: 1024px) 100vw, 1280px"
        className="object-cover transition-transform duration-700 group-hover/play:scale-[1.02]"
      />
      {/* Overlay sombre */}
      <div aria-hidden className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover/play:bg-black/30" />
      {/* Play button center */}
      <div aria-hidden className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex size-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-2xl ring-4 ring-white/10 backdrop-blur-md transition-transform duration-300 group-hover/play:scale-110 sm:size-20">
          <Play className="size-6 fill-current sm:size-8" />
        </div>
      </div>
    </button>
  )
}

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
        <div
          className="relative overflow-hidden rounded-[1.5rem] border border-border/60 bg-card/40 backdrop-blur-sm sm:rounded-[1.75rem]"
        >
          {/* Spotlight discret */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/[0.05] blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 -bottom-32 h-80 w-80 rounded-full bg-primary/[0.04] blur-3xl"
          />

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
                <VideoFacade />
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
        </div>
      </div>
    </section>
  )
}
