import type { Metadata } from 'next'
import Link from 'next/link'

import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Plan du site VBWEB : retrouvez toutes nos pages de services SEO, création de site internet et développement web en Bretagne et à Nantes.'

export const metadata: Metadata = {
  title: 'Plan du Site',
  description,
  alternates: { canonical: '/plan-du-site' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Plan du Site', description, '/plan-du-site'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Plan du site', path: '/plan-du-site' },
    ]),
  ],
}

const villes = ['Rennes', 'Vannes', 'Brest', 'Lorient', 'Saint-Malo', 'Quimper', 'Saint-Brieuc', 'Nantes']
const villeSlug = (v: string) => v.toLowerCase().replace(/\s+/g, '-')

// --- Consultant SEO ---
const consultantSeo = villes.map((v) => ({
  label: `Consultant SEO ${v}`,
  href: v === 'Rennes' ? '/' : `/consultant-seo-${villeSlug(v)}`,
}))

// --- Freelance SEO ---
const freelanceSeo = villes.map((v) => ({
  label: `Freelance SEO ${v}`,
  href: `/freelance-seo-${villeSlug(v)}`,
}))

// --- Agence SEO ---
const agenceSeo = villes.map((v) => ({
  label: `Agence SEO ${v}`,
  href: `/agence-seo-${villeSlug(v)}`,
}))

// --- Agence Référencement ---
const agenceReferencement = villes.map((v) => ({
  label: `Agence R\u00e9f\u00e9rencement ${v}`,
  href: `/agence-referencement-${villeSlug(v)}`,
}))

// --- Référencement Naturel ---
const referencementNaturel = villes.map((v) => ({
  label: `R\u00e9f\u00e9rencement Naturel ${v}`,
  href: `/referencement-naturel-${villeSlug(v)}`,
}))

// --- Référencement Local ---
const referencementLocal = villes.map((v) => ({
  label: `R\u00e9f\u00e9rencement Local ${v}`,
  href: `/referencement-local-${villeSlug(v)}`,
}))

// --- Création de site internet ---
const siteVilles = villes.map((v) => ({
  label: `Cr\u00e9ation Site Internet ${v}`,
  href: `/creation-site-internet-${villeSlug(v)}`,
}))

// --- Développement Web ---
const devWeb = [
  ...villes.map((v) => ({
    label: `D\u00e9veloppement Web ${v}`,
    href: `/developpement-web-${villeSlug(v)}`,
  })),
  ...villes.map((v) => ({
    label: `Agence D\u00e9veloppement Web ${v}`,
    href: `/agence-developpement-web-${villeSlug(v)}`,
  })),
]

// --- Par métier (NATIONAL — pas de ville) ---
// Catégories mères + sous-métiers
const metiersCategories = [
  {
    categorie: 'Site Internet Artisan',
    volume: '260/mois',
    href: '/site-internet-artisan',
    sousMetiers: [
      { label: 'Site Internet Plombier', href: '/site-internet-plombier' },
      { label: 'Site Internet Couvreur', href: '/site-internet-couvreur' },
      { label: 'Site Internet \u00c9lectricien', href: '/site-internet-electricien' },
      { label: 'Site Internet Ma\u00e7on', href: '/site-internet-macon' },
      { label: 'Site Internet Peintre', href: '/site-internet-peintre' },
      { label: 'Site Internet Paysagiste', href: '/site-internet-paysagiste' },
      { label: 'Site Internet Menuisier', href: '/site-internet-menuisier' },
      { label: 'Site Internet Carreleur', href: '/site-internet-carreleur' },
    ],
  },
  {
    categorie: 'Site Internet Avocat',
    volume: '590/mois',
    href: '/site-internet-avocat',
    sousMetiers: [
      { label: 'Site Internet Notaire', href: '/site-internet-notaire' },
      { label: 'Site Internet Huissier', href: '/site-internet-huissier' },
    ],
  },
  {
    categorie: 'Site Internet Th\u00e9rapeute',
    volume: '70/mois',
    href: '/site-internet-therapeute',
    sousMetiers: [
      { label: 'Site Internet Professionnel de Sant\u00e9', href: '/site-internet-professionnel-de-sante' },
      { label: 'Site Internet Kin\u00e9', href: '/site-internet-kine' },
      { label: 'Site Internet Psychologue', href: '/site-internet-psychologue' },
      { label: 'Site Internet Ost\u00e9opathe', href: '/site-internet-osteopathe' },
      { label: 'Site Internet Sophrologue', href: '/site-internet-sophrologue' },
    ],
  },
]

