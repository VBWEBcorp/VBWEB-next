'use client'

import { Volume2 } from 'lucide-react'
import { useState } from 'react'

import { useHomeLang } from '@/components/home/lang'

/**
 * Vidéo de présentation : démarre seule, en muet, dès l'ouverture de la page,
 * sans l'habillage YouTube. L'iframe déborde du cadre de CROP px en haut et en
 * bas : le lecteur affiche alors sa barre de titre et son logo dans les bandes
 * noires, hors du cadre visible. Un bouton transparent couvre l'image ; au clic,
 * le lecteur se recharge avec le son et ses commandes.
 */
const CROP = 64

const ALLOW = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'

export function AutoplayYouTube({ videoId, title }: { videoId: string; title: string }) {
  const [interactive, setInteractive] = useState(false)
  const { lang } = useHomeLang()
  const base = `https://www.youtube-nocookie.com/embed/${videoId}`

  if (interactive) {
    return (
      <iframe
        src={`${base}?autoplay=1&controls=1&rel=0&playsinline=1`}
        title={title}
        allow={ALLOW}
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 size-full"
      />
    )
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <iframe
        src={`${base}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&rel=0&playsinline=1&disablekb=1&iv_load_policy=3`}
        title={title}
        allow={ALLOW}
        referrerPolicy="strict-origin-when-cross-origin"
        tabIndex={-1}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 w-full"
        style={{ top: -CROP, height: `calc(100% + ${CROP * 2}px)` }}
      />
      <button
        type="button"
        onClick={() => setInteractive(true)}
        aria-label={lang === 'en' ? `Turn sound on: ${title}` : `Activer le son : ${title}`}
        className="group absolute inset-0 size-full cursor-pointer"
      >
        <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-black/55 px-3.5 py-2 text-[12px] font-medium text-white backdrop-blur-sm transition-colors group-hover:bg-black/70">
          <Volume2 className="size-4" aria-hidden />
          {lang === 'en' ? 'Turn sound on' : 'Activer le son'}
        </span>
      </button>
    </div>
  )
}
