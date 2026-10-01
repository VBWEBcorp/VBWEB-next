'use client'

import { usePathname } from 'next/navigation'

/*
 * Menu, pied de page et bandeau cookies autour de chaque page, sauf dans /admin
 * (tableau de bord en pleine largeur). Le test se fait ici, côté navigateur :
 * fait côté serveur avec headers(), il rendait TOUT le site dynamique, et la page
 * d'accueil était recalculée à chaque visite (1,2 à 1,8 s de réponse serveur,
 * mesuré le 01/10/2026) au lieu d'être servie depuis le cache de Netlify.
 */
export function SiteChrome({
  navbar,
  footer,
  extras,
  children,
}: {
  navbar: React.ReactNode
  footer: React.ReactNode
  extras: React.ReactNode
  children: React.ReactNode
}) {
  const pathname = usePathname() ?? ''
  if (pathname.startsWith('/admin')) return <>{children}</>

  return (
    <>
      {navbar}
      <main id="main-content" className="flex-1">
        {children}
      </main>
      {footer}
      {extras}
    </>
  )
}
