import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, Quote } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'

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

/* Grain overlay reused across sections */
const grain = (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0"
    style={{
      backgroundImage:
        'radial-gradient(circle, currentColor 1px, transparent 1px)',
      backgroundSize: '4px 4px',
      opacity: 0.04,
    }}
  />
)

export function ApplicationsWebContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        {grain}
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Link
            href="/etudes-de-cas"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" />
            Toutes les études de cas
          </Link>
          <div
            className="mx-auto max-w-3xl text-center"
            style={{
              animation:
                'hero-fade-up 0.65s cubic-bezier(0.22,1,0.36,1) both',
            }}
          >
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Développement sur mesure à Rennes
            </p>
            <h1 className="mt-4 font-display text-balance text-4xl font-medium leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
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
                <Link href="/creation-site-internet">Nos services web</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="relative overflow-hidden bg-card">
        {grain}
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="font-display text-balance text-3xl font-medium leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl">
              Des outils conçus pour votre métier
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Chaque application est développée en fonction de vos processus métier. Pas de solution générique. Un outil qui s&apos;adapte à votre façon de travailler, pas l&apos;inverse. Découvrez 3 projets réalisés en vidéo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Projects grid */}
      <section className="relative overflow-hidden bg-background">
        {grain}
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Réalisations
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.02em] text-foreground sm:text-4xl">
              Applications développées à Rennes
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.loomId} delay={i * 0.08}>
                <div className="group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-border/60 bg-card/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  {/* Loom embed */}
                  <div className="aspect-video overflow-hidden">
                    <iframe
                      src={`https://www.loom.com/embed/${project.loomId}`}
                      frameBorder="0"
                      allowFullScreen
                      className="size-full"
                      title={`Démonstration ${project.title}, application web développée par VBWEB à Rennes`}
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 font-display text-lg font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6 space-y-2.5">
                      {project.features.map((feature, fi) => (
                        <div key={fi} className="flex items-start gap-2.5">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                          <span className="text-[13px] leading-snug text-foreground/70">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="mt-auto rounded-xl border border-border/40 bg-foreground/[0.03] p-5">
                      <Quote className="mb-2 size-4 text-primary/40" />
                      <p className="mb-2.5 text-[13px] italic leading-relaxed text-foreground/80">
                        &ldquo;{project.testimonial.text}&rdquo;
                      </p>
                      <p className="text-xs font-semibold text-primary">
                        {project.testimonial.author}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-card">
        {grain}
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal>
            <div className="rounded-2xl border border-border/60 bg-background p-8 text-center sm:p-12">
              <h2 className="font-display text-balance text-xl font-semibold text-foreground sm:text-2xl">
                Un projet d&apos;application sur mesure ?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                CRM, outil de gestion, plateforme métier : je développe l&apos;application dont votre entreprise a besoin. Basé à Rennes, je travaille avec des entreprises partout en France.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" variant="outline" className="border-white/15 bg-foreground/5 text-foreground hover:bg-foreground/10 hover:text-foreground" asChild>
                  <Link href="/creation-site-internet">En savoir plus</Link>
                </Button>
                <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
                  <Link href="/contact">
                    Discuter de mon projet
                    <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
