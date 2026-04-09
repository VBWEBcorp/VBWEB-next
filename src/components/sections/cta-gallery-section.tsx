import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'

const col1 = [
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80',
]

const col2 = [
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=400&q=80',
]

const col3 = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80',
]

function ScrollColumn({ images, direction = 'up', duration = 35 }: { images: string[]; direction?: 'up' | 'down'; duration?: number }) {
  const doubled = [...images, ...images]

  return (
    <div className="relative h-full overflow-hidden">
      <div
        className={direction === 'up' ? 'animate-scroll-up' : 'animate-scroll-down'}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((src, i) => (
          <div key={i} className="p-1.5">
            <img
              src={src}
              alt=""
              loading="lazy"
              className="aspect-[3/4] w-full rounded-xl object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function CtaGallerySection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Photo columns — pleine largeur écran */}
      <div className="absolute inset-0 grid grid-cols-3 gap-3 opacity-25 sm:grid-cols-5 lg:grid-cols-7">
        <ScrollColumn images={col1} direction="up" duration={40} />
        <ScrollColumn images={col2} direction="down" duration={35} />
        <ScrollColumn images={col3} direction="up" duration={38} />
        <ScrollColumn images={col1.slice().reverse()} direction="down" duration={42} />
        <ScrollColumn images={col2.slice().reverse()} direction="up" duration={36} />
        <ScrollColumn images={col3.slice().reverse()} direction="down" duration={44} />
        <ScrollColumn images={col1} direction="up" duration={39} />
      </div>

      {/* Gradient overlay — léger pour laisser voir les images */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      <div className="pointer-events-none absolute inset-0 bg-background/35" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-28 sm:px-6 sm:py-36 lg:py-44 text-center">
        <Reveal className="space-y-6">
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Prêt à passer à l'action ?
          </p>
          <h2 className="font-display text-balance text-4xl leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.5rem]">
            Parlons de votre projet
          </h2>
          <p className="mx-auto max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Un site qui convertit, une visibilité qui explose. Réservez 30 min gratuites et repartez avec un plan d'action concret. Sans engagement.
          </p>
          <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row">
            <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
              <Link href="/contact">
                Prendre rendez-vous
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-border bg-card/50 backdrop-blur-sm" asChild>
              <Link href="/audit-seo-gratuit">
                Audit SEO gratuit
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>

      {/* CSS animations */}
    </section>
  )
}
