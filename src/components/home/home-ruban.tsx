'use client'

import { t, useHomeLang } from '@/components/home/lang'

// Ruban géant entre le hero et la vidéo, façon Jeudredi : les mots du titre en très grand,
// qui défilent tout seuls, en continu (.sd-ruban dans index.css). Deux copies identiques :
// la piste glisse d'une copie puis recommence, sans à-coup. Le 10/11 il n'avançait qu'avec
// le scroll ; Victor, 11/11/2026 : « il est censé défiler tout seul ».
// Purement décoratif : aria-hidden, aucun texte nouveau, rien de plus que le titre déjà lu.
export function HomeRuban() {
  const { lang } = useHomeLang()
  const mots = [t.hero.h1Part1[lang], t.hero.h1Part2[lang], t.hero.h1Part3[lang]]

  return (
    <div aria-hidden className="relative overflow-hidden bg-background py-6 sm:py-10">
      <div className="sd-ruban flex w-max">
        {[0, 1].map((copie) => (
          <p
            key={copie}
            className="flex shrink-0 items-baseline gap-[0.35em] whitespace-nowrap pr-[0.35em] font-display text-[17vw] font-semibold leading-[0.9] tracking-[-0.045em] sm:text-[11vw]"
          >
            {mots.map((mot, i) => (
              <span key={i} className={i === 2 ? 'text-foreground' : 'text-foreground/15'}>
                {mot}
              </span>
            ))}
          </p>
        ))}
      </div>
    </div>
  )
}
