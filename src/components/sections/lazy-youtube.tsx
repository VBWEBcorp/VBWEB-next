'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

/**
 * Façade YouTube : n'injecte l'iframe (≈ 600 Ko-1 Mo de JS) que lorsque la
 * vidéo approche du viewport. En attendant, une miniature légère est affichée,
 * ce qui supprime le coût du player YouTube au chargement initial de la page.
 */
export function LazyYouTube({
  videoId,
  title,
  params = 'rel=0&modestbranding=1&playsinline=1',
}: {
  videoId: string
  title: string
  params?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || active) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true)
          io.disconnect()
        }
      },
      { rootMargin: '300px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [active])

  return (
    <div ref={ref} className="absolute inset-0">
      {active ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?${params}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Lire la vidéo : ${title}`}
          className="group absolute inset-0 size-full"
        >
          <Image
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
          <span className="absolute inset-0 grid place-items-center bg-black/25 transition-colors group-hover:bg-black/35">
            <span className="flex size-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform group-hover:scale-105">
              <svg viewBox="0 0 24 24" className="ml-0.5 size-7" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  )
}
