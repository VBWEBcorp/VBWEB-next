'use client'

import { motion } from 'framer-motion'
import { MessageSquare, PenTool, Rocket } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Échange & stratégie',
    description: 'On écoute vos besoins, on analyse votre marché et on définit ensemble la meilleure stratégie digitale pour votre activité.',
  },
  {
    icon: PenTool,
    step: '02',
    title: 'Conception & design',
    description: 'On crée un site sur mesure qui reflète votre identité, optimisé pour convertir vos visiteurs en clients.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Lancement & croissance',
    description: 'Mise en ligne, référencement SEO et accompagnement continu pour faire décoller votre présence en ligne.',
  },
]

export function HowItWorksSection() {
  return (
    <section className="border-b border-border/60 bg-muted/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease }}
          className="mx-auto max-w-2xl text-center space-y-4"
        >
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Notre méthode
          </p>
          <h2 className="font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl md:text-[2.6rem]">
            Comment ça marche ?
          </h2>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Un processus simple et transparent, de la première rencontre à la mise en ligne.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, ease, delay: i * 0.08 }}
              className="relative text-center"
            >
              <div className="mx-auto flex size-16 items-center justify-center rounded-3xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <step.icon className="size-7" aria-hidden />
              </div>
              <span className="mt-4 block font-display text-xs font-bold tracking-[0.2em] text-primary/60 uppercase">
                Étape {step.step}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>

              {i < steps.length - 1 && (
                <div className="pointer-events-none absolute right-0 top-8 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-border via-border to-transparent lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
