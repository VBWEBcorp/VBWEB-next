'use client'

import { ArrowRight, ArrowUpRight, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { useHomeLang, t } from '@/components/home/lang'
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
  { label: 'Référencement SEO', to: '/referencement-seo' },
  { label: 'Création de site', to: '/creation-site-internet' },
  { label: 'IA en entreprise', to: '/ia-entreprise' },
]

const legalLinks = [
  { label: 'Mentions légales', to: '/mentions-legales' },
  { label: 'Confidentialité', to: '/politique-de-confidentialite' },
  { label: 'CGU', to: '/conditions-generales' },
  { label: 'Cookies', to: '/politique-cookies' },
  { label: 'Plan du site', to: '/plan-du-site' },
]

export function Footer() {
  const { lang } = useHomeLang()
  const tf = t.footer
  return (
    <footer className="relative overflow-hidden bg-background text-foreground">
      {/* Grain global */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative px-3 py-4 sm:px-4 sm:py-5">
        {/* GRANDE CARD QUASI EDGE-TO-EDGE */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-border/60 bg-card/40 backdrop-blur-sm sm:rounded-[1.75rem]">
            {/* Spotlight interne unique, discret */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/[0.05] blur-3xl"
            />

            <div className="relative">
              {/* === SECTION 1 — HERO CTA (compact) === */}
              <div className="border-b border-border/40 p-6 sm:p-8 lg:px-10 lg:py-8">
                <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
                  <div>
                    <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
                      {tf.eyebrow[lang]}
                    </p>
                    <h2 className="mt-3 font-display text-balance text-2xl font-medium leading-[1.1] tracking-[-0.02em] text-foreground sm:text-3xl">
                      {tf.h2Part1[lang]}{' '}
                      <span className="italic text-muted-foreground/80">{tf.h2Part2[lang]}</span> ?
                    </h2>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground sm:text-[14px]">
                      {tf.subtitle[lang]}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="group/cta inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-primary px-6 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-primary/85"
                  >
                    {tf.cta[lang]}
                    <ArrowRight className="size-3.5 transition-transform group-hover/cta:translate-x-0.5" />
                  </Link>
                </div>
              </div>

              {/* === SECTION 2 — GRILLE LIENS === */}
              <div className="grid gap-px bg-border/20 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
                {/* Brand + coordonnées */}
                <div className="bg-card/60 p-8 sm:p-10">
                  <Link href="/" className="group/logo inline-flex items-center gap-2.5">
                    <Image
                      src="https://pub-698f857760da42999dac8854114fbc41.r2.dev/VBWEB-LOGO-BLEU-BLANC-C3ZJ3z59.webp"
                      alt="VBWEB - Agence web & SEO"
                      width={1920}
                      height={463}
                      loading="lazy"
                      sizes="149px"
                      className="h-9 w-auto transition-transform duration-300 group-hover/logo:scale-105"
                    />
                  </Link>

                  <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-muted-foreground">
                    {tf.brandDesc[lang]}
                  </p>

                  {/* Coordonnées */}
                  <div className="mt-6 space-y-2">
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                      className="group/c flex items-center gap-3 rounded-xl border border-border/40 bg-foreground/5 px-3 py-2.5 text-[13px] text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:bg-foreground/10 hover:text-foreground"
                    >
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-border/40 bg-foreground/5 text-muted-foreground transition-colors group-hover/c:border-primary/40 group-hover/c:text-primary">
                        <Phone className="size-3.5" />
                      </span>
                      {siteConfig.phone}
                    </a>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="group/c flex items-center gap-3 rounded-xl border border-border/40 bg-foreground/5 px-3 py-2.5 text-[13px] text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:bg-foreground/10 hover:text-foreground"
                    >
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-border/40 bg-foreground/5 text-muted-foreground transition-colors group-hover/c:border-primary/40 group-hover/c:text-primary">
                        <Mail className="size-3.5" />
                      </span>
                      <span className="truncate">{siteConfig.email}</span>
                    </a>
                  </div>
                </div>

                {/* Navigation */}
                <nav aria-label="Navigation" className="bg-card/60 p-8 sm:p-10">
                  <p className="font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground/60">
                    {tf.navTitle[lang]}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {navLinks.map((l) => (
                      <li key={l.label}>
                        <Link
                          href={l.to}
                          className="group/link inline-flex items-center gap-1 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {l.label}
                          <ArrowUpRight className="size-3 opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Services */}
                <nav aria-label="Services" className="bg-card/60 p-8 sm:p-10">
                  <p className="font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground/60">
                    {tf.servicesTitle[lang]}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {serviceLinks.map((l) => (
                      <li key={l.label}>
                        <Link
                          href={l.to}
                          className="group/link inline-flex items-center gap-1 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {l.label}
                          <ArrowUpRight className="size-3 opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

              </div>

              {/* === SECTION 3 — BOTTOM BAR === */}
              <div className="border-t border-border/40 bg-card/80 px-6 py-5 sm:px-10">
                {/* Liens légaux sur une seule ligne */}
                <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                  {legalLinks.map((l) => (
                    <Link
                      key={l.label}
                      href={l.to}
                      className="text-[11px] text-muted-foreground/70 transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  ))}
                </nav>

                {/* Copyright */}
                <div className="mt-4 flex flex-col items-start justify-between gap-2 border-t border-border/30 pt-4 sm:flex-row sm:items-center">
                  <p className="text-[11px] text-muted-foreground/60">
                    © {new Date().getFullYear()} {siteConfig.name} · {tf.copyright[lang]}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground/40">
                    {tf.subTagline[lang]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
