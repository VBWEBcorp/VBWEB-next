'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const ease = [0.22, 1, 0.36, 1] as const

const categories = [
  {
    title: 'Sites Internet',
    description: 'Vitrines, e-commerce et sites sur-mesure qui convertissent vos visiteurs en clients.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    href: '/etudes-de-cas/sites-internet',
  },
  {
    title: 'Référencement SEO',
    description: 'Stratégies de visibilité Google qui propulsent nos clients en première page.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80',
    href: '/etudes-de-cas/referencement',
  },
  {
    title: 'Applications Web',
    description: 'CRM, logiciels et dashboards sur-mesure pour automatiser et piloter votre activité.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    href: '/etudes-de-cas/applications-web',
  },
]

export function CaseStudiesSection() {
  return (
    <section id="etudes-de-cas" className="bg-background scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease }}
          className="mx-auto max-w-2xl text-center space-y-4"
        >
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Portfolio
          </p>
          <h2 className="font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl md:text-[2.6rem]">
            Études de cas
          </h2>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Découvrez nos réalisations par catégorie
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-3 gap-3 sm:gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, ease, delay: i * 0.08 }}
            >
              <Link
                href={cat.href}
                className="group flex h-full flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[var(--shadow-md)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-3 sm:p-6">
                  <h3 className="font-display text-xs sm:text-lg font-semibold text-foreground">
                    {cat.title}
                  </h3>
                  <p className="mt-1 sm:mt-2 flex-1 text-[10px] sm:text-sm leading-relaxed text-muted-foreground hidden sm:block">
                    {cat.description}
                  </p>
                  <span className="mt-2 sm:mt-4 inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-medium text-primary transition-all group-hover:gap-2.5">
                    Voir
                    <ArrowRight className="size-2.5 sm:size-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
