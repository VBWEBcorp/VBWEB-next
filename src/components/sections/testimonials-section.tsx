'use client'

import { Star } from 'lucide-react'

import { Reveal } from '@/components/ui/reveal'

const testimonials = [
  { name: 'Maxime Guillois Magicien', initial: 'M', date: 'il y a 5 mois', text: 'Un immense merci à VBWeb et à Victor pour la création de mon site internet "Maxime Guillois Magicien" ! 🎩✨' },
  { name: 'Brad Mouche', initial: 'B', date: 'il y a 5 mois', text: 'Sa fait maintenant 1 an que Victor s\'occupe de mes sites internet dans le domaine de la couverture. Je suis très satisfait des résultats et de Victor qui est toujours à l\'écoute et toujours disponible.' },
  { name: 'Lea Nogier', initial: 'L', date: 'il y a 5 mois', text: 'J\'ai vraiment bien fait de faire confiance à VBWEB ! Vraiment une bonne stratégie de privilégier le référencement naturel à la pub bien que ça ai mis du temps à se mettre en place, des économies et bien plus d\'appels ! Merci 🤩' },
  { name: 'Pauline Buffet', initial: 'P', date: 'il y a 5 mois', text: 'VBWEB nous a développé une plate-forme en interne qui nous facilite bien la vie ! Merci pour son professionnalisme.' },
  { name: 'Mélina Jéhannin', initial: 'M', date: 'il y a 5 mois', text: 'Encore merci ! Référencement au top et un conseil d\'exception, Victor a pris le temps de m\'expliquer en détail l\'importance du référencement ce qui m\'a permis d\'y voir plus clair, les résultats sont au RDV je recommande' },
  { name: 'Caroline Le Blavec', initial: 'C', date: 'il y a 9 mois', text: 'Un accompagnement de qualité, Victor m\'a fait un audit video très explicite de mon site et m\'accompagne maintenant depuis 2 ans dans ma strategie SEO, ce qui a vraiment augmenté mon trafic et les appels. C\'est quelqu\'un de très réactif et pro, je recommande ✅️' },
  { name: 'Johanna Gonzalez', initial: 'J', date: 'il y a 7 mois', text: 'De très bons résultats en terme de référencement ! Ça fait maintenant plus d\'un an que je travaille avec Victor et les résultats sont là beaucoup plus d\'appels et de ventes je recommande 👌' },
  { name: 'Romain Geff', initial: 'R', date: 'il y a un an', text: 'Victor vient de réaliser mon site. J\'avais déjà une petite idée de ce que je voulais faire, mais grâce à son écoute attentive et ses recommandations, mes attentes ont été largement dépassées.' },
]

function GoogleLogo({ className = 'size-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-label="Google">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <figure className="group relative flex h-[220px] w-[340px] shrink-0 flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 transition-colors duration-500 hover:border-primary/30 hover:bg-card/80">

      {/* Header avec étoiles + Google */}
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" aria-hidden />
          ))}
        </div>
        <GoogleLogo className="size-4 opacity-80" />
      </div>

      {/* Texte */}
      <blockquote className="relative mt-4 flex-1 overflow-hidden">
        <p className="text-[14px] leading-relaxed text-foreground/75 line-clamp-5">
          {testimonial.text}
        </p>
      </blockquote>

      {/* Auteur */}
      <figcaption className="relative mt-4 flex items-center gap-3 border-t border-border/50 pt-4">
        <div className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 text-sm font-semibold text-primary ring-1 ring-primary/15">
          {testimonial.initial}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-semibold text-foreground/90">{testimonial.name}</p>
          <p className="truncate text-[11px] text-muted-foreground/60">{testimonial.date}</p>
        </div>
      </figcaption>
    </figure>
  )
}

function MarqueeRow({
  items,
  direction,
}: {
  items: typeof testimonials
  direction: 'left' | 'right'
}) {
  const animationClass =
    direction === 'left' ? 'animate-marquee-testimonials-left' : 'animate-marquee-testimonials-right'

  return (
    <div className="group relative flex gap-5 overflow-hidden">
      {/* Fades latéraux */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent sm:w-32" />

      <div
        className={`flex shrink-0 gap-5 py-2 ${animationClass} group-hover:[animation-play-state:paused]`}
      >
        {items.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
        ))}
      </div>
      <div
        aria-hidden
        className={`flex shrink-0 gap-5 py-2 ${animationClass} group-hover:[animation-play-state:paused]`}
      >
        {items.map((t, i) => (
          <TestimonialCard key={`${t.name}-dup-${i}`} testimonial={t} />
        ))}
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const mid = Math.ceil(testimonials.length / 2)
  const topRow = testimonials.slice(0, mid)
  const bottomRow = testimonials.slice(mid)

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />


      <div className="relative py-16 sm:py-20 lg:py-24">
        {/* Header */}
        <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3.5 py-1.5">
            <GoogleLogo className="size-3.5" />
            <span className="text-[12px] font-medium text-muted-foreground">75 avis Google</span>
            <span aria-hidden className="h-3 w-px bg-border" />
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3 fill-amber-400 text-amber-400" aria-hidden />
              ))}
            </div>
          </div>
          <h2 className="mt-6 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[2.75rem]">
            Ils en parlent{' '}
            <span className="italic text-muted-foreground/80">mieux que moi</span>
          </h2>
        </Reveal>

        {/* Marquee rows */}
        <div className="mt-14 space-y-5">
          <MarqueeRow items={topRow} direction="left" />
          {bottomRow.length > 0 && <MarqueeRow items={bottomRow} direction="right" />}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://g.page/r/VBWEB/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:border-primary/30 hover:bg-card/80 hover:text-foreground"
          >
            <GoogleLogo className="size-4" />
            Laissez un avis
          </a>
        </div>
      </div>
    </section>
  )
}
