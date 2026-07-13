import Link from 'next/link'
import { ArrowRight, ExternalLink, Info, Star } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'

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
  {
    id: 'cheap-actors',
    name: 'Cheap Actors',
    url: 'https://cheap-actors.netlify.app/',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80',
    description: 'Plateforme de courts-métrages d\'acteurs et cinéastes indépendants.',
  },
]

function ProjectCard({ project, index }: { project: WebProject; index: number }) {
  return (
    <Reveal delay={index * 0.04} className="h-full">
      <div className="group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-border/60 bg-card/40 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={`Site internet ${project.name} créé par VBWEB à Rennes`}
            className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
        </div>

        <div className="flex flex-1 flex-col p-3 sm:p-5">
          <h3 className="mb-1.5 font-display text-[13px] font-semibold leading-tight text-foreground transition-colors duration-200 group-hover:text-primary sm:mb-2 sm:text-base">
            {project.name}
          </h3>
          <p className="mb-3 flex-1 text-[11px] leading-relaxed text-muted-foreground sm:mb-4 sm:text-sm">
            {project.description}
          </p>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto flex w-full items-center justify-center gap-1.5 rounded-xl border border-primary/30 bg-primary/10 px-2 py-1.5 text-[11px] font-medium text-foreground transition-all duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground sm:px-3 sm:py-2 sm:text-xs"
          >
            <ExternalLink className="size-3" />
            Voir le site
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export function SitesInternetContent() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-background">
        {/* Grain overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url(/grain.webp)', backgroundRepeat: 'repeat' }} />

        <div className="relative mx-auto max-w-6xl px-4 pb-4 pt-6 sm:px-6 sm:pb-8 sm:pt-10 lg:px-8 lg:pb-10 lg:pt-14">
          <div
            className="mx-auto max-w-3xl text-center"
            style={{ animation: 'hero-fade-up 0.65s cubic-bezier(0.22,1,0.36,1) both' }}
          >
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-primary sm:text-xs">
              Portfolio, Créations web à Rennes
            </p>
            <h1 className="mt-2 font-display text-balance text-[26px] leading-[1.08] tracking-[-0.03em] text-foreground sm:mt-3 sm:text-5xl">
              Sites internet créés sur mesure
            </h1>
          </div>

          <Reveal delay={0.05} className="mx-auto mt-5 max-w-3xl sm:mt-6">
            <div className="rounded-2xl border border-border/60 bg-card/40 p-3 sm:p-4">
              <div className="flex items-start gap-2.5">
                <Info className="mt-0.5 size-4 shrink-0 text-primary sm:size-5" />
                <p className="text-[11px] leading-relaxed text-muted-foreground sm:text-sm">
                  Cet espace présente un aperçu des créations réalisées par VBWEB.
                  La partie <Link href="/referencement-seo" className="text-primary underline underline-offset-2 transition-colors duration-200 hover:text-primary/80">référencement SEO</Link> dépend
                  du budget et des besoins de chaque client. Ici, c&apos;est uniquement le design et l&apos;expérience utilisateur qui sont mis en avant.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="relative bg-background">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url(/grain.webp)', backgroundRepeat: 'repeat' }} />

        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-2 sm:px-6 sm:pb-16 sm:pt-4 lg:px-8 lg:pb-20">
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <Reveal delay={0.1} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
              <Link href="/contact">
                Demander un devis
                <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/15 bg-foreground/5 text-foreground hover:bg-foreground/10 hover:text-foreground" asChild>
              <Link href="/creation-site-internet">Nos services web</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ── Social proof ── */}
      <section className="relative bg-card">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url(/grain.webp)', backgroundRepeat: 'repeat' }} />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="flex flex-col items-center gap-2">
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
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.08} className="mt-14">
            <div className="rounded-[1.35rem] border border-border/60 bg-background p-8 text-center sm:p-12">
              <h2 className="font-display text-balance text-xl font-semibold text-foreground sm:text-2xl">
                Un projet de site internet à Rennes ?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                De la maquette à la mise en ligne, je crée votre site sur mesure optimisé pour Google. <Link href="/audit-seo-gratuit" className="text-primary underline underline-offset-2 transition-colors duration-200 hover:text-primary/80">Audit SEO gratuit</Link> inclus.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" variant="outline" className="border-white/15 bg-foreground/5 text-foreground hover:bg-foreground/10 hover:text-foreground" asChild>
                  <Link href="/creation-site-internet">En savoir plus</Link>
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
