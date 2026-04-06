'use client'

import { motion } from 'framer-motion'
import { TrendingDown, Eye, ShieldAlert, Rocket } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

const problems = [
  {
    icon: TrendingDown,
    title: 'Vous perdez des clients',
    description: 'Sans présence en ligne optimisée, vos concurrents captent les prospects qui vous cherchent.',
  },
  {
    icon: Eye,
    title: 'Vous êtes invisible',
    description: '93% des expériences en ligne commencent par un moteur de recherche. Si vous n\'y êtes pas, vous n\'existez pas.',
  },
  {
    icon: ShieldAlert,
    title: 'Votre image en souffre',
    description: 'Un site vieillissant ou absent donne une impression de manque de professionnalisme à vos prospects.',
  },
  {
    icon: Rocket,
    title: 'Vous freinez votre croissance',
    description: 'Le digital n\'est plus une option. C\'est le levier n°1 de croissance pour les entreprises modernes.',
  },
]

export function WhyReinventSection() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease }}
          className="mx-auto max-w-2xl text-center space-y-4"
        >
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Le constat
          </p>
          <h2 className="font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl md:text-[2.6rem]">
            Pourquoi réinventer votre présence digitale ?
          </h2>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Le monde a changé. Vos clients vous cherchent en ligne avant de décrocher le téléphone.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, ease, delay: i * 0.06 }}
              className="group relative rounded-2xl border border-border/80 bg-card/70 p-6 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
            >
              <span className="flex size-11 items-center justify-center rounded-2xl bg-destructive/10 text-destructive ring-1 ring-destructive/15">
                <problem.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
