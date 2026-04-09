'use client'

import {
  ArrowRight,
  ChevronDown,
  Star,
  User,
  Zap,
  MessageCircle,
  Target,
  TrendingUp,
  Shield,
  Phone,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { CountUp } from '@/components/ui/count-up'
import { Reveal } from '@/components/ui/reveal'

/* ------------------------------------------------------------------ */
/*  Grain texture                                                      */
/* ------------------------------------------------------------------ */

function Grain() {
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

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const advantages = [
  {
    icon: User,
    title: 'Un interlocuteur dédié',
    description:
      'Vous échangez directement avec moi, pas avec un commercial ou un chargé de compte. Une équipe solide derrière pour l\'exécution. C\'est comme ça qu\'on a pu faire passer Rennes Pneus de 30 à 3 600 visites par mois.',
  },
  {
    icon: Zap,
    title: 'Réactivité au quotidien',
    description:
      'Un souci technique ou une opportunité à saisir ? La réponse arrive dans la journée. Pas de ticket, pas de file d\'attente.',
  },
  {
    icon: Target,
    title: 'Stratégie adaptée à votre marché',
    description:
      'Chaque entreprise a ses propres mots-clés, ses concurrents, son contexte. Pour EPICU, on a ciblé 380+ mots-clés longue traîne. Pour Rennes Pneus, c\'était du SEO local pur.',
  },
  {
    icon: MessageCircle,
    title: 'Transparence totale',
    description:
      'Rapport mensuel clair, accès à vos données, explication de chaque action. Vous comprenez ce qui est fait et pourquoi.',
  },
]

const caseStudies = [
  {
    name: 'Rennes Pneus',
    sector: 'Garage automobile',
    metric: '3 600',
    metricLabel: 'visites/mois',
    before: '30 visites/mois',
    detail: 'De invisible sur Google à 1er sur "pneus Rennes", "garage Rennes" et 87 mots-clés en Top 10. Le téléphone sonne tous les jours.',
    href: '/etudes-de-cas/referencement',
  },
  {
    name: 'EPICU',
    sector: 'Marque lifestyle',
    metric: '5 000',
    metricLabel: 'visites/mois',
    before: '100 visites/mois',
    detail: 'Stratégie SEO de A à Z sur 3 ans. De 8 mots-clés positionnés à 342. Le SEO est devenu leur premier canal d\'acquisition.',
    href: '/etudes-de-cas/referencement',
  },
  {
    name: 'Jumelles.com',
    sector: 'E-commerce optique',
    metric: '+33%',
    metricLabel: 'trafic organique',
    before: '2 100 mots-clés',
    detail: '620+ fiches produits réécrites, temps de chargement divisé par 2,5. +1 280 mots-clés gagnés en 12 mois.',
    href: '/etudes-de-cas/referencement',
  },
]

const process = [
  {
    number: '01',
    title: 'On se parle',
    description:
      '30 minutes gratuites pour comprendre votre activité, vos objectifs et vos concurrents. On vous montre concrètement ce que le SEO peut vous apporter, sans engagement.',
  },
  {
    number: '02',
    title: 'Audit et stratégie',
    description:
      'Analyse complète de votre site : technique, contenu, positionnement, concurrence. Vous recevez un plan d\'action priorisé avec les actions rapides et la stratégie long terme.',
  },
  {
    number: '03',
    title: 'Mise en place et suivi',
    description:
      'Les optimisations sont déployées mois après mois. Rapport de positionnement, trafic, appels générés : vous suivez votre progression en temps réel.',
  },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

interface FreelanceSeoContentProps {
  faqs: { question: string; answer: string }[]
}

export function FreelanceSeoContent({ faqs }: FreelanceSeoContentProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="relative overflow-hidden bg-background">
        <Grain />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div
            className="mx-auto max-w-3xl text-center"
            style={{ animation: 'hero-fade-up 0.65s cubic-bezier(0.22,1,0.36,1) both' }}
          >
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Freelance SEO à Rennes
            </p>
            <h1 className="mt-5 font-display text-balance text-4xl font-medium leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
              Votre référencement{' '}
              <span className="italic text-muted-foreground/80">entre de bonnes mains</span>
            </h1>
            <p className="hero-description mx-auto mt-6 max-w-2xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Victor Béasse, freelance SEO basé à Rennes. Plus de 200 campagnes SEO menées pour des PME, artisans et commerces en Bretagne. Vous échangez directement avec moi, une équipe dédiée s&apos;occupe du reste. 75 avis 5 étoiles sur Google.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
                <Link href="/audit-seo-gratuit">
                  Audit SEO gratuit
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-border/60" asChild>
                <Link href="/contact">Me contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ POURQUOI UN FREELANCE ═══════ */}
      <section className="relative overflow-hidden bg-card">
        <Grain />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Freelance vs agence
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
              Pourquoi choisir un freelance SEO{' '}
              <span className="italic text-muted-foreground/80">plutôt qu&apos;une agence</span> ?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              En agence, votre dossier passe entre 3 personnes avant d&apos;être traité. Chez VBWEB, vous échangez directement avec le fondateur, et une équipe dédiée assure l&apos;exécution.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {advantages.map((adv, i) => {
              const Icon = adv.icon
              return (
                <Reveal key={adv.title} delay={i * 0.08} className="group relative">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-px rounded-[1.4rem] bg-gradient-to-br from-primary/40 via-primary/0 to-primary/20 opacity-0 blur-[2px] transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="relative h-full rounded-[1.35rem] border border-border/60 bg-background/50 p-8 transition-colors duration-500 group-hover:border-primary/30 group-hover:bg-background/70">
                    <div className="flex size-10 items-center justify-center rounded-xl border border-border/60 bg-background/40 text-muted-foreground/60 transition-colors duration-500 group-hover:border-primary/30 group-hover:text-primary">
                      <Icon className="size-4" aria-hidden />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                      {adv.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                      {adv.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════ RÉSULTATS CHIFFRÉS ═══════ */}
      <section className="relative overflow-hidden bg-background">
        <Grain />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Résultats concrets
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
              Ce que mes clients{' '}
              <span className="italic text-muted-foreground/80">obtiennent vraiment</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            <Reveal className="rounded-[1.35rem] border border-border/60 bg-card/40 p-8 text-center">
              <CountUp value={150} prefix="+" className="font-display text-[3rem] font-bold leading-none tracking-[-0.04em] text-foreground" />
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/60">
                sites créés
              </p>
            </Reveal>
            <Reveal delay={0.1} className="rounded-[1.35rem] border border-border/60 bg-card/40 p-8 text-center">
              <CountUp value={200} prefix="+" className="font-display text-[3rem] font-bold leading-none tracking-[-0.04em] text-foreground" />
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/60">
                campagnes SEO menées
              </p>
            </Reveal>
            <Reveal delay={0.2} className="rounded-[1.35rem] border border-border/60 bg-card/40 p-8 text-center">
              <CountUp value={75} className="font-display text-[3rem] font-bold leading-none tracking-[-0.04em] text-foreground" />
              <div className="mt-1 flex items-center justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" aria-hidden />
                ))}
              </div>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/60">
                avis Google
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════ ÉTUDES DE CAS ═══════ */}
      <section className="relative overflow-hidden bg-card">
        <Grain />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Preuves à l&apos;appui
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
              3 clients, 3 histoires{' '}
              <span className="italic text-muted-foreground/80">de croissance</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Pas des promesses. Des résultats vérifiables, obtenus pour des entreprises réelles à Rennes et en France.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.name} delay={i * 0.08} className="group relative">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-[1.4rem] bg-gradient-to-br from-primary/40 via-primary/0 to-primary/20 opacity-0 blur-[2px] transition-opacity duration-500 group-hover:opacity-100"
                />
                <Link
                  href={cs.href}
                  className="relative flex h-full flex-col rounded-[1.35rem] border border-border/60 bg-background/50 p-8 transition-colors duration-500 group-hover:border-primary/30 group-hover:bg-background/70"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display text-lg font-semibold text-foreground">{cs.name}</p>
                      <p className="text-[12px] text-muted-foreground/60">{cs.sector}</p>
                    </div>
                    <ArrowRight className="size-4 text-muted-foreground/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                  </div>

                  <div className="mt-6 h-px w-full bg-gradient-to-r from-border via-border/60 to-transparent" />

                  <div className="mt-6">
                    <span className="font-display text-[2.5rem] font-bold leading-none tracking-[-0.03em] text-primary">
                      {cs.metric}
                    </span>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/60">
                      {cs.metricLabel}
                    </p>
                    <p className="mt-1 text-[12px] text-muted-foreground/50 line-through">
                      Avant : {cs.before}
                    </p>
                  </div>

                  <p className="mt-5 flex-1 text-[14px] leading-relaxed text-muted-foreground">
                    {cs.detail}
                  </p>

                  <p className="mt-5 text-[12px] font-medium text-primary">
                    Voir l&apos;étude de cas complète →
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ COMMENT JE TRAVAILLE ═══════ */}
      <section className="relative overflow-hidden bg-background">
        <Grain />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Mon approche
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
              Comment on travaille{' '}
              <span className="italic text-muted-foreground/80">ensemble</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {process.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08}>
                <div className="relative h-full rounded-[1.35rem] border border-border/60 bg-card/40 p-8">
                  <span className="font-display text-[2.25rem] font-bold leading-none tracking-[-0.03em] text-muted-foreground/20">
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CONFIANCE ═══════ */}
      <section className="relative overflow-hidden bg-card">
        <Grain />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Garanties
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
              Travailler avec moi,{' '}
              <span className="italic text-muted-foreground/80">concrètement</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Shield, title: 'Sans engagement', text: 'Pas de contrat longue durée. Vous restez parce que les résultats sont là, pas parce que vous êtes bloqué.' },
              { icon: Phone, title: 'Joignable directement', text: 'Vous appelez, on décroche. Pas de standard, pas de ticket support.' },
              { icon: TrendingUp, title: 'Résultats mesurables', text: 'Rapport mensuel avec vos positions Google, votre trafic et les actions réalisées. Tout est transparent.' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="h-full rounded-[1.35rem] border border-border/60 bg-background/50 p-8">
                    <div className="flex size-10 items-center justify-center rounded-xl border border-border/60 bg-background/40 text-primary">
                      <Icon className="size-4" aria-hidden />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section className="relative overflow-hidden bg-background">
        <Grain />
        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Questions fréquentes
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl">
              Freelance SEO à Rennes :{' '}
              <span className="italic text-muted-foreground/80">vos questions</span>
            </h2>
          </Reveal>

          <div className="mt-12 space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="rounded-[1.15rem] border border-border/60 bg-card/40 transition-colors duration-300 hover:border-primary/20">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-display text-[15px] font-semibold text-foreground sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`size-4 shrink-0 text-muted-foreground transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    style={{ maxHeight: openFaq === i ? '500px' : '0px' }}
                    className="overflow-hidden transition-all duration-300"
                  >
                    <p className="faq-answer px-5 pb-5 text-[15px] leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA FINAL ═══════ */}
      <section className="relative overflow-hidden bg-card">
        <Grain />
        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="text-center space-y-6">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Prêt à démarrer ?
            </p>
            <h2 className="font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl">
              Parlons de votre{' '}
              <span className="italic text-muted-foreground/80">visibilité sur Google</span>
            </h2>
            <p className="mx-auto max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              30 minutes gratuites, sans engagement. On regarde ensemble ce que le SEO peut apporter à votre entreprise à Rennes. Audit offert.
            </p>
            <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row">
              <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
                <Link href="/contact">
                  Prendre rendez-vous
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-border/60" asChild>
                <Link href="/audit-seo-gratuit">Audit SEO gratuit</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
