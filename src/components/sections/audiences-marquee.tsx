'use client'

const audiences = [
  'PME & Entreprises',
  'Artisans & Commerces',
  'Boutiques en ligne',
  'Restaurants & Cafés',
  'Professions libérales',
  'Avocats & Notaires',
  'Médecins & Thérapeutes',
  'Plombiers & Couvreurs',
  'Électriciens & Maçons',
  'Architectes & Designers',
  'Coachs & Consultants',
  'Hôtels & Locations',
  'Agences immobilières',
  'Salons de beauté',
  'Garages & Carrossiers',
  'Écoles & Formations',
]

export function AudiencesMarquee() {
  const doubled = [...audiences, ...audiences]

  return (
    <section
      aria-label="Secteurs accompagnés"
      className="relative overflow-hidden border-y border-border/40 bg-background/60 py-6 backdrop-blur-sm"
    >
      {/* Fades latéraux */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      <div className="flex animate-marquee-left" style={{ width: 'max-content' }}>
        {doubled.map((label, i) => (
          <div key={i} className="flex shrink-0 items-center px-8">
            <span className="font-display text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground/70 sm:text-base">
              {label}
            </span>
            <span className="ml-8 size-1.5 rounded-full bg-primary/40" aria-hidden />
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-left {
          animation: marquee-left 60s linear infinite;
        }
      `}</style>
    </section>
  )
}
