'use client'

import { motion } from 'framer-motion'
import { Flame, Target, Palette, ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { CtaSection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { SectionTitle } from '@/components/ui/section-title'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const ease = [0.22, 1, 0.36, 1] as const

export function AboutContent() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Qui pilote VBWEB ?"
        description="Victor Beasse — Fondateur & CEO"
        image="https://i.ibb.co/1fRDj4NP/Victor.jpg"
        breadcrumb="À propos"
      />

      {/* Citation / mot du fondateur */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease }}
            className="text-center"
          >
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase mb-6">
              Quelques mots du fondateur
            </p>
            <blockquote className="relative">
              <span aria-hidden className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl text-primary/15 font-serif select-none">&ldquo;</span>
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-foreground font-medium italic max-w-3xl mx-auto">
                Je suis une vraie pile &eacute;lectrique, toujours une id&eacute;e en t&ecirc;te, un projet &agrave; lancer, un d&eacute;fi &agrave; relever. J&rsquo;aime quand &ccedil;a bouge, quand &ccedil;a challenge, quand on doit se r&eacute;inventer.
              </p>
            </blockquote>
            <p className="mt-6 text-sm text-muted-foreground">
              Victor Beasse, Fondateur & CEO VBWEB
            </p>
          </motion.div>
        </div>
      </section>

      {/* Parcours / Résilience / Passions */}
      <section className="border-b border-border/60 bg-muted/10">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionTitle eyebrow="L'humain derrière VBWEB" title="Mon parcours, ma force, mes passions" />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: 'Mon parcours',
                description: "De l'entrepreneuriat à l'étranger aux missions IT sous pression, en passant par la gestion de projets digitaux bien corsés et le management d'équipes. J'ai appris à structurer, anticiper et performer là où il faut être bon, vite et bien.",
              },
              {
                icon: Flame,
                title: 'Ma résilience',
                description: "Elle vient de la boxe que j'ai commencée à 13 ans, avec mon premier combat en Thaïlande à 20 ans. Ça m'a appris à tenir bon face aux obstacles.",
              },
              {
                icon: Palette,
                title: 'Mes passions',
                description: "Passionné par le web, l'IA, le design et la créativité digitale, ce que j'aime par-dessus tout, c'est partir d'une idée un peu floue et la transformer en projet concret, impactant, qui dégage quelque chose.",
              },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, ease, delay: i * 0.05 }}
              >
                <Card className="h-full rounded-2xl border-border/80 bg-card/70 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5">
                  <CardHeader>
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
                      <v.icon className="size-5" aria-hidden />
                    </span>
                    <CardTitle className="font-display text-base">{v.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">{v.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision / Aujourd'hui */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease }}
          >
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase mb-6">
              Aujourd&rsquo;hui
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              Je pilote VBWEB avec une &eacute;quipe d&rsquo;experts dans leurs domaines. Gr&acirc;ce aux technologies les plus modernes du march&eacute;, dont l&rsquo;IA, et en m&rsquo;adaptant en continu, j&rsquo;aide les entreprises &agrave; sortir du lot, exploser en visibilit&eacute; en ligne et propulser leurs projets digitaux.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Links */}
      <section className="border-b border-border/60 bg-muted/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl tracking-[-0.02em] sm:text-3xl">D&eacute;couvrez nos services et r&eacute;alisations</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
            Nous accompagnons les entreprises de Rennes et de Bretagne avec des solutions web et SEO sur mesure.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
            {[
              { title: 'Nos services', href: '/services' },
              { title: 'Études de cas', href: '/etudes-de-cas' },
              { title: 'Audit SEO gratuit', href: '/audit-seo-gratuit' },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="rounded-xl border border-border/80 bg-card/70 px-5 py-4 text-sm font-medium transition-colors hover:border-primary/20 hover:text-primary"
              >
                {s.title}
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80">
              Nous contacter
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
