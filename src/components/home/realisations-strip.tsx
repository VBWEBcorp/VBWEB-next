'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useHomeLang } from '@/components/home/lang'
import { APP_PROJECTS_HREF, platformProjects } from '@/lib/app-projects'
import { WEB_PROJECTS_HREF, webProjects } from '@/lib/projects'

// Sous les chiffres de l'agence (« Des résultats déjà livrés ») : la preuve en images,
// sites et applications mélangés dans un seul bandeau qui défile. Chaque vignette mène
// à sa page. Demande de Victor du 10/11/2026 : « quelques images, pense expérience utilisateur ».
type Vignette = { cle: string; nom: string; image: string; href: string; genre: 'site' | 'app' }

const applications: Vignette[] = platformProjects.map((p) => ({
  cle: `app-${p.id}`,
  nom: p.title,
  image: p.image!,
  href: `${APP_PROJECTS_HREF}#${p.id}`,
  genre: 'app',
}))
const dejaEnApplication = new Set(platformProjects.map((p) => p.id))
const sites: Vignette[] = webProjects
  .filter((p) => !dejaEnApplication.has(p.id))
  .slice(0, 9)
  .map((p) => ({ cle: `site-${p.id}`, nom: p.name, image: p.image, href: WEB_PROJECTS_HREF, genre: 'site' }))

// Une application toutes les trois vignettes, pour que les deux se lisent ensemble.
const vignettes: Vignette[] = []
for (let i = 0, a = 0; i < sites.length; i++) {
  if (i % 3 === 0 && a < applications.length) vignettes.push(applications[a++])
  vignettes.push(sites[i])
}

const GENRE = {
  site: { fr: 'Site internet', en: 'Website' },
  app: { fr: 'Application', en: 'Web app' },
}

function Piste({ cachee }: { cachee?: boolean }) {
  const { lang } = useHomeLang()
  return (
    <ul className="flex shrink-0 gap-4 pr-4" aria-hidden={cachee || undefined}>
      {vignettes.map((v) => (
        <li key={v.cle} className="w-[240px] shrink-0 sm:w-[300px]">
          <Link href={v.href} tabIndex={cachee ? -1 : undefined} className="group block">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border/60 bg-card/40 transition-colors duration-300 group-hover:border-primary/40">
              <Image
                src={v.image}
                alt={cachee ? '' : `${v.nom}, ${GENRE[v.genre][lang].toLowerCase()} réalisé par VBWEB`}
                fill
                loading="lazy"
                sizes="300px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <div className="mt-2.5 flex items-center justify-between gap-3">
              <span className="truncate font-display text-[14px] font-semibold text-foreground transition-colors group-hover:text-primary">
                {v.nom}
              </span>
              <span
                className={
                  'shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-medium ' +
                  (v.genre === 'app' ? 'bg-primary text-primary-foreground' : 'bg-foreground/10 text-foreground/80')
                }
              >
                {GENRE[v.genre][lang]}
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function RealisationsStrip() {
  return (
    <div className="group/strip relative mt-10 overflow-hidden sm:mt-12">
      {/* Fondu sur les bords, pour que le bandeau ne soit pas coupé net */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-card to-transparent sm:w-20" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-card to-transparent sm:w-20" />
      <div
        className="sd-strip flex w-max group-hover/strip:[animation-play-state:paused]"
      >
        <Piste />
        <Piste cachee />
      </div>
    </div>
  )
}
