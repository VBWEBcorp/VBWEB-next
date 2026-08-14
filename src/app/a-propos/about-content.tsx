'use client'

import { motion } from 'framer-motion'
import { Flame, Target, Palette, ArrowRight, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const ease = [0.22, 1, 0.36, 1] as const

const values = [
  {
    icon: Target,
    title: 'Mon parcours',
    description:
      "Entrepreneuriat à l'étranger, missions IT sous pression, projets digitaux corsés, management d'équipes. J'ai appris à structurer, anticiper et performer.",
  },
  {
    icon: Flame,
    title: 'Ma résilience',
    description:
      "Elle vient de la boxe que j'ai commencée à 13 ans, avec mon premier combat en Thaïlande à 20 ans. Ça m'a appris à tenir bon face aux obstacles.",
  },
  {
    icon: Palette,
    title: 'Mes passions',
    description:
      "Web, IA, design, créativité digitale. Ce que j'aime par-dessus tout : transformer une idée floue en projet concret et impactant.",
  },
]

const links = [
  { title: 'Nos services', description: 'SEO, sites web, applications', href: '/services' },
  { title: 'Études de cas', description: 'Réalisations sélectionnées', href: '/etudes-de-cas' },
  { title: 'Audit SEO gratuit', description: 'Analyse complète sous 48h', href: '/audit-seo-gratuit' },
]

export function AboutContent() {
  return (
    <>
      {/* HERO style Framer */}
      <section className="relative isolate overflow-hidden bg-background">
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
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/[0.05] blur-[120px]"
        />

        <div className="relative mx-auto max-w-6xl px-4 pt-24 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:px-8 lg:pt-40 lg:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease }}
              className="text-center lg:text-left"
            >
              <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
                À propos
              </p>
              <h1 className="mt-5 font-display text-balance text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[4rem]">
                Qui pilote{' '}
                <br className="hidden sm:block" />
                <span className="italic text-muted-foreground/80">VBWEB</span> ?
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base lg:mx-0">
                Victor Béasse, Fondateur & CEO. Consultant SEO et développeur web depuis plus de 8 ans, au service des PME, artisans et commerces.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease, delay: 0.15 }}
              className="relative mx-auto lg:mx-0"
            >
              <div aria-hidden className="absolute -inset-6 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative size-56 overflow-hidden rounded-full border-2 border-primary/20 shadow-[var(--shadow-lg)] ring-1 ring-foreground/5 sm:size-64 lg:size-72">
                <Image
                  src="/victor.jpg"
                  alt="Victor Béasse, fondateur de VBWEB"
                  width={288}
                  height={288}
                  priority
                  fetchPriority="high"
                  quality={80}
                  sizes="288px"
                  className="size-full object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CITATION style Framer */}
      <section className="relative overflow-hidden bg-card">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-[120px]"
        />

        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
            className="text-center"
          >
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Quelques mots du fondateur
            </p>

            <blockquote className="relative mt-8">
              <span
                aria-hidden
                className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 select-none font-serif text-[8rem] leading-none text-primary/15 sm:text-[10rem]"
              >
                &ldquo;
              </span>
              <p className="relative mx-auto max-w-3xl font-display text-2xl font-medium leading-[1.3] text-foreground sm:text-3xl lg:text-[2.25rem]">
                Je suis une vraie pile électrique, toujours une idée en tête, un projet à lancer, un défi à relever.{' '}
                <span className="italic text-muted-foreground/80">
                  J&rsquo;aime quand ça bouge, quand ça challenge, quand on doit se réinventer.
                </span>
              </p>
            </blockquote>

            <div className="mt-10 flex items-center justify-center gap-3">
              <div className="size-10 overflow-hidden rounded-full ring-1 ring-border/60">
                <Image
                  src="/victor.jpg"
                  alt=""
                  width={40}
                  height={40}
                  sizes="40px"
                  className="size-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-[13px] font-semibold text-foreground">Victor Béasse</p>
                <p className="text-[11px] text-muted-foreground/70">Fondateur & CEO VBWEB</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PARCOURS / RESILIENCE / PASSIONS — grille style Framer */}
      <section className="relative overflow-hidden bg-background">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/[0.04] blur-[120px]"
        />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              L&apos;humain derrière VBWEB
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[2.75rem]">
              Mon parcours,{' '}
              <span className="italic text-muted-foreground/80">ma force</span>, mes passions
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:gap-6">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, ease, delay: i * 0.1 }}
                  className="group relative"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-px rounded-[1.4rem] bg-gradient-to-br from-primary/40 via-primary/0 to-primary/20 opacity-0 blur-[2px] transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="relative h-full overflow-hidden rounded-[1.35rem] border border-border/60 bg-card/40 p-7 backdrop-blur-sm transition-all duration-500 group-hover:border-primary/30 group-hover:bg-card/60 sm:p-8">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/[0.05] blur-3xl transition-opacity duration-500 group-hover:bg-primary/[0.12]"
                    />

                    <div className="relative">
                      <div className="flex size-11 items-center justify-center rounded-xl border border-border/60 bg-background/60 text-muted-foreground transition-all duration-500 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary">
                        <Icon className="size-5" aria-hidden />
                      </div>

                      <h3 className="mt-6 font-display text-xl font-semibold leading-snug tracking-[-0.01em] text-foreground sm:text-2xl">
                        {v.title}
                      </h3>

                      <div className="mt-4 h-px w-full bg-gradient-to-r from-border via-border/40 to-transparent" />

                      <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                        {v.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* AUJOURD'HUI — section vision épurée */}
      <section className="relative overflow-hidden bg-card">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-[120px]"
        />

        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
            className="text-center"
          >
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Aujourd&rsquo;hui
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl">
              Une vision,{' '}
              <span className="italic text-muted-foreground/80">une équipe</span>
            </h2>
            <p className="mt-6 text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Je pilote VBWEB avec une équipe d&rsquo;experts. Grâce aux technologies les plus modernes, dont l&rsquo;IA, j&rsquo;aide les entreprises à sortir du lot et à exploser en visibilité en ligne.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LIENS — grille minimaliste */}
      <section className="relative overflow-hidden bg-background">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              La suite
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl">
              Découvrez{' '}
              <span className="italic text-muted-foreground/80">mes services</span>
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[1.5rem] border border-border/60 bg-border/40 sm:grid-cols-3">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              >
                <Link
                  href={link.href}
                  className="group relative block h-full bg-background/95 p-7 backdrop-blur-sm transition-colors duration-500 hover:bg-card/60 sm:p-8"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        'radial-gradient(circle at center top, rgba(78,186,236,0.08), transparent 70%)',
                    }}
                  />
                  <div className="relative flex flex-col">
                    <div className="flex items-start justify-between">
                      <h3 className="font-display text-lg font-semibold tracking-[-0.01em] text-foreground transition-colors duration-500 group-hover:text-primary sm:text-xl">
                        {link.title}
                      </h3>
                      <ArrowUpRight className="size-4 shrink-0 text-muted-foreground/40 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                    </div>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                      {link.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-[14px] font-medium text-primary transition-colors hover:text-primary/80"
            >
              Discutons de votre projet
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
