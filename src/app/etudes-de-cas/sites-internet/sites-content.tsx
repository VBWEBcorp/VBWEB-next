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
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/YUZU-BRANDING-9HsCRCV6.webp',
    description: 'Agence de branding et identité visuelle.',
  },
  {
    id: 'epicu',
    name: 'EPICU',
    url: 'https://epicu.fr/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/EPICU-hxpcht55.webp',
    description: 'Plateforme lifestyle : food, travel et shopping local.',
  },
  {
    id: 'as-location',
    name: 'AS Location Rennes',
    url: 'https://as-location-rennes.fr/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/AS-LOCATION-VWfJrSqX.webp',
    description: 'Service de luxe de location de véhicules à Rennes.',
  },
  {
    id: 'vents-et-courbes',
    name: 'Vents et Courbes',
    url: 'https://ventsetcourbes.org/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/VENTS-ET-COURBES-rKD9SJ7q.webp',
    description: 'Association culturelle et artistique.',
  },
  {
    id: 'fl-consulting',
    name: 'FL Consulting',
    url: 'https://fl-consulting.netlify.app/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/FL-CONSULTING-DHr9v05v.webp',
    description: "Cabinet de consulting et stratégie d'entreprise.",
  },
  {
    id: 'rennes-pneus',
    name: 'Rennes Pneus',
    url: 'https://rennespneus.fr/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/RENNES-PNEUS-BKYFP1x5.webp',
    description: 'Garage automobile et vente de pneus à Rennes.',
  },
  {
    id: 'matineh-food',
    name: 'Matineh Food',
    url: 'https://matinehfood.fr/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/MATINEH-FOOD-tPHZ4D9L.webp',
    description: 'Traiteur et restaurant iranien.',
  },
  {
    id: 'shaan-production',
    name: 'Shaan Production',
    url: 'https://shaanproduction.fr/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/Shaan-production-Nd4W02HL.webp',
    description: 'Monteur vidéo professionnel.',
  },
  {
    id: 'shampouine-toi',
    name: 'Shampouine Toi',
    url: 'https://shampouinetoi.fr/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/SHAMPOUINE-TOI-dwbzZFNN.webp',
    description: 'Service de nettoyage à domicile à Rennes et Bordeaux.',
  },
  {
    id: 'valentin-beasse',
    name: 'Valentin Beasse',
    url: 'https://valentin-beasse-coaching.netlify.app/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/VALENTIN-BEASSE-jvyCrGMX.webp',
    description: 'Consultant en prise de parole en public.',
  },
  {
    id: 'zine-coaching',
    name: 'Zine Coaching',
    url: 'https://zinecoaching.fr/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/ZINE-COACHING-cKpvpLYJ.webp',
    description: 'Coach sportif et bien-être.',
  },
  {
    id: 'eco-habitat',
    name: 'Eco Habitat',
    url: 'https://couvreur-eco-habitat.fr/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/ECO-HABITAT-bM518fv2.webp',
    description: 'Couvreur et travaux de toiture.',
  },
  {
    id: 'jeremy-simon-avocat',
    name: 'Jérémy Simon Avocat',
    url: 'https://jeremy-simon-avocat.fr/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/JEREMY-SIMON-AVOCAT-9HhFm9MV.webp',
    description: 'Avocat en droit des affaires.',
  },
  {
    id: 'julien-bidois',
    name: 'Julien Bidois Chef Privé',
    url: 'https://chef-julien-bidois.fr/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/JULIEN-BIDOIS-CHEF-PRIVE-kZrFB2h.webp',
    description: 'Chef cuisinier à domicile.',
  },
  {
    id: 'les-lunettes-de-la-chapelle',
    name: 'Les Lunettes de la Chapelle',
    url: 'https://leslunettesdelachapelle.fr/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/LES-LUNETTES-DE-LA-CHAPELLE-xtRDW0WZ.webp',
    description: 'Opticien indépendant.',
  },
  {
    id: 'maxx-le-magicien',
    name: 'Maxx Le Magicien',
    url: 'https://maximeguilloismagicien.fr/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/MAXX-LE-MAGICIEN-39zY5X3q.webp',
    description: 'Magicien professionnel pour événements.',
  },
  {
    id: 'on-parle-de-tout',
    name: 'On Parle De Tout',
    url: 'https://onparledetout.fr/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/ON-PARLE-DE-TOUT-BH7k4qWR.webp',
    description: 'Podcast et coach en santé mentale.',
  },
  {
    id: 'solatrack',
    name: 'Solatrack',
    url: 'https://solatrack.fr/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/tracker-solaire-2-4gnRwBXW.webp',
    description: 'Tracker solaire pour le secteur agricole.',
  },
  {
    id: 'es-solutions',
    name: 'ES Solutions Communication',
    url: 'https://es-solutions-communication.fr/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/Edouard-Suchet-k6sXPdjv.webp',
    description: 'Société de conseil.',
  },
  {
    id: 'cheap-actors',
    name: 'Cheap Actors',
    url: 'https://cheap-actors.netlify.app/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1485846234645-a62644f84728-w800.webp',
    description: 'Plateforme de courts-métrages d\'acteurs et cinéastes indépendants.',
  },
  {
    id: 'actimaine',
    name: 'Actimaine',
    url: 'https://actimaine.fr/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/ACTIMAINE-902xtcu0.webp',
    description: "Solutions d'encaissement et vidéosurveillance en Sarthe.",
  },
  {
    id: 'studio-m',
    name: 'Studio M',
    url: 'https://studio-m-paris.fr/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/STUDIO-M-q0u0fuag.webp',
    description: "Architecte d'intérieur à Paris.",
  },
  {
    id: 'shi-shi-samui',
    name: 'Shi Shi Samui',
    url: 'https://shi-shi-samui.com/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/SHI-SHI-SAMUI-ud76jbgn.webp',
    description: 'Club sport et loisirs à Koh Samui, en version française et anglaise.',
  },
  {
    id: 'stella-c',
    name: 'Stella C',
    url: 'https://stella-ouibo.netlify.app/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/STELLA-C-cj4js09w.webp',
    description: 'Maquilleuse mode, célébrités et événementiel à Paris.',
  },
  {
    id: 'dp-renov',
    name: 'DP Rénov',
    url: 'https://dprenov.fr/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/DP-RENOV-eke6yg15.webp',
    description: 'Couvreur spécialiste de la toiture dans la Manche.',
  },
  {
    id: 'entre-maman-et-moi',
    name: 'Entre Maman et Moi',
    url: 'https://entre-maman-et-moi.fr/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/VIJI-y4vuspms.webp',
    description: 'Kits culinaires indiens, ateliers et traiteur à Rennes.',
  },
  {
    id: 'marius-aholou',
    name: 'Marius Aholou',
    url: 'https://coach-sport-rennes.fr/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/COACH-SPORT-RENNES-wbq6f4wt.webp',
    description: 'Coach sportif en salle et à domicile à Rennes.',
  },
  {
    id: 'lucie-jagot',
    name: 'Lucie Jagot',
    url: 'https://lucie-coach-rennes.fr/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/LUCIE-JAGOT-aftv82rx.webp',
    description: 'Coach sportive pour femmes actives à Rennes.',
  },
  {
    id: 'veronique-jan',
    name: 'Véronique Jan',
    url: 'https://sophrologue-vbweb.netlify.app/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/VERONIQUE-JAN-scxc5dcf.webp',
    description: 'Hypnothérapeute et sophrologue à Rennes et Acigné.',
  },
  {
    id: 'en-pays-we',
    name: 'En Pays Wê',
    url: 'https://demenageurs-en-pays-we.fr/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/EN-PAYS-WE-hkhgx552.webp',
    description: 'Entreprise de déménagement à Besançon.',
  },
  {
    id: 'auto-conduite',
    name: 'Auto Conduite',
    url: 'https://auto-conduite.com/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/AUTO-CONDUITE-5fh6y0ih.webp',
    description: 'Location de véhicules à double commande en Moselle.',
  },
  {
    id: 'bys-consulting',
    name: 'BYS Consulting',
    url: 'https://nour-ouibo.netlify.app/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/BYS-CONSULTING-ol1gwltl.webp',
    description: "Recrutement, conseil RH et coaching d'entreprise.",
  },
  {
    id: 'blitzclean-77',
    name: 'BlitzClean 77',
    url: 'https://www.blitzclean77.fr/',
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/BLITZCLEAN-77-m4903j3r.webp',
    description: 'Nettoyage de chantiers et de locations en Seine-et-Marne.',
  },
]

