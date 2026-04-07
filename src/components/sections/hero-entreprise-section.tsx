'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const ease = [0.22, 1, 0.36, 1] as const

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

export function HeroEntrepriseSection() {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      {/* Photo columns animées en arrière-plan */}
      <div className="absolute inset-0 flex justify-center gap-3 opacity-50 px-4">
        <div className="hidden w-44 sm:block">
          <ScrollColumn images={col1} direction="up" duration={40} />
        </div>
        <div className="w-44">
          <ScrollColumn images={col2} direction="down" duration={35} />
        </div>
        <div className="w-44">
          <ScrollColumn images={col3} direction="up" duration={38} />
        </div>
        <div className="hidden w-44 lg:block">
          <ScrollColumn images={col1.slice().reverse()} direction="down" duration={42} />
        </div>
      </div>

      {/* Gradient overlay pour lisibilité */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      <div className="pointer-events-none absolute inset-0 bg-background/35" />

      {/* Glow primary */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(78,186,236,0.08),transparent_60%)]" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-20 pb-10 sm:px-6 sm:pt-28 sm:pb-14 lg:px-8 lg:pt-36 lg:pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
            className="text-center lg:text-left"
          >
            <h1 className="font-display text-balance text-4xl leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl">
              Plus de clients{' '}
              <br className="hidden sm:block" />
              <span className="text-primary">grâce à Google</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl lg:mx-0">
              Je transforme votre site en générateur de clients qualifiés grâce au référencement naturel et un site web performant.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
                <Link href="/contact">
                  Prendre rendez-vous
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/15 bg-foreground/5 text-foreground backdrop-blur-sm hover:bg-foreground/10 hover:text-foreground"
                asChild
              >
                <Link href="#etudes-de-cas">
                  Étude de cas
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 lg:justify-start">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-400 text-amber-400" aria-hidden />
                ))}
              </div>
              <span className="text-sm font-medium text-muted-foreground">5 étoiles sur 75 avis</span>
            </div>
          </motion.div>

          {/* Photo Victor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="relative mx-auto lg:mx-0"
          >
            <div aria-hidden className="absolute -inset-6 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative size-56 overflow-hidden rounded-full border-2 border-primary/20 shadow-[var(--shadow-lg)] ring-1 ring-foreground/5 sm:size-64 lg:size-72">
              <img
                src="https://i.ibb.co/1fRDj4NP/Victor.jpg"
                alt="Victor Béasse, fondateur de VBWEB"
                className="size-full object-cover object-center"
                width={288}
                height={288}
                fetchPriority="high"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
