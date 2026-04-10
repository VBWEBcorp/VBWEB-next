'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

/* ── ScrollCol : colonnes photos défilantes en background ── */
export function ScrollCol({ imgs, dir = 'up', dur = 35 }: { imgs: string[]; dir?: 'up' | 'down'; dur?: number }) {
  const doubled = [...imgs, ...imgs]
  return (
    <div className="relative min-w-0 flex-1 overflow-hidden">
      <div
        className={dir === 'up' ? 'animate-scroll-up' : 'animate-scroll-down'}
        style={{ animationDuration: `${dur}s` }}
      >
        {doubled.map((src, i) => (
          <div key={i} className="p-1.5">
            <img src={src} alt="" loading="eager" className="aspect-[3/4] w-full rounded-xl object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Grain : texture légère ── */
export function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }}
    />
  )
}

/* ── ReadMore : accordéon ── */
export function ReadMore({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-[1.35rem] border border-border/60 bg-card/40">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
      >
        <span className="font-display text-base font-semibold text-foreground sm:text-lg">{title}</span>
        <ChevronDown className={`size-4 shrink-0 text-muted-foreground transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        style={{ maxHeight: open ? '2000px' : '0px' }}
        className="overflow-hidden transition-all duration-500"
      >
        <div className="px-6 pb-6">{children}</div>
      </div>
    </div>
  )
}

/* ── Études de cas (portfolio commun) ── */
export const caseStudies = [
  {
    name: 'Rennes Pneus',
    sector: 'Garage automobile, Rennes',
    metric: '3 600',
    metricLabel: 'visites/mois',
    before: '30 visites/mois',
    detail: 'Au départ, personne ne les trouvait sur Google. Aujourd\'hui, ils sont 1ers sur "pneus Rennes" et reçoivent des appels chaque jour.',
    href: '/etudes-de-cas/referencement',
  },
  {
    name: 'EPICU',
    sector: 'Marque lifestyle, Rennes',
    metric: '5 000',
    metricLabel: 'visites/mois',
    before: '100 visites/mois',
    detail: 'Un projet parti de zéro. 3 ans plus tard, le SEO est devenu leur premier canal d\'acquisition, devant les réseaux sociaux.',
    href: '/etudes-de-cas/referencement',
  },
  {
    name: 'Jumelles.com',
    sector: 'E-commerce optique',
    metric: '+33%',
    metricLabel: 'trafic organique',
    before: '2 100 mots-clés',
    detail: 'Un site e-commerce avec 800 produits mal optimisés. Tout a été repris fiche par fiche. +1 280 mots-clés gagnés en 12 mois.',
    href: '/etudes-de-cas/referencement',
  },
]

/* ── Images colonnes background ── */
export const col1 = [
  'https://i.ibb.co/9HsCRCV6/YUZU-BRANDING.jpg',
  'https://i.ibb.co/hxpcht55/EPICU.jpg',
  'https://i.ibb.co/VWfJrSqX/AS-LOCATION.jpg',
  'https://i.ibb.co/rKD9SJ7q/VENTS-ET-COURBES.jpg',
  'https://i.ibb.co/DHr9v05v/FL-CONSULTING.jpg',
  'https://i.ibb.co/BKYFP1x5/RENNES-PNEUS.jpg',
]
export const col2 = [
  'https://i.ibb.co/tPHZ4D9L/MATINEH-FOOD.jpg',
  'https://i.ibb.co/Nd4W02HL/Shaan-production.jpg',
  'https://i.ibb.co/dwbzZFNN/SHAMPOUINE-TOI.jpg',
  'https://i.ibb.co/jvyCrGMX/VALENTIN-BEASSE.jpg',
  'https://i.ibb.co/cKpvpLYJ/ZINE-COACHING.jpg',
  'https://i.ibb.co/bM518fv2/ECO-HABITAT.jpg',
]
export const col3 = [
  'https://i.ibb.co/9HhFm9MV/JEREMY-SIMON-AVOCAT.png',
  'https://i.ibb.co/kZrFB2h/JULIEN-BIDOIS-CHEF-PRIVE.jpg',
  'https://i.ibb.co/xtRDW0WZ/LES-LUNETTES-DE-LA-CHAPELLE.jpg',
  'https://i.ibb.co/39zY5X3q/MAXX-LE-MAGICIEN.jpg',
  'https://i.ibb.co/BH7k4qWR/ON-PARLE-DE-TOUT.webp',
  'https://i.ibb.co/4gnRwBXW/tracker-solaire-2.jpg',
]
