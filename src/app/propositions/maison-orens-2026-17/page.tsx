import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight, CalendarCheck, Check, Star } from 'lucide-react'

import { Reveal } from '@/components/ui/reveal'
import { siteConfig } from '@/lib/seo'

const REF = 'N°2026-17'
const CLIENT = 'Maison Orens'
const CAL_URL = 'https://cal.com/vbweb/30min?overlayCalendar=true'
const REVIEWS_URL = 'https://www.google.com/maps/search/?api=1&query=VBWEB+Acign%C3%A9'

// Page privee : accessible par lien direct uniquement (partage au client),
// hors sitemap, hors navigation, et interdite aux moteurs.
export const metadata: Metadata = {
  title: { absolute: `Proposition SEO et GEO · ${CLIENT} · VBWEB` },
  description: `Proposition de référencement Google et GEO sur-mesure pour ${CLIENT}, orientée réservations de bilans et de cures.`,
  robots: { index: false, follow: false, nocache: true },
  alternates: { canonical: null },
  openGraph: {
    type: 'article',
    title: `Proposition SEO et GEO sur-mesure pour ${CLIENT}`,
    description: 'Stratégie de référencement Google et visibilité IA, orientée réservations de bilans et de cures.',
    images: [{ url: siteConfig.ogImage }],
  },
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string
  eyebrow?: string
  title: string
  children: React.ReactNode
}) {
  return (
    <Reveal as="section" className="scroll-mt-24 border-t border-border/50 pt-10 sm:pt-12">
      <div id={id} className="scroll-mt-24" />
      {eyebrow && (
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/80">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-display text-balance text-xl font-semibold leading-[1.2] tracking-[-0.02em] text-foreground sm:text-2xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
        {children}
      </div>
    </Reveal>
  )
}

function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="pt-2">
      <h3 className="font-display text-[15px] font-semibold leading-snug text-foreground sm:text-base">
        {title}
      </h3>
      <div className="mt-2 space-y-3">{children}</div>
    </div>
  )
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <Check className="mt-[3px] size-3.5 shrink-0 text-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function PriceCard({
  label,
  value,
  note,
  children,
}: {
  label: string
  value: string
  note?: string
  children?: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-primary/25 bg-primary/[0.07] p-4 sm:p-5">
      <p className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/80">
        {label}
      </p>
      <p className="mt-1.5 font-display text-xl font-semibold tracking-[-0.02em] text-foreground sm:text-2xl">
        {value}
      </p>
      {note && <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{note}</p>}
      {children}
    </div>
  )
}

const SOMMAIRE = [
  { href: '#objectifs', label: '1. Compréhension de vos objectifs' },
  { href: '#analyse', label: '2. Analyse approfondie' },
  { href: '#strategie', label: '3. Logique de la stratégie proposée' },
  { href: '#phase-1', label: 'Phase 1 — Optimiser l’existant' },
  { href: '#phase-2', label: 'Phase 2 — Développer la croissance' },
  { href: '#suivi', label: 'Un vrai suivi, pas une prestation invisible' },
  { href: '#conclusion', label: 'Conclusion' },
  { href: '#roi', label: 'Et le retour sur investissement ?' },
]

