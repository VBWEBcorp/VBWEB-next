'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

/*
 * Mesure d'audience sans cookie ni stockage : une balise vers /api/visite à
 * chaque changement de page. La première page du chargement porte la source de
 * la visite (utm_source, sinon le site d'où vient le visiteur, sinon « direct ») ;
 * les pages suivantes ne la répètent pas.
 */

function sourceDeLaVisite() {
  const q = new URLSearchParams(window.location.search)
  const utm = q.get('utm_source')
  if (utm) return `utm:${utm.toLowerCase().slice(0, 40)}`
  if (q.get('gclid')) return 'utm:google-ads'
  try {
    const ref = document.referrer ? new URL(document.referrer) : null
    if (ref && ref.hostname !== window.location.hostname) return ref.hostname
  } catch {
    /* référent illisible : visite directe */
  }
  return 'direct'
}

export function MesureAudience() {
  const pathname = usePathname()
  const premiere = useRef(true)

  useEffect(() => {
    if (!pathname || pathname.startsWith('/admin')) return
    const s = premiere.current ? sourceDeLaVisite() : ''
    premiere.current = false
    const corps = JSON.stringify(s ? { p: pathname, s } : { p: pathname })
    try {
      if (!navigator.sendBeacon?.('/api/visite', corps)) {
        void fetch('/api/visite', { method: 'POST', body: corps, keepalive: true }).catch(() => {})
      }
    } catch {
      /* la mesure ne doit jamais gêner la page */
    }
  }, [pathname])

  return null
}
