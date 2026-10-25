import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Quote } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'
import { TiltCard } from '@/components/ui/tilt-card'
import { appProjects, type AppProject } from '@/lib/app-projects'

/* Grain overlay reused across sections */
const grain = (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0"
    style={{
      backgroundImage:
        'radial-gradient(circle, currentColor 1px, transparent 1px)',
      backgroundSize: '4px 4px',
      opacity: 0.04,
    }}
  />
)

const videoCount = appProjects.filter((p) => p.loomId).length
const platformCount = appProjects.filter((p) => p.image).length

function ProjectMedia({ project }: { project: AppProject }) {
  if (project.loomId) {
    return (
      <div className="aspect-video overflow-hidden">
        <iframe
          src={`https://www.loom.com/embed/${project.loomId}`}
          frameBorder="0"
          allowFullScreen
          className="size-full"
          title={`Démonstration ${project.title}, application web développée par VBWEB à Rennes`}
          loading="lazy"
        />
      </div>
    )
  }
  if (project.image) {
    const img = (
      <img
        src={project.image}
        alt={`${project.title}, plateforme développée par VBWEB`}
        width={1440}
        height={900}
        loading="lazy"
        decoding="async"
        className="card-lift-media size-full object-cover object-top"
      />
    )
    return (
      <div className="relative aspect-video overflow-hidden border-b border-border/60">
        {project.href ? (
          <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Ouvrir ${project.title}`}>
            {img}
          </a>
        ) : (
          img
        )}
      </div>
    )
  }
  return null
}

export function ApplicationsWebContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        {grain}
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Link
            href="/etudes-de-cas"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" />
            Toutes les études de cas
          </Link>
          {/* Premier ecran : aucune animation d'entree, le texte est lisible des le rendu. */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Développement sur mesure à Rennes
            </p>
            <h1 className="mt-4 font-display text-balance text-4xl font-medium leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
              Applications web et outils digitaux
            </h1>
            <p className="hero-description mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              CRM, logiciels de gestion, plateformes métier : des outils digitaux sur mesure pour automatiser votre activité et gagner en productivité.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
                <Link href="/contact">
                  Discuter de votre projet
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/15 bg-foreground/5 text-foreground hover:bg-foreground/10 hover:text-foreground" asChild>
                <Link href="/creation-site-internet">Nos services web</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="relative overflow-hidden bg-card">
        {grain}
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="font-display text-balance text-3xl font-medium leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl">
              Des outils conçus pour votre métier
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Chaque application est développée en fonction de vos processus métier. Pas de solution générique. Un outil qui s&apos;adapte à votre façon de travailler, pas l&apos;inverse. {appProjects.length} projets ci-dessous : {platformCount} plateformes complètes en ligne et {videoCount} outils métier présentés en vidéo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Projects grid */}
      <section className="relative overflow-hidden bg-background">
        {grain}
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Réalisations
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.02em] text-foreground sm:text-4xl">
              Applications et plateformes développées à Rennes
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {appProjects.map((project, i) => (
              <Reveal key={project.id} delay={(i % 3) * 0.06} className="h-full">
                <TiltCard max={4} className="h-full rounded-[1.35rem]">
                <article
                  id={project.id}
                  className="group flex h-full scroll-mt-24 flex-col overflow-hidden rounded-[1.35rem] border border-border/60 bg-card/40 transition-[border-color,box-shadow] duration-300 hover:border-primary/30 hover:shadow-[var(--shadow-md)]"
                >
                  <ProjectMedia project={project} />

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <span className="inline-flex items-center gap-2 self-start rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-[12px] font-semibold text-foreground">
                      <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                      {project.kind}
                    </span>
                    <h3 className="mt-3 mb-2 font-display text-lg font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6 space-y-2.5">
                      {project.features.map((feature, fi) => (
                        <div key={fi} className="flex items-start gap-2.5">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                          <span className="text-[13px] leading-snug text-foreground/70">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial, or the stack and the link for a live platform */}
                    {project.testimonial ? (
                      <div className="mt-auto rounded-xl border border-border/40 bg-foreground/[0.03] p-5">
                        <Quote className="mb-2 size-4 text-primary/40" />
                        <p className="mb-2.5 text-[13px] italic leading-relaxed text-foreground/80">
                          &ldquo;{project.testimonial.text}&rdquo;
                        </p>
                        <p className="text-xs font-semibold text-primary">
                          {project.testimonial.author}
                        </p>
                      </div>
                    ) : (
                      <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-border/50 pt-4">
                        {project.stack?.map((s) => (
                          <span
                            key={s}
                            className="rounded-full bg-foreground/5 px-2.5 py-1 text-[11px] font-medium text-muted-foreground/80"
                          >
                            {s}
                          </span>
                        ))}
                        {project.href && (
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto inline-flex items-center gap-1 text-[13px] font-medium text-primary transition-colors hover:text-primary/80"
                          >
                            Voir la plateforme
                            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-card">
        {grain}
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal>
            <div className="rounded-2xl border border-border/60 bg-background p-8 text-center sm:p-12">
              <h2 className="font-display text-balance text-xl font-semibold text-foreground sm:text-2xl">
                Un projet d&apos;application sur mesure ?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                CRM, outil de gestion, plateforme métier : nous développons l&apos;application dont votre entreprise a besoin. Basée à Rennes, l&apos;agence travaille avec des entreprises partout en France.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" variant="outline" className="border-white/15 bg-foreground/5 text-foreground hover:bg-foreground/10 hover:text-foreground" asChild>
                  <Link href="/creation-site-internet">En savoir plus</Link>
                </Button>
                <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
                  <Link href="/contact">
                    Discuter de votre projet
                    <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
