import type { Metadata } from 'next'
import Link from 'next/link'

import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Plan du site VBWEB : retrouvez toutes nos pages — services SEO, création de site internet, études de cas et informations légales.'

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

const pages = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const services = [
  { label: 'Référencement SEO', href: '/referencement-seo' },
  { label: 'Création de site internet', href: '/creation-site-internet' },
  { label: 'IA en entreprise', href: '/ia-entreprise' },
  { label: 'Freelance SEO', href: '/freelance-seo' },
  { label: 'Audit SEO gratuit', href: '/audit-seo-gratuit' },
]

const etudes = [
  { label: 'Études de cas', href: '/etudes-de-cas' },
  { label: 'Sites Internet', href: '/etudes-de-cas/sites-internet' },
  { label: 'Référencement', href: '/etudes-de-cas/referencement' },
  { label: 'Applications Web', href: '/etudes-de-cas/applications-web' },
]

const legal = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
  { label: 'Conditions générales', href: '/conditions-generales' },
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
              Retrouvez l&rsquo;ensemble des pages de VBWEB.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <SitemapSection title="Pages" links={pages} />
            <SitemapSection title="Services" links={services} />
            <SitemapSection title="&Eacute;tudes de Cas" links={etudes} />
            <SitemapSection title="L&eacute;gal" links={legal} />
          </div>

        </div>
      </div>
    </>
  )
}
