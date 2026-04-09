'use client'

import { useEffect, useRef } from 'react'

/**
 * Vertical scroll-progress bar.
 * Single passive scroll listener + rAF → smooth 60fps, zero layout thrashing.
 * Updates a CSS variable (--progress) used by scaleY transform (compositor-only).
 */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return
    // The timeline container is the parent
    containerRef.current = bar.closest('.timeline-container') as HTMLElement
    if (!containerRef.current) return

    let ticking = false

    const update = () => {
      const container = containerRef.current!
      const rect = container.getBoundingClientRect()
      const viewH = window.innerHeight

      // Progress: 0 when top of container hits 70% of viewport, 1 when bottom hits 40%
      const start = viewH * 0.7
      const end = viewH * 0.4
      const totalScroll = rect.height - (start - end)
      const scrolled = start - rect.top
      const progress = Math.min(1, Math.max(0, scrolled / totalScroll))

      bar.style.transform = `scaleY(${progress})`
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update() // initial
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Background line (gray) */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[18px] top-2 bottom-2 w-px bg-border/50 sm:left-6"
      />
      {/* Animated progress line */}
      <div
        ref={barRef}
        aria-hidden
        className="pointer-events-none absolute left-[18px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-primary via-primary to-primary/60 sm:left-6"
        style={{ transform: 'scaleY(0)' }}
      >
        {/* Glowing dot at the bottom */}
        <div className="absolute -bottom-1.5 -left-[5px] size-3 rounded-full bg-primary shadow-[0_0_12px_rgba(78,186,236,0.7)]" />
      </div>
    </>
  )
}
