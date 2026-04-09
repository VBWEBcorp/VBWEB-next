import { Search, Rocket, TrendingUp, Sparkles, Gift } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Diagnostic précis de vos fuites',
    description:
      "J'identifie exactement où vous perdez vos futurs clients et comment vos concurrents vous devancent sur Google.",
  },
  {
    number: '02',
    icon: Rocket,
    title: 'Site premium + stratégie SEO sur-mesure',
    description:
      'Un site qui inspire confiance ET qui convertit, couplé à une stratégie SEO qui vous positionne devant vos concurrents.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Croissance continue et sérénité',
    description:
      'Accompagnement mensuel premium : votre visibilité grandit, vos clients aussi. Vous vous concentrez sur votre métier, moi sur votre croissance digitale.',
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Automatisation & gain de temps',
    description:
      "Plus de clients, plus de sérénité, plus de temps pour votre métier grâce à l'automatisation intelligente.",
  },
]

export function MethodSection() {
  return (
    <section className="relative overflow-hidden bg-card">
      {/* Background grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />


      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Header épuré */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
            Ma méthode
          </p>
          <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
            De l&apos;invisible à{' '}
            <span className="italic text-muted-foreground/80">générateur de clients</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            Une approche premium en 4 étapes pour que votre site attire, convertisse et vous libère du stress du digital.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* Ligne verticale statique */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary to-primary/60 sm:left-6"
          />

          <ol className="space-y-6 sm:space-y-8">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <li
                  key={step.number}
                  className="relative pl-14 sm:pl-20"
                >
                  {/* Node de la timeline */}
                  <div className="absolute left-0 top-1 sm:top-2">
                    <div className="flex size-9 items-center justify-center rounded-full border border-primary/30 bg-background text-primary shadow-[0_0_0_4px_rgba(0,0,0,0.4)] sm:size-12">
                      <Icon className="size-4 sm:size-5" aria-hidden />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="group relative">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-px rounded-[1.2rem] bg-gradient-to-br from-primary/40 via-primary/0 to-primary/20 opacity-0 blur-[2px] transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div className="relative overflow-hidden rounded-[1.15rem] border border-border/60 bg-background/50 p-6 transition-colors duration-500 group-hover:border-primary/30 group-hover:bg-background/70 sm:p-7">

                      <div className="relative flex items-baseline gap-4">
                        <span className="font-display text-[2.25rem] font-bold leading-none tracking-[-0.03em] text-muted-foreground/30 sm:text-[2.75rem]">
                          {step.number}
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-border/60 to-transparent" />
                      </div>

                      <h3 className="relative mt-5 font-display text-lg font-semibold leading-snug tracking-[-0.01em] text-foreground sm:text-xl">
                        {step.title}
                      </h3>
                      <p className="relative mt-3 text-[15px] leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Bonus card */}
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="group relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px rounded-[1.3rem] bg-gradient-to-br from-primary/50 via-primary/10 to-primary/30 opacity-60 blur-[3px] transition-opacity duration-500 group-hover:opacity-100"
            />
            <div className="relative overflow-hidden rounded-[1.25rem] border border-primary/30 bg-background/70 p-7 sm:p-8">
              <div className="relative flex items-start gap-5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 text-primary">
                  <Gift className="size-5" aria-hidden />
                </div>
                <div className="flex-1">
                  <span className="font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                    Bonus premium
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-foreground sm:text-xl">
                    Outils sur-mesure pour votre croissance
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    CRM personnalisé, tableaux de bord, automatisations… Des outils qui vous font gagner des heures chaque semaine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
