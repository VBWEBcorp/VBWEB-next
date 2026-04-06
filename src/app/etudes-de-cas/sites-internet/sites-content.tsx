'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ExternalLink, Info, Star } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface WebProject {
  id: string
  name: string
  url: string
  image: string
  description: string
}

const projects: WebProject[] = [
  {
    id: 'yuzu-branding',
    name: 'Yuzu Branding',
    url: 'https://yuzu-vbweb.netlify.app/',
    image: 'https://i.ibb.co/9HsCRCV6/YUZU-BRANDING.jpg',
    description: 'Agence de branding et identité visuelle.',
  },
  {
    id: 'epicu',
    name: 'EPICU',
    url: 'https://epicu.fr/',
    image: 'https://i.ibb.co/hxpcht55/EPICU.jpg',
    description: 'Plateforme lifestyle : food, travel et shopping local.',
  },
  {
    id: 'as-location',
    name: 'AS Location Rennes',
    url: 'https://as-location-rennes.fr/',
    image: 'https://i.ibb.co/VWfJrSqX/AS-LOCATION.jpg',
    description: 'Service de luxe de location de véhicules à Rennes.',
  },
  {
    id: 'vents-et-courbes',
    name: 'Vents et Courbes',
    url: 'https://ventsetcourbes.org/',
    image: 'https://i.ibb.co/rKD9SJ7q/VENTS-ET-COURBES.jpg',
    description: 'Association culturelle et artistique.',
  },
  {
    id: 'fl-consulting',
    name: 'FL Consulting',
    url: 'https://fl-consulting.netlify.app/',
    image: 'https://i.ibb.co/DHr9v05v/FL-CONSULTING.jpg',
    description: "Cabinet de consulting et stratégie d'entreprise.",
  },
  {
    id: 'rennes-pneus',
    name: 'Rennes Pneus',
    url: 'https://rennespneus.fr/',
    image: 'https://i.ibb.co/BKYFP1x5/RENNES-PNEUS.jpg',
    description: 'Garage automobile et vente de pneus à Rennes.',
  },
  {
    id: 'matineh-food',
    name: 'Matineh Food',
    url: 'https://matinehfood.fr/',
    image: 'https://i.ibb.co/tPHZ4D9L/MATINEH-FOOD.jpg',
    description: 'Traiteur et restaurant iranien.',
  },
  {
    id: 'shaan-production',
    name: 'Shaan Production',
    url: 'https://shaanproduction.fr/',
    image: 'https://i.ibb.co/Nd4W02HL/Shaan-production.jpg',
    description: 'Monteur vidéo professionnel.',
  },
  {
    id: 'shampouine-toi',
    name: 'Shampouine Toi',
    url: 'https://shampouinetoi.fr/',
    image: 'https://i.ibb.co/dwbzZFNN/SHAMPOUINE-TOI.jpg',
    description: 'Service de nettoyage à domicile à Rennes et Bordeaux.',
  },
  {
    id: 'valentin-beasse',
    name: 'Valentin Beasse',
    url: 'https://valentin-beasse-coaching.netlify.app/',
    image: 'https://i.ibb.co/jvyCrGMX/VALENTIN-BEASSE.jpg',
    description: 'Consultant en prise de parole en public.',
  },
  {
    id: 'zine-coaching',
    name: 'Zine Coaching',
    url: 'https://zinecoaching.fr/',
    image: 'https://i.ibb.co/cKpvpLYJ/ZINE-COACHING.jpg',
    description: 'Coach sportif et bien-être.',
  },
  {
    id: 'eco-habitat',
    name: 'Eco Habitat',
    url: 'https://couvreur-eco-habitat.fr/',
    image: 'https://i.ibb.co/bM518fv2/ECO-HABITAT.jpg',
    description: 'Couvreur et travaux de toiture.',
  },
  {
    id: 'jeremy-simon-avocat',
    name: 'Jérémy Simon Avocat',
    url: 'https://jeremy-simon-avocat.fr/',
    image: 'https://i.ibb.co/9HhFm9MV/JEREMY-SIMON-AVOCAT.png',
    description: 'Avocat en droit des affaires.',
  },
  {
    id: 'julien-bidois',
    name: 'Julien Bidois Chef Privé',
    url: 'https://chef-julien-bidois.fr/',
    image: 'https://i.ibb.co/kZrFB2h/JULIEN-BIDOIS-CHEF-PRIVE.jpg',
    description: 'Chef cuisinier à domicile.',
  },
  {
    id: 'les-lunettes-de-la-chapelle',
    name: 'Les Lunettes de la Chapelle',
    url: 'https://leslunettesdelachapelle.fr/',
    image: 'https://i.ibb.co/xtRDW0WZ/LES-LUNETTES-DE-LA-CHAPELLE.jpg',
    description: 'Opticien indépendant.',
  },
  {
    id: 'maxx-le-magicien',
    name: 'Maxx Le Magicien',
    url: 'https://maximeguilloismagicien.fr/',
    image: 'https://i.ibb.co/39zY5X3q/MAXX-LE-MAGICIEN.jpg',
    description: 'Magicien professionnel pour événements.',
  },
  {
    id: 'on-parle-de-tout',
    name: 'On Parle De Tout',
    url: 'https://onparledetout.fr/',
    image: 'https://i.ibb.co/BH7k4qWR/ON-PARLE-DE-TOUT.webp',
    description: 'Podcast et coach en santé mentale.',
  },
  {
    id: 'solatrack',
    name: 'Solatrack',
    url: 'https://solatrack.fr/',
    image: 'https://i.ibb.co/4gnRwBXW/tracker-solaire-2.jpg',
    description: 'Tracker solaire pour le secteur agricole.',
  },
  {
    id: 'es-solutions',
    name: 'ES Solutions Communication',
    url: 'https://es-solutions-communication.fr/',
    image: 'https://i.ibb.co/k6sXPdjv/Edouard-Suchet.jpg',
    description: 'Société de conseil.',
  },
]

