'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Quote,
  ExternalLink,
  Star,
  Play,
  X,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface SeoCaseStudy {
  id: string
  title: string
  name: string
  sector: string
  tag: string
  website?: string
  images: { src: string; alt: string }[]
  problem: string
  actions: string[]
  metrics: {
    label: string
    before: string
    after: string
    highlight?: boolean
    details?: string[]
  }[]
  duration: string
  testimonial?: {
    text: string
    author: string
    role: string
  }
}

const caseStudies: SeoCaseStudy[] = [
  {
    id: 'epicu',
    title: 'Stratégie de marque',
    name: 'EPICU',
    sector: 'Marque lifestyle / Guides locaux',
    tag: 'Marque',
    website: 'https://epicu.fr',
    images: [
      { src: 'https://i.ibb.co/y29d3MD/EPICU-AVANT-FILEminimizer.jpg', alt: 'EPICU avant optimisation SEO, trafic organique faible' },
      { src: 'https://i.ibb.co/XZxVz7Mm/EPICU-APRES-FILEminimizer.jpg', alt: 'EPICU après référencement SEO par VBWEB, 5 000 visites/mois' },
    ],
    problem:
      "EPICU est une marque qui propose des guides et expériences locales. Le site partait de zéro en termes de visibilité, avec environ 100 visiteurs mensuels. La marque avait besoin de développer un trafic organique solide pour asseoir sa notoriété et attirer une audience qualifiée sans dépendre de la publicité.",
    actions: [
      "Audit concurrentiel approfondi du marché lifestyle/guides locaux",
      "Définition d'une stratégie de mots-clés longue traîne (380+ mots-clés ciblés)",
      'Optimisation SEO des pages principales et des fiches guides',
      "Création d'un plan de contenu SEO (articles, guides, pages de destination)",
      'Optimisation technique : vitesse, balisage schéma, sitemap dynamique',
      "Travail sur l'autorité du domaine via une stratégie de netlinking ciblée",
    ],
    metrics: [
      { label: 'Trafic organique mensuel', before: '~100 visites/mois', after: '5 000 visites/mois', highlight: true },
      { label: 'Croissance du trafic', before: '-', after: '+4 900%', highlight: true },
      { label: 'Pages indexées par Google', before: '12', after: '156' },
      { label: 'Mots-clés positionnés (Top 20)', before: '8', after: '342' },
      { label: 'Durée moyenne de session', before: '0:42', after: '2:38' },
    ],
    duration: '3 ans (croissance progressive)',
    testimonial: {
      text: "On partait de rien. VBWEB a construit toute notre stratégie SEO de A à Z. En 3 ans, on est passé de 100 visiteurs à 5 000 par mois. C'est devenu notre premier canal d'acquisition, loin devant les réseaux sociaux.",
      author: 'Fondateur',
      role: 'EPICU',
    },
  },
  {
    id: 'rennes-pneus',
    title: 'Référencement local',
    name: 'Rennes Pneus',
    sector: 'Garage automobile - Rennes',
    tag: 'Référencement local',
    website: 'https://rennes-pneus.fr',
    images: [
      { src: 'https://i.ibb.co/Q7JfwsqD/RENNES-PNEUS-AVANT.png', alt: 'Rennes Pneus avant référencement local, invisible sur Google' },
      { src: 'https://i.ibb.co/jv4Dt7qC/RENNES-PNEUS-APRES-FILEminimizer.jpg', alt: 'Rennes Pneus après SEO local par VBWEB, 3 600 visites/mois' },
    ],
    problem:
      "L'entreprise était invisible sur Google. L'ancien site, hébergé sur un nom de domaine peu stratégique, ne générait quasiment aucun trafic organique. Les clients venaient uniquement par le bouche-à-oreille, ce qui limitait fortement la croissance.",
    actions: [
      'Changement stratégique du nom de domaine pour un meilleur positionnement local',
      'Refonte complète du site avec architecture SEO optimisée',
      'Optimisation de 45+ pages pour les mots-clés locaux (pneus Rennes, garage Rennes, etc.)',
      'Restructuration du maillage interne et des balises techniques',
      'Optimisation avancée de la fiche Google Business Profile',
      "Mise en place d'un suivi de positionnement sur 120+ mots-clés",
    ],
    metrics: [
      { label: 'Trafic organique mensuel', before: '30 visites/mois', after: '3 600 visites/mois', highlight: true },
      { label: 'Appels entrants mensuels', before: '~15 appels/mois', after: '~500 appels/mois', highlight: true },
      {
        label: 'Mots-clés positionnés (Top 10)',
        before: '3',
        after: '87',
        details: [
          '1er sur "Rennes Pneus"',
          '1er sur "Pneus neufs à Rennes"',
          '1er sur "Pneus Rennes"',
          '1er sur "Pneus d\'occasion à Rennes"',
          '1er sur "Crevaison pneus Rennes"',
        ],
      },
      { label: 'Position moyenne Google', before: '48e', after: '8,2e' },
      { label: 'Taux de clics (CTR)', before: '0,8%', after: '6,4%' },
    ],
    duration: '3 ans',
    testimonial: {
      text: "Avant VBWEB, on n'avait quasiment personne qui nous trouvait sur Google. Aujourd'hui, le téléphone sonne tous les jours grâce au site. On a dû embaucher pour suivre la demande. C'est le meilleur investissement qu'on ait fait.",
      author: 'Gérant',
      role: 'Rennes Pneus',
    },
  },
  {
    id: 'jumelles',
    title: 'Référencement e-commerce',
    name: 'Jumelles.com',
    sector: 'E-commerce optique',
    tag: 'E-commerce',
    website: 'https://www.jumelles.com',
    images: [
      { src: 'https://i.ibb.co/q3k8js8d/JUMELLES-AVANT-FILEminimizer.jpg', alt: 'Jumelles.com avant optimisation SEO e-commerce' },
      { src: 'https://i.ibb.co/FknFwpWN/JUMELLES-APRES-FILEminimizer.jpg', alt: 'Jumelles.com après SEO par VBWEB, +33% trafic organique' },
    ],
    problem:
      "Jumelles.com est un site e-commerce spécialisé dans la vente de jumelles et d'optiques. Malgré un catalogue riche de 800+ produits, de nombreuses fiches produits étaient mal optimisées, dupliquées ou invisibles sur Google. Le site souffrait également de lenteurs techniques qui pénalisaient le positionnement et l'expérience utilisateur.",
    actions: [
      'Audit SEO technique complet (crawl, indexation, erreurs 404, redirections)',
      'Correction et réécriture de 620+ fiches produits avec contenus uniques',
      'Optimisation de la vitesse du site (compression images, cache, lazy loading)',
      'Restructuration des catégories et du maillage interne e-commerce',
      'Mise en place de données structurées Product et BreadcrumbList',
      "Stratégie de contenu autour des guides d'achat et comparatifs",
    ],
    metrics: [
      { label: 'Recherche organique', before: 'Base initiale', after: '+33% en 12 mois', highlight: true },
      { label: 'Mots-clés positionnés', before: '~2 100', after: '3 380 (+1 280)', highlight: true },
      { label: 'Temps de chargement', before: '4,8 secondes', after: '1,9 seconde' },
      { label: 'Fiches produits optimisées', before: '180/800', after: '800/800' },
      { label: 'Taux de rebond', before: '68%', after: '41%' },
    ],
    duration: '2 ans',
    testimonial: {
      text: "Le travail de VBWEB sur nos fiches produits et la technique a été remarquable. En deux ans, on a gagné plus de 1 200 mots-clés et notre trafic organique a augmenté d'un tiers. Les ventes suivent naturellement.",
      author: 'Responsable e-commerce',
      role: 'Jumelles.com',
    },
  },
]