const pages = [
  { label: 'Accueil', href: '/' },
  { label: '\u00c0 propos', href: '/a-propos' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
  { label: 'Audit SEO Gratuit', href: '/audit-seo-gratuit' },
]

const etudes = [
  { label: '\u00c9tudes de cas', href: '/etudes-de-cas' },
  { label: 'Sites Internet', href: '/etudes-de-cas/sites-internet' },
  { label: 'R\u00e9f\u00e9rencement', href: '/etudes-de-cas/referencement' },
  { label: 'Applications Web', href: '/etudes-de-cas/applications-web' },
]

const legal = [
  { label: 'Mentions l\u00e9gales', href: '/mentions-legales' },
  { label: 'Politique de confidentialit\u00e9', href: '/politique-de-confidentialite' },
  { label: 'Conditions g\u00e9n\u00e9rales', href: '/conditions-generales' },
  { label: 'Politique cookies', href: '/politique-cookies' },
]

function SitemapSection({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="font-display text-base font-semibold text-foreground mb-3">{title}</h2>
      <ul className="space-y-1.5">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function PlanDuSitePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-6xl px-4 pt-20 pb-24 sm:px-6 lg:pt-28 lg:pb-32">

          <div className="text-center mb-16">
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase mb-4">
              Navigation
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Plan du site
            </h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
              Retrouvez l&rsquo;ensemble de nos services SEO, cr&eacute;ation de sites et d&eacute;veloppement web en Bretagne.
            </p>
          </div>

          {/* SEO & Référencement — LOCAL */}
          <div className="mb-14">
            <h2 className="font-display text-xl font-bold text-foreground mb-2 pb-3 border-b border-border/50">
              R&eacute;f&eacute;rencement & SEO
            </h2>
            <p className="text-xs text-muted-foreground/50 mb-8">Par ville en Bretagne & Nantes</p>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              <SitemapSection title="Consultant SEO" links={consultantSeo} />
              <SitemapSection title="Freelance SEO" links={freelanceSeo} />
              <SitemapSection title="Agence SEO" links={agenceSeo} />
              <SitemapSection title="Agence R&eacute;f&eacute;rencement" links={agenceReferencement} />
              <SitemapSection title="R&eacute;f&eacute;rencement Naturel" links={referencementNaturel} />
              <SitemapSection title="R&eacute;f&eacute;rencement Local" links={referencementLocal} />
            </div>
          </div>

          {/* Création de sites — LOCAL */}
          <div className="mb-14">
            <h2 className="font-display text-xl font-bold text-foreground mb-2 pb-3 border-b border-border/50">
              Cr&eacute;ation de Site Internet & D&eacute;veloppement Web
            </h2>
            <p className="text-xs text-muted-foreground/50 mb-8">Par ville en Bretagne & Nantes</p>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <SitemapSection title="Par ville" links={siteVilles} />
              <SitemapSection title="D&eacute;veloppement Web" links={devWeb} />
            </div>
          </div>

          {/* Par métier — NATIONAL */}
          <div className="mb-14">
            <h2 className="font-display text-xl font-bold text-foreground mb-2 pb-3 border-b border-border/50">
              Site Internet par M&eacute;tier
            </h2>
            <p className="text-xs text-muted-foreground/50 mb-8">Pages nationales par profession</p>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {metiersCategories.map((cat) => (
                <div key={cat.categorie}>
                  <h3 className="font-display text-base font-semibold text-foreground mb-1">
                    <Link href={cat.href} className="hover:text-primary transition-colors">
                      {cat.categorie}
                    </Link>
                  </h3>
                  <ul className="space-y-1.5 mt-3">
                    {cat.sousMetiers.map((m) => (
                      <li key={m.href}>
                        <Link href={m.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          {m.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Autres pages */}
          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-8 pb-3 border-b border-border/50">
              Autres pages
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <SitemapSection title="Pages" links={pages} />
              <SitemapSection title="&Eacute;tudes de Cas" links={etudes} />
              <SitemapSection title="L&eacute;gal" links={legal} />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
