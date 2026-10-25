'use client'

import { useRef } from 'react'

/**
 * Carte qui s'incline vers le pointeur (relief 3D leger) avec un reflet qui
 * suit la souris. Souris seulement : le tactile ne declenche rien, et le
 * mouvement reduit garde le reflet mais pas l'inclinaison. Transform
 * uniquement, aucune mise en page recalculee (styles .tilt-card dans index.css).
 */
export function TiltCard({
  children,
  className = '',
  max = 6,
}: {
  children: React.ReactNode
  className?: string
  /** Inclinaison maximale en degres. */
  max?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el || e.pointerType !== 'mouse') return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    el.style.setProperty('--gx', `${(px * 100).toFixed(1)}%`)
    el.style.setProperty('--gy', `${(py * 100).toFixed(1)}%`)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rx = ((0.5 - py) * max).toFixed(2)
    const ry = ((px - 0.5) * max).toFixed(2)
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`
  }

  const onLeave = () => {
    const el = ref.current
    if (el) el.style.transform = ''
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`tilt-card ${className}`}
    >
      {children}
      <span aria-hidden className="tilt-glare" />
    </div>
  )
}
