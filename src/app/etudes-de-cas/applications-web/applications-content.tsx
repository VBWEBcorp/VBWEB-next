'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, Quote } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface AppProject {
  title: string
  description: string
  loomId: string
  features: string[]
  testimonial: {
    text: string
    author: string
  }
}

const projects: AppProject[] = [
  {
    title: 'Logiciel Rennes Pneus',
    description:
      'Application de gestion sur mesure pour un spécialiste du pneumatique : stocks, devis, factures et planning techniciens réunis dans un seul outil.',
    loomId: 'dd922ad389a343168e8cbfbcfdb42dd9',
    features: [
      'Gestion des stocks avec alertes automatiques',
      'Génération automatique de devis et factures',
      'Planning techniciens et suivi des interventions',
      'Tableau de bord avec KPIs en temps réel',
    ],
    testimonial: {
      text: 'Ce logiciel a révolutionné notre quotidien. On se concentre enfin sur notre métier au lieu de la paperasse !',
      author: 'Gérant Rennes Pneus',
    },
  },
  {
    title: 'CRM ISY Communication',
    description:
      'CRM intégré pour une agence de communication : gestion des clients, suivi des projets, deadlines et facturation centralisés.',
    loomId: '5920fdd169e8423fb0532d69310f7227',
    features: [
      'Gestion centralisée des clients et projets',
      'Suivi des deadlines et livrables automatisé',
      'Facturation intégrée au CRM',
      "Tableaux de bord pour le pilotage d'activité",
    ],
    testimonial: {
      text: 'On ne peut plus se passer de cet outil ! Il centralise tout et nous fait gagner un temps précieux.',
      author: 'Directrice ISY Communication',
    },
  },
  {
    title: 'BIMI Restaurant',
    description:
      'Plateforme digitale sur mesure pour un restaurant : gestion des réservations, menu en ligne et outil de fidélisation client.',
    loomId: 'ddd4ef5f817a4abf969f23c21ee2073a',
    features: [
      'Système de réservation en ligne intégré',
      'Menu digital mis à jour en temps réel',
      'Outil de fidélisation et gestion clients',
      "Interface d'administration simple et intuitive",
    ],
    testimonial: {
      text: 'La plateforme a simplifié toute notre gestion. Les clients réservent en ligne et nous gagnons un temps fou au quotidien.',
      author: 'Gérant BIMI Restaurant',
    },
  },
]

const ease = [0.22, 1, 0.36, 1] as const

function ProjectCard({
  project,
  index,
}: {
  project: AppProject
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.1, ease }}
      className="flex flex-col overflow-hidden rounded-xl border border-border bg-background"
    >
      <div className="aspect-video">
        <iframe
          src={`https://www.loom.com/embed/${project.loomId}`}
          frameBorder="0"
          allowFullScreen
          className="size-full"
          title={`Démonstration ${project.title}, application web développée par VBWEB à Rennes`}
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 font-display text-lg font-bold text-foreground">{project.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mb-5 space-y-2">
          {project.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
              <span className="text-xs text-foreground/70">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto rounded-lg border border-white/5 bg-foreground/5 p-4">
          <Quote className="mb-1.5 size-4 text-primary/40" />
          <p className="mb-2 text-xs italic leading-relaxed text-foreground/80">
            &ldquo;{project.testimonial.text}&rdquo;
          </p>
          <p className="text-[11px] font-medium text-primary">
            {project.testimonial.author}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function ApplicationsWebContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <Link
            href="/etudes-de-cas"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" />
            Toutes les études de cas
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Développement sur mesure à Rennes
            </p>
            <h1 className="mt-4 font-display text-balance text-4xl leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
              Applications web et outils digitaux
            </h1>
            <p className="hero-description mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              CRM, logiciels de gestion, plateformes métier : des outils digitaux sur mesure pour automatiser votre activité et gagner en productivité.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
                <Link href="/contact">
                  Discuter de mon projet
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/15 bg-foreground/5 text-foreground hover:bg-foreground/10 hover:text-foreground" asChild>
                <Link href="/creation-site-internet-rennes">Nos services web</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Context */}
      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease }}
            className="mx-auto max-w-3xl space-y-4 text-center"
          >
            <h2 className="font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl">
              Des outils conçus pour votre métier
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Chaque application est développée en fonction de vos processus métier. Pas de solution générique. Un outil qui s&apos;adapte à votre façon de travailler, pas l&apos;inverse. Découvrez 3 projets réalisés en vidéo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Réalisations
            </p>
            <h2 className="mt-4 font-display text-3xl tracking-[-0.02em] text-foreground sm:text-4xl">
              Applications développées à Rennes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.loomId}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="rounded-2xl border border-border bg-background p-8 text-center sm:p-12"
          >
            <h2 className="font-display text-balance text-xl font-semibold text-foreground sm:text-2xl">
              Un projet d&apos;application sur mesure ?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
              CRM, outil de gestion, plateforme métier : je développe l&apos;application dont votre entreprise a besoin. Basé à Rennes, je travaille avec des entreprises dans toute la Bretagne.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" variant="outline" className="border-white/15 bg-foreground/5 text-foreground hover:bg-foreground/10 hover:text-foreground" asChild>
                <Link href="/creation-site-internet-rennes">En savoir plus</Link>
              </Button>
              <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
                <Link href="/contact">
                  Discuter de mon projet
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
