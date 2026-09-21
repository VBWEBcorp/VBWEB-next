'use client'

import { Maximize2, Volume2, VolumeX } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

import { useHomeLang } from '@/components/home/lang'

/**
 * Vidéo de présentation : démarre seule, en muet, dès l'ouverture de la page,
 * sans l'habillage YouTube. L'iframe déborde du cadre de CROP px en haut et en
 * bas : le lecteur affiche sa barre de titre et son logo dans les bandes
 * noires, hors du cadre visible. Un calque transparent couvre l'image.
 *
 * Un clic sur l'image active le son par l'API du lecteur (message
 * `unMute`), sans recharger la vidéo. Le bouton « Agrandir » passe le cadre en
 * plein écran, son activé. Si le lecteur ne confirme pas la coupure du muet
 * (Safari iOS, par exemple), on recharge une seule fois l'iframe avec ses
 * commandes natives, son activé.
 */
const CROP = 64
const ORIGIN = 'https://www.youtube-nocookie.com'
const ALLOW = 'accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share'

export function AutoplayYouTube({ videoId, title }: { videoId: string; title: string }) {
  const [muted, setMuted] = useState(true)
  const [fallback, setFallback] = useState(false)
  const mutedRef = useRef(true)
  const frameRef = useRef<HTMLIFrameElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const { lang } = useHomeLang()

  const command = useCallback((func: string, args: unknown[] = []) => {
    frameRef.current?.contentWindow?.postMessage(JSON.stringify({ event: 'command', func, args }), ORIGIN)
  }, [])

  // Le lecteur ne renvoie son état (dont `muted`) qu'après un message « listening ».
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== ORIGIN || typeof e.data !== 'string') return
      try {
        const data = JSON.parse(e.data) as { event?: string; info?: { muted?: boolean } }
        if (data.event === 'infoDelivery' && typeof data.info?.muted === 'boolean') {
          mutedRef.current = data.info.muted
          setMuted(data.info.muted)
        }
      } catch {
        /* message étranger */
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  const listen = useCallback(() => {
    frameRef.current?.contentWindow?.postMessage(JSON.stringify({ event: 'listening', id: 1, channel: 'widget' }), ORIGIN)
  }, [])

  const unmute = useCallback(() => {
    command('unMute')
    command('setVolume', [100])
    command('playVideo')
    // Sans confirmation du lecteur, on bascule sur ses commandes natives.
    window.setTimeout(() => {
      if (mutedRef.current) setFallback(true)
    }, 900)
  }, [command])

  const toggleSound = useCallback(() => {
    if (mutedRef.current) unmute()
    else command('mute')
  }, [command, unmute])

  const enlarge = useCallback(() => {
    const box = boxRef.current
    if (box?.requestFullscreen) {
      box.requestFullscreen().catch(() => setFallback(true))
      unmute()
    } else {
      // iOS : pas de plein écran sur un bloc, on passe par les commandes YouTube.
      setFallback(true)
    }
  }, [unmute])

  if (fallback) {
    return (
      <iframe
        src={`${ORIGIN}/embed/${videoId}?autoplay=1&controls=1&rel=0&playsinline=1`}
        title={title}
        allow={ALLOW}
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 size-full"
      />
    )
  }

  const soundLabel = muted
    ? lang === 'en' ? 'Turn sound on' : 'Activer le son'
    : lang === 'en' ? 'Mute' : 'Couper le son'
  const pill =
    'pointer-events-auto inline-flex items-center gap-2 rounded-full bg-black/55 px-3.5 py-2 text-[12px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-black/75'

  return (
    <div ref={boxRef} className="absolute inset-0 overflow-hidden bg-black">
      <iframe
        ref={frameRef}
        src={`${ORIGIN}/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&rel=0&playsinline=1&disablekb=1&iv_load_policy=3&enablejsapi=1`}
        title={title}
        allow={ALLOW}
        referrerPolicy="strict-origin-when-cross-origin"
        onLoad={listen}
        tabIndex={-1}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 w-full"
        style={{ top: -CROP, height: `calc(100% + ${CROP * 2}px)` }}
      />

      {/* Calque : bloque le survol (habillage YouTube) et porte le clic « son » */}
      <button
        type="button"
        onClick={toggleSound}
        aria-label={`${soundLabel} : ${title}`}
        className="absolute inset-0 size-full cursor-pointer"
      />

      <div className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-2 sm:bottom-4 sm:right-4">
        <button type="button" onClick={toggleSound} className={pill}>
          {muted ? <Volume2 className="size-4" aria-hidden /> : <VolumeX className="size-4" aria-hidden />}
          {soundLabel}
        </button>
        <button type="button" onClick={enlarge} className={pill} aria-label={lang === 'en' ? 'Enlarge' : 'Agrandir'}>
          <Maximize2 className="size-4" aria-hidden />
          <span className="hidden sm:inline">{lang === 'en' ? 'Enlarge' : 'Agrandir'}</span>
        </button>
      </div>
    </div>
  )
}