export default function PropositionMaisonOrensPage() {
  return (
    <div className="relative bg-background">
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

      <article className="relative mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        {/* ── En-tête ── */}
        <header>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/victor.jpg"
                alt="Victor Béasse, fondateur de VBWEB"
                width={48}
                height={48}
                priority
                className="size-11 rounded-full object-cover sm:size-12"
              />
              <div>
                <p className="font-display text-sm font-semibold text-foreground">Victor Béasse</p>
                <p className="text-[12px] text-muted-foreground">VBWEB · vbweb.fr</p>
              </div>
            </div>
            <p className="shrink-0 font-display text-[13px] font-semibold tracking-[0.08em] text-muted-foreground">
              {REF}
            </p>
          </div>

          <p className="mt-8 font-display text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/80">
            Objet du document
          </p>
          <h1 className="mt-3 font-display text-balance text-[26px] font-semibold leading-[1.12] tracking-[-0.03em] text-foreground sm:text-4xl">
            Proposition SEO et GEO sur-mesure pour{' '}
            <span className="text-primary">{CLIENT}</span>
          </h1>
          <div className="mt-4 h-px w-12 bg-primary/60" />

          <p className="mt-5 font-display text-[15px] font-semibold text-foreground">
            Stratégie de référencement Google
          </p>
          <p className="text-[14px] text-muted-foreground">
            Orientée réservations de bilans et de cures
          </p>
        </header>

        {/* ── Sommaire ── */}
        <Reveal className="mt-8 rounded-2xl border border-border/60 bg-card/40 p-4 sm:p-5">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/80">
            Sommaire
          </p>
          <ol className="mt-3 space-y-1.5">
            {SOMMAIRE.map((entry) => (
              <li key={entry.href}>
                <a
                  href={entry.href}
                  className="text-[13px] text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline sm:text-[14px]"
                >
                  {entry.label}
                </a>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="mt-10 space-y-10 sm:mt-12 sm:space-y-12">
          {/* ── Introduction ── */}
          <Section id="introduction" title="Introduction">
            <p>
              Le référencement naturel est un levier stratégique pour {CLIENT} : il ne s’agit pas
              seulement d’augmenter la visibilité du site, mais d’attirer les bonnes personnes,
              celles qui recherchent activement un soin, une solution à un problème précis
              (cellulite, jambes lourdes, relâchement cutané, vergetures) ou un institut de
              confiance près de chez elles, et qui sont prêtes à réserver.
            </p>
            <p>
              Cette proposition est construite à partir de vos objectifs business, de votre zone de
              chalandise (Talmont-Saint-Hilaire, Les Sables-d’Olonne, Jard-sur-Mer, La Roche-sur-Yon
              et le sud-Vendée littoral), de vos typologies de soins et d’une analyse approfondie du
              site et de son environnement local.
            </p>
          </Section>

          {/* ── 1. Objectifs ── */}
          <Section id="objectifs" eyebrow="Partie 1" title="Compréhension de vos objectifs">
            <p>
              Votre priorité business est claire : remplir l’agenda de l’institut avec des
              réservations qualifiées, en particulier sur les bilans cliniques qui ouvrent la porte
              aux cures, votre offre à plus forte valeur.
            </p>
            <p>
              Dans ce contexte, l’enjeu SEO n’est pas de générer du trafic « curieux », mais de
              capter des recherches à intention forte :
            </p>
            <Bullets
              items={[
                'Recherches locales : institut de beauté, cryolipolyse, drainage lymphatique, Pilates reformer + ville',
                'Recherches « problème » : cellulite que faire, jambes lourdes, atténuer les vergetures, raffermir la peau',
                'Recherches « comparatif » : radiofréquence ou cryolipolyse, institut ou médecine esthétique',
                'Recherches de réassurance avant réservation : avis, tarifs, déroulé d’une séance',
              ]}
            />
            <p>
              À cela s’ajoute un enjeu nouveau : le référencement GEO, c’est-à-dire la visibilité
              dans les réponses des intelligences artificielles (ChatGPT, Perplexity, Google AI). De
              plus en plus de personnes posent leurs questions beauté et bien-être directement à une
              IA. Être cité comme référence locale dans ces réponses est un avantage concurrentiel
              que très peu d’instituts travaillent aujourd’hui.
            </p>
          </Section>

          {/* ── 2. Analyse ── */}
          <Section id="analyse" eyebrow="Partie 2" title="Analyse approfondie">
            <p>
              Le site {CLIENT} dispose déjà d’une bonne base : un design soigné, des pages dédiées
              par soin et une structure claire. En revanche, plusieurs freins limitent aujourd’hui
              sa capacité à transformer cette base en visibilité réelle et en réservations.
            </p>

            <Sub title="2.1 Une stratégie de mots-clés à valider par la data">
              <p>
                Le contenu actuel a été construit sans étude des intentions de recherche réelles.
                Certaines pages visent des expressions que personne ne tape dans Google, pendant que
                des requêtes à fort volume et forte intention restent sans réponse. La première
                étape consiste à confronter le site aux vraies données de recherche pour ajuster le
                ciblage de chaque page.
              </p>
            </Sub>

            <Sub title="2.2 Une cohérence de marque à rétablir">
              <p>
                Un point important identifié lors de l’audit : le site s’appelle {CLIENT}, mais
                plusieurs profils externes (plateforme de réservation, réseaux sociaux) sont encore
                au nom de l’ancienne identité. Pour Google, cette incohérence brouille le signal et
                pénalise directement le référencement local. Il faut harmoniser le nom, l’adresse et
                le téléphone partout où l’institut est mentionné.
              </p>
            </Sub>

            <Sub title="2.3 Une autorité de domaine à construire">
              <p>
                Le site est récent et ne dispose pratiquement d’aucun backlink, c’est-à-dire d’aucune
                recommandation d’autres sites vers le vôtre. C’est aujourd’hui le principal frein : à
                contenu égal, Google favorise les sites dont l’autorité est établie. Le netlinking
                représente au moins 50 % du travail de référencement et c’est le levier qui fera
                durablement la différence face aux instituts concurrents du secteur.
              </p>
            </Sub>

            <Sub title="2.4 Un référencement local sous-exploité">
              <p>
                La fiche d’établissement Google est le premier point de contact pour une clientèle
                locale : c’est elle qui apparaît sur la carte, avec les avis, avant même le site.
                Elle doit être optimisée, alimentée régulièrement et alignée avec le site. Les avis
                clients, aujourd’hui peu nombreux, doivent également faire l’objet d’une stratégie de
                collecte.
              </p>
            </Sub>

            <Sub title="2.5 Un contenu à faire vivre">
              <p>
                Le référencement n’est pas un état, c’est un travail continu. Les articles de conseil
                publiés chaque mois permettent de se positionner progressivement sur des dizaines de
                nouvelles requêtes, d’alimenter les réponses des IA et de démontrer l’expertise de
                l’institut.
              </p>
            </Sub>
          </Section>

          {/* ── 3. Stratégie ── */}
          <Section id="strategie" eyebrow="Partie 3" title="Logique de la stratégie proposée">
            <p>
              La stratégie est organisée en deux temps pour créer une progression durable, cohérente
              et sécurisée, orientée réservations.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/60 bg-card/40 p-4">
                <p className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/80">
                  Phase 1
                </p>
                <p className="mt-1.5 font-display text-[15px] font-semibold text-foreground">
                  Optimiser l’existant
                </p>
                <p className="mt-1 text-[13px] leading-relaxed">
                  Fondations : data + contenu + cohérence locale
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/40 p-4">
                <p className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/80">
                  Phase 2
                </p>
                <p className="mt-1.5 font-display text-[15px] font-semibold text-foreground">
                  Développer la croissance
                </p>
                <p className="mt-1 text-[13px] leading-relaxed">
                  Contenu + autorité + référencement local et GEO
                </p>
              </div>
            </div>
          </Section>

          {/* ── Phase 1 ── */}
          <Section id="phase-1" eyebrow="Phase 1 · One shot" title="Optimisation complète de l’existant">
            <Sub title="A. Étude des intentions de recherche">
              <p>
                Analyse des vraies données de recherche sur votre secteur et votre zone géographique,
                pour construire la stratégie sur des requêtes réellement tapées par vos futures
                clientes.
              </p>
            </Sub>

            <Sub title="B. Optimisation des contenus">
              <Bullets
                items={[
                  'Ajustement des pages existantes sur les intentions validées par la data',
                  'Optimisation des balises Title et Meta Description',
                  'Structuration des titres (H1/H2/H3)',
                  'Renforcement du maillage interne vers la réservation',
                  'Optimisation des appels à l’action',
                ]}
              />
            </Sub>

            <Sub title="C. Cohérence de marque et référencement local">
              <Bullets
                items={[
                  'Harmonisation du nom, de l’adresse et du téléphone sur l’ensemble des plateformes',
                  'Optimisation complète de la fiche d’établissement Google',
                  'Inscription sur les annuaires locaux pertinents',
                ]}
              />
            </Sub>

            <Sub title="D. Vérifications techniques">
              <Bullets
                items={[
                  'Optimisation des performances mobiles',
                  'Vérifications d’indexation et corrections techniques',
                ]}
              />
            </Sub>

            <PriceCard
              label="Tarif Phase 1"
              value="Entre 750 et 900 € HT"
              note="Le tarif exact sera confirmé après un échange ensemble, certains points restant à déterminer avec vous (accès aux plateformes, périmètre exact de l’harmonisation de marque)."
            />
          </Section>

          {/* ── Phase 2 ── */}
          <Section
            id="phase-2"
            eyebrow="Phase 2 · Croissance continue"
            title="Accompagnement SEO et GEO mensuel"
          >
            <Sub title="A. Création de contenu">
              <p>
                Publication chaque mois d’articles de conseil optimisés, construits sur des
                intentions de recherche réelles : chaque article répond à une question concrète que
                se posent vos futures clientes, installe votre expertise et guide vers la
                réservation d’un bilan.
              </p>
            </Sub>

            <Sub title="B. Netlinking">
              <p>
                Acquisition progressive et diversifiée de backlinks pour renforcer l’autorité du
                domaine, sécuriser les positions acquises et se positionner sur un volume croissant
                de requêtes.
              </p>
            </Sub>

            <Sub title="C. Référencement local et GEO">
              <p>
                Animation de la fiche d’établissement Google, stratégie de collecte d’avis, et
                optimisations dédiées à la visibilité dans les réponses des intelligences
                artificielles.
              </p>
            </Sub>

            <PriceCard
              label="Tarification mensuelle"
              value="Entre 500 et 800 € HT / mois"
              note="Selon le volume d’articles et de backlinks mensuels, à définir ensemble en fonction de vos objectifs et de votre rythme."
            >
              <p className="mt-3 border-t border-primary/20 pt-3 text-[13px] text-muted-foreground">
                Engagement minimum : 12 mois
              </p>
            </PriceCard>
          </Section>

          {/* ── Suivi ── */}
          <Section id="suivi" title="Un vrai suivi, pas une prestation invisible">
            <p>
              Le reproche le plus fréquent fait aux agences SEO est l’opacité : on paie chaque mois
              sans savoir ce qui est fait. Mon fonctionnement est à l’opposé.
            </p>
            <p>
              Chaque client dispose d’une application dédiée avec un chat direct : vous pouvez me
              poser une question à tout moment, sans passer par des échanges de mails interminables.
            </p>
            <p>
              Chaque mois, vous recevez une synthèse claire : ce qui a été fait, l’évolution de vos
              positions sur Google, et les ajustements prévus pour le mois suivant. Le référencement
              est un travail d’ajustement continu : l’algorithme évolue, la stratégie évolue avec
              lui.
            </p>
            <p className="font-display font-semibold text-foreground">
              Vous savez toujours où vous en êtes, et pourquoi.
            </p>
          </Section>

          {/* ── Conclusion ── */}
          <Section id="conclusion" title="Conclusion">
            <p>Cette stratégie a été conçue spécifiquement pour {CLIENT}, en tenant compte :</p>
            <Bullets
              items={[
                'De votre zone de chalandise et de la dimension locale de votre activité',
                'De la valeur de vos cures, qui rend chaque nouvelle cliente particulièrement rentable',
                'De la nécessité de construire l’autorité d’un site récent',
                'De l’opportunité GEO, encore inexploitée par vos concurrents',
              ]}
            />
            <p className="font-display font-semibold text-foreground">
              Il ne s’agit pas d’un pack SEO standard, mais d’un accompagnement structuré et orienté
              performance.
            </p>
          </Section>

          {/* ── ROI ── */}
          <Section id="roi" title="Et le retour sur investissement ?">
            <p>
              L’objectif de cette stratégie est clair : générer des réservations qualifiées via le
              référencement naturel. Pour donner un ordre d’idée concret : une seule cure engagée
              représente entre 320 et 900 €. Quelques nouvelles clientes par mois issues du
              référencement suffisent à rentabiliser l’investissement, et chaque cliente satisfaite
              revient, recommande et laisse un avis qui renforce encore votre visibilité.
            </p>
            <p>
              Contrairement à la publicité qui s’arrête dès que le budget est coupé, le travail
              effectué en référencement reste acquis : les optimisations, les contenus créés,
              l’autorité construite, tout cela appartient définitivement au site et continue de
              produire des effets dans le temps.
            </p>
            <p>
              Le SEO est un investissement progressif. Une stratégie bien construite et appliquée
              avec rigueur maximise les chances de résultats.
            </p>
          </Section>
        </div>

        {/* ── CTA final ── */}
        <Reveal className="mt-12 rounded-[1.35rem] border border-border/60 bg-card/40 p-6 text-center sm:mt-14 sm:p-8">
          <h2 className="font-display text-balance text-xl font-semibold text-foreground sm:text-2xl">
            Faisons davantage connaissance
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[14px] leading-relaxed text-muted-foreground">
            30 minutes pour affiner le périmètre, répondre à vos questions et confirmer le tarif
            exact.
          </p>

          <div className="mt-6 flex flex-col items-center gap-3">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-display text-[15px] font-semibold text-primary-foreground transition-colors hover:bg-primary/85 sm:w-auto"
            >
              <CalendarCheck className="size-4" />
              Prendre rendez-vous
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href={REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              <span className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3 fill-amber-400 text-amber-400" />
                ))}
              </span>
              La confiance de mes clients
            </a>
          </div>
        </Reveal>

        {/* ── Pied de document ── */}
        <footer className="mt-10 flex flex-col items-center gap-1 border-t border-border/50 pt-6 text-center">
          <p className="font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground/60">
            Document confidentiel · {CLIENT}
          </p>
          <p className="text-[12px] text-muted-foreground/60">
            {REF} · VBWEB · {siteConfig.email}
          </p>
        </footer>
      </article>
    </div>
  )
}
