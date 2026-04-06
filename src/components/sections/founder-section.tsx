'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const ease = [0.22, 1, 0.36, 1] as const

export function FounderSection() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease }}
            className="relative"
          >
            <div aria-hidden className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl" />
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-md)]">
              <iframe
                src="https://www.youtube.com/embed/w_Tg2rnwrSE?autoplay=1&mute=1&loop=1&playlist=w_Tg2rnwrSE&rel=0&modestbranding=1"
                title="Victor Beasse, Fondateur VBWEB"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 size-full"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease, delay: 0.06 }}
            className="space-y-5"
          >
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              Les mots du fondateur
            </p>
            <h2 className="font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl">
              Découvrez la vision et l&apos;approche de Victor Beasse, fondateur de VBWEB
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Victor Beasse, Fondateur VBWEB
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/a-propos" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80">
                En savoir plus
                <ArrowRight className="size-3.5" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Voir les services
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
