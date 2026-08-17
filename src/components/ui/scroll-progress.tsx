'use client'

import { useEffect, useRef } from 'react'

/**
 * Scroll-progress bar for a `.timeline-container` parent.
 * Single passive scroll listener + rAF → smooth 60fps, zero layout thrashing.
 * Only a scale transform is written (compositor-only, no layout).
 *
 * `vertical`   — fills top → bottom, mapped on the container's own height.
 *                Made for tall timelines where the container scrolls past slowly.
 * `horizontal` — fills left → right, mapped on the container crossing the viewport.
 *                A horizontal strip is short, so its height can't drive the mapping.
 */
export function ScrollProgress({
  orientation = 'vertical',
}: {
  orientation?: 'vertical' | 'horizontal'
} = {}) {
  const barRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return
    // The timeline container is the parent
    containerRef.current = bar.closest('.timeline-container') as HTMLElement
    if (!containerRef.current) return

    const isHorizontal = orientation === 'horizontal'
    let ticking = false

    const update = () => {
      const container = containerRef.current!
      const rect = container.getBoundingClientRect()
      const viewH = window.innerHeight

      let progress: number
      if (isHorizontal) {
        // 0 when the strip enters at 85% of viewport, 1 once it reaches 45%
        const start = viewH * 0.85
        const end = viewH * 0.45
        progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)))
      } else {
        // 0 when top of container hits 70% of viewport, 1 when bottom hits 40%
        const start = viewH * 0.7
        const end = viewH * 0.4
        const totalScroll = rect.height - (start - end)
        progress = Math.min(1, Math.max(0, (start - rect.top) / totalScroll))
      }

      bar.style.transform = isHorizontal ? `scaleX(${progress})` : `scaleY(${progress})`
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
  }, [orientation])

  if (orientation === 'horizontal') {
    return (
      <>
        {/* Background line (gray) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-[13.5px] h-px bg-border/50"
        />
        {/* Animated progress line */}
        <div
          ref={barRef}
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-[13.5px] h-px origin-left bg-gradient-to-r from-primary via-primary to-primary/60"
          style={{ transform: 'scaleX(0)' }}
        >
          {/* Glowing dot at the leading edge */}
          <div className="absolute -right-1.5 -top-[5px] size-3 rounded-full bg-primary shadow-[0_0_12px_rgba(78,186,236,0.7)]" />
        </div>
      </>
    )
  }

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
