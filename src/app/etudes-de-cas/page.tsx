import type { Metadata } from 'next'
import Link from 'next/link'
import { Globe, Search, Settings, ArrowRight } from 'lucide-react'

import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Découvrez nos réalisations : sites internet, référencement SEO et applications web pour PME, artisans et commerces à Rennes et en Bretagne. Résultats concrets et mesurables.'

export const metadata: Metadata = {
  title: 'Études de cas | Réalisations SEO & Web à Rennes',
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
    description: '19+ sites créés pour des PME, artisans et commerces. Design moderne, responsive et pensé pour convertir.',
    href: '/etudes-de-cas/sites-internet',
    count: '19+ projets',
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

export default function EtudesDeCasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Portfolio
            </p>
            <h1 className="mt-4 font-display text-balance text-4xl leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
              Nos réalisations à Rennes
            </h1>
            <p className="hero-description mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Sites internet, référencement SEO et applications web : découvrez des résultats concrets obtenus pour des entreprises à Rennes et en Bretagne.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group overflow-hidden rounded-2xl border border-border bg-background/60 p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <cat.icon className="size-5" aria-hidden />
                </span>
                <h2 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {cat.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cat.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="rounded-full bg-foreground/5 px-3 py-1 text-[11px] font-medium text-muted-foreground/60">
                    {cat.count}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary transition-all group-hover:gap-2.5">
                    Découvrir
                    <ArrowRight className="size-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Maillage interne */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl tracking-[-0.02em] text-foreground sm:text-3xl">
            Nos services
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
            Chaque étude de cas est le résultat d&apos;un accompagnement sur mesure.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-4 max-w-3xl mx-auto">
            {[
              { title: 'Référencement SEO', href: '/referencement-seo-rennes' },
              { title: 'SEO local', href: '/referencement-local-rennes' },
              { title: 'Création de site', href: '/creation-site-internet-rennes' },
              { title: 'Audit SEO gratuit', href: '/audit-seo-gratuit' },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="rounded-xl border border-border bg-card/50 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/20 hover:text-primary"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
