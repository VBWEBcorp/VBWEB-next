'use client'

import { ArrowRight, Clock, Workflow, LayoutDashboard, Database, Search, Wrench, LineChart } from 'lucide-react'
import Link from 'next/link'

import { Reveal } from '@/components/ui/reveal'

const grain = (
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

const piliers = [
  {
    icon: Workflow,
    title: 'Automatisations & gain de temps',
    desc: "On identifie les tâches répétitives qui vous mangent vos journées (devis, relances, saisie, reporting, e-mails) et on les automatise. Vous récupérez des heures chaque semaine pour votre vrai métier.",
    points: ['Relances et devis automatiques', 'Saisie et transferts de données', 'Reporting généré tout seul', 'Connexion entre vos outils'],
  },
  {
    icon: LayoutDashboard,
    title: 'Outils sur-mesure (CRM, dashboards)',
    desc: "Quand les logiciels du marché ne collent pas à votre activité, je développe l'outil qu'il vous faut : CRM, tableau de bord, plateforme métier. Simple, adapté à vos process, à vous 100 %.",
    points: ['CRM taillé pour votre activité', 'Tableaux de bord clairs', 'Plateformes et espaces métier', 'Intégrations sur mesure'],
  },
]

const steps = [
  { icon: Search, title: 'Audit des tâches chronophages', desc: 'On repère ensemble ce qui vous fait perdre le plus de temps et ce qui peut être automatisé ou outillé.' },
  { icon: Wrench, title: 'Conception de l’outil', desc: 'Je conçois l’automatisation ou l’outil sur-mesure, pensé pour être simple à prendre en main.' },
  { icon: Database, title: 'Intégration & prise en main', desc: 'On branche le tout à vos outils existants et je forme votre équipe.' },
  { icon: LineChart, title: 'Suivi & améliorations', desc: 'On mesure le temps gagné et on fait évoluer l’outil selon vos besoins.' },
]

export function IaEntrepriseContent() {
  return (
    <>
      {/* Piliers */}
      <section className="relative overflow-hidden bg-background">
        {grain}
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Concrètement
            </p>
            <h2 className="mt-4 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl">
              L’IA au service de votre PME,{' '}
              <span className="italic text-muted-foreground/80">pas l’inverse</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Pas de gadget. Deux leviers concrets pour vous faire gagner du temps et piloter votre activité.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {piliers.map((p, i) => {
              const Icon = p.icon
              return (
                <Reveal key={p.title} delay={i * 0.1}>
                  <div className="flex h-full flex-col rounded-[1.35rem] border border-border/60 bg-card/40 p-7 sm:p-9">
                    <span className="flex size-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/5 text-primary">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.01em] text-foreground sm:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                      {p.desc}
                    </p>
                    <ul className="mt-6 space-y-2.5 border-t border-border/40 pt-6">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2.5 text-[14px] text-foreground/85">
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Comment ça se passe */}
      <section className="relative overflow-hidden bg-card">
        {grain}
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Comment ça se passe
            </p>
            <h2 className="mt-4 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl">
              Du constat{' '}
              <span className="italic text-muted-foreground/80">au temps gagné</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <Reveal key={step.title} delay={i * 0.08} className="flex flex-col items-start">
                  <div className="flex items-center gap-3">
                    <span className="flex size-12 items-center justify-center rounded-2xl border border-primary/30 bg-background text-primary">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="font-display text-[2.5rem] font-bold leading-none tracking-[-0.04em] text-muted-foreground/20">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold leading-snug tracking-[-0.01em] text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                    {step.desc}
                  </p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-background">
        {grain}
        <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-[12px] font-medium text-primary">
              <Clock className="size-3.5" /> Gagnez des heures chaque semaine
            </span>
            <h2 className="mt-6 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl">
              Une tâche vous fait perdre du temps ? Parlons-en.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              On regarde ensemble ce qui peut être automatisé ou outillé dans votre PME. Sans engagement.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-[14px] font-medium text-primary-foreground transition-colors hover:bg-primary/85"
              >
                Parlez-moi de votre projet
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/etudes-de-cas/applications-web"
                className="text-[13px] text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
              >
                Voir des exemples d’outils développés
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
