'use client'

import { ArrowRight, Check, CheckCircle2, CircleAlert } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { CallbackForm } from '@/components/ui/callback-form'

interface FaqItem { question: string; answer: string }

type Resultat = { citee: boolean; noms: string[]; question: string; sources: string[] }
type Demande = { metier: string; ville: string; entreprise: string; site: string; email: string }

// La recherche web de ChatGPT prend 10 à 30 secondes ; au-delà d'une minute, on abandonne.
const DELAI_MAX = 60000

const ETAPES = [
  'Nous posons la question à ChatGPT…',
  'ChatGPT cherche sur le web, comme pour un client…',
  'ChatGPT compare les entreprises qu’il trouve…',
  'Lecture de sa réponse…',
]

export function TestIaContent({ titre, faqs }: { titre: string; faqs: FaqItem[] }) {
  const [etat, setEtat] = useState<'idle' | 'attente' | 'fini' | 'erreur'>('idle')
  const [erreur, setErreur] = useState('')
  const [etape, setEtape] = useState(0)
  const [demande, setDemande] = useState<Demande | null>(null)
  const [resultat, setResultat] = useState<Resultat | null>(null)
  const resultatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (etat !== 'attente') return
    const id = window.setInterval(() => setEtape((e) => Math.min(e + 1, ETAPES.length - 1)), 9000)
    return () => window.clearInterval(id)
  }, [etat])

  useEffect(() => {
    if (etat === 'fini' || etat === 'attente') resultatRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [etat])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const d: Demande = {
      metier: String(data.get('metier') ?? '').trim(),
      ville: String(data.get('ville') ?? '').trim(),
      entreprise: String(data.get('entreprise') ?? '').trim(),
      site: String(data.get('site') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
    }
    setDemande(d)
    setResultat(null)
    setErreur('')
    setEtape(0)
    setEtat('attente')
    try {
      const res = await fetch('/api/test-ia', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...d, company: data.get('company') }),
        signal: AbortSignal.timeout(DELAI_MAX),
      })
      const x = (await res.json().catch(() => ({}))) as Partial<Resultat> & { error?: string }
      if (!res.ok) throw new Error(x.error || '')
      setResultat({ citee: Boolean(x.citee), noms: x.noms ?? [], question: x.question ?? '', sources: x.sources ?? [] })
      setEtat('fini')
    } catch (err) {
      setEtat('erreur')
      setErreur(
        err instanceof Error && err.message && err.name !== 'TimeoutError' && err.name !== 'AbortError'
          ? err.message
          : 'Le test n’a pas pu aboutir. Réessayez dans quelques minutes.',
      )
    }
  }

  const champ =
    'h-12 w-full min-w-0 rounded-xl border border-foreground/30 bg-card px-3.5 text-base text-foreground placeholder:text-muted-foreground outline-none transition hover:border-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/30'

  return (
    <>
      <Breadcrumb items={[{ label: 'Test IA' }]} />

      {/* ---------------------------------------------------------- Ouverture et test */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Test gratuit</p>
          <h1 className="mt-4 font-display text-3xl leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            {titre}
          </h1>
          <p className="test-chapeau mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Vos clients demandent de plus en plus à ChatGPT quel professionnel choisir. Nous lui posons la question à
            leur place : vous voyez si votre entreprise fait partie des noms qu’il donne, et qui il recommande à votre
            place.
          </p>

          <form onSubmit={onSubmit} className="mt-8 rounded-2xl border border-border/60 bg-muted/30 p-5 sm:p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="ti-metier" className="mb-1.5 block text-sm font-medium text-foreground">Votre métier</label>
                <input id="ti-metier" name="metier" required minLength={3} maxLength={60} placeholder="ex. plombier" className={champ} />
              </div>
              <div>
                <label htmlFor="ti-ville" className="mb-1.5 block text-sm font-medium text-foreground">Votre ville</label>
                <input id="ti-ville" name="ville" required minLength={2} maxLength={60} placeholder="ex. Rennes" autoComplete="address-level2" className={champ} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="ti-entreprise" className="mb-1.5 block text-sm font-medium text-foreground">Le nom de votre entreprise</label>
                <input id="ti-entreprise" name="entreprise" required minLength={2} maxLength={100} autoComplete="organization" className={champ} />
              </div>
              <div>
                <label htmlFor="ti-site" className="mb-1.5 block text-sm font-medium text-foreground">
                  Votre site <span className="font-normal text-muted-foreground">(facultatif)</span>
                </label>
                <input id="ti-site" name="site" maxLength={200} placeholder="votresite.fr" autoComplete="url" className={champ} />
              </div>
              <div>
                <label htmlFor="ti-email" className="mb-1.5 block text-sm font-medium text-foreground">
                  Email <span className="font-normal text-muted-foreground">(pour recevoir le résultat)</span>
                </label>
                <input id="ti-email" name="email" type="email" maxLength={200} autoComplete="email" className={champ} />
              </div>
              {/* Pot de miel : invisible pour un humain, rempli par les robots */}
              <input name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={etat === 'attente'}
              className="group mt-5 w-full bg-primary text-primary-foreground hover:bg-primary/85 sm:w-auto"
            >
              {etat === 'attente' ? 'Test en cours…' : 'Lancer le test'}
              {etat === 'attente' ? null : <ArrowRight className="transition-transform group-hover:translate-x-0.5" />}
            </Button>
            <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">
              Gratuit, sans inscription, 10 à 30 secondes. Le résultat nous est aussi transmis, pour pouvoir vous
              conseiller si vous le souhaitez ; votre email sert seulement à vous l’envoyer.
            </p>
          </form>

          <div ref={resultatRef} aria-live="polite" className="scroll-mt-24">
            {etat === 'attente' && (
              <div className="mt-6 rounded-2xl border border-border/60 bg-background p-5 sm:p-6">
                <p className="text-sm font-medium text-foreground">{ETAPES[etape]}</p>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div className="test-progression h-full origin-left rounded-full bg-primary" />
                </div>
              </div>
            )}

            {etat === 'erreur' && (
              <p className="mt-6 rounded-xl border border-red-400/40 bg-red-400/10 p-4 text-sm text-red-300" role="alert">
                {erreur}
              </p>
            )}

            {etat === 'fini' && resultat && demande && (
              <div className="mt-6 space-y-6">
                <div
                  className={`rounded-2xl border p-5 sm:p-6 ${resultat.citee ? 'border-primary/50 bg-primary/10' : 'border-amber-400/50 bg-amber-400/10'}`}
                >
                  <p className="flex items-start gap-3 font-display text-xl leading-snug text-foreground sm:text-2xl">
                    {resultat.citee ? (
                      <CheckCircle2 className="mt-1 size-6 shrink-0 text-primary" aria-hidden />
                    ) : (
                      <CircleAlert className="mt-1 size-6 shrink-0 text-amber-400" aria-hidden />
                    )}
                    <span>
                      {resultat.citee
                        ? `ChatGPT cite ${demande.entreprise}.`
                        : `ChatGPT ne cite pas ${demande.entreprise}.`}
                    </span>
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">Question posée : « {resultat.question} »</p>

                  {resultat.noms.length > 0 && (
                    <>
                      <p className="mt-5 text-sm font-medium text-foreground">Les noms qu’il donne :</p>
                      <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-foreground">
                        {resultat.noms.map((n) => (
                          <li key={n}>{n}</li>
                        ))}
                      </ol>
                    </>
                  )}

                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {resultat.citee
                      ? 'Vous êtes dans la réponse aujourd’hui. La réponse change d’un jour à l’autre et d’une question à l’autre : reste à y rester, et à apparaître aussi sur les autres questions de vos clients.'
                      : 'ChatGPT recommande les entreprises dont il trouve des informations claires et concordantes sur le web : site, fiche Google, annuaires, avis. C’est précisément ce que nous travaillons avec nos clients.'}
                  </p>
                </div>

                <div className="rounded-2xl border border-border/60 bg-background p-5 sm:p-6">
                  <h2 className="font-display text-xl text-foreground">Faire le point avec nous</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Laissez votre numéro : nous vous rappelons sous 24 heures pour vous dire ce qui manque à{' '}
                    {demande.entreprise} pour être recommandée.
                  </p>
                  <div className="mt-5">
                    <CallbackForm
                      lang="fr"
                      defaults={{ entreprise: demande.entreprise, website: demande.site, email: demande.email }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Lire le résultat */}
      <section className="border-b border-border/60 bg-muted/30">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl tracking-tight text-foreground sm:text-3xl">Ce que le résultat veut dire</h2>
          <p className="mt-4 text-muted-foreground">
            Un client qui demande à ChatGPT ne voit que les cinq ou six noms qu’il donne. Les autres n’existent pas pour
            lui. Trois éléments décident de qui en fait partie :
          </p>
          <ul className="mt-6 space-y-3">
            {[
              'Un site qui répond clairement aux questions de vos clients, avec votre métier et votre ville.',
              'Une fiche Google complète et des coordonnées identiques partout sur le web.',
              'Des mentions de votre entreprise ailleurs que sur votre site : annuaires, articles, avis.',
            ].map((p) => (
              <li key={p} className="flex items-start gap-3 rounded-xl border border-border/60 bg-background p-4 text-sm text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-muted-foreground">
            Le détail des douze points que ChatGPT vérifie est dans notre guide gratuit.
          </p>
          <Button asChild variant="outline" size="lg" className="mt-4">
            <Link href="/guide-ia">
              Lire le guide<ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ---------------------------------------------------------- Questions */}
      <section>
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl tracking-tight text-foreground sm:text-3xl">Questions fréquentes</h2>
          <dl className="mt-8 space-y-6">
            {faqs.map((f) => (
              <div key={f.question} className="border-b border-border/60 pb-6 last:border-0">
                <dt className="flex items-start gap-2 font-medium text-foreground">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  {f.question}
                </dt>
                <dd className="faq-answer mt-2 pl-6 text-sm leading-relaxed text-muted-foreground">{f.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}