const ease = [0.22, 1, 0.36, 1] as const

function ProjectCard({ project, index }: { project: WebProject; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.06, ease }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={`Site internet ${project.name} créé par VBWEB à Rennes`}
          className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="mb-2 font-display text-sm font-semibold text-foreground transition-colors group-hover:text-primary sm:text-base">
          {project.name}
        </h3>
        <p className="mb-3 flex-1 text-xs leading-relaxed text-muted-foreground sm:mb-4 sm:text-sm">
          {project.description}
        </p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex w-full items-center justify-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-3 py-2 text-xs font-medium text-foreground transition-all hover:border-primary hover:bg-primary"
        >
          <ExternalLink className="size-3" />
          Voir le site
        </a>
      </div>
    </motion.div>
  )
}

export function SitesInternetContent() {
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
              Portfolio, Créations web à Rennes
            </p>
            <h1 className="mt-4 font-display text-balance text-4xl leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
              Sites internet créés sur mesure
            </h1>
            <p className="hero-description mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Vitrines, e-commerce, sites d&apos;artisans ou de PME : chaque site est conçu sur mesure, optimisé pour la performance et pensé pour convertir vos visiteurs en clients.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
                <Link href="/contact">
                  Demander un devis
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

      {/* Info + context SEO */}
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
              +19 sites internet livrés pour des entreprises à Rennes et en Bretagne
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              PME, artisans, commerces, professions libérales : chaque projet est unique. Design moderne, responsive, rapide : des sites pensés pour votre activité et vos clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="mx-auto mt-10 max-w-3xl rounded-xl border border-border bg-background/50 p-4 sm:p-5"
          >
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 size-5 shrink-0 text-primary" />
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Cet espace présente un aperçu des créations réalisées par VBWEB.
                La partie <Link href="/referencement-seo-rennes" className="text-primary underline underline-offset-2 hover:text-primary/80">référencement SEO</Link> dépend
                du budget et des besoins de chaque client. Ici, c&apos;est uniquement le design et l&apos;expérience utilisateur qui sont mis en avant.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
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
              Nos créations de sites web
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Social proof + CTA */}
      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          {/* Reviews */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs text-muted-foreground/60">75 avis 5 étoiles</p>
            <a
              href="https://share.google/RdtyxDLN4e3KEx2eO"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground underline underline-offset-2 transition-colors hover:text-primary"
            >
              Découvrir les avis clients
            </a>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="mt-14 rounded-2xl border border-border bg-background p-8 text-center sm:p-12"
          >
            <h2 className="font-display text-balance text-xl font-semibold text-foreground sm:text-2xl">
              Un projet de site internet à Rennes ?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
              De la maquette à la mise en ligne, je crée votre site sur mesure optimisé pour Google. <Link href="/audit-seo-gratuit" className="text-primary underline underline-offset-2 hover:text-primary/80">Audit SEO gratuit</Link> inclus.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" variant="outline" className="border-white/15 bg-foreground/5 text-foreground hover:bg-foreground/10 hover:text-foreground" asChild>
                <Link href="/creation-site-internet-rennes">En savoir plus</Link>
              </Button>
              <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
                <Link href="/contact">
                  Demander un devis
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
