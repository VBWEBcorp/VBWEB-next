import { TrendingDown, Search } from 'lucide-react'

const stats = [
  {
    icon: TrendingDown,
    value: '+80%',
    label: 'des sites ne convertissent pas',
    title: 'Vous avez un beau site… mais il ne vous rapporte pas de clients',
    description:
      'Vos prospects cherchent sur Google, mais c\'est votre concurrence qu\'ils trouvent. Vous perdez des clients chaque jour sans même le savoir.',
  },
  {
    icon: Search,
    value: '93%',
    label: 'des achats commencent sur Google',
    title: 'Vos futurs clients vous cherchent sur Google en ce moment même',
    description:
      'Pendant que vous investissez dans la pub et les réseaux sociaux, ils tapent votre secteur + votre ville. Et tombent sur quelqu\'un d\'autre.',
  },
]

export function ProblemStatsSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Grain / texture subtile en fond */}
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
            Le constat
          </p>
          <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
            Cette situation{' '}
            <span className="italic text-muted-foreground/80">vous dit quelque chose</span> ?
          </h2>
        </div>

        {/* Cards style framer */}
        <div className="mt-14 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.value}
                className="group relative"
              >
                {/* Glow border on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-[1.4rem] bg-gradient-to-br from-primary/40 via-primary/0 to-primary/20 opacity-0 blur-[2px] transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative h-full overflow-hidden rounded-[1.35rem] border border-border/60 bg-card/40 p-8 transition-colors duration-500 group-hover:border-primary/30 group-hover:bg-card/60 sm:p-10">

                  {/* Icone discrète en haut à droite */}
                  <div className="absolute right-6 top-6 sm:right-8 sm:top-8">
                    <div className="flex size-10 items-center justify-center rounded-xl border border-border/60 bg-background/40 text-muted-foreground/60 transition-colors duration-500 group-hover:border-primary/30 group-hover:text-primary">
                      <Icon className="size-4" aria-hidden />
                    </div>
                  </div>

                  {/* Big number */}
                  <div className="relative">
                    <span className="font-display text-[4.5rem] font-bold leading-none tracking-[-0.04em] text-foreground sm:text-[5.5rem]">
                      {stat.value}
                    </span>
                    <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/60">
                      {stat.label}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="mt-7 h-px w-full bg-gradient-to-r from-border via-border/60 to-transparent" />

                  {/* Texte */}
                  <div className="mt-7 space-y-3">
                    <h3 className="font-display text-xl font-semibold leading-snug tracking-[-0.01em] text-foreground sm:text-2xl">
                      {stat.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
