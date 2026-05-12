'use client'

import { usePathname } from 'next/navigation'

import { useHomeLang } from './lang'

export function LangToggle() {
  const pathname = usePathname()
  const { lang, setLang } = useHomeLang()

  // Show the toggle only on the homepage — translation is homepage-scoped
  if (pathname !== '/') return null

  const next = lang === 'fr' ? 'en' : 'fr'

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={`Switch to ${next === 'fr' ? 'French' : 'English'}`}
      className="hidden h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-card/40 font-display text-[11px] font-bold tracking-wider text-foreground transition-all hover:border-primary/40 hover:bg-card/70 sm:inline-flex"
    >
      {next.toUpperCase()}
    </button>
  )
}
