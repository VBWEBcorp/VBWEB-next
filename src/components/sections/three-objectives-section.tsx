'use client'

import { motion } from 'framer-motion'
import { Target, TrendingUp, Users } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

const objectives = [
  {
    icon: Target,
    title: 'Visibilité',
    description: 'Être trouvé par vos clients au moment où ils ont besoin de vous. SEO, Google Maps, réseaux sociaux : on couvre tous les canaux.',
    stat: '93%',
    statLabel: 'des parcours commencent sur Google',
  },
  {
    icon: TrendingUp,
    title: 'Conversion',
    description: 'Transformer vos visiteurs en clients grâce à un site conçu pour convaincre. Design, copywriting et parcours utilisateur optimisés.',
    stat: 'x3',
    statLabel: 'plus de demandes en moyenne',
  },
  {
    icon: Users,
    title: 'Fidélisation',
    description: 'Créer une relation durable avec vos clients. Un site professionnel inspire confiance et donne envie de revenir.',
    stat: '70%',
    statLabel: 'des clients reviennent via le site',
  },
]

export function ThreeObjectivesSection() {
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
            Nos objectifs
          </p>
          <h2 className="font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl md:text-[2.6rem]">
            3 objectifs pour votre réussite
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {objectives.map((obj, i) => (
            <motion.div
              key={obj.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, ease, delay: i * 0.08 }}
              className="group rounded-2xl border border-border/80 bg-card/70 p-8 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <obj.icon className="size-6" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {obj.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {obj.description}
              </p>
              <div className="mt-6 border-t border-border/60 pt-5">
                <span className="font-display text-3xl font-bold tracking-tight text-primary">
                  {obj.stat}
                </span>
                <p className="mt-1 text-xs text-muted-foreground">{obj.statLabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
