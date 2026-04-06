import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/seo'

const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Services', to: '/services' },
  { label: 'Études de cas', to: '/etudes-de-cas' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const serviceLinks = [
  { label: 'Référencement SEO', to: '/referencement-seo-rennes' },
  { label: 'Référencement local', to: '/referencement-local-rennes' },
  { label: 'Création de site', to: '/creation-site-internet-rennes' },
  { label: 'Audit SEO gratuit', to: '/audit-seo-gratuit' },
]

const legalLinks = [
  { label: 'Mentions légales', to: '/mentions-legales' },
  { label: 'Confidentialité', to: '/politique-de-confidentialite' },
  { label: 'CGU', to: '/conditions-generales' },
  { label: 'Cookies', to: '/politique-cookies' },
  { label: 'Plan du site', to: '/plan-du-site' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-background text-foreground">
      {/* Background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/[0.04] blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-primary/[0.02] blur-[100px]"
      />

      {/* CTA band */}
      <div className="relative border-b border-border/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                Un projet en tête ?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Discutons de votre visibilite sur Google. Devis gratuit sous 24h.
              </p>
            </div>
            <Button size="lg" className="group shrink-0 bg-primary text-primary-foreground hover:bg-primary/85" asChild>
              <Link href="/contact">
                Demander un devis
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-[18px]"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </span>
              <span className="text-foreground">{siteConfig.name}</span>
            </Link>
            <p className="max-w-xs text-[13px] leading-relaxed text-muted-foreground/60">
              Consultant SEO et developpeur web a Rennes. J&apos;aide les PME, artisans et commerces a attirer plus de clients grace a Google.
            </p>
            {/* Contact info */}
            <div className="space-y-2.5 pt-1">
              <a
                href={`tel:${siteConfig.phone}`}
                className="group flex items-center gap-3 text-sm text-muted-foreground/60 transition-colors hover:text-foreground"
              >
                <span className="flex size-8 items-center justify-center rounded-lg bg-foreground/5 text-primary transition-colors group-hover:bg-foreground/10">
                  <Phone className="size-3.5" />
                </span>
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center gap-3 text-sm text-muted-foreground/60 transition-colors hover:text-foreground"
              >
                <span className="flex size-8 items-center justify-center rounded-lg bg-foreground/5 text-primary transition-colors group-hover:bg-foreground/10">
                  <Mail className="size-3.5" />
                </span>
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground/60">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-foreground/5 text-primary">
                  <MapPin className="size-3.5" />
                </span>
                <span>Rennes, Bretagne</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigation">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/50">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.to}
                    className="text-sm text-foreground/45 transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/50">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.to}
                    className="text-sm text-foreground/45 transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/50">
              Legal
            </h3>
            <ul className="mt-5 space-y-3">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.to}
                    className="text-sm text-foreground/45 transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-border/50" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-muted-foreground/40">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés
          </p>
          <p className="text-xs text-muted-foreground/40">
            Consultant SEO a Rennes, Bretagne
          </p>
        </div>
      </div>
    </footer>
  )
}
