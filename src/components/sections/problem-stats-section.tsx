'use client'

import { TrendingDown, Search, Sparkles } from 'lucide-react'

import { useHomeLang, t } from '@/components/home/lang'
import { AuditButton } from '@/components/ui/audit-button'
import { CountUp } from '@/components/ui/count-up'
import { Reveal } from '@/components/ui/reveal'

function GoogleG({ className = 'size-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-label="Google">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

/** Styles d'animation (CSS scoped, repli prefers-reduced-motion) */
function MockStyles() {
  return (
    <style>{`
      @keyframes vbwebPodium {
        0%, 34%, 100% { background: rgba(78,186,236,0); border-color: rgba(120,130,150,.20); box-shadow: none; }
        12% { background: rgba(78,186,236,.12); border-color: rgba(78,186,236,.5); box-shadow: 0 0 18px -6px rgba(78,186,236,.85); }
      }
      @keyframes vbwebChatUser {
        0% { opacity: 0; transform: translateY(6px); }
        8%, 92% { opacity: 1; transform: none; }
        100% { opacity: 0; }
      }
      @keyframes vbwebChatTyping {
        0%, 14% { opacity: 0; }
        18%, 34% { opacity: 1; }
        40%, 100% { opacity: 0; }
      }
      @keyframes vbwebChatAI {
        0%, 40% { opacity: 0; transform: translateY(6px); }
        48%, 92% { opacity: 1; transform: none; }
        100% { opacity: 0; }
      }
      @keyframes vbwebDot {
        0%, 60%, 100% { opacity: .35; transform: translateY(0); }
        30% { opacity: 1; transform: translateY(-2px); }
      }
      .vbweb-podium { animation: vbwebPodium 3.9s ease-in-out infinite; }
      .vbweb-chat-user { animation: vbwebChatUser 6.5s ease-in-out infinite; }
      .vbweb-chat-typing { animation: vbwebChatTyping 6.5s ease-in-out infinite; }
      .vbweb-chat-ai { animation: vbwebChatAI 6.5s ease-in-out infinite; }
      .vbweb-dot { animation: vbwebDot 1.1s ease-in-out infinite; }
      @media (prefers-reduced-motion: reduce) {
        .vbweb-podium, .vbweb-chat-user, .vbweb-chat-typing, .vbweb-chat-ai, .vbweb-dot { animation: none !important; }
        .vbweb-chat-user, .vbweb-chat-ai { opacity: 1 !important; transform: none !important; }
        .vbweb-chat-typing { opacity: 0 !important; }
        .vbweb-podium { border-color: rgba(78,186,236,.35) !important; }
      }
    `}</style>
  )
}

/** Mini-maquette animée : le top 3 Google (concurrents), votre site relégué très bas */
function GoogleSearchMock() {
  const podium = ['Un concurrent', 'Un concurrent', 'Un concurrent']
  return (
    <div className="rounded-xl border border-border/60 bg-background/50 p-3">
      <div className="flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-3 py-1.5">
        <GoogleG className="size-3.5" />
        <span className="flex-1 truncate text-[12px] text-muted-foreground">votre métier près de moi</span>
        <Search className="size-3.5 text-muted-foreground/50" aria-hidden />
      </div>

      <p className="mt-3 mb-1.5 px-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground/50">
        Les 3 premiers prennent les clients
      </p>

      <div className="space-y-1">
        {podium.map((name, i) => (
          <div
            key={i}
            className="vbweb-podium flex items-center gap-2.5 rounded-lg border px-2.5 py-1.5"
            style={{ animationDelay: `${i * 1.3}s` }}
          >
            <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/15 text-[10px] font-bold text-primary">
              {i + 1}
            </span>
            <span className="text-[11px] font-medium text-foreground/90">{name}</span>
          </div>
        ))}
      </div>

      <div className="my-1 pl-2 text-[13px] leading-none text-muted-foreground/40">⋮</div>

      <div className="flex items-center gap-2.5 px-2.5 py-1 opacity-70">
        <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-muted-foreground/15 text-[10px] font-semibold text-muted-foreground/70">
          9
        </span>
        <span className="text-[11px] text-muted-foreground/60">Vous, un peu plus bas dans la liste</span>
      </div>
    </div>
  )
}

/** Mini-maquette animée : conversation IA qui se crée en direct */
function AiChatMock() {
  return (
    <div className="rounded-xl border border-border/60 bg-background/50 p-3">
      {/* Question utilisateur */}
      <div className="vbweb-chat-user flex justify-end">
        <span className="max-w-[85%] rounded-2xl rounded-br-sm bg-primary/10 px-3 py-1.5 text-[11px] leading-snug text-foreground">
          Quel prestataire me conseilles-tu dans ma zone ?
        </span>
      </div>

      {/* Zone réponse : typing puis message (superposés) */}
      <div className="relative mt-2 min-h-[46px]">
        {/* Indicateur "en train d'écrire" */}
        <div className="vbweb-chat-typing absolute inset-x-0 top-0 flex items-start gap-2">
          <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-border/60 bg-card/70 text-primary">
            <Sparkles className="size-2.5" aria-hidden />
          </span>
          <span className="flex items-center gap-1 rounded-2xl rounded-bl-sm border border-border/60 bg-card/70 px-3 py-2">
            <span className="vbweb-dot size-1.5 rounded-full bg-muted-foreground/70" style={{ animationDelay: '0s' }} />
            <span className="vbweb-dot size-1.5 rounded-full bg-muted-foreground/70" style={{ animationDelay: '.15s' }} />
            <span className="vbweb-dot size-1.5 rounded-full bg-muted-foreground/70" style={{ animationDelay: '.3s' }} />
          </span>
        </div>

        {/* Réponse IA */}
        <div className="vbweb-chat-ai flex items-start gap-2">
          <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-border/60 bg-card/70 text-primary">
            <Sparkles className="size-2.5" aria-hidden />
          </span>
          <span className="rounded-2xl rounded-bl-sm border border-border/60 bg-card/70 px-3 py-1.5 text-[11px] leading-snug text-muted-foreground">
            Je recommande <span className="font-medium text-foreground">un concurrent</span>, très bien noté et souvent cité.
          </span>
        </div>
      </div>
    </div>
  )
}

export function ProblemStatsSection() {
  const { lang } = useHomeLang()
  const stats = [
    {
      icon: TrendingDown,
      numValue: 80,
      prefix: '+',
      suffix: '%',
      label: t.problemStats.stat1Label[lang],
      title: t.problemStats.stat1Title[lang],
      description: t.problemStats.stat1Desc[lang],
      mock: 'google' as const,
    },
    {
      icon: Search,
      numValue: 93,
      prefix: '',
      suffix: '%',
      label: t.problemStats.stat2Label[lang],
      title: t.problemStats.stat2Title[lang],
      description: t.problemStats.stat2Desc[lang],
      mock: 'ai' as const,
    },
  ]
  return (
    <section className="relative overflow-hidden bg-background">
      <MockStyles />
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
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-[11px] font-semibold tracking-[0.24em] text-primary/80 uppercase">
            {t.problemStats.eyebrow[lang]}
          </p>
          <h2 className="mt-5 font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[3rem]">
            {t.problemStats.h2Part1[lang]}{' '}
            <span className="italic text-muted-foreground/80">{t.problemStats.h2Part2[lang]}</span> ?
          </h2>
        </Reveal>

        {/* Cards style framer */}
        <div className="mt-14 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <Reveal
                key={stat.numValue}
                delay={i * 0.1}
                className="group relative "
              >
                {/* Glow border on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-[1.4rem] bg-gradient-to-br from-primary/40 via-primary/0 to-primary/20 opacity-0 blur-[2px] transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-border/60 bg-card/40 p-8 transition-colors duration-500 group-hover:border-primary/30 group-hover:bg-card/60 sm:p-10">

                  {/* Icone discrète en haut à droite */}
                  <div className="absolute right-6 top-6 sm:right-8 sm:top-8">
                    <div className="flex size-10 items-center justify-center rounded-xl border border-border/60 bg-background/40 text-muted-foreground/60 transition-colors duration-500 group-hover:border-primary/30 group-hover:text-primary">
                      <Icon className="size-4" aria-hidden />
                    </div>
                  </div>

                  {/* Big number */}
                  <div className="relative">
                    <CountUp
                      value={stat.numValue}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      className="font-display text-[3rem] font-bold leading-none tracking-[-0.04em] text-foreground sm:text-[3.75rem]"
                    />
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

                  {/* Mini-maquette visuelle */}
                  <div className="mt-6">
                    {stat.mock === 'google' ? <GoogleSearchMock /> : <AiChatMock />}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <AuditButton />
        </Reveal>
      </div>
    </section>
  )
}
