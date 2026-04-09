import { ShieldCheck, Users, Clock } from 'lucide-react'

const results = [
  {
    icon: ShieldCheck,
    title: 'Confiance',
    description: 'Un site qui rassure dès la première seconde.',
  },
  {
    icon: Users,
    title: 'Clients qualifiés',
    description: 'Google vous trouve. Vos prospects aussi.',
  },
  {
    icon: Clock,
    title: 'Sérénité',
    description: 'Votre site travaille 24h/24. Vous, sur votre métier.',
  },
]

export function ResultsSection() {
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


      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
            Résultats
          </p>
          <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[2.75rem]">
            Trois promesses,{' '}
            <span className="italic text-muted-foreground/80">tenues</span>
          </h2>
        </div>

        {/* Grille minimaliste */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] border border-border/50 bg-border/40 sm:mt-16 sm:grid-cols-3">
          {results.map((result) => {
            const Icon = result.icon
            return (
              <div
                key={result.title}
                className="group relative bg-background/95 p-8 transition-colors duration-500 hover:bg-card/60 sm:p-10"
              >
                {/* Spotlight au hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      'radial-gradient(circle at center top, rgba(78,186,236,0.08), transparent 70%)',
                  }}
                />

                <div className="relative flex flex-col items-center text-center">
                  {/* Icone */}
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-full border border-border/60 bg-background text-muted-foreground/70 transition-colors duration-500 group-hover:border-primary/40 group-hover:text-primary">
                      <Icon className="size-5" aria-hidden />
                    </div>
                  </div>

                  {/* Titre */}
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.01em] text-foreground sm:text-2xl">
                    {result.title}
                  </h3>

                  {/* Trait gradient */}
                  <div className="mt-4 h-px w-12 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                  {/* Description */}
                  <p className="mt-4 max-w-[200px] text-[15px] leading-relaxed text-muted-foreground">
                    {result.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
