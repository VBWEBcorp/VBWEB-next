'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Hammer, Wrench, Zap, PaintBucket, Ruler, ChevronDown, Camera, MapPin, Shield, MessageSquare } from 'lucide-react'
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

const metiers = [
  { icon: Wrench, title: 'Plombier', href: '/creation-site-internet-plombier-rennes', desc: 'Urgences, d\u00e9pannages, installations' },
  { icon: Hammer, title: 'Couvreur', href: '#', desc: 'Toiture, zinguerie, charpente' },
  { icon: Zap, title: '\u00c9lectricien', href: '#', desc: 'Installation, mise aux normes' },
  { icon: Ruler, title: 'Ma\u00e7on', href: '#', desc: 'Gros \u0153uvre, r\u00e9novation' },
  { icon: PaintBucket, title: 'Peintre', href: '#', desc: 'Int\u00e9rieur, ext\u00e9rieur, d\u00e9coration' },
]

export function ArtisanContent({ faqs }: { faqs: FaqItem[] }) {
  return (
    <>
      {/* Hero */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease }} className="mx-auto max-w-3xl text-center">
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">Site internet pour artisan</p>
            <h1 className="mt-4 font-display text-balance text-4xl leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl">
              Cr&eacute;ation de site internet pour artisan &agrave; Rennes
            </h1>
            <p className="hero-description mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Plombier, couvreur, &eacute;lectricien, ma&ccedil;on ou peintre&nbsp;: votre m&eacute;tier m&eacute;rite un site qui ram&egrave;ne des chantiers. Fini la d&eacute;pendance au bouche-&agrave;-oreille.
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

      {/* Sous-métiers */}
      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center space-y-4 mb-14">
            <h2 className="font-display text-3xl tracking-[-0.02em] text-foreground sm:text-4xl">
              Chaque m&eacute;tier a ses sp&eacute;cificit&eacute;s, votre site aussi
            </h2>
            <p className="text-muted-foreground">
              Je cr&eacute;e des sites adapt&eacute;s &agrave; votre corps de m&eacute;tier avec le bon vocabulaire, les bonnes photos et les bons mots-cl&eacute;s.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {metiers.map((m, i) => {
              const inner = (
                <>
                  <m.icon className="size-7 text-primary" />
                  <h3 className="mt-2.5 font-display text-sm font-semibold text-foreground">{m.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{m.desc}</p>
                  {m.href !== '#' && (
                    <span className="mt-2 text-[10px] font-medium text-primary">Voir la page d&eacute;di&eacute;e &rarr;</span>
                  )}
                </>
              )
              const cls = `group flex flex-col items-center rounded-2xl border border-border bg-background/50 p-5 text-center transition-all duration-300 ${m.href !== '#' ? 'hover:-translate-y-1 hover:border-primary/20 hover:shadow-[var(--shadow-md)]' : ''}`
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  {m.href !== '#' ? (
                    <Link href={m.href} className={cls}>{inner}</Link>
                  ) : (
                    <div className={cls}>{inner}</div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pourquoi un site pour un artisan */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center space-y-4 mb-14">
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">Pourquoi un site</p>
            <h2 className="font-display text-3xl tracking-[-0.02em] text-foreground sm:text-4xl">
              Votre savoir-faire m&eacute;rite d&rsquo;&ecirc;tre visible
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Camera, title: 'Montrez vos chantiers', desc: 'Portfolio de r\u00e9alisations qui rassure et convainc les clients avant m\u00eame de vous appeler.' },
              { icon: MapPin, title: 'Visible localement', desc: 'Apparaissez en premier quand un client cherche votre m\u00e9tier dans votre zone d\u2019intervention.' },
              { icon: MessageSquare, title: 'Devis en ligne', desc: 'Recevez des demandes de devis 24h/24, m\u00eame quand vous \u00eates sur un chantier.' },
              { icon: Shield, title: 'Cr\u00e9dibilit\u00e9 pro', desc: 'Un site pro avec vos certifications et avis inspire confiance. Fini les clients qui h\u00e9sitent.' },
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
              Les artisans que j&rsquo;accompagne ne comptent plus sur la chance
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { value: '3x', label: 'plus de demandes de devis en moyenne' },
              { value: '75', label: 'avis 5 \u00e9toiles de mes clients' },
              { value: '19+', label: 'sites livr\u00e9s pour des artisans et PME' },
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

      {/* FAQ */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="text-center space-y-4 mb-12">
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">FAQ</p>
            <h2 className="font-display text-3xl tracking-[-0.02em] text-foreground sm:text-4xl">Questions fr&eacute;quentes sur les sites pour artisans</h2>
          </div>
          <FaqSection faqs={faqs} />
        </div>
      </section>

      {/* Services liés */}
      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl text-foreground mb-4">Compl&eacute;tez votre visibilit&eacute;</h2>
          <div className="grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
            {[
              { title: 'R\u00e9f\u00e9rencement local', href: '/referencement-local-rennes' },
              { title: 'Cr\u00e9ation de site internet', href: '/creation-site-internet-rennes' },
              { title: 'Audit SEO gratuit', href: '/audit-seo-gratuit' },
            ].map((s, i) => (
              <Link key={i} href={s.href} className="rounded-xl border border-border bg-background/50 px-5 py-4 text-sm font-medium text-foreground hover:border-primary/20 transition-colors">{s.title}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl text-foreground">
            Votre prochain chantier commence sur Google
          </h2>
          <p className="mt-4 text-muted-foreground">Devis gratuit sous 24h. Un site qui travaille pour vous pendant que vous &ecirc;tes sur le terrain.</p>
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
