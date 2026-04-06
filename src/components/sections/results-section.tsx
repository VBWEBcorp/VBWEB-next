'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Users, Clock } from 'lucide-react'
import { useState } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

const results = [
  {
    icon: ShieldCheck,
    title: 'Un site qui inspire confiance',
    description: 'Vos prospects vous font immédiatement confiance. Design premium, navigation intuitive, messages qui convertissent.',
  },
  {
    icon: Users,
    title: 'Plus de clients qualifiés',
    description: 'Google vous trouve, vos prospects aussi. Plus d\'appels, plus de rendez-vous, plus de ventes qualifiées.',
  },
  {
    icon: Clock,
    title: 'Sérénité & gain de temps',
    description: 'Votre site travaille pour vous 24h/24. Vous vous concentrez sur votre métier, moi sur votre croissance digitale.',
  },
]

export function ResultsSection() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease }}
          className="mx-auto max-w-2xl text-center space-y-4"
        >
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Résultats
          </p>
          <h2 className="font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl md:text-[2.6rem]">
            3 résultats concrets que mes clients obtiennent
          </h2>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Cliquez sur une carte pour découvrir l&apos;objectif
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {results.map((result, i) => {
            const isActive = active === i
            return (
              <motion.button
                key={result.title}
                type="button"
                onClick={() => setActive(isActive ? null : i)}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, ease, delay: i * 0.08 }}
                className={`group cursor-pointer rounded-2xl border p-8 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)] ${
                  isActive
                    ? 'border-primary/30 bg-primary/10'
                    : 'border-border bg-card/60'
                }`}
              >
                <span className={`flex size-12 items-center justify-center rounded-2xl ring-1 transition-colors ${
                  isActive
                    ? 'bg-primary/20 text-primary ring-primary/30'
                    : 'bg-primary/10 text-primary ring-primary/15'
                }`}>
                  <result.icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {result.title}
                </h3>
                <motion.div
                  initial={false}
                  animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.3, ease }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {result.description}
                  </p>
                </motion.div>
              </motion.button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
