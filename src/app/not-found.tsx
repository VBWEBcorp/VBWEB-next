import { ArrowLeft, Home, Search, FileText } from 'lucide-react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Accueil', icon: Home },
  { href: '/referencement-seo-rennes', label: 'Referencement SEO', icon: Search },
  { href: '/creation-site-internet-rennes', label: 'Creation de site', icon: FileText },
  { href: '/contact', label: 'Contact', icon: ArrowLeft },
]

export default function NotFound() {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center bg-background px-4">
      <div aria-hidden className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/[0.05] blur-[140px]" />

      <div className="relative z-10 max-w-lg text-center">
        <p className="font-display text-7xl font-bold text-primary">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
          Page introuvable
        </h1>
        <p className="mt-3 text-base text-foreground/45">
          La page que vous cherchez n&apos;existe pas ou a ete deplacee.
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 rounded-xl border border-border/50 bg-card/50 px-4 py-3 text-sm font-medium text-foreground/70 transition-all hover:border-primary/20 hover:text-foreground"
            >
              <link.icon className="size-4 text-primary" />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
