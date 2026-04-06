'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star, Building2, Hammer, ShoppingBag, MapPin } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const ease = [0.22, 1, 0.36, 1] as const

const tags = [
  { icon: Building2, label: 'PME & Entreprises' },
  { icon: Hammer, label: 'Artisans & Commerces' },
  { icon: ShoppingBag, label: 'Boutiques en ligne' },
  { icon: MapPin, label: 'Rennes & Bretagne' },
]

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(78,186,236,0.08),transparent_60%)]" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
            className="text-center lg:text-left"
          >
            <h1 className="font-display text-balance text-4xl leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl">
              Consultant SEO à Rennes,{' '}
              <br className="hidden sm:block" />
              <span className="text-primary">plus de clients grâce à Google</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl lg:mx-0">
              Je transforme votre site en générateur de clients qualifiés grâce au référencement naturel et un site web performant.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {tags.map((tag) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-4 py-2 text-sm font-medium text-foreground/70 backdrop-blur-sm"
                >
                  <tag.icon className="size-4 text-primary" aria-hidden />
                  {tag.label}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
                <Link href="/contact">
                  Prendre rendez-vous
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/15 bg-foreground/5 text-foreground backdrop-blur-sm hover:bg-foreground/10 hover:text-foreground"
                asChild
              >
                <Link href="#etudes-de-cas">
                  Étude de cas
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 lg:justify-start">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-400 text-amber-400" aria-hidden />
                ))}
              </div>
              <span className="text-sm font-medium text-muted-foreground">5 étoiles sur 75 avis</span>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="relative mx-auto lg:mx-0"
          >
            <div aria-hidden className="absolute -inset-6 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative size-56 overflow-hidden rounded-full border-2 border-primary/20 shadow-[var(--shadow-lg)] ring-1 ring-foreground/5 sm:size-64 lg:size-72">
              <img
                src="https://i.ibb.co/1fRDj4NP/Victor.jpg"
                alt="Victor Beasse, Consultant SEO à Rennes, fondateur de VBWEB"
                className="size-full object-cover object-center"
                width={288}
                height={288}
                fetchPriority="high"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
