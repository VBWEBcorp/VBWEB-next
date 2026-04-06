'use client'

import { Star } from 'lucide-react'

const testimonials = [
  { name: 'Maxime Guillois Magicien', initial: 'M', date: 'il y a 5 mois', text: 'Un immense merci à VBWeb et à Victor pour la création de mon site internet "Maxime Guillois Magicien" ! 🎩✨' },
  { name: 'Brad Mouche', initial: 'B', date: 'il y a 5 mois', text: 'Sa fait maintenant 1 an que Victor s\'occupe de mes sites internet dans le domaine de la couverture. Je suis très satisfait des résultats et de Victor qui est toujours à l\'écoute et toujours disponible.' },
  { name: 'Lea Nogier', initial: 'L', date: 'il y a 5 mois', text: 'J\'ai vraiment bien fait de faire confiance à VBWEB ! Vraiment une bonne stratégie de privilégier le référencement naturel à la pub bien que ça ai mis du temps à se mettre en place, des économies et bien plus d\'appels ! Merci 🤩' },
  { name: 'Pauline Buffet', initial: 'P', date: 'il y a 5 mois', text: 'VBWEB nous a développé une plate-forme en interne qui nous facilite bien la vie ! Merci pour son professionnalisme.' },
  { name: 'Mélina Jéhannin', initial: 'M', date: 'il y a 5 mois', text: 'Encore merci ! Référencement au top et un conseil d\'exception, Victor a pris le temps de m\'expliquer en détail l\'importance du référencement ce qui m\'a permis d\'y voir plus clair, les résultats sont au RDV je recommande' },
  { name: 'Caroline Le Blavec', initial: 'C', date: 'il y a 9 mois', text: 'Un accompagnement de qualité, Victor m\'a fait un audit video très explicite de mon site et m\'accompagne maintenant depuis 2 ans dans ma strategie SEO, ce qui a vraiment augmenté mon trafic et les appels. C\'est quelqu\'un de très reactif et pro, je recommande ✅️' },
  { name: 'Johanna Gonzalez', initial: 'J', date: 'il y a 7 mois', text: 'De très bons, résultats en terme de référencement ! Ça fait maintenant plus d\'un an que je travaille avec Victor et les résultats sont là beaucoup plus d\'appels et de ventes je recommande 👌' },
  { name: 'Romain Geff', initial: 'R', date: 'il y a un an', text: 'Victor vient de réaliser mon site. J\'avais déjà une petite idée de ce que je voulais faire, mais grâce à son écoute attentive et ses recommandations, mes attentes ont été largement dépassées.' },
]

function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-label="Google">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <figure className="flex h-[200px] w-[320px] shrink-0 flex-col rounded-xl border border-border bg-card/80 px-5 py-4 shadow-[var(--shadow-xs)] backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-3 fill-amber-400 text-amber-400" aria-hidden />
          ))}
        </div>
        <GoogleLogo />
      </div>
      <blockquote className="mt-3 flex-1 overflow-hidden">
        <p className="text-[13px] leading-relaxed text-foreground/70 line-clamp-4">
          &ldquo;{testimonial.text}&rdquo;
        </p>
      </blockquote>
      <figcaption className="mt-3 flex items-center gap-2.5 border-t border-border pt-3">
        <div className="flex size-7 items-center justify-center rounded-full bg-primary/15 text-[11px] font-bold text-primary">
          {testimonial.initial}
        </div>
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-foreground/90">{testimonial.name}</p>
          <p className="truncate text-[11px] text-muted-foreground/60">{testimonial.date}</p>
        </div>
      </figcaption>
    </figure>
  )
}

function MarqueeRow({ items, direction, tilt = 0 }: { items: typeof testimonials; direction: 'left' | 'right'; tilt?: number }) {
  const animationClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'

  return (
    <div
      className="group relative flex overflow-hidden"
      style={{ transform: `rotate(${tilt}deg)`, marginLeft: '-2%', marginRight: '-2%', width: '104%' }}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-card to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-card to-transparent sm:w-28" />
      <div className={`flex shrink-0 gap-6 py-2 ${animationClass} group-hover:[animation-play-state:paused]`}>
        {items.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
        ))}
      </div>
      <div aria-hidden className={`flex shrink-0 gap-6 py-2 ${animationClass} group-hover:[animation-play-state:paused]`}>
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
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="rounded-3xl border border-border/50 bg-card overflow-hidden shadow-sm">

          {/* Header */}
          <div className="px-6 pt-10 sm:px-10 lg:pt-14">
            <div className="mx-auto max-w-2xl text-center space-y-4">
              <div className="flex items-center justify-center gap-3">
                <GoogleLogo />
                <span className="text-sm font-medium text-muted-foreground">Avis Google</span>
                <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-semibold text-primary">75 avis</span>
              </div>
              <h2 className="font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl md:text-[2.6rem]">
                Mes avis
              </h2>
              <div className="flex items-center justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-amber-400 text-amber-400" aria-hidden />
                ))}
              </div>
            </div>
          </div>

          {/* Marquee rows */}
          <div className="mt-10 space-y-6 pb-8">
            <MarqueeRow items={topRow} direction="left" tilt={-2} />
            {bottomRow.length > 0 && <MarqueeRow items={bottomRow} direction="right" tilt={2} />}
          </div>

          {/* CTA */}
          <div className="pb-10 text-center">
            <a
              href="https://g.page/r/VBWEB/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground/5 px-5 py-2.5 text-sm font-medium text-foreground/70 transition-colors hover:bg-foreground/10"
            >
              Laissez un avis
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
