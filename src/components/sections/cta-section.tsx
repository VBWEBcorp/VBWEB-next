import { AuditButton } from '@/components/ui/audit-button'
import { Reveal } from '@/components/ui/reveal'

export function CtaSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-3xl text-center space-y-6">
          <h2 className="font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] text-foreground sm:text-4xl md:text-[2.6rem]">
            Prêt à transformer votre site en générateur de clients ?
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Laissez votre numéro : je vous rappelle sous 24 heures pour parler de votre site et de votre visibilité. Sans engagement, juste du concret.
          </p>

          <div className="flex justify-center pt-4">
            <AuditButton />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
