'use client'

import { ArrowRight, Smartphone, Zap, Search, Palette, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface FaqItem { question: string; answer: string }

/* ------------------------------------------------------------------ */
/*  FAQ Accordion (useState + CSS max-height transition)               */
/* ------------------------------------------------------------------ */

function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <Reveal key={i} delay={i * 0.06}>
          <div className="group rounded-[1.35rem] border border-border/60 bg-card/40 transition-colors hover:border-primary/30">
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-sm font-medium leading-snug text-foreground">
                {faq.question}
              </span>
              <ChevronDown
                className={`size-4 shrink-0 text-primary/70 transition-transform duration-300 ${
                  open === i ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: open === i ? '500px' : '0px', opacity: open === i ? 1 : 0 }}
            >
              <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Feature cards data                                                 */
/* ------------------------------------------------------------------ */

const features = [
  { icon: Zap, title: 'Ultra-rapide', desc: 'Performance optimale, chargement instantané.' },
  { icon: Smartphone, title: 'Mobile-first', desc: 'Parfait sur tous les écrans.' },
  { icon: Search, title: 'SEO natif', desc: 'Optimisé Google dès la conception.' },
  { icon: Palette, title: 'Design premium', desc: 'Moderne et professionnel.' },
] as const

/* ------------------------------------------------------------------ */
/*  Complementary services data                                        */
/* ------------------------------------------------------------------ */

const services = [
  { title: 'Référencement SEO', href: '/referencement-seo' },
  { title: 'Audit SEO gratuit', href: '/audit-seo-gratuit' },
  { title: 'Freelance SEO', href: '/freelance-seo' },
] as const

/* ------------------------------------------------------------------ */
/*  Main export                                                        */
/* ------------------------------------------------------------------ */

export function WebCreationContent({ faqs }: { faqs: FaqItem[] }) {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-background">
        {/* Grain texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'url(/grain.webp)', backgroundRepeat: 'repeat' }} />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div
            className="mx-auto max-w-3xl text-center"
            style={{ animation: 'hero-fade-up 0.65s cubic-bezier(0.22,1,0.36,1) both' }}
          >
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Création de site internet
            </p>

            <h1 className="mt-5 font-display text-balance text-4xl font-medium leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.5rem]">
              Un site qui vous rapporte{' '}
              <span className="italic text-muted-foreground">des clients,</span>{' '}
              pas juste une vitrine
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Design moderne, performance technique et SEO intégré. Chaque site est conçu pour convertir vos visiteurs en clients.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="group bg-primary text-primary-foreground hover:bg-primary/85"
                asChild
              >
                <Link href="/contact">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-card">
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'url(/grain.webp)', backgroundRepeat: 'repeat' }} />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Pourquoi nous choisir
            </p>
            <h2 className="mt-4 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] sm:text-4xl lg:text-[3rem]">
              Ce qui rend mes sites{' '}
              <span className="italic text-muted-foreground">différents</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="group rounded-[1.35rem] border border-border/60 bg-card/40 p-8 text-center transition-colors hover:border-primary/30">
                  <div className="mx-auto flex size-10 items-center justify-center rounded-xl border border-border/60">
                    <item.icon className="size-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-display text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-background">
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'url(/grain.webp)', backgroundRepeat: 'repeat' }} />

        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="mb-12 text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              FAQ
            </p>
            <h2 className="mt-4 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] sm:text-4xl lg:text-[3rem]">
              Questions sur la{' '}
              <span className="italic text-muted-foreground">création de site</span>
            </h2>
          </Reveal>

          <FaqSection faqs={faqs} />
        </div>
      </section>

      {/* ── Complementary services ────────────────────────────── */}
      <section className="relative overflow-hidden bg-card">
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'url(/grain.webp)', backgroundRepeat: 'repeat' }} />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal className="text-center">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Aller plus loin
            </p>
            <h2 className="mt-4 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] sm:text-4xl lg:text-[3rem]">
              Services{' '}
              <span className="italic text-muted-foreground">complémentaires</span>
            </h2>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <Link
                  href={s.href}
                  className="group flex items-center justify-center rounded-[1.35rem] border border-border/60 bg-card/40 px-5 py-5 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  {s.title}
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.25} className="mt-8 text-center">
            <Link
              href="/etudes-de-cas/sites-internet"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Voir nos réalisations de sites internet
              <ArrowRight className="size-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-background">
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'url(/grain.webp)', backgroundRepeat: 'repeat' }} />

        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 text-center">
          <Reveal>
            <h2 className="font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] sm:text-4xl lg:text-[3rem]">
              Prêt à lancer votre{' '}
              <span className="italic text-muted-foreground">nouveau site ?</span>
            </h2>

            <p className="mt-5 text-muted-foreground">
              Devis gratuit sous 24h, sans engagement.
            </p>

            <div className="mt-10">
              <Button
                size="lg"
                className="group bg-primary text-primary-foreground hover:bg-primary/85"
                asChild
              >
                <Link href="/contact">
                  Demander un devis
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
