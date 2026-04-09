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
  MapPin,
  FileSearch,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { CountUp } from '@/components/ui/count-up'
import { Reveal } from '@/components/ui/reveal'

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

const advantages = [
  {
    icon: User,
    title: 'Un interlocuteur dédié, une équipe derrière',
    description:
      'Vous échangez directement avec le fondateur, pas avec un commercial. Une équipe assure l\'exécution au quotidien. C\'est cette organisation qui a permis d\'accompagner Rennes Pneus de 30 à 3 600 visites par mois.',
  },
  {
    icon: Zap,
    title: 'Réactivité au quotidien',
    description:
      'Un souci technique sur votre site ou une opportunité à saisir sur Google ? On réagit dans la journée. Pas de ticket, pas de file d\'attente.',
  },
  {
    icon: Target,
    title: 'Stratégie SEO adaptée à votre marché rennais',
    description:
      'Chaque entreprise a ses propres mots-clés et ses concurrents. Pour EPICU, on a ciblé 380+ mots-clés longue traîne. Pour Rennes Pneus, c\'était du référencement local pur sur Rennes et son agglomération.',
  },
  {
    icon: MessageCircle,
    title: 'Transparence sur chaque action',
    description:
      'Rapport mensuel, accès à vos données, explication de chaque optimisation réalisée. Vous comprenez ce qui est fait et pourquoi, pas de boîte noire.',
  },
]

const caseStudies = [
  {
    name: 'Rennes Pneus',
    sector: 'Garage automobile, Rennes',
    metric: '3 600',
    metricLabel: 'visites/mois',
    before: '30 visites/mois',
    detail: 'De invisible sur Google à 1er sur "pneus Rennes", "garage Rennes" et 87 mots-clés en Top 10. Le téléphone sonne tous les jours grâce au SEO local.',
    href: '/etudes-de-cas/referencement',
  },
  {
    name: 'EPICU',
    sector: 'Marque lifestyle, Rennes',
    metric: '5 000',
    metricLabel: 'visites/mois',
    before: '100 visites/mois',
    detail: 'Stratégie de référencement naturel complète sur 3 ans. De 8 mots-clés positionnés à 342. Le SEO est devenu leur premier canal d\'acquisition, devant les réseaux sociaux.',
    href: '/etudes-de-cas/referencement',
  },
  {
    name: 'Jumelles.com',
    sector: 'E-commerce optique',
    metric: '+33%',
    metricLabel: 'trafic organique',
    before: '2 100 mots-clés',
    detail: '620+ fiches produits réécrites avec du contenu unique, temps de chargement divisé par 2,5. +1 280 mots-clés gagnés en 12 mois.',
    href: '/etudes-de-cas/referencement',
  },
]

const process = [
  {
    number: '01',
    title: 'On se parle',
    description:
      '30 minutes pour comprendre votre activité, vos objectifs et analyser rapidement votre positionnement actuel sur Google. On vous dit clairement si le SEO est pertinent pour vous.',
  },
  {
    number: '02',
    title: 'Audit SEO et plan d\'action',
    description:
      'Analyse complète de votre site : technique, contenu, positionnement, concurrence locale à Rennes. Vous recevez un plan d\'action priorisé avec les premières actions rapides et la stratégie sur 6 à 12 mois.',
  },
  {
    number: '03',
    title: 'Optimisations et suivi mensuel',
    description:
      'Les optimisations sont déployées mois après mois. Rapport de positionnement, évolution du trafic, appels ou demandes générés : tout est suivi dans votre application dédiée.',
  },
]

interface FreelanceSeoContentProps {
  faqs: { question: string; answer: string }[]
}

