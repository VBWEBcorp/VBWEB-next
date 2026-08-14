import type { Metadata } from 'next'
import Link from 'next/link'
import { Globe, Search, Settings, ArrowRight } from 'lucide-react'

import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'
import { Reveal } from '@/components/ui/reveal'

const description =
  'Découvrez nos réalisations : sites internet, référencement SEO et applications web pour PME, artisans et commerces partout en France. Résultats concrets et mesurables.'

export const metadata: Metadata = {
  title: 'Études de cas | Réalisations SEO & Web',
  description,
  alternates: { canonical: '/etudes-de-cas' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd(
      'Études de cas',
      description,
      '/etudes-de-cas',
      ['h1', '.hero-description']
    ),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Études de cas', path: '/etudes-de-cas' },
    ]),
  ],
}

const categories = [
  {
    icon: Globe,
    title: 'Sites Internet',
    description: '31 sites créés pour des PME, artisans et commerces. Design moderne, responsive et pensé pour convertir.',
    href: '/etudes-de-cas/sites-internet',
    count: '31 projets',
  },
  {
    icon: Search,
    title: 'Référencement SEO',
    description: 'Résultats concrets en référencement naturel et local : trafic, positions Google et génération de clients.',
    href: '/etudes-de-cas/referencement',
    count: '3 études détaillées',
  },
  {
    icon: Settings,
    title: 'Applications Web',
    description: 'CRM, logiciels de gestion et plateformes métier développés sur mesure avec démonstrations vidéo.',
    href: '/etudes-de-cas/applications-web',
    count: '3 projets',
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

export default function EtudesDeCasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        {grain}
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div
            className="mx-auto max-w-3xl text-center"
            style={{
              animation:
                'hero-fade-up 0.65s cubic-bezier(0.22,1,0.36,1) both',
            }}
          >
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Portfolio
            </p>
            <h1 className="mt-4 font-display text-balance text-4xl font-medium leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
              Nos réalisations{' '}
              <span className="italic text-muted-foreground">partout en France</span>
            </h1>
            <p className="hero-description mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Sites internet, référencement SEO et applications web : découvrez
              des résultats concrets obtenus pour des entreprises partout en
              France.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative overflow-hidden bg-card">
        {grain}
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-3">
            {categories.map((cat, i) => (
              <Reveal key={cat.href} delay={i * 0.12}>
                <Link
                  href={cat.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-border/60 bg-card/40 p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  {/* Glow border on hover */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -inset-px rounded-[1.4rem] bg-gradient-to-br from-primary/40 via-primary/0 to-primary/20 opacity-0 blur-[2px] transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <span className="relative flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-colors duration-300 group-hover:bg-primary/15 group-hover:text-primary">
                    <cat.icon className="size-5" aria-hidden />
                  </span>

                  <h2 className="relative mt-5 font-display text-lg font-semibold text-foreground">
                    {cat.title}
                  </h2>

                  <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {cat.description}
                  </p>

                  <div className="relative mt-6 flex items-center justify-between">
                    <span className="rounded-full bg-foreground/5 px-3 py-1 text-[11px] font-medium text-muted-foreground/70">
                      {cat.count}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary transition-all duration-300 group-hover:gap-2.5">
                      Découvrir
                      <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Maillage interne */}
      <section className="relative overflow-hidden bg-background">
        {grain}
        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal>
            <h2 className="font-display text-2xl font-medium tracking-[-0.02em] text-foreground sm:text-3xl">
              Nos services
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
              Chaque étude de cas est le résultat d&apos;un accompagnement sur
              mesure.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-4">
              {[
                { title: 'Référencement SEO', href: '/referencement-seo' },
                { title: 'Création de site', href: '/creation-site-internet' },
                { title: 'Audit SEO gratuit', href: '/audit-seo-gratuit' },
              ].map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="rounded-xl border border-border/60 bg-card/40 px-4 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary/30 hover:text-primary"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
