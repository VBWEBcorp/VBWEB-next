import { ArrowRight, Calendar } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'

const CALENDLY = 'https://calendly.com/web-rdv/echange-vbweb-30-minutes'

export function CtaSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-3xl text-center space-y-6">
          <h2 className="font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl md:text-[2.6rem]">
            Prêt à transformer votre site en générateur de clients ?
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            30 minutes gratuites pour découvrir comment doubler votre acquisition client grâce à un site premium et une stratégie SEO qui fonctionne. Sans engagement, juste du concret.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/85 font-semibold" asChild>
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
                <Calendar className="size-4 mr-1" />
                Réserver un appel gratuit
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-border/60 text-foreground hover:bg-foreground/5 hover:text-foreground" asChild>
              <Link href="/contact">
                Envoyer un message
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
