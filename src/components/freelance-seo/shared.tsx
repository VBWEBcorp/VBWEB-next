'use client'

import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
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
            <Image
              src={src}
              alt=""
              width={240}
              height={320}
              loading="lazy"
              quality={40}
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 20vw, 14vw"
              className="aspect-[3/4] w-full rounded-xl object-cover"
            />
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
  'https://pub-698f857760da42999dac8854114fbc41.r2.dev/YUZU-BRANDING-9HsCRCV6.webp',
  'https://pub-698f857760da42999dac8854114fbc41.r2.dev/EPICU-hxpcht55.webp',
  'https://pub-698f857760da42999dac8854114fbc41.r2.dev/AS-LOCATION-VWfJrSqX.webp',
  'https://pub-698f857760da42999dac8854114fbc41.r2.dev/VENTS-ET-COURBES-rKD9SJ7q.webp',
  'https://pub-698f857760da42999dac8854114fbc41.r2.dev/FL-CONSULTING-DHr9v05v.webp',
  'https://pub-698f857760da42999dac8854114fbc41.r2.dev/RENNES-PNEUS-BKYFP1x5.webp',
]
export const col2 = [
  'https://pub-698f857760da42999dac8854114fbc41.r2.dev/MATINEH-FOOD-tPHZ4D9L.webp',
  'https://pub-698f857760da42999dac8854114fbc41.r2.dev/Shaan-production-Nd4W02HL.webp',
  'https://pub-698f857760da42999dac8854114fbc41.r2.dev/SHAMPOUINE-TOI-dwbzZFNN.webp',
  'https://pub-698f857760da42999dac8854114fbc41.r2.dev/VALENTIN-BEASSE-jvyCrGMX.webp',
  'https://pub-698f857760da42999dac8854114fbc41.r2.dev/ZINE-COACHING-cKpvpLYJ.webp',
  'https://pub-698f857760da42999dac8854114fbc41.r2.dev/ECO-HABITAT-bM518fv2.webp',
]
export const col3 = [
  'https://pub-698f857760da42999dac8854114fbc41.r2.dev/JEREMY-SIMON-AVOCAT-9HhFm9MV.webp',
  'https://pub-698f857760da42999dac8854114fbc41.r2.dev/JULIEN-BIDOIS-CHEF-PRIVE-kZrFB2h.webp',
  'https://pub-698f857760da42999dac8854114fbc41.r2.dev/LES-LUNETTES-DE-LA-CHAPELLE-xtRDW0WZ.webp',
  'https://pub-698f857760da42999dac8854114fbc41.r2.dev/MAXX-LE-MAGICIEN-39zY5X3q.webp',
  'https://pub-698f857760da42999dac8854114fbc41.r2.dev/ON-PARLE-DE-TOUT-BH7k4qWR.webp',
  'https://pub-698f857760da42999dac8854114fbc41.r2.dev/tracker-solaire-2-4gnRwBXW.webp',
]
