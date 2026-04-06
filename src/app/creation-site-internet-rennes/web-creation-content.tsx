'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Smartphone, Zap, Search, Palette, ChevronDown } from 'lucide-react'
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

export function WebCreationContent({ faqs }: { faqs: FaqItem[] }) {
  return (
    <>
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease }} className="mx-auto max-w-3xl text-center">
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">Création de site internet</p>
            <h1 className="mt-4 font-display text-balance text-4xl leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
              Un site qui vous rapporte des clients, pas juste une vitrine
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Design moderne, performance technique et SEO intégré. Chaque site est conçu pour convertir vos visiteurs en clients.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
                <Link href="/contact">Demander un devis gratuit<ArrowRight className="transition-transform group-hover:translate-x-0.5" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center space-y-4 mb-14">
            <h2 className="font-display text-3xl tracking-[-0.02em] text-foreground sm:text-4xl">Ce qui rend mes sites différents</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Zap, title: 'Ultra-rapide', desc: 'Performance optimale, chargement instantané.' },
              { icon: Smartphone, title: 'Mobile-first', desc: 'Parfait sur tous les écrans.' },
              { icon: Search, title: 'SEO natif', desc: 'Optimisé Google dès la conception.' },
              { icon: Palette, title: 'Design premium', desc: 'Moderne et professionnel.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-background/50 p-6 text-center">
                <item.icon className="mx-auto size-8 text-primary" />
                <h3 className="mt-3 font-display text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="text-center space-y-4 mb-12">
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">FAQ</p>
            <h2 className="font-display text-3xl tracking-[-0.02em] text-foreground sm:text-4xl">Questions sur la création de site</h2>
          </div>
          <FaqSection faqs={faqs} />
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl text-foreground mb-4">Services complémentaires</h2>
          <div className="grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
            {[
              { title: 'Référencement SEO', href: '/referencement-seo-rennes' },
              { title: 'Référencement local', href: '/referencement-local-rennes' },
              { title: 'Audit SEO gratuit', href: '/audit-seo-gratuit' },
            ].map((s, i) => (
              <Link key={i} href={s.href} className="rounded-xl border border-border bg-background/50 px-5 py-4 text-sm font-medium text-foreground hover:border-primary/20 transition-colors">{s.title}</Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/etudes-de-cas/sites-internet" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80">
              Voir nos réalisations de sites internet
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl text-foreground">Prêt à lancer votre nouveau site ?</h2>
          <p className="mt-4 text-muted-foreground">Devis gratuit sous 24h, sans engagement.</p>
          <div className="mt-8">
            <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
              <Link href="/contact">Demander un devis<ArrowRight className="transition-transform group-hover:translate-x-0.5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
