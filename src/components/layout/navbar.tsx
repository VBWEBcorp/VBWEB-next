'use client'

import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Search,
  Globe,
  User,
  Sparkles,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { useAudit } from '@/components/ui/audit-provider'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

import { useHomeLang, t } from '@/components/home/lang'
import { LangToggle } from '@/components/home/lang-toggle'
import { cn } from '@/lib/utils'

interface MenuItem {
  to: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  image?: string
}

interface MenuSection {
  title?: string
  items: MenuItem[]
}

// Routes & icons stay constant; labels are looked up from translations at render time.
const ABOUT_ITEM = { to: '/a-propos', key: 'about' as const, icon: User, image: '/victor-beasse.jpg' }
// Les 3 activités — alignées avec la page d'accueil
// Ordre de lecture d'un visiteur (11/11/2026) : le site d'abord, puis la visibilité, puis l'IA.
const SERVICE_ITEMS = [
  { to: '/creation-site-internet', key: 'webDesign' as const, icon: Globe },
  { to: '/referencement-seo', key: 'seo' as const, icon: Search },
  { to: '/ia-entreprise', key: 'ia' as const, icon: Sparkles },
]
// Études de cas — une seule rubrique, 3 catégories cliquables ; les sites, les plus parlants, en tête
const CASE_STUDY_ITEMS = [
  { to: '/etudes-de-cas/sites-internet', key: 'sites' as const, icon: Globe },
  { to: '/etudes-de-cas/applications-web', key: 'apps' as const, icon: Sparkles },
  { to: '/etudes-de-cas/referencement', key: 'seoCase' as const, icon: Search },
]

type NavItem = { to: string; label: string; description: string; icon: React.ComponentType<{ className?: string }> }

const topLink =
  'inline-flex h-9 items-center gap-1 rounded-full px-3.5 text-[14px] font-medium transition-colors duration-200 hover:bg-foreground/[0.05] hover:text-foreground'

// Sous-menu du header sur ordinateur. Le titre mène à la page de la rubrique ; le survol
// (ou le clavier) déplie ses pages avec une ligne d'explication. Les liens sont toujours
// dans le HTML, seulement masqués : Google les lit, et rien n'attend le JavaScript.
function NavDropdown({ href, label, items, active }: { href: string; label: string; items: NavItem[]; active: boolean }) {
  return (
    <div className="group/dd relative">
      <Link href={href} className={cn(topLink, active ? 'text-foreground' : 'text-muted-foreground')}>
        {label}
        <ChevronDown
          aria-hidden
          className="size-3.5 opacity-60 transition-transform duration-200 group-hover/dd:rotate-180 group-has-[:focus-visible]/dd:rotate-180"
        />
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 w-[350px] -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-[opacity,translate,visibility] duration-200 ease-out group-hover/dd:visible group-hover/dd:translate-y-0 group-hover/dd:opacity-100 group-has-[:focus-visible]/dd:visible group-has-[:focus-visible]/dd:translate-y-0 group-has-[:focus-visible]/dd:opacity-100 motion-reduce:transition-none">
        <div className="rounded-2xl border border-border/60 bg-background/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          {items.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className="group/item flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-foreground/[0.05]"
            >
              <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/15">
                <item.icon className="size-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[14px] font-medium text-foreground">{item.label}</span>
                <span className="block text-[12.5px] leading-snug text-muted-foreground">{item.description}</span>
              </span>
              <ArrowUpRight className="mt-1 size-3.5 shrink-0 text-muted-foreground/40 opacity-0 transition-opacity duration-200 group-hover/item:opacity-100" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { lang } = useHomeLang()
  const { openAudit } = useAudit()
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
      items: CASE_STUDY_ITEMS.map((c) => ({ ...c, label: navItems[c.key].label })),
    },
    {
      title: t.navbar.services[lang],
      items: SERVICE_ITEMS.map((s) => ({ ...s, label: navItems[s.key].label })),
    },
    {
      items: [{ ...ABOUT_ITEM, label: navItems.about.label }],
    },
  ]

  const serviceItems: NavItem[] = SERVICE_ITEMS.map((s) => ({ ...s, ...navItems[s.key] }))
  const caseStudyItems: NavItem[] = CASE_STUDY_ITEMS.map((c) => ({ ...c, ...navItems[c.key] }))

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

          {/* Ordinateur : ce qu'un visiteur cherche en arrivant, sans ouvrir de menu :
              ce qu'on propose, ce qu'on a déjà livré, qui est derrière. */}
          <nav aria-label={lang === 'en' ? 'Main navigation' : 'Navigation principale'} className="hidden items-center gap-0.5 lg:flex">
            <NavDropdown
              href="/services"
              label={t.navbar.services[lang]}
              items={serviceItems}
              active={pathname === '/services' || SERVICE_ITEMS.some((s) => pathname === s.to)}
            />
            <NavDropdown
              href="/etudes-de-cas"
              label={t.navbar.caseStudies[lang]}
              items={caseStudyItems}
              active={pathname.startsWith('/etudes-de-cas')}
            />
            <Link
              href="/a-propos"
              className={cn(topLink, pathname === '/a-propos' ? 'text-foreground' : 'text-muted-foreground')}
            >
              {navItems.about.label}
            </Link>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openAudit}
              className="hidden h-9 items-center gap-1.5 rounded-full bg-primary px-4 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-primary/85 sm:inline-flex"
            >
              {t.navbar.prendreRdv[lang]}
              <ArrowRight className="size-3.5" />
            </button>

            <LangToggle />

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mega-menu"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              className="group flex h-9 w-9 lg:hidden items-center justify-center rounded-full border border-border/60 bg-card/40 text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-card/70"
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
                        'lg:mt-0 lg:border-t-0 lg:pt-0'
                      )}
                    >
                      {section.title && (
                        <div className="mb-2 flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2">
                          <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                          <p className="font-display text-[12px] font-bold uppercase tracking-[0.18em] text-white">
                            {section.title}
                          </p>
                        </div>
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
                                'group/item flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-200',
                                isActive
                                  ? 'bg-foreground/[0.05] text-foreground'
                                  : 'text-muted-foreground hover:bg-foreground/[0.05] hover:text-foreground'
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
                              <span className="flex-1 min-w-0 text-[14px] font-medium">
                                {item.label}
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
                  Parlez-nous de votre projet
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