function ProjectCard({ project, index }: { project: WebProject; index: number }) {
  return (
    // Cascade par rangée : au-delà d'une trentaine de cartes, un délai cumulé
    // ferait attendre les dernières bien trop longtemps.
    <Reveal delay={(index % 6) * 0.04} className="h-full">
      <div className="group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-border/60 bg-card/40 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={`Site internet ${project.name} créé par VBWEB à Rennes`}
            className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            width={1440}
            height={900}
            loading={index < 6 ? 'eager' : 'lazy'}
            decoding="async"
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
              {projects.length} sites internet créés sur mesure
            </h1>
            <p className="hero-description mx-auto mt-3 max-w-2xl text-pretty text-[13px] leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
              Artisans, commerçants, indépendants et PME : chaque site ci-dessous
              est en ligne aujourd&apos;hui. Cliquez, ils sont tous visitables.
            </p>
          </div>

          {/* ── Chiffres clés ── */}
          <Reveal delay={0.04} className="mx-auto mt-6 max-w-3xl sm:mt-8">
            <dl className="grid grid-cols-3 divide-x divide-border/60 rounded-2xl border border-border/60 bg-card/40 py-4 sm:py-5">
              {[
                { value: `${projects.length}`, label: 'sites en ligne' },
                { value: '80+', label: 'avis 5 étoiles' },
                { value: '100%', label: 'sur mesure' },
              ].map((stat) => (
                <div key={stat.label} className="px-2 text-center sm:px-4">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-xl font-semibold tracking-[-0.02em] text-primary sm:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-0.5 block text-[10px] leading-tight text-muted-foreground sm:text-xs">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.08} className="mx-auto mt-4 max-w-3xl sm:mt-5">
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