export function FreelanceSeoContent({ faqs }: FreelanceSeoContentProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-background">
        <Grain />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div
            className="mx-auto max-w-3xl text-center"
            style={{ animation: 'hero-fade-up 0.65s cubic-bezier(0.22,1,0.36,1) both' }}
          >
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Freelance SEO a Rennes
            </p>
            <h1 className="mt-5 font-display text-balance text-4xl font-medium leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
              Freelance SEO à Rennes :{' '}
              <span className="italic text-muted-foreground/80">votre référencement naturel en Bretagne</span>
            </h1>
            <p className="hero-description mx-auto mt-6 max-w-2xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              VBWEB, c&apos;est Victor Béasse et son équipe, basés à Rennes. Plus de 200 campagnes de référencement naturel menées pour des PME, artisans et commerces en Bretagne. Vous échangez directement avec le fondateur, une équipe dédiée assure le travail au quotidien.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
                <Link href="/audit-seo-gratuit">
                  Audit SEO gratuit
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-border/60" asChild>
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* QU'EST-CE QU'UN FREELANCE SEO */}
      <section className="relative overflow-hidden bg-card">
        <Grain />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Comprendre le métier
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
              Qu&apos;est-ce qu&apos;un freelance SEO{' '}
              <span className="italic text-muted-foreground/80">et à quoi ça sert</span> ?
            </h2>
            <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Un freelance SEO est un expert en référencement naturel qui travaille de manière indépendante pour améliorer la visibilité de votre site sur Google. Contrairement à une agence, vous avez un contact direct avec la personne responsable de votre projet.
              </p>
              <p>
                Concrètement, un freelance SEO à Rennes analyse votre positionnement actuel, identifie les mots-clés que vos clients potentiels tapent sur Google (par exemple "plombier Rennes", "restaurant Cesson-Sévigné" ou "avocat droit des affaires Rennes"), puis optimise votre site pour que vous apparaissiez dans les premiers résultats.
              </p>
              <p>
                Le travail se fait sur trois axes : la <strong>technique</strong> (vitesse du site, structure, balisage), le <strong>contenu</strong> (pages optimisées, articles ciblés) et la <strong>popularité</strong> (liens depuis d&apos;autres sites vers le vôtre). C&apos;est un travail de fond qui prend entre 3 et 6 mois pour donner ses premiers résultats, mais qui continue de porter ses fruits pendant des années.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* POURQUOI UN FREELANCE */}
      <section className="relative overflow-hidden bg-background">
        <Grain />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Freelance SEO vs agence à Rennes
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
              Pourquoi choisir un freelance SEO{' '}
              <span className="italic text-muted-foreground/80">à Rennes</span> ?
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
                  <div className="relative h-full rounded-[1.35rem] border border-border/60 bg-card/40 p-8 transition-colors duration-500 group-hover:border-primary/30 group-hover:bg-card/60">
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

      {/* CHIFFRES */}
      <section className="relative overflow-hidden bg-card">
        <Grain />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              VBWEB en chiffres
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
              Des résultats{' '}
              <span className="italic text-muted-foreground/80">concrets et vérifiables</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            <Reveal className="rounded-[1.35rem] border border-border/60 bg-background/50 p-8 text-center">
              <CountUp value={150} prefix="+" className="font-display text-[3rem] font-bold leading-none tracking-[-0.04em] text-foreground" />
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/60">
                sites créés
              </p>
            </Reveal>
            <Reveal delay={0.1} className="rounded-[1.35rem] border border-border/60 bg-background/50 p-8 text-center">
              <CountUp value={200} prefix="+" className="font-display text-[3rem] font-bold leading-none tracking-[-0.04em] text-foreground" />
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/60">
                campagnes SEO menées
              </p>
            </Reveal>
            <Reveal delay={0.2} className="rounded-[1.35rem] border border-border/60 bg-background/50 p-8 text-center">
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

      {/* ÉTUDES DE CAS */}
      <section className="relative overflow-hidden bg-background">
        <Grain />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Résultats SEO à Rennes
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
              3 entreprises accompagnées,{' '}
              <span className="italic text-muted-foreground/80">3 croissances mesurables</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Des résultats obtenus pour des entreprises réelles, vérifiables dans nos <Link href="/etudes-de-cas/referencement" className="text-primary hover:underline">études de cas détaillées</Link>.
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
                  className="relative flex h-full flex-col rounded-[1.35rem] border border-border/60 bg-card/40 p-8 transition-colors duration-500 group-hover:border-primary/30 group-hover:bg-card/60"
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
                    Voir l&apos;étude de cas complète
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT ON TRAVAILLE */}
      <section className="relative overflow-hidden bg-card">
        <Grain />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Notre méthode
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
              Comment se passe un accompagnement SEO{' '}
              <span className="italic text-muted-foreground/80">avec VBWEB à Rennes</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {process.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08}>
                <div className="relative h-full rounded-[1.35rem] border border-border/60 bg-background/50 p-8">
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

      {/* CONFIANCE */}
      <section className="relative overflow-hidden bg-background">
        <Grain />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Votre projet SEO à Rennes
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
              Ce que chaque client{' '}
              <span className="italic text-muted-foreground/80">obtient chez VBWEB</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Shield, title: 'Application de suivi dédiée', text: 'Chaque client a accès à une application avec le suivi de son projet, des synthèses régulières et des ressources personnalisées pour son activité.' },
              { icon: Phone, title: 'Échange direct avec le fondateur', text: 'Vous discutez directement avec Victor via l\'application, par message ou en visio. Pas de standard, pas de ticket.' },
              { icon: TrendingUp, title: 'Résultats mesurables chaque mois', text: 'Rapport mensuel avec vos positions Google, l\'évolution de votre trafic et les actions réalisées. Tout est transparent et vérifiable.' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="h-full rounded-[1.35rem] border border-border/60 bg-card/40 p-8">
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

      {/* SEO LOCAL RENNES */}
      <section className="relative overflow-hidden bg-card">
        <Grain />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Ancrage local
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
              Un freelance SEO ancré{' '}
              <span className="italic text-muted-foreground/80">dans le tissu rennais</span>
            </h2>
            <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Être basé à Rennes, ce n&apos;est pas juste une adresse. C&apos;est connaître le marché local, savoir que les recherches "près de chez moi" ont explosé de 150% ces dernières années, et comprendre comment les Rennais cherchent sur Google.
              </p>
              <p>
                On accompagne des entreprises dans tous les quartiers de Rennes (Centre, Villejean, Beauregard, Cleunay) et dans les communes alentours : <strong>Cesson-Sévigné</strong>, <strong>Saint-Grégoire</strong>, <strong>Bruz</strong>, <strong>Chantepie</strong>, <strong>Pacé</strong>. On travaille aussi avec des clients à <strong>Saint-Malo</strong>, <strong>Vannes</strong>, <strong>Brest</strong> et <strong>Lorient</strong>.
              </p>
              <p>
                Cette connaissance du terrain fait la différence. Quand on a optimisé le <Link href="/etudes-de-cas/referencement" className="text-primary hover:underline">référencement de Rennes Pneus</Link>, on savait exactement quels mots-clés cibler parce qu&apos;on connaît les habitudes de recherche des automobilistes rennais.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: MapPin, label: 'Basé à Rennes, Bretagne' },
                { icon: FileSearch, label: 'Audit SEO gratuit pour les entreprises locales' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/50 px-4 py-3 text-[14px] text-muted-foreground">
                    <Icon className="size-4 shrink-0 text-primary" />
                    {item.label}
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
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

      {/* SERVICES LIÉS */}
      <section className="relative overflow-hidden bg-card">
        <Grain />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Nos services SEO
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl">
              Découvrez aussi{' '}
              <span className="italic text-muted-foreground/80">nos autres expertises</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Référencement SEO', href: '/referencement-seo-rennes' },
              { label: 'Référencement local', href: '/referencement-local-rennes' },
              { label: 'Création de site web', href: '/creation-site-internet-rennes' },
              { label: 'Audit SEO gratuit', href: '/audit-seo-gratuit' },
            ].map((link) => (
              <Reveal key={link.label}>
                <Link
                  href={link.href}
                  className="group flex items-center justify-between rounded-xl border border-border/60 bg-background/50 px-4 py-3.5 text-[14px] font-medium text-foreground transition-colors duration-300 hover:border-primary/30 hover:text-primary"
                >
                  {link.label}
                  <ArrowRight className="size-3.5 text-muted-foreground/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-background">
        <Grain />
        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="text-center space-y-6">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Freelance SEO à Rennes
            </p>
            <h2 className="font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl">
              Parlons de votre{' '}
              <span className="italic text-muted-foreground/80">visibilité sur Google</span>
            </h2>
            <p className="mx-auto max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Un premier échange gratuit pour analyser votre situation et voir ce que le référencement naturel peut apporter à votre entreprise à Rennes. Audit SEO offert.
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
