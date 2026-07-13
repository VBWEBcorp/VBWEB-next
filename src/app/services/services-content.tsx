import {
  BarChart3, Code, Globe, Megaphone, Palette, Search, ShieldCheck, Smartphone,
} from 'lucide-react'

import { CtaSection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { Reveal } from '@/components/ui/reveal'

const defaultIcons = [Globe, Smartphone, Search, Palette, Megaphone, Code, ShieldCheck, BarChart3]

/* ------------------------------------------------------------------ */
/*  Static content                                                     */
/* ------------------------------------------------------------------ */

const hero = {
  eyebrow: 'Services',
  title: "Tout ce qu'il faut pour r\u00e9ussir en ligne",
  description:
    "Des prestations compl\u00e8tes, de la conception \u00e0 l'accompagnement continu, adapt\u00e9es \u00e0 toutes les tailles d'entreprise.",
  image:
    'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1460925895917-afdab827c52f-w1920.webp',
}

const services = [
  { title: 'Cr\u00e9ation de site vitrine', description: 'Un site moderne, rapide et responsive qui pr\u00e9sente votre activit\u00e9 et inspire confiance.' },
  { title: 'Application web', description: 'Outils m\u00e9tier, plateformes de r\u00e9servation, espaces clients\u00a0: des applications pens\u00e9es pour simplifier votre quotidien.' },
  { title: 'R\u00e9f\u00e9rencement naturel (SEO)', description: 'Optimisation technique, contenu strat\u00e9gique et suivi de positionnement pour gagner en visibilit\u00e9 sur Google.' },
  { title: 'Identit\u00e9 visuelle', description: 'Logo, charte graphique, supports de communication\u00a0: une image coh\u00e9rente qui vous ressemble.' },
  { title: 'Communication digitale', description: 'Strat\u00e9gie de contenu, r\u00e9seaux sociaux et campagnes pour d\u00e9velopper votre audience en ligne.' },
  { title: 'D\u00e9veloppement sur mesure', description: 'Int\u00e9grations, automatisations, API\u00a0: des solutions techniques taill\u00e9es pour vos besoins sp\u00e9cifiques.' },
  { title: 'Maintenance & s\u00e9curit\u00e9', description: 'Mises \u00e0 jour, sauvegardes, monitoring et corrections pour un site toujours performant et s\u00e9curis\u00e9.' },
  { title: 'Analyse & reporting', description: 'Tableaux de bord clairs pour suivre vos performances, comprendre vos visiteurs et ajuster votre strat\u00e9gie.' },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function ServicesContent() {
  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        image={hero.image}
        breadcrumb="Services"
      />

      {/* ---- Services grid ---- */}
      <section className="relative overflow-hidden bg-card">
        {/* Grain texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          {/* Section header */}
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
              Ce que nous faisons
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Des solutions pour chaque besoin
            </h2>
            <p className="mt-4 text-muted-foreground">
              De la cr&eacute;ation web au r&eacute;f&eacute;rencement, nous couvrons
              l&rsquo;ensemble de votre pr&eacute;sence digitale.
            </p>
          </Reveal>

          {/* Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => {
              const Icon = defaultIcons[i] ?? Globe
              return (
                <Reveal key={s.title} delay={i * 0.04}>
                  <div className="group relative h-full">
                    {/* Glow border on hover */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-px rounded-[1.4rem] bg-gradient-to-br from-primary/40 via-primary/0 to-primary/20 opacity-0 blur-[2px] transition-opacity duration-500 group-hover:opacity-100"
                    />

                    {/* Card */}
                    <div className="relative flex h-full flex-col rounded-[1.35rem] border border-border/60 bg-background/50 p-8 transition-colors duration-500 group-hover:border-primary/30 group-hover:bg-background/70">
                      {/* Icon */}
                      <span className="mb-4 flex size-12 items-center justify-center rounded-xl border border-border/60 bg-background/40 text-muted-foreground/60 transition-colors duration-500 group-hover:border-primary/30 group-hover:text-primary">
                        <Icon className="size-5" aria-hidden />
                      </span>

                      {/* Title */}
                      <h3 className="font-display text-base font-semibold leading-snug">
                        {s.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
