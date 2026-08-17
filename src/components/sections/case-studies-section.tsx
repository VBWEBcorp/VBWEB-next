'use client'

import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { useHomeLang, t } from '@/components/home/lang'
import { Reveal } from '@/components/ui/reveal'
import { WEB_PROJECTS_HREF, webProjects } from '@/lib/projects'

// Aperçu volontairement compact : une mosaïque de vignettes, pas une galerie.
// Douze suffisent à donner le volume, le reste est sur la page dédiée.
const previewProjects = webProjects.slice(0, 12)

export function CaseStudiesSection() {
  const { lang } = useHomeLang()
  const items = t.offers.items[lang]

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

      <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
            {t.offers.eyebrow[lang]}
          </p>
          <h2 className="mt-4 font-display text-balance text-2xl font-medium leading-[1.15] tracking-[-0.02em] text-foreground sm:text-[1.75rem]">
            {t.offers.title[lang]}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            {t.offers.intro[lang]}
          </p>
        </Reveal>

        {/* Liste simple et discrète — chaque offre cliquable vers sa page dédiée */}
        <Reveal className="mt-8 divide-y divide-border/50 border-y border-border/50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-4 py-4 transition-colors hover:text-primary"
            >
              <span className="font-display text-[15px] font-medium text-foreground transition-colors group-hover:text-primary sm:text-base">
                {item.label}
              </span>
              <ArrowUpRight className="ml-auto size-4 shrink-0 text-muted-foreground/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
            </Link>
          ))}
        </Reveal>

        {/* Mosaïque de réalisations — chaque vignette mène à la page listant tous les sites */}
        <Reveal className="mt-10 sm:mt-12">
          <div className="flex items-baseline justify-between gap-4">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              {t.offers.worksEyebrow[lang]}
            </p>
            <Link
              href={WEB_PROJECTS_HREF}
              className="group inline-flex shrink-0 items-center gap-1 text-[13px] text-muted-foreground transition-colors hover:text-primary"
            >
              {t.offers.worksCta[lang].replace('{count}', String(webProjects.length))}
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 lg:grid-cols-6">
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
        </Reveal>
      </div>
    </section>
  )
}
