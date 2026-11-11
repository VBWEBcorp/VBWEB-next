'use client'

import { ArrowUpRight, Globe, LayoutGrid, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'

import { useHomeLang, t } from '@/components/home/lang'
import { Reveal } from '@/components/ui/reveal'
import { TiltCard } from '@/components/ui/tilt-card'
import { APP_PROJECTS_HREF, platformProjects } from '@/lib/app-projects'
import { WEB_PROJECTS_HREF, webProjects } from '@/lib/projects'
import { cn } from '@/lib/utils'

// Les études de cas de l'accueil, en un seul endroit : un choix Référencement / Sites /
// Applications, pour qu'un visiteur voie tout de suite que VBWEB ne fait pas que des sites
// (Victor, 11/11/2026). Les trois panneaux sont dans le HTML : seul le panneau choisi
// s'affiche, Google lit les trois.

// Capture du site de chaque client SEO, indexée par son nom (identique en FR et EN).
const CAPTURES: Record<string, string> = {
  'Rennes Pneus': 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/RENNES-PNEUS-hq5zn5fj.webp',
  EPICU: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/EPICU-d777r6ki.webp',
  'Jumelles.com': 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/JUMELLES-d1d88m6n.webp',
}

// Aperçu compact des sites : douze vignettes, le reste est sur la page dédiée.
const previewProjects = webProjects.slice(0, 12)

const TABS = [
  { id: 'seo', icon: Search },
  { id: 'sites', icon: Globe },
  { id: 'apps', icon: LayoutGrid },
] as const

function PanelLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <div className="mt-8 flex justify-center">
      <Link
        href={href}
        className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-5 py-2.5 text-[14px] font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
      >
        {children}
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </div>
  )
}

