'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const ease = [0.22, 1, 0.36, 1] as const

function GoogleG({ className = 'size-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-label="Google">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

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
            <Image
              src={src}
              alt=""
              width={300}
              height={400}
              loading="lazy"
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 20vw, 14vw"
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
    <section
      className="relative isolate overflow-hidden bg-background"
      style={{ minHeight: 'min(720px, 100vh)' }}
    >
      {/* Photo columns animées en arrière-plan */}
      <div className="absolute inset-0 grid grid-cols-3 gap-3 opacity-25 sm:grid-cols-5 lg:grid-cols-7">
        <ScrollColumn images={col1} direction="up" duration={40} />
        <ScrollColumn images={col2} direction="down" duration={35} />
        <ScrollColumn images={col3} direction="up" duration={38} />
        <ScrollColumn images={col1.slice().reverse()} direction="down" duration={42} />
        <ScrollColumn images={col2.slice().reverse()} direction="up" duration={36} />
        <ScrollColumn images={col3.slice().reverse()} direction="down" duration={44} />
        <ScrollColumn images={col1} direction="up" duration={39} />
      </div>

      {/* Gradient overlay pour lisibilité */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      <div className="pointer-events-none absolute inset-0 bg-background/35" />

      {/* Glow primary */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(78,186,236,0.08),transparent_60%)]" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-16 pb-16 sm:px-6 sm:pt-28 sm:pb-14 lg:px-8 lg:pt-36 lg:pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
            className="text-center lg:text-left"
          >
            {/* Eyebrow */}
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Référencement · Sites web · Apps
            </p>

            {/* Titre style Framer */}
            <h1 className="mt-5 font-display text-balance text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[4rem]">
              Plus de clients{' '}
              <br className="hidden sm:block" />
              <span className="italic text-muted-foreground/80">grâce à</span>{' '}
              <span className="text-primary">Google</span>
            </h1>

            {/* Sous-titre */}
            <p className="mx-auto mt-6 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base lg:mx-0">
              Je transforme votre site en générateur de clients qualifiés grâce au référencement naturel et un site web performant.
            </p>

            {/* CTAs */}
            <div className="mt-12 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row lg:justify-start">
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

            {/* Badge avis Google */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-3 rounded-full border border-border/60 bg-card/60 px-4 py-2 backdrop-blur-sm">
                <GoogleG className="size-4" />
                <span aria-hidden className="h-3 w-px bg-border" />
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3 fill-amber-400 text-amber-400" aria-hidden />
                  ))}
                </div>
                <span aria-hidden className="h-3 w-px bg-border" />
                <span className="text-[12px] font-medium text-muted-foreground">80+ avis</span>
              </div>
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
              <Image
                src="/victor.jpg"
                alt="Victor Béasse, fondateur de VBWEB"
                width={288}
                height={288}
                priority
                fetchPriority="high"
                quality={80}
                sizes="288px"
                className="size-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
