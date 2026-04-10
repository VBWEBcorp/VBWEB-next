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
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { CtaGallerySection } from '@/components/sections/cta-gallery-section'
import { AuditButton } from '@/components/ui/audit-button'
import { Button } from '@/components/ui/button'
import { CountUp } from '@/components/ui/count-up'
import { Reveal } from '@/components/ui/reveal'
import { ScrollProgress } from '@/components/ui/scroll-progress'

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

function ReadMore({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-[1.35rem] border border-border/60 bg-card/40">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
      >
        <span className="font-display text-base font-semibold text-foreground sm:text-lg">{title}</span>
        <ChevronDown className={`size-4 shrink-0 text-muted-foreground transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        style={{ maxHeight: open ? '2000px' : '0px' }}
        className="overflow-hidden transition-all duration-500"
      >
        <div className="px-6 pb-6">{children}</div>
      </div>
    </div>
  )
}

const caseStudies = [
  {
    name: 'Rennes Pneus',
    sector: 'Garage automobile, Rennes',
    metric: '3 600',
    metricLabel: 'visites/mois',
    before: '30 visites/mois',
    detail: 'Au départ, personne ne les trouvait sur Google. Aujourd\'hui, ils sont 1ers sur "pneus Rennes" et reçoivent des appels chaque jour.',
    href: '/etudes-de-cas/referencement',
  },
  {
    name: 'EPICU',
    sector: 'Marque lifestyle, Rennes',
    metric: '5 000',
    metricLabel: 'visites/mois',
    before: '100 visites/mois',
    detail: 'Un projet parti de zéro. 3 ans plus tard, le SEO est devenu leur premier canal d\'acquisition, devant les réseaux sociaux.',
    href: '/etudes-de-cas/referencement',
  },
  {
    name: 'Jumelles.com',
    sector: 'E-commerce optique',
    metric: '+33%',
    metricLabel: 'trafic organique',
    before: '2 100 mots-clés',
    detail: 'Un site e-commerce avec 800 produits mal optimisés. Tout a été repris fiche par fiche. +1 280 mots-clés gagnés en 12 mois.',
    href: '/etudes-de-cas/referencement',
  },
]

interface FreelanceSeoContentProps {
  faqs: { question: string; answer: string }[]
}

export function FreelanceSeoContent({ faqs }: FreelanceSeoContentProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden bg-background">
        <Grain />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div
            className="mx-auto max-w-3xl text-center"
            style={{ animation: 'hero-fade-up 0.65s cubic-bezier(0.22,1,0.36,1) both' }}
          >
            <div className="mx-auto mb-6 size-20 overflow-hidden rounded-full border-2 border-primary/20 ring-1 ring-foreground/5 sm:size-24">
              <Image
                src="/victor.jpg"
                alt="Victor Béasse, freelance SEO à Rennes"
                width={96}
                height={96}
                priority
                className="size-full object-cover object-center"
              />
            </div>
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Victor Béasse
            </p>
            <h1 className="mt-5 font-display text-balance text-4xl font-medium leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
              Freelance SEO à Rennes,{' '}
              <span className="italic text-muted-foreground/80">je vous aide à être trouvé sur Google</span>
            </h1>
            <p className="hero-description mx-auto mt-6 max-w-2xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Je suis Victor Béasse, freelance SEO basé à Rennes. J&apos;accompagne des PME, artisans et commerces en Bretagne pour qu&apos;ils attirent plus de clients grâce à Google. Plus de 200 projets SEO menés et 75 avis 5 étoiles.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <AuditButton />
              <Button size="lg" variant="outline" className="border-border/60" asChild>
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CE QUE JE FAIS POUR VOUS ══ */}
      <section className="relative overflow-hidden bg-card">
        <Grain />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Texte */}
            <Reveal>
              <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
                Mon métier de freelance SEO
              </p>
              <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
                Concrètement, je fais quoi{' '}
                <span className="italic text-muted-foreground/80">pour votre site</span> ?
              </h2>
              <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                <p>
                  Le référencement naturel, ça peut sembler abstrait. Voici ce que je fais concrètement : j&apos;analyse votre positionnement actuel sur Google, j&apos;identifie les mots-clés que vos futurs clients recherchent (par exemple &quot;plombier Rennes&quot; ou &quot;restaurant Cesson-Sévigné&quot;), et j&apos;optimise votre site pour qu&apos;il apparaisse dans les premiers résultats.
                </p>
                <p>
                  Pour imager : votre site, c&apos;est comme une boutique. Aujourd&apos;hui, elle est peut-être dans une impasse. Mon rôle, c&apos;est de la positionner sur l&apos;avenue principale, là où passent vos clients.
                </p>
                <p>
                  Je travaille sur trois axes : la <strong>technique</strong> (que votre site soit rapide et bien construit), le <strong>contenu</strong> (que vos pages répondent aux bonnes questions) et la <strong>notoriété</strong> (que d&apos;autres sites de qualité pointent vers le vôtre). Les premiers résultats apparaissent en général entre 3 et 6 mois, et la progression s&apos;accélère avec le temps.
                </p>
              </div>
            </Reveal>

            {/* Image */}
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-[1.5rem] border border-border/60">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                  alt="Analyse de données SEO et référencement naturel sur un tableau de bord"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ CHIFFRES ══ */}
      <section className="relative overflow-hidden bg-card">
        <Grain />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
              Ce ne sont pas des promesses,{' '}
              <span className="italic text-muted-foreground/80">ce sont des résultats</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            <Reveal className="rounded-[1.35rem] border border-border/60 bg-background/50 p-8 text-center">
              <CountUp value={150} prefix="+" className="font-display text-[3rem] font-bold leading-none tracking-[-0.04em] text-foreground" />
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/60">sites créés</p>
            </Reveal>
            <Reveal delay={0.1} className="rounded-[1.35rem] border border-border/60 bg-background/50 p-8 text-center">
              <CountUp value={200} prefix="+" className="font-display text-[3rem] font-bold leading-none tracking-[-0.04em] text-foreground" />
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/60">campagnes SEO menées</p>
            </Reveal>
            <Reveal delay={0.2} className="rounded-[1.35rem] border border-border/60 bg-background/50 p-8 text-center">
              <CountUp value={75} className="font-display text-[3rem] font-bold leading-none tracking-[-0.04em] text-foreground" />
              <div className="mt-1 flex items-center justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" aria-hidden />
                ))}
              </div>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/60">avis Google</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ ÉTUDES DE CAS ══ */}
      <section className="relative overflow-hidden bg-background">
        <Grain />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Résultats SEO à Rennes
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
              Des clients que j&apos;ai accompagnés{' '}
              <span className="italic text-muted-foreground/80">et leurs résultats</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.name} delay={i * 0.08} className="group relative">
                <div aria-hidden className="pointer-events-none absolute -inset-px rounded-[1.4rem] bg-gradient-to-br from-primary/40 via-primary/0 to-primary/20 opacity-0 blur-[2px] transition-opacity duration-500 group-hover:opacity-100" />
                <Link href={cs.href} className="relative flex h-full flex-col rounded-[1.35rem] border border-border/60 bg-card/40 p-8 transition-colors duration-500 group-hover:border-primary/30 group-hover:bg-card/60">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display text-lg font-semibold text-foreground">{cs.name}</p>
                      <p className="text-[12px] text-muted-foreground/60">{cs.sector}</p>
                    </div>
                    <ArrowRight className="size-4 text-muted-foreground/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-border via-border/60 to-transparent" />
                  <div className="mt-6">
                    <span className="font-display text-[2.5rem] font-bold leading-none tracking-[-0.03em] text-primary">{cs.metric}</span>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/60">{cs.metricLabel}</p>
                    <p className="mt-1 text-[12px] text-muted-foreground/50 line-through">Avant : {cs.before}</p>
                  </div>
                  <p className="mt-5 flex-1 text-[14px] leading-relaxed text-muted-foreground">{cs.detail}</p>
                  <p className="mt-5 text-[12px] font-medium text-primary">Voir l&apos;étude de cas complète</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MINI CTA ══ */}
      <div className="bg-card py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-[15px] text-muted-foreground">Vous voulez savoir ce que le SEO peut vous apporter ?</p>
          <AuditButton />
        </div>
      </div>

      {/* ══ COMMENT ÇA SE PASSE ══ */}
      <section className="relative overflow-hidden bg-background">
        <Grain />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Comment ça se passe
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
              Si on travaille ensemble,{' '}
              <span className="italic text-muted-foreground/80">voilà ce qui vous attend</span>
            </h2>
          </Reveal>

          <div className="timeline-container relative mx-auto mt-16 max-w-3xl">
            <ScrollProgress />

            <ol className="space-y-6 sm:space-y-8">
              {[
                { number: '01', title: 'On échange', description: 'Nous prenons 30 minutes pour que je comprenne votre activité, vos objectifs et ce qui freine votre visibilité sur Google. Je vous dis sincèrement si le SEO est pertinent pour vous.' },
                { number: '02', title: 'J\'analyse votre site', description: 'Je passe votre site au peigne fin : technique, contenu, positionnement, concurrence locale à Rennes. Vous recevez un plan d\'action clair avec les priorités.' },
                { number: '03', title: 'On avance ensemble', description: 'Les optimisations sont déployées mois après mois. Chaque mois, vous voyez vos positions Google, votre trafic et les demandes reçues dans votre espace de suivi.' },
              ].map((step, i) => (
                <Reveal as="li" key={step.number} delay={i * 0.08} className="relative pl-14 sm:pl-20">
                  {/* Node */}
                  <div className="absolute left-0 top-1 sm:top-2">
                    <div className="flex size-9 items-center justify-center rounded-full border border-primary/30 bg-background text-primary shadow-[0_0_0_4px_rgba(0,0,0,0.4)] sm:size-12">
                      <span className="font-display text-[13px] font-bold sm:text-[15px]">{step.number}</span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="group relative">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-px rounded-[1.2rem] bg-gradient-to-br from-primary/40 via-primary/0 to-primary/20 opacity-0 blur-[2px] transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div className="relative overflow-hidden rounded-[1.15rem] border border-border/60 bg-card/40 p-6 transition-colors duration-500 group-hover:border-primary/30 group-hover:bg-card/60 sm:p-7">
                      <h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">{step.title}</h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal delay={0.3} className="mt-10 text-center">
            <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
              <Link href="/contact">
                Prendre rendez-vous
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="relative overflow-hidden bg-card">
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
                <div className="rounded-[1.15rem] border border-border/60 bg-background/50 transition-colors duration-300 hover:border-primary/20">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-display text-[15px] font-semibold text-foreground sm:text-base">{faq.question}</span>
                    <ChevronDown className={`size-4 shrink-0 text-muted-foreground transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div style={{ maxHeight: openFaq === i ? '500px' : '0px' }} className="overflow-hidden transition-all duration-300">
                    <p className="faq-answer px-5 pb-5 text-[15px] leading-relaxed text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-10 text-center">
            <p className="text-[15px] text-muted-foreground">Une question qui n&apos;est pas dans la liste ?</p>
            <Button size="lg" className="group mt-4 bg-primary text-primary-foreground hover:bg-primary/85" asChild>
              <Link href="/contact">
                Me contacter
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ══ EN SAVOIR PLUS (sections SEO en accordéon) ══ */}
      <section className="relative overflow-hidden bg-background">
        <Grain />
        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              En savoir plus
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl">
              Pour aller{' '}
              <span className="italic text-muted-foreground/80">plus loin</span>
            </h2>
          </Reveal>

          <div className="mt-12 space-y-4">
            <ReadMore title="Pourquoi choisir un freelance SEO plutôt qu'une agence à Rennes ?">
              <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
                <p>En agence, votre dossier passe entre plusieurs interlocuteurs. Avec un freelance SEO à Rennes, vous échangez directement avec la personne qui travaille sur votre site, et les choses avancent plus vite.</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { icon: User, title: 'Une relation de confiance', text: 'Je prends le temps de comprendre votre métier, vos clients, ce qui vous différencie.' },
                    { icon: Zap, title: 'Réactivité', text: 'Un souci technique ou une opportunité ? Je m\'en occupe dans la journée.' },
                    { icon: Target, title: 'Stratégie sur mesure', text: 'Chaque entreprise est différente. Je m\'adapte à votre situation et votre marché.' },
                    { icon: MessageCircle, title: 'Clarté totale', text: 'Rapport mensuel, accès à vos données, explication de chaque action.' },
                  ].map((item) => {
                    const Icon = item.icon
                    return (
                      <div key={item.title} className="rounded-xl border border-border/60 bg-background/50 p-5">
                        <div className="flex items-center gap-3">
                          <Icon className="size-4 shrink-0 text-primary" />
                          <h4 className="font-display text-sm font-semibold text-foreground">{item.title}</h4>
                        </div>
                        <p className="mt-2 text-[14px] text-muted-foreground">{item.text}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </ReadMore>

            <ReadMore title="Pourquoi un freelance SEO basé à Rennes fait la différence">
              <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                <p>
                  Je connais le marché rennais et les habitudes de recherche locales. Quand j&apos;ai travaillé sur le référencement de Rennes Pneus, je savais exactement quels mots-clés cibler parce que je connais les réflexes des automobilistes de la métropole. Cette proximité change la donne par rapport à un prestataire basé à Paris.
                </p>
                <p>
                  J&apos;accompagne des entreprises dans Rennes et sa métropole : <strong>Cesson-Sévigné</strong>, <strong>Saint-Grégoire</strong>, <strong>Bruz</strong>, <strong>Chantepie</strong>, <strong>Pacé</strong>. Mais aussi à <strong>Saint-Malo</strong>, <strong>Vannes</strong>, <strong>Brest</strong> et <strong>Lorient</strong> pour les collaborations à distance.
                </p>
                <p>
                  L&apos;avantage d&apos;un freelance SEO local, c&apos;est aussi de pouvoir se rencontrer, visiter votre entreprise et comprendre votre quotidien. C&apos;est souvent là que naissent les meilleures idées.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/50 px-4 py-3 text-[14px]">
                    <MapPin className="size-4 shrink-0 text-primary" />Basé à Rennes, disponible en Bretagne
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/50 px-4 py-3 text-[14px]">
                    <FileSearch className="size-4 shrink-0 text-primary" />Audit SEO gratuit pour les entreprises locales
                  </div>
                </div>
              </div>
            </ReadMore>
          </div>
        </div>
      </section>

      {/* ══ SERVICES LIÉS ══ */}
      <section className="relative overflow-hidden bg-card">
        <Grain />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Référencement SEO', href: '/referencement-seo-rennes' },
              { label: 'Référencement local', href: '/referencement-local-rennes' },
              { label: 'Création de site web', href: '/creation-site-internet-rennes' },
              { label: 'Audit SEO gratuit', href: '/audit-seo-gratuit' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group flex items-center justify-between rounded-xl border border-border/60 bg-background/50 px-4 py-3.5 text-[14px] font-medium text-foreground transition-colors duration-300 hover:border-primary/30 hover:text-primary"
              >
                {link.label}
                <ArrowRight className="size-3.5 text-muted-foreground/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA GALLERY ══ */}
      <CtaGallerySection />
    </>
  )
}
