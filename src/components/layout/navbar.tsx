'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

import { Logo } from '@/components/layout/logo'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavLink {
  to: string
  label: string
  children?: { to: string; label: string }[]
}

const serviceLinks = [
  { to: '/referencement-seo-rennes', label: 'Référencement SEO' },
  { to: '/referencement-local-rennes', label: 'Référencement local' },
  { to: '/creation-site-internet-rennes', label: 'Création de site' },
  { to: '/audit-seo-gratuit', label: 'Audit SEO gratuit' },
]

const caseStudyLinks = [
  { to: '/etudes-de-cas/sites-internet', label: 'Sites internet' },
  { to: '/etudes-de-cas/referencement', label: 'Référencement' },
  { to: '/etudes-de-cas/applications-web', label: 'Applications web' },
]

const staticLinks: NavLink[] = [
  { to: '/', label: 'Accueil' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/services', label: 'Services', children: serviceLinks },
  { to: '/etudes-de-cas', label: 'Études de cas', children: caseStudyLinks },
  { to: '/contact', label: 'Contact' },
]

function DesktopDropdown({ link, pathname }: { link: NavLink; pathname: string }) {
  const [open, setOpen] = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout>>(null)
  const isActive = pathname === link.to || link.children?.some((c) => pathname === c.to)

  const enter = () => { if (timeout.current) clearTimeout(timeout.current); setOpen(true) }
  const leave = () => { timeout.current = setTimeout(() => setOpen(false), 150) }

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        type="button"
        className={cn(
          'flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-foreground',
          isActive ? 'text-foreground' : 'text-muted-foreground'
        )}
      >
        {link.label}
        <ChevronDown className={cn('size-3.5 transition-transform', open && 'rotate-180')} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 top-full z-50 mt-1 w-60 rounded-xl border border-border bg-background/98 p-1.5 shadow-2xl backdrop-blur-xl"
          >
            {link.children!.map((child) => (
              <Link
                key={child.to}
                href={child.to}
                className={cn(
                  'block rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-foreground/5',
                  pathname === child.to ? 'text-foreground font-medium' : 'text-muted-foreground'
                )}
                onClick={() => setOpen(false)}
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [links, setLinks] = useState<NavLink[]>(staticLinks)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const checkFeatures = async () => {
      try {
        const [galleryRes, blogRes] = await Promise.all([
          fetch('/api/gallery/settings'),
          fetch('/api/blog/settings'),
        ])
        const gallery = await galleryRes.json()
        const blog = await blogRes.json()

        const dynamicLinks: NavLink[] = [
          { to: '/', label: 'Accueil' },
          { to: '/a-propos', label: 'À propos' },
          { to: '/services', label: 'Services', children: serviceLinks },
          { to: '/etudes-de-cas', label: 'Études de cas', children: caseStudyLinks },
        ]

        if (gallery.enabled) dynamicLinks.push({ to: '/gallery', label: 'Galerie' })
        if (blog.enabled) dynamicLinks.push({ to: '/blog', label: 'Blog' })

        dynamicLinks.push({ to: '/contact', label: 'Contact' })
        setLinks(dynamicLinks)
      } catch (error) {
        console.error('Failed to check features:', error)
      }
    }

    checkFeatures()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav
          className="hidden items-center gap-0.5 md:flex"
          aria-label="Navigation principale"
        >
          {links.map((l) =>
            l.children ? (
              <DesktopDropdown key={l.to} link={l} pathname={pathname} />
            ) : (
              <Link
                key={l.to}
                href={l.to}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-foreground',
                  pathname === l.to
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                )}
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button size="sm" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
            <Link href="/contact">
              Devis gratuit
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            className="rounded-full text-foreground hover:bg-foreground/10"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-border/50 bg-background/98 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
              {links.map((l) =>
                l.children ? (
                  <div key={l.to}>
                    <button
                      type="button"
                      onClick={() => setMobileDropdown((v) => v === l.to ? null : l.to)}
                      className={cn(
                        'flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-medium transition-colors hover:bg-foreground/5',
                        l.children.some((c) => pathname === c.to) || pathname === l.to
                          ? 'text-foreground'
                          : 'text-muted-foreground'
                      )}
                    >
                      {l.label}
                      <ChevronDown className={cn('size-4 transition-transform', mobileDropdown === l.to && 'rotate-180')} />
                    </button>
                    <AnimatePresence>
                      {mobileDropdown === l.to && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-3 border-l border-border pl-3">
                            {l.children.map((child) => (
                              <Link
                                key={child.to}
                                href={child.to}
                                className={cn(
                                  'block rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-foreground/5',
                                  pathname === child.to ? 'text-foreground font-medium' : 'text-muted-foreground'
                                )}
                                onClick={() => setOpen(false)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={l.to}
                    href={l.to}
                    className={cn(
                      'rounded-xl px-3 py-3 text-base font-medium transition-colors hover:bg-foreground/5',
                      pathname === l.to
                        ? 'text-foreground'
                        : 'text-muted-foreground'
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                )
              )}
              <div className="mt-2 border-t border-border/50 pt-4">
                <Button className="w-full group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Devis gratuit
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
