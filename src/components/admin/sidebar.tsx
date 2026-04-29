'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard,
  Images,
  LogOut,
  Home,
  Users,
  Briefcase,
  Phone,
  MessageSquare,
  PanelLeftClose,
  PanelLeftOpen,
  ExternalLink,
  FileText,
  Globe,
  Linkedin,
  MessageCircle,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSidebar } from '@/components/admin/sidebar-context'

const navItems = [
  { href: '/admin/dashboard', label: 'Tableau de bord', icon: LayoutDashboard },
]

const pageItems = [
  { href: '/admin/pages/accueil', label: 'Accueil', icon: Home },
  { href: '/admin/pages/a-propos', label: 'À propos', icon: Users },
  { href: '/admin/pages/services', label: 'Services', icon: Briefcase },
  { href: '/admin/pages/contact', label: 'Contact', icon: Phone },
  { href: '/admin/pages/temoignages', label: 'Témoignages', icon: MessageSquare },
  { href: '/admin/gallery', label: 'Galerie', icon: Images },
  { href: '/admin/blog', label: 'Blog', icon: FileText },
]

const toolItems = [
  { href: '/admin/linkedin', label: 'LinkedIn IA', icon: Linkedin },
  { href: '/admin/comments', label: 'Commentaires', icon: MessageCircle },
]

function NavLink({
  href, label, icon: Icon, pathname, collapsed,
}: {
  href: string; label: string; icon: React.ComponentType<{ className?: string }>; pathname: string; collapsed: boolean
}) {
  const isActive = pathname === href
  return (
    <Link href={href} title={collapsed ? label : undefined}>
      <div
        className={cn(
          'relative flex items-center gap-3 rounded-xl text-[13px] font-medium transition-all',
          collapsed ? 'justify-center px-2 py-2.5' : 'px-3 py-2.5',
          isActive
            ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
            : 'text-muted-foreground/60 hover:bg-foreground/8 hover:text-foreground/70'
        )}
      >
        <Icon className="size-[18px] shrink-0" />
        {!collapsed && <span>{label}</span>}
      </div>
    </Link>
  )
}

export function AdminSidebar() {
  const { collapsed, toggle } = useSidebar()
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('authUser')
    router.push('/admin/login')
  }

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 h-screen bg-background border-r border-border/50 flex flex-col z-50 transition-all duration-200',
        collapsed ? 'w-[60px]' : 'w-[220px]'
      )}
    >
      {/* Logo */}
      <div className={cn(
        'h-[60px] flex items-center border-b border-border/50',
        collapsed ? 'justify-center px-2' : 'justify-between px-4'
      )}>
        {!collapsed && (
          <Link href="/admin/dashboard" className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Globe className="size-4" />
            </span>
            <div>
              <p className="text-sm font-bold text-foreground leading-tight">VBWEB</p>
              <p className="text-[10px] text-muted-foreground/50">Administration</p>
            </div>
          </Link>
        )}
        {collapsed && (
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Globe className="size-4" />
          </span>
        )}
        {!collapsed && (
          <button
            onClick={toggle}
            className="p-1.5 rounded-lg text-muted-foreground/50 hover:text-muted-foreground hover:bg-foreground/8 transition-colors"
            title="Reduire le menu"
          >
            <PanelLeftClose className="size-4" />
          </button>
        )}
      </div>

      {collapsed && (
        <div className="flex justify-center py-2 border-b border-border/50">
          <button
            onClick={toggle}
            className="p-1.5 rounded-lg text-muted-foreground/50 hover:text-muted-foreground hover:bg-foreground/8 transition-colors"
            title="Ouvrir le menu"
          >
            <PanelLeftOpen className="size-4" />
          </button>
        </div>
      )}

      {/* Navigation */}
      <nav className={cn(
        'flex-1 py-4 space-y-5 overflow-y-auto',
        collapsed ? 'px-2' : 'px-3'
      )}>
        <div className="space-y-1">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} pathname={pathname} collapsed={collapsed} />
          ))}
        </div>

        <div className="space-y-1">
          {!collapsed && (
            <p className="px-3 pb-1.5 text-[10px] font-semibold text-muted-foreground/30 uppercase tracking-widest">
              Pages
            </p>
          )}
          {collapsed && <div className="border-t border-border/50 mb-2" />}
          {pageItems.map((item) => (
            <NavLink key={item.href} {...item} pathname={pathname} collapsed={collapsed} />
          ))}
        </div>

        <div className="space-y-1">
          {!collapsed && (
            <p className="px-3 pb-1.5 text-[10px] font-semibold text-muted-foreground/30 uppercase tracking-widest">
              Outils
            </p>
          )}
          {collapsed && <div className="border-t border-border/50 mb-2" />}
          {toolItems.map((item) => (
            <NavLink key={item.href} {...item} pathname={pathname} collapsed={collapsed} />
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className={cn(
        'border-t border-border/50 space-y-0.5',
        collapsed ? 'p-2' : 'p-3'
      )}>
        <Link href="/" target="_blank" title={collapsed ? 'Voir le site' : undefined}>
          <div className={cn(
            'flex items-center gap-3 rounded-xl text-[13px] font-medium text-muted-foreground/50 hover:bg-foreground/8 hover:text-muted-foreground transition-colors',
            collapsed ? 'justify-center px-2 py-2.5' : 'px-3 py-2.5'
          )}>
            <ExternalLink className="size-[18px]" />
            {!collapsed && 'Voir le site'}
          </div>
        </Link>
        <button
          onClick={handleLogout}
          title={collapsed ? 'Deconnexion' : undefined}
          className={cn(
            'flex w-full items-center gap-3 rounded-xl text-[13px] font-medium text-muted-foreground/50 hover:bg-red-500/10 hover:text-red-400 transition-colors',
            collapsed ? 'justify-center px-2 py-2.5' : 'px-3 py-2.5'
          )}
        >
          <LogOut className="size-[18px]" />
          {!collapsed && 'Deconnexion'}
        </button>
      </div>
    </aside>
  )
}
