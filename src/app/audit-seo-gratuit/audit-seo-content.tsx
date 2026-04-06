'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Search, BarChart3, FileText, CheckCircle, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

const ease = [0.22, 1, 0.36, 1] as const

interface FaqItem { question: string; answer: string }

function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="rounded-xl border border-border bg-card/60">
          <button type="button" onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between px-6 py-4 text-left">
            <span className="text-sm font-medium text-foreground pr-4">{faq.question}</span>
            <ChevronDown className={`size-4 shrink-0 text-primary transition-transform ${open === i ? 'rotate-180' : ''}`} />
          </button>
          <motion.div initial={false} animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
            <p className="px-6 pb-4 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
          </motion.div>
        </div>
      ))}
    </div>
  )
}

const auditPoints = [
  { icon: Search, title: 'Positionnement Google', desc: 'Où apparaissez-vous sur les mots-clés qui comptent pour votre activité ?' },
  { icon: BarChart3, title: 'Performance technique', desc: 'Vitesse de chargement, mobile-friendly, erreurs techniques qui freinent votre référencement.' },
  { icon: FileText, title: 'Contenu & SEO on-page', desc: 'Balises, structure, mots-clés : votre contenu est-il optimisé pour Google ?' },
  { icon: CheckCircle, title: 'Analyse concurrentielle', desc: 'Ce que font vos concurrents et comment les dépasser dans les résultats.' },
]

export function AuditSeoContent({ faqs }: { faqs: FaqItem[] }) {
  return (
    <>
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease }} className="mx-auto max-w-3xl text-center">
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">Audit gratuit</p>
            <h1 className="mt-4 font-display text-balance text-4xl leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
              Découvrez pourquoi votre site n&apos;attire pas assez de clients
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              En 30 minutes, je vous montre exactement ce qui bloque votre visibilité sur Google et comment y remédier. Gratuit, sans engagement.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
                <Link href="/contact">Demander mon audit gratuit<ArrowRight className="transition-transform group-hover:translate-x-0.5" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center space-y-4 mb-14">
            <h2 className="font-display text-3xl tracking-[-0.02em] text-foreground sm:text-4xl">Ce que vous allez découvrir</h2>
            <p className="text-base text-muted-foreground">Un diagnostic complet de votre présence en ligne</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {auditPoints.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-background/50 p-7">
                <item.icon className="size-8 text-primary" />
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center space-y-4 mb-14">
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">Comment ça marche</p>
            <h2 className="font-display text-3xl tracking-[-0.02em] text-foreground sm:text-4xl">3 étapes simples</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { number: '1', title: 'Vous me contactez', desc: 'Envoyez-moi l\'URL de votre site via le formulaire. Aucune information technique requise.' },
              { number: '2', title: 'J\'analyse votre site', desc: 'Je passe votre site au crible : technique, contenu, positionnement, concurrence.' },
              { number: '3', title: 'Vous recevez votre rapport', desc: 'Un document clair avec vos forces, faiblesses et un plan d\'action concret et priorisé.' },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card/60 p-7">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 font-display text-lg font-bold text-primary">{step.number}</span>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="text-center space-y-4 mb-12">
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">FAQ</p>
            <h2 className="font-display text-3xl tracking-[-0.02em] text-foreground sm:text-4xl">Questions sur l&apos;audit SEO</h2>
          </div>
          <FaqSection faqs={faqs} />
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl text-foreground mb-4">Services complémentaires</h2>
          <div className="grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
            {[
              { title: 'Référencement SEO', href: '/referencement-seo-rennes' },
              { title: 'Référencement local', href: '/referencement-local-rennes' },
              { title: 'Création de site', href: '/creation-site-internet-rennes' },
            ].map((s, i) => (
              <Link key={i} href={s.href} className="rounded-xl border border-border bg-card/50 px-5 py-4 text-sm font-medium text-foreground hover:border-primary/20 transition-colors">{s.title}</Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/etudes-de-cas/referencement" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80">
              Voir nos études de cas SEO
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl text-foreground">Prêt à savoir ce que Google pense de votre site ?</h2>
          <p className="mt-4 text-muted-foreground">Audit gratuit, résultats concrets, zéro engagement.</p>
          <div className="mt-8">
            <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
              <Link href="/contact">Demander mon audit gratuit<ArrowRight className="transition-transform group-hover:translate-x-0.5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
