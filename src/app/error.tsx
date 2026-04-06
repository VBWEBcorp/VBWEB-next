'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="relative min-h-[70vh] flex items-center justify-center bg-background px-4">
      <div aria-hidden className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-red-500/[0.04] blur-[140px]" />

      <div className="relative z-10 max-w-md text-center">
        <p className="font-display text-5xl font-bold text-red-400">Erreur</p>
        <h1 className="mt-4 font-display text-xl font-bold text-foreground sm:text-2xl">
          Quelque chose s&apos;est mal passe
        </h1>
        <p className="mt-3 text-sm text-muted-foreground/60">
          Une erreur inattendue est survenue. Reessayez ou revenez a l&apos;accueil.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={reset}
            className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-primary/85"
          >
            Reessayer
          </button>
          <a
            href="/"
            className="rounded-xl border border-border px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
          >
            Retour a l&apos;accueil
          </a>
        </div>
      </div>
    </div>
  )
}
