'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const ease = [0.22, 1, 0.36, 1] as const

export function FormationSection() {
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
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-md)]">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                alt="Victor Beasse - Fondateur VBWEB"
                className="size-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease, delay: 0.06 }}
            className="space-y-6"
          >
            <p className="text-sm font-medium text-muted-foreground">
              Victor Beasse, Fondateur VBWEB
            </p>
            <h2 className="font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl">
              Je vous apprends mon métier
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Fort de plus de 8 ans d&apos;expérience, je vous accompagne pas à pas pour vous lancer sur le web. Repartez avec votre site et un vrai business model.
            </p>
            <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
              <Link href="/contact">
                En savoir plus
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
