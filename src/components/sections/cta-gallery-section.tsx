'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { useHomeLang, t } from '@/components/home/lang'
import { useAudit } from '@/components/ui/audit-provider'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'

// Pool réduit de 9 vignettes (URLs Cloudflare R2), partagé entre toutes les colonnes.
const heroImages = [
  'https://pub-698f857760da42999dac8854114fbc41.r2.dev/YUZU-BRANDING-9HsCRCV6.webp',
  'https://pub-698f857760da42999dac8854114fbc41.r2.dev/EPICU-hxpcht55.webp',
  'https://pub-698f857760da42999dac8854114fbc41.r2.dev/AS-LOCATION-VWfJrSqX.webp',
  'https://pub-698f857760da42999dac8854114fbc41.r2.dev/MATINEH-FOOD-tPHZ4D9L.webp',
  'https://pub-698f857760da42999dac8854114fbc41.r2.dev/Shaan-production-Nd4W02HL.webp',
  'https://pub-698f857760da42999dac8854114fbc41.r2.dev/SHAMPOUINE-TOI-dwbzZFNN.webp',
  'https://pub-698f857760da42999dac8854114fbc41.r2.dev/JEREMY-SIMON-AVOCAT-9HhFm9MV.webp',
  'https://pub-698f857760da42999dac8854114fbc41.r2.dev/JULIEN-BIDOIS-CHEF-PRIVE-kZrFB2h.webp',
  'https://pub-698f857760da42999dac8854114fbc41.r2.dev/LES-LUNETTES-DE-LA-CHAPELLE-xtRDW0WZ.webp',
]

const rot = (arr: string[], n: number) => [...arr.slice(n), ...arr.slice(0, n)]

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
            <Image
              src={src}
              alt=""
              width={240}
              height={320}
              loading="lazy"
              fetchPriority="low"
              quality={40}
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 20vw, 14vw"
              className="aspect-[3/4] w-full rounded-xl object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function CtaGallerySection({ variant = 'default' }: { variant?: 'default' | 'homepage' } = {}) {
  const { openAudit } = useAudit()
  const { lang } = useHomeLang()

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Photo columns — pleine largeur écran */}
      <div className="absolute inset-0 flex gap-3 opacity-25">
        <ScrollColumn images={heroImages} direction="up" duration={40} />
        <ScrollColumn images={rot(heroImages, 3)} direction="down" duration={35} />
        <ScrollColumn images={rot(heroImages, 6)} direction="up" duration={38} />
        <div className="hidden min-w-0 flex-1 sm:block"><ScrollColumn images={[...heroImages].reverse()} direction="down" duration={42} /></div>
        <div className="hidden min-w-0 flex-1 sm:block"><ScrollColumn images={rot(heroImages, 4)} direction="up" duration={36} /></div>
        <div className="hidden min-w-0 flex-1 lg:block"><ScrollColumn images={rot(heroImages, 2)} direction="down" duration={44} /></div>
        <div className="hidden min-w-0 flex-1 lg:block"><ScrollColumn images={rot(heroImages, 5)} direction="up" duration={39} /></div>
      </div>

      {/* Gradient overlay — léger pour laisser voir les images */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      <div className="pointer-events-none absolute inset-0 bg-background/35" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-28 sm:px-6 sm:py-36 lg:py-44 text-center">
        <Reveal className="space-y-6">
          <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            {t.ctaGallery.eyebrow[lang]}
          </p>
          <h2 className="font-display text-balance text-4xl leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.5rem]">
            {t.ctaGallery.h2[lang]}
          </h2>
          <p className="mx-auto max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.ctaGallery.description[lang]}
          </p>
          {variant === 'homepage' ? (
            <div className="flex flex-col items-center justify-center gap-3 pt-2">
              <Button
                size="lg"
                className="group bg-primary text-primary-foreground hover:bg-primary/85"
                onClick={openAudit}
              >
                {t.ctaGallery.ctaPrimary[lang]}
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Link
                href="/contact"
                className="text-[13px] text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
              >
                {t.ctaGallery.ctaSecondary[lang]}
              </Link>
            </div>
          ) : (
            <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row">
              <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85" asChild>
                <Link href="/contact">
                  Prendre rendez-vous
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-border bg-card/50 backdrop-blur-sm" asChild>
                <Link href="/audit-seo-gratuit">
                  Diagnostic gratuit
                </Link>
              </Button>
            </div>
          )}
        </Reveal>
      </div>

      {/* CSS animations */}
    </section>
  )
}
