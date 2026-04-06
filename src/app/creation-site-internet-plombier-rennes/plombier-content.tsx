'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, MapPin, Smartphone, Clock, FileText, Star, ChevronDown, Wrench, ShieldCheck, Search } from 'lucide-react'
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
            <p className="faq-answer px-6 pb-4 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
          </motion.div>
        </div>
      ))}
    </div>
  )
}

export function PlombierContent({ faqs }: { faqs: FaqItem[] }) {
  return (
    <>
      {/* Hero */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease }} className="mx-auto max-w-3xl text-center">
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">Site internet pour plombier</p>
            <h1 className="mt-4 font-display text-balance text-4xl leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
              Recevez plus d&rsquo;appels clients gr&acirc;ce &agrave; un site professionnel pour votre entreprise de plomberie &agrave; Rennes
            </h1>
            <p className="hero-description mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Vos futurs clients vous cherchent sur Google en ce moment. Un site optimis&eacute; et visible sur Google Maps, c&rsquo;est la diff&eacute;rence entre un t&eacute;l&eacute;phone qui sonne et un concurrent qui prend vos chantiers.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
                <Link href="/contact">
                  Devis gratuit sous 24h
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-border/60 text-foreground hover:bg-foreground/5" asChild>
                <Link href="/audit-seo-gratuit">
                  Audit gratuit de votre visibilit&eacute;
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problèmes spécifiques */}
      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center space-y-4 mb-14">
            <h2 className="font-display text-3xl tracking-[-0.02em] text-foreground sm:text-4xl">
              Sans site, vous perdez des chantiers chaque jour
            </h2>
            <p className="text-muted-foreground">
              Les habitudes ont chang&eacute;. Vos clients ne demandent plus au voisin, ils tapent &laquo;&nbsp;plombier Rennes&nbsp;&raquo; sur Google.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Search,
                title: 'Invisible sur Google',
                desc: 'Vos concurrents apparaissent en premier. Sans site optimis\u00e9, les clients ne savent m\u00eame pas que vous existez.',
              },
              {
                icon: Phone,
                title: 'T\u00e9l\u00e9phone qui ne sonne pas',
                desc: 'Les urgences plomberie, les demandes de devis\u2026 tout passe par Google. Pas de site = pas d\u2019appels.',
              },
              {
                icon: Star,
                title: 'D\u00e9pendance au bouche-\u00e0-oreille',
                desc: 'Le bouche-\u00e0-oreille c\u2019est bien, mais \u00e7a ne suffit plus. Un site vous am\u00e8ne des clients que vous ne connaissez pas encore.',
              },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-background/50 p-6 text-center">
                <item.icon className="mx-auto size-8 text-primary" />
                <h3 className="mt-3 font-display text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce qu'on fait */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center space-y-4 mb-14">
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">Ce que je cr&eacute;e pour vous</p>
            <h2 className="font-display text-3xl tracking-[-0.02em] text-foreground sm:text-4xl">
              Un site con&ccedil;u pour g&eacute;n&eacute;rer des appels, pas juste pour faire joli
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Smartphone, title: 'Mobile-first', desc: 'Vos clients cherchent sur leur t\u00e9l\u00e9phone en urgence. Le site est parfait sur mobile.' },
              { icon: MapPin, title: 'Google Maps', desc: 'Fiche Google Business optimis\u00e9e pour appara\u00eetre dans le pack local plombier Rennes.' },
              { icon: FileText, title: 'Devis en ligne', desc: 'Formulaire de demande de devis int\u00e9gr\u00e9. Vos clients vous contactent en 30 secondes.' },
              { icon: Clock, title: 'Rapide & s\u00e9curis\u00e9', desc: 'Chargement instantan\u00e9, HTTPS, h\u00e9bergement fiable. Google adore, vos clients aussi.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-card/60 p-6 text-center">
                <item.icon className="mx-auto size-8 text-primary" />
                <h3 className="mt-3 font-display text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Résultats */}
      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center space-y-4 mb-14">
            <h2 className="font-display text-3xl tracking-[-0.02em] text-foreground sm:text-4xl">
              Des r&eacute;sultats concrets pour les plombiers que j&rsquo;accompagne
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { value: '+200%', label: 'd\u2019appels entrants en 3 mois' },
              { value: 'Top 3', label: 'Google sur \u00ab plombier Rennes \u00bb' },
              { value: '< 2s', label: 'temps de chargement mobile' },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-background/50 p-8 text-center">
                <p className="font-display text-4xl font-bold text-primary">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi moi */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center space-y-4 mb-14">
            <h2 className="font-display text-3xl tracking-[-0.02em] text-foreground sm:text-4xl">
              Pourquoi travailler avec VBWEB pour votre site de plomberie
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: Wrench, title: 'Sp\u00e9cialiste des artisans', desc: 'Je connais vos m\u00e9tiers, vos contraintes et les recherches de vos clients. Pas de site g\u00e9n\u00e9rique.' },
              { icon: ShieldCheck, title: 'SEO int\u00e9gr\u00e9 d\u00e8s le d\u00e9part', desc: 'Chaque page est pens\u00e9e pour Google. Vous \u00eates visible d\u00e8s la mise en ligne, pas dans 6 mois.' },
              { icon: Star, title: '75 avis 5 \u00e9toiles', desc: 'Mes clients sont mes meilleurs ambassadeurs. Artisans, PME et commerces me font confiance.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-card/60 p-6 text-center">
                <item.icon className="mx-auto size-8 text-primary" />
                <h3 className="mt-3 font-display text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="text-center space-y-4 mb-12">
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">FAQ</p>
            <h2 className="font-display text-3xl tracking-[-0.02em] text-foreground sm:text-4xl">Questions fr&eacute;quentes sur les sites pour plombiers</h2>
          </div>
          <FaqSection faqs={faqs} />
        </div>
      </section>

      {/* Services liés */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl text-foreground mb-4">Allez plus loin</h2>
          <div className="grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
            {[
              { title: 'R\u00e9f\u00e9rencement local', href: '/referencement-local-rennes' },
              { title: 'R\u00e9f\u00e9rencement SEO', href: '/referencement-seo-rennes' },
              { title: 'Audit SEO gratuit', href: '/audit-seo-gratuit' },
            ].map((s, i) => (
              <Link key={i} href={s.href} className="rounded-xl border border-border bg-card/60 px-5 py-4 text-sm font-medium text-foreground hover:border-primary/20 transition-colors">{s.title}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-card">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl text-foreground">
            Pr&ecirc;t &agrave; recevoir plus d&rsquo;appels pour votre entreprise de plomberie ?
          </h2>
          <p className="mt-4 text-muted-foreground">Devis gratuit sous 24h. Je vous montre exactement comment doubler vos demandes de devis.</p>
          <div className="mt-8">
            <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
              <Link href="/contact">
                Demander mon devis gratuit
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
