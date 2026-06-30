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
  MapPin,
  FileSearch,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { ScrollCol, Grain, ReadMore, caseStudies, col1, col2, col3 } from '@/components/freelance-seo/shared'
import { CtaGallerySection } from '@/components/sections/cta-gallery-section'
import { AuditButton } from '@/components/ui/audit-button'
import { Button } from '@/components/ui/button'
import { CountUp } from '@/components/ui/count-up'
import { Reveal } from '@/components/ui/reveal'
import { ScrollProgress } from '@/components/ui/scroll-progress'

interface SiteInternetHuissierContentProps {
  faqs: { question: string; answer: string }[]
}

export function SiteInternetHuissierContent({ faqs }: SiteInternetHuissierContentProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative isolate overflow-hidden bg-background">
        <div className="absolute inset-0 flex gap-3 opacity-25">
          <ScrollCol imgs={col1} dir="up" dur={40} />
          <ScrollCol imgs={col2} dir="down" dur={35} />
          <ScrollCol imgs={col3} dir="up" dur={38} />
          <div className="hidden min-w-0 flex-1 sm:block"><ScrollCol imgs={[...col1].reverse()} dir="down" dur={42} /></div>
          <div className="hidden min-w-0 flex-1 sm:block"><ScrollCol imgs={[...col2].reverse()} dir="up" dur={36} /></div>
          <div className="hidden min-w-0 flex-1 lg:block"><ScrollCol imgs={[...col3].reverse()} dir="down" dur={44} /></div>
          <div className="hidden min-w-0 flex-1 lg:block"><ScrollCol imgs={col1} dir="up" dur={39} /></div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
        <div className="pointer-events-none absolute inset-0 bg-background/35" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div
            className="mx-auto max-w-3xl text-center"
            style={{ animation: 'hero-fade-up 0.65s cubic-bezier(0.22,1,0.36,1) both' }}
          >
            <div className="mx-auto mb-6 size-20 overflow-hidden rounded-full border-2 border-primary/20 ring-1 ring-foreground/5 sm:size-24">
              <Image
                src="/victor.jpg"
                alt="Victor Béasse, créateur de sites internet pour huissier"
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
              Site internet huissier,{' '}
              <span className="italic text-muted-foreground/80">pour commissaires de justice modernes</span>
            </h1>
            <p className="hero-description mx-auto mt-6 max-w-2xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Je crée des sites internet pour les études de commissaires de justice partout en France. Image sérieuse mais contemporaine, respect de la déontologie, conformité RGPD et référencement naturel sur le constat, le recouvrement et la signification. Un site qui vous amène de vraies demandes.
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
        <div className="relative px-3 py-4 sm:px-4 sm:py-5">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-border/60 bg-background/30 sm:rounded-[1.75rem]">
            <div className="relative p-6 sm:p-8 lg:p-10">
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <Reveal>
                  <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
                    Site internet pour huissier
                  </p>
                  <h2 className="mt-4 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[2.75rem]">
                    Un site moderne{' '}
                    <span className="italic text-muted-foreground/80">qui reste digne de la profession</span>
                  </h2>
                  <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                    <p>
                      Depuis la réforme de 2022, vous êtes commissaire de justice. La profession a changé de nom, mais les clients continuent à taper &quot;huissier&quot; dans Google. Votre site internet doit traduire cette dualité : garder la gravité associée au métier tout en affichant une image moderne et accessible. Je conçois des sites sobres, rapides, lisibles sur téléphone, qui inspirent confiance dès la première seconde.
                    </p>
                    <p>
                      Le second enjeu, c&apos;est la visibilité. Les demandes de constat, de recouvrement ou de signification se font de plus en plus en ligne. Si votre site n&apos;apparaît pas quand un dirigeant d&apos;entreprise cherche un commissaire de justice pour un impayé, vous laissez ces dossiers à d&apos;autres études. Je travaille votre référencement sur les requêtes qui comptent vraiment pour votre activité.
                    </p>
                    <p>
                      J&apos;interviens partout en France, à distance, dans le respect de la déontologie de la profession et des obligations RGPD liées aux données sensibles que vous traitez.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="relative overflow-hidden rounded-[1.25rem] border border-border/40">
                    <Image
                      src="https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1460925895917-afdab827c52f-w800.webp"
                      alt="Création site internet pour huissier"
                      loading="lazy"
                      width={800}
                      height={600}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="aspect-[4/3] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                  </div>
                </Reveal>
              </div>

              <div className="mt-10 h-px w-full bg-gradient-to-r from-border via-border/60 to-transparent" />

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: Zap, title: 'Conformité', desc: 'Règles de la Chambre nationale, RGPD, confidentialité des dossiers clients.' },
                  { icon: FileSearch, title: 'Image', desc: 'Sérieuse mais moderne, formulaire de demande de constat, prise de contact directe.' },
                  { icon: TrendingUp, title: 'SEO', desc: 'Positionnement sur constat, recouvrement, signification, commissaire de justice.' },
                ].map((axis, i) => {
                  const Icon = axis.icon
                  return (
                    <Reveal key={axis.title} delay={i * 0.08}>
                      <div className="group h-full rounded-[1.15rem] border border-border/40 bg-card/40 p-5 transition-colors duration-500 hover:border-primary/30 hover:bg-card/60">
                        <div className="flex size-9 items-center justify-center rounded-lg border border-border/40 bg-background/40 text-muted-foreground/60 transition-colors duration-500 group-hover:border-primary/30 group-hover:text-primary">
                          <Icon className="size-4" />
                        </div>
                        <h3 className="mt-4 font-display text-[15px] font-semibold text-foreground">{axis.title}</h3>
                        <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{axis.desc}</p>
                      </div>
                    </Reveal>
                  )
                })}
              </div>

              <p className="mt-6 text-[14px] text-muted-foreground/70">
                Un bon site de commissaire de justice apporte ses premières demandes entrantes dès les premières semaines en ligne.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
                  <Link href="/contact">
                    Discuter de mon projet
                    <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
                <AuditButton />
              </div>
            </div>
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
              Sites créés pour les professions juridiques
            </p>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
              Des professionnels que j&apos;ai accompagnés{' '}
              <span className="italic text-muted-foreground/80">dont Jeremy Simon, avocat</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.name} delay={i * 0.08} className="group relative">
                <div aria-hidden className="pointer-events-none absolute -inset-px rounded-[1.4rem] bg-gradient-to-br from-primary/40 via-primary/0 to-primary/20 opacity-0 blur-[2px] transition-opacity duration-500 group-hover:opacity-100" />
                <Link href={cs.href} className="relative flex h-full flex-col rounded-[1.35rem] border border-border/60 bg-card/40 p-8 transition-colors duration-500 group-hover:border-primary/30 group-hover:bg-card/60">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">{cs.name}</h3>
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
          <p className="text-[15px] text-muted-foreground">Vous voulez un site qui fait honneur à votre étude et qui vous amène des dossiers ?</p>
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
              Du premier échange à la mise en ligne,{' '}
              <span className="italic text-muted-foreground/80">voilà comment on procède</span>
            </h2>
          </Reveal>

          <div className="timeline-container relative mx-auto mt-16 max-w-3xl">
            <ScrollProgress />

            <ol className="space-y-6 sm:space-y-8">
              {[
                { number: '01', title: 'On cadre votre activité', description: 'Rendez-vous de 30 minutes pour comprendre votre pratique : constat, recouvrement, signification, ventes judiciaires. Je note vos priorités et les contraintes déontologiques propres à votre Chambre.' },
                { number: '02', title: 'Je conçois le site', description: 'Maquette moderne et sobre, pages dédiées à chaque service, formulaire de demande en ligne, mise en conformité RGPD avec hébergement européen. Vous validez chaque étape sereinement.' },
                { number: '03', title: 'Mise en ligne et référencement', description: 'Le site part en production, puis je travaille son positionnement sur les requêtes liées à votre métier. Vous suivez les demandes entrantes et les positions dans un tableau de bord dédié.' },
              ].map((step, i) => (
                <Reveal as="li" key={step.number} delay={i * 0.08} className="relative pl-14 sm:pl-20">
                  <div className="absolute left-0 top-1 sm:top-2">
                    <div className="flex size-9 items-center justify-center rounded-full border border-primary/30 bg-background text-primary shadow-[0_0_0_4px_rgba(0,0,0,0.4)] sm:size-12">
                      <span className="font-display text-[13px] font-bold sm:text-[15px]">{step.number}</span>
                    </div>
                  </div>

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

      {/* ══ EN SAVOIR PLUS + SERVICES ══ */}
      <section className="relative overflow-hidden bg-background">
        <Grain />
        <div className="relative px-3 py-16 sm:px-4 sm:py-20 lg:py-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-[1.5rem] border border-border/60 bg-card/40 sm:rounded-[1.75rem]">
              <div className="relative grid lg:grid-cols-[1fr_360px]">
                <div className="border-b border-border/40 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
                  <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
                    En savoir plus
                  </p>
                  <h2 className="mt-4 font-display text-2xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-3xl">
                    Pour aller{' '}
                    <span className="italic text-muted-foreground/80">plus loin</span>
                  </h2>

                  <div className="mt-8 space-y-3">
                    <ReadMore title="Déontologie, RGPD et modernisation : concilier les trois">
                      <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                        <p>Un commissaire de justice ne peut pas afficher son site comme une enseigne commerciale. La Chambre nationale impose une communication sobre et vérifiable : pas de comparatif, pas de promesse chiffrée, mentions obligatoires visibles. Mais sobriété ne veut pas dire austérité. Je construis des sites modernes, faciles à parcourir, qui inspirent confiance tout en respectant la déontologie à la lettre.</p>
                        <p>Vos dossiers contiennent des données sensibles : identités des débiteurs, pièces de constat, courriers confidentiels. Le site est hébergé en Europe, les formulaires sont chiffrés, la politique de confidentialité est rédigée sur mesure, et les cookies sont conformes aux recommandations CNIL.</p>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {[
                            { icon: User, title: 'Déontologie respectée', text: 'Règles de la Chambre nationale CJ.' },
                            { icon: Zap, title: 'RGPD complet', text: 'Hébergement UE, formulaires chiffrés.' },
                            { icon: Target, title: 'Image moderne', text: 'Sobre, lisible, rapide sur mobile.' },
                            { icon: MessageCircle, title: 'Confidentialité', text: 'Protection des dossiers clients.' },
                          ].map((item) => {
                            const Icon = item.icon
                            return (
                              <div key={item.title} className="flex items-start gap-3 rounded-xl border border-border/40 bg-background/30 p-4">
                                <Icon className="mt-0.5 size-4 shrink-0 text-primary" />
                                <div>
                                  <p className="text-[13px] font-semibold text-foreground">{item.title}</p>
                                  <p className="mt-0.5 text-[13px] text-muted-foreground">{item.text}</p>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </ReadMore>

                    <ReadMore title="Je crée aussi des sites pour d'autres professions juridiques">
                      <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                        <p>
                          Les commissaires de justice ne sont pas les seules professions du droit pour lesquelles je conçois des sites. J&apos;ai développé une offre dédiée à l&apos;ensemble des métiers juridiques, avec des contraintes de conformité et une exigence de qualité partagées.
                        </p>
                        <p>
                          Pour voir mon approche de référence et découvrir les autres professions que j&apos;accompagne, consultez ces pages :
                        </p>
                        <div className="grid gap-3 sm:grid-cols-2">
                          <Link href="/site-internet-avocat" className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/30 p-4 transition-colors hover:border-primary/30 hover:bg-background/50">
                            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                            <div>
                              <p className="text-[13px] font-semibold text-foreground">Site internet avocat</p>
                              <p className="mt-0.5 text-[13px] text-muted-foreground">Page de référence pour les professions juridiques.</p>
                            </div>
                          </Link>
                          <Link href="/site-internet-notaire" className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/30 p-4 transition-colors hover:border-primary/30 hover:bg-background/50">
                            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                            <div>
                              <p className="text-[13px] font-semibold text-foreground">Site internet notaire</p>
                              <p className="mt-0.5 text-[13px] text-muted-foreground">Immobilier, succession, donation, mariage.</p>
                            </div>
                          </Link>
                        </div>
                        <p>
                          Peu importe où votre étude est implantée en France, la méthode est identique : écoute, conformité, image sérieuse mais moderne, et travail de fond sur le référencement.
                        </p>
                      </div>
                    </ReadMore>
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
                    Mes services
                  </p>
                  <h3 className="mt-4 font-display text-xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-2xl">
                    Découvrir{' '}
                    <span className="italic text-muted-foreground/80">aussi</span>
                  </h3>

                  <div className="mt-8 space-y-2">
                    {[
                      { label: 'Création de site', desc: 'Site vitrine et e-commerce', href: '/creation-site-internet-rennes' },
                      { label: 'SEO local', desc: 'Google Maps et proximité', href: '/referencement-local-rennes' },
                      { label: 'Freelance SEO', desc: 'Référencement naturel', href: '/freelance-seo-rennes' },
                      { label: 'Audit SEO gratuit', desc: 'Analyse de votre visibilité', href: '/audit-seo-gratuit' },
                    ].map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="group flex items-center gap-4 rounded-xl border border-border/40 bg-background/30 px-4 py-3.5 transition-all duration-300 hover:border-primary/30 hover:bg-background/50"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-[14px] font-semibold text-foreground">{link.label}</p>
                          <p className="text-[12px] text-muted-foreground/50">{link.desc}</p>
                        </div>
                        <ArrowRight className="size-3.5 shrink-0 text-muted-foreground/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
              Site internet huissier :{' '}
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

      {/* ══ CTA GALLERY ══ */}
      <CtaGallerySection />
    </>
  )
}
