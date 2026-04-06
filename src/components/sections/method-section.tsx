'use client'

import { motion } from 'framer-motion'
import { Search, Globe, TrendingUp, Zap, Gift } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

const steps = [
  {
    number: '1',
    title: 'Diagnostic précis de vos fuites',
    description: 'J\'identifie exactement où vous perdez vos futurs clients et comment vos concurrents vous devancent sur Google.',
  },
  {
    number: '2',
    title: 'Site premium + stratégie SEO sur-mesure',
    description: 'Un site qui inspire confiance ET qui convertit, couplé à une stratégie SEO qui vous positionne devant vos concurrents.',
  },
  {
    number: '3',
    title: 'Croissance continue et sérénité',
    description: 'Accompagnement mensuel premium : votre visibilité grandit, vos clients aussi. Vous vous concentrez sur votre métier, moi sur votre croissance digitale.',
  },
  {
    number: '4',
    title: 'Automatisation & gain de temps',
    description: 'Plus de clients, plus de sérénité, plus de temps pour votre métier grâce à l\'automatisation intelligente.',
  },
]

export function MethodSection() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease }}
          className="mx-auto max-w-3xl text-center space-y-4"
        >
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Ma méthode
          </p>
          <h2 className="font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl md:text-[2.6rem]">
            Ma méthode pour transformer votre site en générateur de clients
          </h2>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Une approche premium en 3 étapes pour que votre site attire, convertisse et vous libère du stress du digital.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, ease, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-background/60 p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
            >
              <div className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 font-display text-lg font-bold text-primary ring-1 ring-primary/20">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bonus */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease, delay: 0.3 }}
          className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-7"
        >
          <div className="flex items-start gap-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25">
              <Gift className="size-5" aria-hidden />
            </span>
            <div>
              <span className="text-xs font-bold tracking-[0.15em] text-primary uppercase">Bonus premium</span>
              <h3 className="mt-1 font-display text-base font-semibold text-foreground">
                Outils sur-mesure pour votre croissance
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                CRM personnalisé, tableaux de bord, automatisations... Des outils qui vous font gagner des heures chaque semaine.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
