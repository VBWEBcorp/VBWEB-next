'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const ease = [0.22, 1, 0.36, 1] as const

export function FounderSection() {
  return (
    <section className="relative overflow-hidden bg-card">
      {/* Glow ambiance */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-[120px]"
      />

      <div className="relative mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Eyebrow + titre épuré */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
            Les mots du fondateur
          </p>
          <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.15] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[2.75rem]">
            La vision derrière VBWEB
          </h2>
          <p className="mt-4 text-sm font-light text-muted-foreground/70 sm:text-base">
            Victor Béasse · Fondateur
          </p>
        </motion.div>

        {/* Vidéo plein largeur */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, ease, delay: 0.1 }}
          className="relative mx-auto mt-10 max-w-5xl sm:mt-12"
        >
          {/* Glow derrière la vidéo */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-primary/[0.08] blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-1 rounded-[1.6rem] bg-gradient-to-br from-primary/30 via-transparent to-primary/20 opacity-60 blur-md"
          />

          {/* Conteneur vidéo */}
          <div className="relative aspect-video overflow-hidden rounded-[1.5rem] border border-border/60 bg-background shadow-[var(--shadow-lg)] ring-1 ring-foreground/5">
            <iframe
              src="https://www.youtube.com/embed/w_Tg2rnwrSE?autoplay=1&mute=1&loop=1&playlist=w_Tg2rnwrSE&rel=0&modestbranding=1"
              title="Victor Béasse, Fondateur VBWEB"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 size-full"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Liens discrets sous la vidéo */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-3"
        >
          <Link
            href="/a-propos"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            En savoir plus
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <span aria-hidden className="hidden h-3 w-px bg-border sm:block" />
          <Link
            href="/services"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Voir les services
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
