'use client'

import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Search,
  MapPin,
  Globe,
  FileSearch,
  Briefcase,
  Code,
  Layers,
  Home,
  User,
  Mail,
  Image as ImageIcon,
  BookOpen,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

import { ThemeToggle } from '@/components/theme/theme-toggle'
import { cn } from '@/lib/utils'

interface MenuItem {
  to: string
  label: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

interface MenuSection {
  title: string
  items: MenuItem[]
}

const mainSection: MenuSection = {
  title: 'Navigation',
  items: [
    { to: '/', label: 'Accueil', description: 'Page principale', icon: Home },
    { to: '/a-propos', label: 'À propos', description: "L'histoire et la vision", icon: User },
    { to: '/contact', label: 'Contact', description: 'Devis gratuit sous 24h', icon: Mail },
  ],
}

const servicesSection: MenuSection = {
  title: 'Services',
  items: [
    {
      to: '/referencement-seo-rennes',
      label: 'Référencement SEO',
      description: 'Optimisation technique et contenu',
      icon: Search,
    },
    {
      to: '/referencement-local-rennes',
      label: 'Référencement local',
      description: 'Google Maps et SEO local',
      icon: MapPin,
    },
    {
      to: '/creation-site-internet-rennes',
      label: 'Création de site',
      description: 'Sites vitrines & e-commerce',
      icon: Globe,
    },
    {
      to: '/audit-seo-gratuit',
      label: 'Audit SEO gratuit',
      description: 'Analyse complète sous 48h',
      icon: FileSearch,
    },
  ],
}

const caseStudiesSection: MenuSection = {
  title: 'Études de cas',
  items: [
    {
      to: '/etudes-de-cas/sites-internet',
      label: 'Sites internet',
      description: 'Vitrines, e-commerce, sur-mesure',
      icon: Globe,
    },
    {
      to: '/etudes-de-cas/referencement',
      label: 'Référencement',
      description: 'Stratégies SEO et résultats',
      icon: Search,
    },
    {
      to: '/etudes-de-cas/applications-web',
      label: 'Applications web',
      description: 'CRM, dashboards, automatisations',
      icon: Code,
    },
  ],
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hasGallery, setHasGallery] = useState(false)
  const [hasBlog, setHasBlog] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const checkFeatures = async () => {
      try {
        const [galleryRes, blogRes] = await Promise.all([
          fetch('/api/gallery/settings'),
          fetch('/api/blog/settings'),
        ])
        const gallery = await galleryRes.json()
        const blog = await blogRes.json()
        setHasGallery(!!gallery.enabled)
        setHasBlog(!!blog.enabled)
      } catch (error) {
        console.error('Failed to check features:', error)
      }
    }
    checkFeatures()
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

  const moreSection: MenuSection | null =
    hasGallery || hasBlog
      ? {
          title: 'Plus',
          items: [
            ...(hasGallery
              ? [
                  {
                    to: '/gallery',
                    label: 'Galerie',
                    description: 'Inspirations visuelles',
                    icon: ImageIcon,
                  },
                ]
              : []),
            ...(hasBlog
              ? [
                  {
                    to: '/blog',
                    label: 'Blog',
                    description: 'Articles et conseils SEO',
                    icon: BookOpen,
                  },
                ]
              : []),
          ],
        }
      : null

  const sections = [mainSection, servicesSection, caseStudiesSection]
  if (moreSection) sections.push(moreSection)

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
            <span className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/15 transition-transform duration-300 group-hover:scale-105">
              <Globe className="size-4" aria-hidden />
            </span>
            <span className="hidden font-display text-[15px] font-semibold tracking-tight text-foreground sm:inline">
              VBWEB
            </span>
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Link
              href="/contact"
              className="hidden h-9 items-center gap-1.5 rounded-full bg-primary px-4 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-primary/85 sm:inline-flex"
            >
              Devis gratuit
              <ArrowRight className="size-3.5" />
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mega-menu"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              className="group flex h-9 items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3.5 text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-card/70"
            >
              <span className="text-[12px] font-medium">Menu</span>
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
                      key={section.title}
                      className={cn(
                        idx > 0 && 'mt-1 border-t border-border/40 pt-2',
                        'lg:mt-0 lg:border-t-0 lg:pt-0'
                      )}
                    >
                      <p className="px-3 pt-2 pb-1.5 font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
                        {section.title}
                      </p>
                      <div className="space-y-0.5">
                        {section.items.map((item) => {
                          const Icon = item.icon
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
                                  : 'text-foreground/85 hover:bg-foreground/[0.05] hover:text-foreground'
                              )}
                            >
                              <span className="flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors duration-200 group-hover/item:text-primary">
                                <Icon className="size-4" />
                              </span>
                              <span className="flex-1 text-[14px] font-medium">
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
                  Devis gratuit sous 24h
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
