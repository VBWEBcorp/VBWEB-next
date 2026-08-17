import Link from 'next/link'
import { ArrowRight, ExternalLink, Info, Star } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'
import { webProjects, type WebProject } from '@/lib/projects'

const projects = webProjects

function ProjectCard({ project, index }: { project: WebProject; index: number }) {
  return (
    // Cascade par rangée : au-delà d'une trentaine de cartes, un délai cumulé
    // ferait attendre les dernières bien trop longtemps.
    <Reveal delay={(index % 6) * 0.04} className="h-full">
      <div className="group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-border/60 bg-card/40 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={`Site internet ${project.name} créé par VBWEB à Rennes`}
            className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            width={1440}
            height={900}
            loading={index < 6 ? 'eager' : 'lazy'}
            decoding="async"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
        </div>

        <div className="flex flex-1 flex-col p-3 sm:p-5">
          <h3 className="mb-1.5 font-display text-[13px] font-semibold leading-tight text-foreground transition-colors duration-200 group-hover:text-primary sm:mb-2 sm:text-base">
            {project.name}
          </h3>
          <p className="mb-3 flex-1 text-[11px] leading-relaxed text-muted-foreground sm:mb-4 sm:text-sm">
            {project.description}
          </p>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto flex w-full items-center justify-center gap-1.5 rounded-xl border border-primary/30 bg-primary/10 px-2 py-1.5 text-[11px] font-medium text-foreground transition-all duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground sm:px-3 sm:py-2 sm:text-xs"
          >
            <ExternalLink className="size-3" />
            Voir le site
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export function SitesInternetContent() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-background">
        {/* Grain overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url(/grain.webp)', backgroundRepeat: 'repeat' }} />

        <div className="relative mx-auto max-w-6xl px-4 pb-4 pt-6 sm:px-6 sm:pb-8 sm:pt-10 lg:px-8 lg:pb-10 lg:pt-14">
          <div
            className="mx-auto max-w-3xl text-center"
            style={{ animation: 'hero-fade-up 0.65s cubic-bezier(0.22,1,0.36,1) both' }}
          >
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-primary sm:text-xs">
              Portfolio, Créations web à Rennes
            </p>
            <h1 className="mt-2 font-display text-balance text-[26px] leading-[1.08] tracking-[-0.03em] text-foreground sm:mt-3 sm:text-5xl">
              {projects.length} sites internet créés sur mesure
            </h1>
            <p className="hero-description mx-auto mt-3 max-w-2xl text-pretty text-[13px] leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
              Artisans, commerçants, indépendants et PME : chaque site ci-dessous
              est en ligne aujourd&apos;hui. Cliquez, ils sont tous visitables.
            </p>
          </div>

          {/* ── Chiffres clés ── */}
          <Reveal delay={0.04} className="mx-auto mt-6 max-w-3xl sm:mt-8">
            <dl className="grid grid-cols-3 divide-x divide-border/60 rounded-2xl border border-border/60 bg-card/40 py-4 sm:py-5">
              {[
                { value: `${projects.length}`, label: 'sites en ligne' },
                { value: '80+', label: 'avis 5 étoiles' },
                { value: '100%', label: 'sur mesure' },
              ].map((stat) => (
                <div key={stat.label} className="px-2 text-center sm:px-4">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-xl font-semibold tracking-[-0.02em] text-primary sm:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-0.5 block text-[10px] leading-tight text-muted-foreground sm:text-xs">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.08} className="mx-auto mt-4 max-w-3xl sm:mt-5">
            <div className="rounded-2xl border border-border/60 bg-card/40 p-3 sm:p-4">
              <div className="flex items-start gap-2.5">
                <Info className="mt-0.5 size-4 shrink-0 text-primary sm:size-5" />
                <p className="text-[11px] leading-relaxed text-muted-foreground sm:text-sm">
                  Cet espace présente un aperçu des créations réalisées par VBWEB.
                  La partie <Link href="/referencement-seo" className="text-primary underline underline-offset-2 transition-colors duration-200 hover:text-primary/80">référencement SEO</Link> dépend
                  du budget et des besoins de chaque client. Ici, c&apos;est uniquement le design et l&apos;expérience utilisateur qui sont mis en avant.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="relative bg-background">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url(/grain.webp)', backgroundRepeat: 'repeat' }} />

        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-2 sm:px-6 sm:pb-16 sm:pt-4 lg:px-8 lg:pb-20">
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <Reveal delay={0.1} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
              <Link href="/contact">
                Demander un devis
                <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/15 bg-foreground/5 text-foreground hover:bg-foreground/10 hover:text-foreground" asChild>
              <Link href="/creation-site-internet">Nos services web</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ── Social proof ── */}
      <section className="relative bg-card">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url(/grain.webp)', backgroundRepeat: 'repeat' }} />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs text-muted-foreground/60">80+ avis 5 étoiles</p>
            <a
              href="https://share.google/RdtyxDLN4e3KEx2eO"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground underline underline-offset-2 transition-colors duration-200 hover:text-primary"
            >
              Découvrir les avis clients
            </a>
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.08} className="mt-14">
            <div className="rounded-[1.35rem] border border-border/60 bg-background p-8 text-center sm:p-12">
              <h2 className="font-display text-balance text-xl font-semibold text-foreground sm:text-2xl">
                Un projet de site internet à Rennes ?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                De la maquette à la mise en ligne, je crée votre site sur mesure optimisé pour Google. <Link href="/audit-seo-gratuit" className="text-primary underline underline-offset-2 transition-colors duration-200 hover:text-primary/80">Audit SEO gratuit</Link> inclus.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" variant="outline" className="border-white/15 bg-foreground/5 text-foreground hover:bg-foreground/10 hover:text-foreground" asChild>
                  <Link href="/creation-site-internet">En savoir plus</Link>
                </Button>
                <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
                  <Link href="/contact">
                    Demander un devis
                    <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
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