const quickNav = [
  { id: 'epicu', label: 'Marque', sub: 'EPICU' },
  { id: 'rennes-pneus', label: 'Référencement local', sub: 'Rennes Pneus' },
  { id: 'jumelles', label: 'E-commerce', sub: 'Jumelles.com' },
]

/* ------------------------------------------------------------------ */
/*  Grain overlay                                                      */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function MetricRow({ metric }: { metric: SeoCaseStudy['metrics'][0] }) {
  return (
    <div
      className={`rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 ${
        metric.highlight
          ? 'border border-primary/20 bg-primary/10'
          : 'bg-foreground/5'
      }`}
    >
      <div className="flex flex-col justify-between gap-1 xs:flex-row xs:items-center xs:gap-0">
        <span className="text-xs text-foreground/70 sm:text-sm">{metric.label}</span>
        <div className="flex items-center gap-2 sm:gap-6">
          <span className="text-xs text-muted-foreground/60 line-through sm:text-sm">
            {metric.before}
          </span>
          <ArrowRight className="size-3 shrink-0 text-primary sm:size-4" />
          <span
            className={`text-xs font-bold sm:text-base ${
              metric.highlight ? 'text-primary' : 'text-green-400'
            }`}
          >
            {metric.after}
          </span>
        </div>
      </div>
      {metric.details && metric.details.length > 0 && (
        <div className="mt-2 space-y-1 border-t border-border pt-2">
          {metric.details.map((detail, i) => (
            <div
              key={i}
              className="flex items-start gap-1.5 text-[10px] text-muted-foreground sm:text-xs"
            >
              <span className="mt-0.5 text-primary">&#10003;</span>
              <span>{detail}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function CaseStudyCard({ study }: { study: SeoCaseStudy }) {
  return (
    <Reveal>
      <div
        id={study.id}
        className="scroll-mt-20 overflow-hidden rounded-[1.5rem] border border-border/60 bg-card/40 p-6 sm:p-8"
      >
        {/* Header */}
        <div className="mb-6 flex items-start justify-between gap-3 sm:mb-8">
          <div>
            <span className="mb-2 inline-block rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary sm:mb-3 sm:px-3">
              {study.tag}
            </span>
            <h3 className="mb-1 font-display text-xl font-bold leading-tight text-foreground sm:text-3xl">
              {study.title}
            </h3>
            <p className="text-xs text-muted-foreground sm:text-sm">
              {study.name}, {study.sector}
            </p>
          </div>
          {study.website && (
            <a
              href={study.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-border bg-foreground/5 px-2.5 py-2 text-xs font-medium text-muted-foreground/60 transition-colors duration-200 hover:border-primary/20 hover:bg-primary/10 hover:text-primary sm:px-3"
            >
              <ExternalLink className="size-3.5" />
              <span className="hidden sm:inline">Voir le site</span>
            </a>
          )}
        </div>

        {/* Images avant/apres */}
        <div className="mb-6 grid grid-cols-2 gap-2 sm:mb-8 sm:gap-3">
          {study.images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg border border-border bg-foreground/5 sm:rounded-xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="block h-auto w-full"
                loading="lazy"
              />
              <div className="bg-foreground/5 px-3 py-1.5 text-center">
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground/60 sm:text-xs">
                  {i === 0 ? 'Avant' : 'Après'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Problematique */}
        <div className="mb-6 border-l-2 border-red-500/40 pl-4 sm:mb-8 sm:pl-5">
          <h4 className="mb-2 font-display text-sm font-semibold text-red-400 sm:text-base">
            Problématique
          </h4>
          <p className="text-xs leading-relaxed text-foreground/70 sm:text-sm">
            {study.problem}
          </p>
        </div>

        {/* Actions SEO */}
        <div className="mb-6 border-l-2 border-primary/40 pl-4 sm:mb-8 sm:pl-5">
          <h4 className="mb-2 font-display text-sm font-semibold text-primary sm:text-base">
            Actions SEO mises en place
          </h4>
          <div className="grid gap-1.5 sm:grid-cols-2 sm:gap-2">
            {study.actions.map((action, i) => (
              <div key={i} className="flex items-start gap-1.5 sm:gap-2">
                <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary sm:size-4" />
                <span className="text-xs text-foreground/70 sm:text-sm">{action}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Resultats */}
        <div className="mb-6 border-l-2 border-emerald-500/40 pl-4 sm:mb-8 sm:pl-5">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="font-display text-sm font-semibold text-green-400 sm:text-base">
              Résultats obtenus
            </h4>
            <span className="rounded-full bg-foreground/5 px-2 py-1 text-[10px] text-muted-foreground/60 sm:px-3 sm:text-xs">
              {study.duration}
            </span>
          </div>
          <div className="space-y-1.5 sm:space-y-2">
            {study.metrics.map((metric, i) => (
              <MetricRow key={i} metric={metric} />
            ))}
          </div>
        </div>

        {/* Testimonial */}
        {study.testimonial && (
          <div className="rounded-xl border border-white/5 bg-foreground/5 p-4 sm:p-5">
            <Quote className="mb-2 size-4 text-primary/40 sm:size-5" />
            <p className="mb-2 text-xs italic leading-relaxed text-foreground/80 sm:text-sm">
              &ldquo;{study.testimonial.text}&rdquo;
            </p>
            <p className="text-xs font-medium text-primary sm:text-sm">
              {study.testimonial.author}, {study.testimonial.role}
            </p>
          </div>
        )}
      </div>
    </Reveal>
  )
}

function ClientReviewsVideo() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative bg-background py-16 sm:py-20 lg:py-24">
      {grain}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto mb-10 max-w-3xl space-y-4 text-center">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Témoignages
            </p>
            <h2 className="font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl">
              Ce que disent nos clients
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Découvrez les retours de TPE et PME accompagnées par VBWEB en référencement naturel.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex justify-center">
            <div className="relative aspect-video w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-background">
              <iframe
                src="https://www.youtube-nocookie.com/embed/ygRn3UEfB1A?autoplay=1&mute=1&rel=0&modestbranding=1&controls=0&loop=1&playlist=ygRn3UEfB1A"
                title="Avis clients VBWEB, témoignages référencement SEO Rennes"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 size-full"
              />
              <button
                type="button"
                className="absolute bottom-3 right-3 z-10 flex items-center gap-2 rounded-lg bg-black/70 px-3 py-2 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-black/90"
                onClick={() => setIsModalOpen(true)}
              >
                <Play className="size-3 text-foreground" />
                <span className="text-xs font-medium text-foreground">
                  Visionner la vidéo
                </span>
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Video modal — CSS animation, no framer-motion */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-[fade-in_0.2s_ease]"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-xl bg-black animate-[hero-scale-in_0.25s_ease]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/70 p-2 transition-colors duration-200 hover:bg-black/90"
            >
              <X className="size-5 text-foreground" />
            </button>
            <iframe
              src="https://www.youtube-nocookie.com/embed/ygRn3UEfB1A?autoplay=1&rel=0&modestbranding=1&controls=1"
              title="Avis clients VBWEB, témoignages référencement SEO Rennes"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 size-full"
            />
          </div>
        </div>
      )}
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Main export                                                        */
/* ------------------------------------------------------------------ */

export function ReferencementContent() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Hero compact */}
      <section className="relative bg-background pt-6 pb-4 sm:pt-10 sm:pb-6 lg:pt-14 lg:pb-8">
        {grain}
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            className="mx-auto flex max-w-3xl flex-col items-center text-center"
            style={{ animation: 'hero-fade-up 0.65s cubic-bezier(0.22,1,0.36,1) both' }}
          >
            <div className="relative mb-3 size-14 overflow-hidden rounded-full border-2 border-primary/30 sm:size-16">
              <img
                src="/victor.jpg"
                alt="Victor Béasse, consultant SEO à Rennes"
                className="size-full object-cover"
              />
            </div>
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-primary sm:text-xs">
              Résultats concrets
            </p>
            <h1 className="mt-2 font-display text-balance text-[26px] leading-[1.08] tracking-[-0.03em] text-foreground sm:mt-3 sm:text-5xl">
              Études de cas référencement SEO
            </h1>
          </div>

          <Reveal delay={0.05}>
            <div className="mx-auto mt-6 grid max-w-2xl grid-cols-3 gap-2 sm:gap-3">
              {quickNav.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className="group rounded-xl border border-border bg-card/40 px-2 py-2.5 text-center transition-all duration-300 hover:border-primary/30 hover:bg-background sm:px-6 sm:py-3.5"
                >
                  <span className="block font-display text-[11px] font-semibold leading-tight text-foreground/90 transition-colors duration-200 group-hover:text-primary sm:text-sm">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-[9px] text-muted-foreground/60 sm:text-xs">
                    {item.sub}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Case studies */}
      <section className="relative bg-background pb-16 pt-4 sm:pb-20 sm:pt-6 lg:pb-24">
        {grain}
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-12">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* Video testimonials */}
      <ClientReviewsVideo />

      {/* Social proof + CTA */}
      <section className="relative bg-card py-16 sm:py-20 lg:py-24">
        {grain}
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground/60">80+ avis 5 étoiles</p>
              <a
                href="https://share.google/RdtyxDLN4e3KEx2eO"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground underline underline-offset-2 transition-colors duration-200 hover:text-primary"
              >
                Découvrir les avis clients
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-14 rounded-[1.5rem] border border-border/60 bg-card/40 p-8 text-center sm:p-12">
              <h2 className="font-display text-balance text-xl font-semibold text-foreground sm:text-2xl">
                Vous aussi, dominez Google à Rennes
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                <Link href="/audit-seo-gratuit" className="text-primary underline underline-offset-2 hover:text-primary/80">Audit SEO gratuit</Link> pour identifier vos opportunités de croissance. Résultats mesurables, sans engagement.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" variant="outline" className="border-white/15 bg-foreground/5 text-foreground hover:bg-foreground/10 hover:text-foreground" asChild>
                  <Link href="/referencement-seo">Nos services SEO</Link>
                </Button>
                <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
                  <Link href="/contact">
                    Demander un devis
                    <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
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