export function EtudesDeCasSection() {
  const { lang } = useHomeLang()
  const r = t.results
  const cases = r.cases[lang]
  const [tab, setTab] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  // Flèches gauche / droite entre les onglets (motif « tabs » de l'ARIA).
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const next = (tab + (e.key === 'ArrowRight' ? 1 : TABS.length - 1)) % TABS.length
    setTab(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="etudes-de-cas" className="relative scroll-mt-20 overflow-hidden bg-background">
      {/* Grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Header */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
            {r.eyebrow[lang]}
          </p>
          <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[2.75rem]">
            {r.h2Part1[lang]}{' '}
            <span className="italic text-muted-foreground/80">{r.h2Part2[lang]}</span>
          </h2>
        </Reveal>

        {/* Le choix */}
        <div
          role="tablist"
          aria-label={r.tabsLabel[lang]}
          onKeyDown={onKeyDown}
          className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-1 rounded-full border border-border/60 bg-card/50 p-1 sm:mt-12"
        >
          {TABS.map((tb, i) => {
            const Icon = tb.icon
            const on = i === tab
            return (
              <button
                key={tb.id}
                ref={(el) => {
                  tabRefs.current[i] = el
                }}
                type="button"
                role="tab"
                id={`edc-tab-${tb.id}`}
                aria-selected={on}
                aria-controls={`edc-panel-${tb.id}`}
                tabIndex={on ? 0 : -1}
                onClick={() => setTab(i)}
                className={cn(
                  'inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full px-3 font-display text-[13px] font-semibold transition-colors duration-200 sm:text-[14px]',
                  on
                    ? 'bg-primary text-primary-foreground shadow-[0_6px_20px_rgba(0,0,0,0.25)]'
                    : 'text-muted-foreground hover:bg-foreground/[0.05] hover:text-foreground',
                )}
              >
                <Icon className="size-4 shrink-0" aria-hidden />
                <span className="sm:hidden">{r.tabsShort[lang][i]}</span>
                <span className="hidden sm:inline">{r.tabs[lang][i]}</span>
              </button>
            )
          })}
        </div>

        {/* Référencement : les résultats chiffrés */}
        <div
          role="tabpanel"
          id="edc-panel-seo"
          aria-labelledby="edc-tab-seo"
          hidden={tab !== 0}
          className="edc-panel mt-10 sm:mt-12"
        >
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 lg:gap-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {cases.map((c) => (
              <div
                key={c.name}
                className="flex w-[84%] shrink-0 snap-center flex-col overflow-hidden rounded-[1.35rem] border border-border/60 bg-card/40 transition-colors duration-500 hover:border-primary/30 sm:w-[47%] lg:w-[calc((100%-3rem)/3)]"
              >
                {CAPTURES[c.name] && (
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-border/60">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={CAPTURES[c.name]}
                      alt={`Site internet ${c.name}`}
                      width={1440}
                      height={900}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover object-top"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <span className="inline-flex items-center gap-2 self-start rounded-full border border-primary/30 bg-primary/5 px-3.5 py-1.5 text-[13px] font-semibold text-foreground">
                    <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                    {c.type}
                  </span>
                  <p className="mt-2.5 text-[12px] text-muted-foreground/70">{c.name}</p>
                  <div className="mt-7">
                    <p className="font-display text-[2.75rem] font-bold leading-none tracking-[-0.03em] text-foreground sm:text-5xl">
                      {c.big}
                    </p>
                    <p className="mt-2.5 text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground/55">
                      {c.unit}
                    </p>
                  </div>
                  {/* mt-auto : les trois cartes se terminent au même niveau */}
                  <div className="mt-auto border-t border-border/50 pt-4">
                    <p className="text-[13px] leading-relaxed text-muted-foreground">{c.support}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-[12.5px] leading-relaxed text-muted-foreground/55">
            {r.disclaimer[lang]}
          </p>
          <PanelLink href="/etudes-de-cas/referencement">{r.seoLink[lang]}</PanelLink>
        </div>

        {/* Sites internet : la mosaïque */}
        <div
          role="tabpanel"
          id="edc-panel-sites"
          aria-labelledby="edc-tab-sites"
          hidden={tab !== 1}
          className="edc-panel mx-auto mt-10 max-w-4xl sm:mt-12"
        >
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 lg:grid-cols-6">
            {previewProjects.map((project) => (
              <Link key={project.id} href={WEB_PROJECTS_HREF} className="group block">
                <div className="relative aspect-[16/11] overflow-hidden rounded-lg border border-border/60 bg-card/40 transition-colors duration-300 group-hover:border-primary/40">
                  <Image
                    src={project.image}
                    alt={`Site internet ${project.name} créé par VBWEB`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 150px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                </div>
                <p className="mt-1.5 truncate text-[10px] leading-tight text-muted-foreground transition-colors duration-300 group-hover:text-primary sm:text-[11px]">
                  {project.name}
                </p>
              </Link>
            ))}
          </div>
          <PanelLink href={WEB_PROJECTS_HREF}>
            {t.offers.worksCta[lang].replace('{count}', String(webProjects.length))}
          </PanelLink>
        </div>

        {/* Applications web : les plateformes */}
        <div
          role="tabpanel"
          id="edc-panel-apps"
          aria-labelledby="edc-tab-apps"
          hidden={tab !== 2}
          className="edc-panel mx-auto mt-10 max-w-4xl sm:mt-12"
        >
          <p className="mx-auto max-w-2xl text-center text-[15px] leading-relaxed text-muted-foreground">
            {t.platforms.title[lang]}
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {platformProjects.map((project) => (
              <TiltCard key={project.id} className="rounded-xl">
                <Link
                  href={`${APP_PROJECTS_HREF}#${project.id}`}
                  className="group block overflow-hidden rounded-xl border border-border/60 bg-card/40 transition-[border-color,box-shadow] duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-md)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-border/60">
                    <Image
                      src={project.image!}
                      alt={`${project.title}, plateforme développée par VBWEB`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, 300px"
                      className="card-lift-media object-cover object-top"
                    />
                  </div>
                  <div className="p-3.5">
                    <p className="font-display text-[14px] font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary">
                      {project.title}
                    </p>
                    <p className="mt-0.5 text-[12px] text-muted-foreground">{project.kind}</p>
                  </div>
                </Link>
              </TiltCard>
            ))}
          </div>
          <PanelLink href={APP_PROJECTS_HREF}>{t.platforms.cta[lang]}</PanelLink>
        </div>

        {/* Toutes les études de cas */}
        <div className="mt-6 flex justify-center">
          <Link
            href="/etudes-de-cas"
            className="group inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors hover:text-primary"
          >
            {r.caseStudyLink[lang]}
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
