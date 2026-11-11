'use client'

import { Maximize2, Volume2, VolumeX } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

import { useHomeLang } from '@/components/home/lang'

/**
 * Vidéo de présentation hébergée sur le site (public/videos), sans lecteur YouTube :
 * ni logo, ni barre de titre, ni ~1 Mo de scripts tiers. Elle démarre seule, en muet
 * et en boucle, dès qu'elle est à moitié visible, et se met en pause hors de l'écran.
 * Avant ça, seule l'affiche est chargée (preload="none").
 *
 * Un clic sur l'image active le son et reprend la vidéo au début (16 s, on l'entend
 * en entier). « Agrandir » passe en plein écran, son activé. Le fichier 720p sert les
 * téléphones, le 1080p les écrans plus larges. Mouvement réduit : pas de lecture
 * automatique, un clic lance la vidéo avec le son.
 */
type Props = { src: string; srcMobile: string; poster: string; title: string }

export function AutoplayVideo({ src, srcMobile, poster, title }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const [muted, setMuted] = useState(true)
  const { lang } = useHomeLang()

  const load = useCallback(() => {
    const video = videoRef.current
    if (video && !video.getAttribute('src')) {
      video.src = window.matchMedia('(max-width: 767px)').matches ? srcMobile : src
    }
    return video
  }, [src, srcMobile])

  useEffect(() => {
    const video = videoRef.current
    if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    video.muted = true
    if (!('IntersectionObserver' in window)) {
      load()?.play().catch(() => {})
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) load()?.play().catch(() => {})
        else video.pause()
      },
      { threshold: 0.5 },
    )
    io.observe(video)
    return () => io.disconnect()
  }, [load])

  const withSound = useCallback(() => {
    const video = load()
    if (!video) return
    video.muted = false
    video.volume = 1
    video.currentTime = 0
    video.play().catch(() => {})
    setMuted(false)
  }, [load])

  const toggleSound = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    if (video.muted || video.paused) withSound()
    else {
      video.muted = true
      setMuted(true)
    }
  }, [withSound])

  const enlarge = useCallback(() => {
    withSound()
    const box = boxRef.current
    const video = videoRef.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null
    if (box?.requestFullscreen) box.requestFullscreen().catch(() => {})
    // iOS : pas de plein écran sur un bloc, seulement sur la vidéo elle-même.
    else video?.webkitEnterFullscreen?.()
  }, [withSound])

  const soundLabel = muted
    ? lang === 'en' ? 'Turn sound on' : 'Activer le son'
    : lang === 'en' ? 'Mute' : 'Couper le son'
  // Sur téléphone, icônes seules : le libellé cachait le texte de la vidéo.
  const pill =
    'pointer-events-auto inline-flex items-center gap-2 rounded-full bg-black/55 p-2 text-[12px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-black/75 sm:px-3.5'

  return (
    <div ref={boxRef} className="absolute inset-0 overflow-hidden bg-black [&:fullscreen_video]:object-contain">
      <video
        ref={videoRef}
        poster={poster}
        width={1920}
        height={1080}
        muted
        loop
        playsInline
        preload="none"
        aria-label={title}
        className="absolute inset-0 size-full object-cover"
      />

      {/* Calque : porte le clic « son » sur toute l'image */}
      <button
        type="button"
        onClick={toggleSound}
        aria-label={`${soundLabel} : ${title}`}
        className="absolute inset-0 size-full cursor-pointer"
      />

      <div className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-2 sm:bottom-4 sm:right-4">
        <button type="button" onClick={toggleSound} className={pill} aria-label={soundLabel}>
          {muted ? <Volume2 className="size-4" aria-hidden /> : <VolumeX className="size-4" aria-hidden />}
          <span className="hidden sm:inline">{soundLabel}</span>
        </button>
        <button type="button" onClick={enlarge} className={pill} aria-label={lang === 'en' ? 'Enlarge' : 'Agrandir'}>
          <Maximize2 className="size-4" aria-hidden />
          <span className="hidden sm:inline">{lang === 'en' ? 'Enlarge' : 'Agrandir'}</span>
        </button>
      </div>
    </div>
  )
}
