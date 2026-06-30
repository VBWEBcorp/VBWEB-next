'use client'

import {
  ArrowRight,
  ArrowUpRight,
  Search,
  MapPin,
  Globe,
  FileSearch,
  Code,
  User,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

import { useHomeLang, t } from '@/components/home/lang'
import { LangToggle } from '@/components/home/lang-toggle'
import { cn } from '@/lib/utils'

interface MenuItem {
  to: string
  label: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  image?: string
}

interface MenuSection {
  title?: string
  items: MenuItem[]
  featured?: boolean
}

// Routes & icons stay constant; labels/descriptions are looked up from translations at render time.
const ABOUT_ITEM = { to: '/a-propos', key: 'about' as const, icon: User, image: '/victor.jpg' }
const SERVICE_ITEMS = [
  { to: '/referencement-seo-rennes', key: 'seo' as const, icon: Search },
  { to: '/referencement-local-rennes', key: 'localSeo' as const, icon: MapPin },
  { to: '/creation-site-internet-rennes', key: 'webDesign' as const, icon: Globe },
  { to: '/audit-seo-gratuit', key: 'diagnostic' as const, icon: FileSearch },
]
const CASE_STUDY_ITEMS = [
  { to: '/etudes-de-cas/sites-internet', key: 'sites' as const, icon: Globe },
  { to: '/etudes-de-cas/referencement', key: 'seoCase' as const, icon: Search },
  { to: '/etudes-de-cas/applications-web', key: 'apps' as const, icon: Code },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { lang } = useHomeLang()
  const navItems = t.navbar.items[lang]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const sections: MenuSection[] = [
    {
      title: t.navbar.caseStudies[lang],
      featured: true,
      items: CASE_STUDY_ITEMS.map((c) => ({ ...c, label: navItems[c.key].label, description: navItems[c.key].description })),
    },
    {
      title: t.navbar.services[lang],
      items: SERVICE_ITEMS.map((s) => ({ ...s, label: navItems[s.key].label, description: navItems[s.key].description })),
    },
    {
      items: [{ ...ABOUT_ITEM, label: navItems.about.label, description: navItems.about.description }],
    },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 w-full px-4 pt-4 sm:px-6 sm:pt-5">
        <div
          className={cn(
            'mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border border-border/60 bg-background/75 px-4 backdrop-blur-xl transition-all duration-500 sm:rounded-full sm:px-5',
            scrolled
              ? 'shadow-[0_10px_40px_rgba(0,0,0,0.18)]'
              : 'shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Accueil"
            className="group flex items-center gap-2"
          >
            <Image
              src="https://pub-698f857760da42999dac8854114fbc41.r2.dev/VBWEB-LOGO-BLEU-BLANC-C3ZJ3z59.webp"
              alt="VBWEB - Agence web & SEO"
              width={1920}
              height={463}
              priority
              sizes="133px"
              className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden h-9 items-center gap-1.5 rounded-full bg-primary px-4 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-primary/85 sm:inline-flex"
            >
              {t.navbar.prendreRdv[lang]}
              <ArrowRight className="size-3.5" />
            </Link>

            <LangToggle />

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mega-menu"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-card/40 text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-card/70"
            >
              <span className="relative flex size-4 flex-col items-center justify-center">
                <span
                  className={cn(
                    'block h-px w-4 bg-current transition-all duration-300',
                    open ? 'translate-y-px rotate-45' : '-translate-y-1'
                  )}
                />
                <span
                  className={cn(
                    'block h-px w-4 bg-current transition-all duration-300',
                    open ? '-translate-y-0 -rotate-45' : 'translate-y-1'
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Dropdown menu compact */}
      {open && (
        <>
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-background/40 backdrop-blur-sm animate-[fade-in_0.2s_ease-out_both]"
          />

          {/* Panel */}
          <div
            id="mega-menu"
            className="fixed inset-x-4 top-[80px] z-50 mx-auto max-w-md sm:inset-x-6 sm:top-[88px] lg:max-w-4xl animate-[menu-in_0.22s_cubic-bezier(0.22,1,0.36,1)_both]"
          >
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-background/95 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl">
              {/* Liste verticale (mobile) / grille côte à côte (desktop) */}
              <nav className="max-h-[min(70vh,560px)] overflow-y-auto p-2 lg:max-h-none lg:overflow-visible lg:p-4">
                <div className="lg:grid lg:grid-cols-3 lg:gap-2">
                  {sections.map((section, idx) => (
                    <div
                      key={section.title ?? `section-${idx}`}
                      className={cn(
                        idx > 0 && 'mt-1 border-t border-border/40 pt-2',
                        'lg:mt-0 lg:border-t-0 lg:pt-0',
                        section.featured && 'rounded-xl bg-primary/[0.04] p-1 lg:p-2'
                      )}
                    >
                      {section.title && (
                        <p
                          className={cn(
                            'px-3 pt-2 pb-1.5 font-display text-[10px] font-semibold uppercase tracking-[0.2em]',
                            section.featured ? 'text-primary' : 'text-white'
                          )}
                        >
                          {section.title}
                        </p>
                      )}
                      <div className="space-y-0.5">
                        {section.items.map((item) => {
                          const isActive = pathname === item.to
                          return (
                            <Link
                              key={item.to}
                              href={item.to}
                              onClick={() => setOpen(false)}
                              className={cn(
                                'group/item flex items-center gap-3 rounded-xl px-3 transition-colors duration-200',
                                section.featured ? 'py-2' : 'py-2.5',
                                isActive
                                  ? 'bg-foreground/[0.05] text-foreground'
                                  : 'text-foreground/85 hover:bg-foreground/[0.05] hover:text-foreground'
                              )}
                            >
                              {item.image && (
                                <span className="flex size-7 shrink-0 overflow-hidden rounded-full ring-1 ring-border/60">
                                  <Image
                                    src={item.image}
                                    alt=""
                                    width={28}
                                    height={28}
                                    sizes="28px"
                                    className="size-full object-cover"
                                  />
                                </span>
                              )}
                              <span className="flex-1 min-w-0">
                                <span className="block text-[14px] font-medium">
                                  {item.label}
                                </span>
                                {section.featured && (
                                  <span className="mt-0.5 block text-[12px] text-muted-foreground/70">
                                    {item.description}
                                  </span>
                                )}
                              </span>
                              <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground/30 opacity-0 transition-all duration-200 group-hover/item:opacity-100" />
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </nav>

              {/* Footer CTA compact */}
              <div className="border-t border-border/40 p-3 lg:p-4">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="group flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-primary text-[13px] font-medium text-primary-foreground transition-colors hover:bg-primary/85 lg:h-11 lg:text-sm"
                >
                  Parlez-moi de votre projet
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
