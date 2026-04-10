import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'

const col1 = [
  'https://i.ibb.co/9HsCRCV6/YUZU-BRANDING.jpg',
  'https://i.ibb.co/hxpcht55/EPICU.jpg',
  'https://i.ibb.co/VWfJrSqX/AS-LOCATION.jpg',
  'https://i.ibb.co/rKD9SJ7q/VENTS-ET-COURBES.jpg',
  'https://i.ibb.co/DHr9v05v/FL-CONSULTING.jpg',
  'https://i.ibb.co/BKYFP1x5/RENNES-PNEUS.jpg',
]

const col2 = [
  'https://i.ibb.co/tPHZ4D9L/MATINEH-FOOD.jpg',
  'https://i.ibb.co/Nd4W02HL/Shaan-production.jpg',
  'https://i.ibb.co/dwbzZFNN/SHAMPOUINE-TOI.jpg',
  'https://i.ibb.co/jvyCrGMX/VALENTIN-BEASSE.jpg',
  'https://i.ibb.co/cKpvpLYJ/ZINE-COACHING.jpg',
  'https://i.ibb.co/bM518fv2/ECO-HABITAT.jpg',
]

const col3 = [
  'https://i.ibb.co/9HhFm9MV/JEREMY-SIMON-AVOCAT.png',
  'https://i.ibb.co/kZrFB2h/JULIEN-BIDOIS-CHEF-PRIVE.jpg',
  'https://i.ibb.co/xtRDW0WZ/LES-LUNETTES-DE-LA-CHAPELLE.jpg',
  'https://i.ibb.co/39zY5X3q/MAXX-LE-MAGICIEN.jpg',
  'https://i.ibb.co/BH7k4qWR/ON-PARLE-DE-TOUT.webp',
  'https://i.ibb.co/4gnRwBXW/tracker-solaire-2.jpg',
]

function ScrollColumn({ images, direction = 'up', duration = 35 }: { images: string[]; direction?: 'up' | 'down'; duration?: number }) {
  const doubled = [...images, ...images]

  return (
    <div className="relative min-w-0 flex-1 overflow-hidden">
      <div
        className={direction === 'up' ? 'animate-scroll-up' : 'animate-scroll-down'}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((src, i) => (
          <div key={i} className="p-1.5">
            <img
              src={src}
              alt=""
              loading="eager"
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
      <div className="absolute inset-0 flex gap-3 opacity-25">
        <ScrollColumn images={col1} direction="up" duration={40} />
        <ScrollColumn images={col2} direction="down" duration={35} />
        <ScrollColumn images={col3} direction="up" duration={38} />
        <div className="hidden min-w-0 flex-1 sm:block"><ScrollColumn images={col1.slice().reverse()} direction="down" duration={42} /></div>
        <div className="hidden min-w-0 flex-1 sm:block"><ScrollColumn images={col2.slice().reverse()} direction="up" duration={36} /></div>
        <div className="hidden min-w-0 flex-1 lg:block"><ScrollColumn images={col3.slice().reverse()} direction="down" duration={44} /></div>
        <div className="hidden min-w-0 flex-1 lg:block"><ScrollColumn images={col1} direction="up" duration={39} /></div>
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
