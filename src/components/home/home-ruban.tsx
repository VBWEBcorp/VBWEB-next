'use client'

import { t, useHomeLang } from '@/components/home/lang'

// Ruban géant entre le hero et la suite, façon Jeudredi : les mots du titre en très grand,
// qui glissent au rythme du scroll (CSS « animation-timeline », voir .sd-ruban dans index.css).
// Purement décoratif : aria-hidden, aucun texte nouveau, rien de plus que le titre déjà lu.
export function HomeRuban() {
  const { lang } = useHomeLang()
  const mots = [t.hero.h1Part1[lang], t.hero.h1Part2[lang], t.hero.h1Part3[lang]]
  const suite = [...mots, ...mots, ...mots]

  return (
    <div aria-hidden className="sd-ruban-cadre relative overflow-hidden bg-background py-6 sm:py-10">
      <p className="sd-ruban flex w-max items-baseline gap-[0.35em] whitespace-nowrap font-display text-[17vw] font-semibold leading-[0.9] tracking-[-0.045em] sm:text-[11vw]">
        {suite.map((mot, i) => (
          <span key={i} className={i % 3 === 2 ? 'text-foreground' : 'text-foreground/15'}>
            {mot}
          </span>
        ))}
      </p>
    </div>
  )
}
