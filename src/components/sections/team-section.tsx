'use client'

import { Users, Search, Headset } from 'lucide-react'
import Image from 'next/image'

import { useHomeLang, t } from '@/components/home/lang'
import { CountUp } from '@/components/ui/count-up'
import { Reveal } from '@/components/ui/reveal'

// Une icone par role sans photo : la responsable SEO, le pole production, le
// pole relation client. Le fondateur garde sa photo.
const ROLE_ICONS = [null, Search, Users, Headset] as const

export function TeamSection() {
  const { lang } = useHomeLang()
  const members = t.team.members[lang]
  const facts = t.team.facts[lang]

  return (
    <section id="agence" className="relative scroll-mt-20 overflow-hidden bg-card">
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

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
            {t.team.eyebrow[lang]}
          </p>
          <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[2.75rem]">
            {t.team.h2Part1[lang]}{' '}
            <span className="italic text-muted-foreground/80">{t.team.h2Part2[lang]}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            {t.team.intro[lang]}
          </p>
        </Reveal>

        {/* Equipe : le fondateur en photo, les autres par role. Entree decalee
            de 60 ms par carte, une seule fois. */}
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {members.map((m, i) => {
            const Icon = ROLE_ICONS[i]
            return (
              <Reveal as="li" key={m.name} delay={i * 0.06} className="h-full">
                <div className="card-lift flex h-full flex-col rounded-[1.35rem] border border-border/60 bg-background/60 p-6 hover:border-primary/30 hover:shadow-[var(--shadow-md)] sm:p-7">
                  {i === 0 ? (
                    <div className="relative size-16 overflow-hidden rounded-full border-2 border-primary/20 ring-1 ring-foreground/5">
                      <Image
                        src="/victor-beasse.jpg"
                        alt={m.name}
                        width={64}
                        height={64}
                        loading="lazy"
                        sizes="64px"
                        className="size-full object-cover object-center"
                      />
                    </div>
                  ) : (
                    <span className="flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 text-primary ring-1 ring-primary/15">
                      {Icon ? <Icon className="size-6" aria-hidden /> : null}
                    </span>
                  )}

                  <p className="mt-5 font-display text-[17px] font-semibold leading-snug tracking-[-0.01em] text-foreground">
                    {m.name}
                  </p>
                  <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.14em] text-primary/80">
                    {m.role}
                  </p>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">{m.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </ul>

        {/* Chiffres : compteurs declenches a l'arrivee dans l'ecran, une fois. */}
        <Reveal delay={0.1} className="mt-12 sm:mt-14">
          <dl className="grid grid-cols-2 gap-y-8 rounded-[1.35rem] border border-border/60 bg-background/40 px-6 py-8 sm:grid-cols-4 sm:gap-y-0 sm:px-8">
            {facts.map((f, i) => (
              <div
                key={f.label}
                className={
                  'flex flex-col items-center text-center' +
                  (i > 0 ? ' sm:border-l sm:border-border/50' : '')
                }
              >
                <dd className="order-1 font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
                  <CountUp value={f.value} suffix={f.suffix} duration={1.2} />
                </dd>
                <dt className="order-2 mt-1.5 max-w-[11rem] text-[12px] leading-snug text-muted-foreground sm:text-[13px]">
                  {f.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
