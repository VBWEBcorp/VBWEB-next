'use client'

import { ArrowRight, Check, Download, MessageSquareQuote, Search } from 'lucide-react'
import Link from 'next/link'

import guide from './points.json'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'

interface FaqItem { question: string; answer: string }

export function GuideIaContent({ faqs }: { faqs: FaqItem[] }) {
  return (
    <>
      <Breadcrumb items={[{ label: 'Guide IA' }]} />

      {/* ---------------------------------------------------------- Ouverture */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Guide gratuit</p>
          <h1 className="mt-4 font-display text-3xl leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            {guide.titre}
          </h1>
          <p className="guide-chapeau mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {guide.sousTitre}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="/Guide-VBWEB-12-points-ChatGPT.pdf" download>
                <Download className="mr-2 h-4 w-4" />Télécharger le guide en PDF
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/audit-seo-gratuit">
                Demander mon audit gratuit<ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Écrit par Victor Béasse, VBWEB à Rennes. Mis à jour en octobre 2026.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------- Le test */}
      <section className="border-b border-border/60 bg-muted/30">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl tracking-tight text-foreground sm:text-3xl">
              Commencez par le test. Deux minutes.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Avant de lire les douze points, faites ce que je fais devant chaque nouveau client. Ouvrez ChatGPT,
              la version gratuite suffit, et posez ces questions comme votre client les poserait.
            </p>

            <ul className="mt-6 space-y-3">
              {guide.testPrompts.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-xl border border-border/60 bg-background p-4 text-sm text-foreground"
                >
                  <MessageSquareQuote className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  <span className="font-mono text-[13px] leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-muted-foreground">
              Cliquez ensuite sur les sources affichées sous la réponse. Vous saurez trois choses : quels
              concurrents l&apos;IA recommande à votre place, où elle va chercher ses informations, et ce qui vous
              manque pour apparaître.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- Les 12 points */}
      <section>
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-display text-2xl tracking-tight text-foreground sm:text-3xl">
            Les 12 points, dans l&apos;ordre
          </h2>
          <p className="mt-4 text-muted-foreground">
            Chacun tient en trois lignes : ce que l&apos;IA regarde, comment le vérifier vous-même, et ce que je
            constate le plus souvent sur le terrain.
          </p>

          <ol className="mt-10 space-y-6">
            {guide.points.map((p) => (
              <li key={p.n}>
                <Reveal>
                  <article className="rounded-2xl border border-border/60 bg-background p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                        {p.n}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display text-lg leading-snug text-foreground">{p.titre}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.pourquoi}</p>

                        <div className="mt-4 rounded-xl border-l-2 border-primary bg-muted/40 p-3.5">
                          <p className="text-sm leading-relaxed text-foreground">
                            <span className="font-semibold">Vérifier :</span> {p.verifier}
                          </p>
                        </div>

                        <p className="mt-3 flex items-start gap-2 text-sm italic leading-relaxed text-muted-foreground">
                          <Search className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                          <span>{p.vu}</span>
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------------------------------------------------- Fin */}
      <section className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl tracking-tight text-foreground sm:text-3xl">{guide.fin.titre}</h2>
          <p className="mt-4 text-muted-foreground">{guide.fin.texte}</p>
          <p className="mt-4 text-muted-foreground">{guide.fin.pourquoiCeGuide}</p>

          <div className="mt-8 rounded-2xl border border-border/60 bg-background p-6 sm:p-8">
            <h3 className="font-display text-xl text-foreground">Vous voulez savoir où vous en êtes ?</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Je regarde votre site, votre fiche Google et ce que les IA disent de vous, puis je vous envoie une
              vidéo de cinq minutes avec ce que je ferais à votre place. C&apos;est gratuit et sans engagement.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/audit-seo-gratuit">
                  Demander mon audit<ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/Guide-VBWEB-12-points-ChatGPT.pdf" download>
                  <Download className="mr-2 h-4 w-4" />Garder le guide en PDF
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Questions */}
      <section>
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl tracking-tight text-foreground sm:text-3xl">
            Les questions qu&apos;on me pose
          </h2>
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
