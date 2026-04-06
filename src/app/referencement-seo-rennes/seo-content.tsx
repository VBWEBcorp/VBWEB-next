'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Search, TrendingUp, BarChart3, Star, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

const ease = [0.22, 1, 0.36, 1] as const

const steps = [
  {
    number: '1',
    title: 'Audit complet de votre visibilité',
    description: 'J\'analyse votre site, vos concurrents et votre marché pour identifier exactement où vous perdez des clients sur Google.',
  },
  {
    number: '2',
    title: 'Stratégie sur mesure',
    description: 'Un plan d\'action personnalisé : optimisation technique, contenu stratégique et maillage interne pour maximiser votre visibilité.',
  },
  {
    number: '3',
    title: 'Mise en œuvre & suivi',
    description: 'J\'implémente les optimisations et suis vos positions chaque mois. Vous voyez concrètement votre progression sur Google.',
  },
]

const results = [
  { value: '+180%', label: 'de trafic organique en moyenne' },
  { value: '75', label: 'avis clients 5 étoiles' },
  { value: 'Top 3', label: 'Google pour mes clients' },
]

interface FaqItem {
  question: string
  answer: string
}

function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.04 }}
          className="rounded-xl border border-border bg-card/60"
        >
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between px-6 py-4 text-left"
          >
            <span className="text-sm font-medium text-foreground pr-4">{faq.question}</span>
            <ChevronDown className={`size-4 shrink-0 text-primary transition-transform ${open === i ? 'rotate-180' : ''}`} />
          </button>
          <motion.div
            initial={false}
            animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-4 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

export function SeoRennesContent({ faqs }: { faqs: FaqItem[] }) {
  return (
    <>
      {/* Hero */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              Consultant SEO à Rennes
            </p>
            <h1 className="mt-4 font-display text-balance text-4xl leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
              Soyez trouvé en premier sur Google
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Vos futurs clients vous cherchent sur Google en ce moment. Je vous aide à apparaître devant vos concurrents, durablement.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
                <Link href="/audit-seo-gratuit">
                  Audit SEO gratuit
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/15 bg-foreground/5 text-foreground hover:bg-foreground/10 hover:text-foreground" asChild>
                <Link href="/contact">Me contacter</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problème */}
      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease }}
            className="mx-auto max-w-3xl text-center space-y-4"
          >
            <h2 className="font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl">
              93% des parcours d&apos;achat commencent sur Google
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Si vous n&apos;apparaissez pas dans les premiers résultats, vos concurrents récupèrent vos clients. Chaque jour sans référencement optimisé, c&apos;est du chiffre d&apos;affaires perdu.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              'Votre site est invisible sur Google',
              'Vos concurrents sont mieux positionnés',
              'Vous dépendez de la publicité payante',
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-3 rounded-xl border border-border bg-background/50 px-5 py-4"
              >
                <CheckCircle className="size-5 shrink-0 text-red-400" />
                <span className="text-sm text-foreground/70">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease }}
            className="mx-auto max-w-2xl text-center space-y-4"
          >
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              Ma méthode
            </p>
            <h2 className="font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl">
              Comment je vous fais gagner en visibilité
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card/60 p-7"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 font-display text-lg font-bold text-primary">
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Résultats */}
      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease }}
            className="mx-auto max-w-2xl text-center space-y-4"
          >
            <h2 className="font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl">
              Des résultats concrets, pas des promesses
            </h2>
          </motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {results.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-background/50 p-8 text-center"
              >
                <span className="font-display text-4xl font-bold text-primary">{r.value}</span>
                <p className="mt-2 text-sm text-muted-foreground">{r.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease }}
            className="text-center space-y-4 mb-12"
          >
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              Questions fréquentes
            </p>
            <h2 className="font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl">
              Vos questions sur le référencement à Rennes
            </h2>
          </motion.div>
          <FaqSection faqs={faqs} />
        </div>
      </section>

      {/* Services connexes */}
      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <h2 className="text-center font-display text-2xl tracking-[-0.02em] text-foreground sm:text-3xl mb-10">
            Services complémentaires
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: 'Référencement local', desc: 'Dominez Google Maps et la recherche locale à Rennes.', href: '/referencement-local-rennes' },
              { title: 'Création de site internet', desc: 'Un site optimisé SEO dès sa conception.', href: '/creation-site-internet-rennes' },
              { title: 'Audit SEO gratuit', desc: 'Analysez votre visibilité en 30 minutes.', href: '/audit-seo-gratuit' },
            ].map((s, i) => (
              <Link key={i} href={s.href} className="group rounded-xl border border-border bg-background/50 p-6 transition-all hover:-translate-y-0.5 hover:border-primary/20">
                <h3 className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
              </Link>
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

      {/* CTA */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28 text-center">
          <h2 className="font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl">
            Prêt à être trouvé sur Google ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            30 minutes gratuites pour analyser votre visibilité et identifier vos opportunités de croissance.
          </p>
          <div className="mt-8">
            <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
              <Link href="/contact">
                Prendre rendez-vous
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
