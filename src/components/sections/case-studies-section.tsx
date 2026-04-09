import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const categories = [
  {
    number: '01',
    label: 'Web Design',
    title: 'Sites Internet',
    description:
      'Vitrines, e-commerce et sites sur-mesure qui transforment vos visiteurs en clients.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    href: '/etudes-de-cas/sites-internet',
    accent: 'from-sky-400/20 via-transparent to-transparent',
  },
  {
    number: '02',
    label: 'Search',
    title: 'Référencement SEO',
    description:
      'Stratégies de visibilité Google qui propulsent mes clients en première page.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
    href: '/etudes-de-cas/referencement',
    accent: 'from-violet-400/20 via-transparent to-transparent',
  },
  {
    number: '03',
    label: 'Engineering',
    title: 'Applications Web',
    description:
      'CRM, logiciels et dashboards sur-mesure pour automatiser et piloter votre activité.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    href: '/etudes-de-cas/applications-web',
    accent: 'from-emerald-400/20 via-transparent to-transparent',
  },
]

export function CaseStudiesSection() {
  return (
    <section id="etudes-de-cas" className="relative scroll-mt-20 overflow-hidden bg-background">
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
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Header asymétrique style Framer */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
              Portfolio
            </p>
            <h2 className="mt-4 font-display text-balance text-3xl font-medium leading-[1.05] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
              Réalisations{' '}
              <span className="italic text-muted-foreground/80">sélectionnées</span>
            </h2>
          </div>
          <p className="max-w-xs text-[15px] leading-relaxed text-muted-foreground sm:text-right">
            Trois disciplines, une obsession : transformer votre digital en levier de croissance.
          </p>
        </div>

        {/* Grille 3 colonnes côte à côte */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {categories.map((cat) => (
            <div key={cat.title}>
              <Link
                href={cat.href}
                className="group relative block h-full overflow-hidden rounded-[1.4rem] border border-border/60 bg-card/40 backdrop-blur-sm transition-all duration-500 hover:border-primary/30"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
                  />
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${cat.accent} opacity-60`} />

                  {/* Numéro + label en haut à gauche */}
                  <div className="absolute left-5 top-5">
                    <span className="font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-white/90">
                      {cat.number} · {cat.label}
                    </span>
                  </div>

                  {/* Arrow en haut à droite */}
                  <div className="absolute right-5 top-5">
                    <div className="flex size-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-500 group-hover:border-primary/60 group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
                    </div>
                  </div>
                </div>

                {/* Texte sous l'image */}
                <div className="relative p-6 sm:p-7">
                  <h3 className="font-display text-xl font-semibold leading-tight tracking-[-0.01em] text-foreground transition-colors duration-500 group-hover:text-primary sm:text-2xl">
                    {cat.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                    {cat.description}
                  </p>

                  {/* Trait gradient en bas */}
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-border via-border/40 to-transparent" />

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground/60">
                      Voir l&apos;étude de cas
                    </span>
                    <span className="font-display text-xs font-semibold text-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
