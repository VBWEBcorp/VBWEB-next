'use client'

import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

const stats = [
  {
    value: '+80%',
    title: 'Vous avez un beau site... mais il ne vous rapporte pas de clients',
    description: 'Vos prospects cherchent sur Google, mais c\'est votre concurrence qu\'ils trouvent. Vous perdez des clients chaque jour.',
  },
  {
    value: '93%',
    title: 'Vos futurs clients vous cherchent sur Google en ce moment même',
    description: 'Pendant que vous investissez dans la pub et les réseaux sociaux, ils tapent votre secteur + votre ville sur Google.',
  },
]

export function ProblemStatsSection() {
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
            Le constat
          </p>
          <h2 className="font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl md:text-[2.6rem]">
            Cette situation vous dit quelque chose ?
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, ease, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card/60 p-8 shadow-[var(--shadow-sm)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
            >
              <span className="font-display text-5xl font-bold tracking-tight text-primary sm:text-6xl">
                {stat.value}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-foreground">
                {stat.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
