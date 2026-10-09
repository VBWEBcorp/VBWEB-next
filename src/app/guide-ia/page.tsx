import type { Metadata } from 'next'

import { GuideIaContent } from './guide-ia-content'
import guide from './points.json'
import { breadcrumbJsonLd, faqJsonLd, webPageJsonLd } from '@/components/seo/json-ld'
import { siteConfig } from '@/lib/seo'

const description =
  "Les 12 points que ChatGPT vérifie avant de recommander une entreprise. Le guide gratuit de Victor Béasse (VBWEB, Rennes) : chaque point expliqué simplement, avec la vérification à faire vous-même en une minute."

export const metadata: Metadata = {
  title: 'Être recommandé par ChatGPT : les 12 points à vérifier',
  description,
  alternates: { canonical: '/guide-ia' },
  openGraph: {
    title: 'Les 12 points que ChatGPT vérifie avant de recommander une entreprise',
    description,
    url: `${siteConfig.url}/guide-ia`,
    type: 'article',
    images: [{ url: `${siteConfig.url}/og-guide-ia.png`, width: 1200, height: 630, alt: 'Guide VBWEB : les 12 points que ChatGPT vérifie' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Les 12 points que ChatGPT vérifie avant de recommander une entreprise',
    description,
    images: [`${siteConfig.url}/og-guide-ia.png`],
  },
}

// Les questions que l'on se pose en lisant ce guide : posées ici pour que les
// moteurs et les IA puissent les reprendre telles quelles.
const faqs = [
  {
    question: 'Comment savoir si ChatGPT recommande mon entreprise ?',
    answer:
      "Ouvrez ChatGPT, même la version gratuite, et demandez-lui le meilleur professionnel de votre métier dans votre ville, puis qui il conseille pour le besoin typique de vos clients. Cliquez sur les sources affichées sous la réponse : vous verrez quels concurrents sont cités et où l'IA est allée chercher ses informations.",
  },
  {
    question: "Pourquoi mon entreprise n'apparaît pas dans les réponses de ChatGPT ?",
    answer:
      "Dans la très grande majorité des cas, ce n'est pas une question de budget mais de détails : des pages qui ne répondent à aucune question précise, des coordonnées différentes d'un site à l'autre, une fiche Google figée, aucune mention ailleurs que sur votre propre site, ou des robots d'IA bloqués sans que vous le sachiez.",
  },
  {
    question: 'Faut-il payer un outil pour vérifier ces 12 points ?',
    answer:
      "Non. Les douze vérifications de ce guide se font avec ChatGPT, une recherche Google, votre fiche d'établissement et le test gratuit des résultats enrichis de Google. Aucun abonnement n'est nécessaire.",
  },
  {
    question: "Qu'est-ce qui bloque le plus souvent la visibilité dans les IA ?",
    answer:
      "Les robots des IA (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot) bloqués par le fichier robots.txt ou par le pare-feu du site, et les informations de contact différentes entre le site, la fiche Google et les annuaires.",
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd(guide.titre, description, '/guide-ia', ['h1', '.guide-chapeau']),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Guide IA', path: '/guide-ia' },
    ]),
    faqJsonLd(faqs),
    {
      '@type': 'HowTo',
      name: guide.titre,
      description,
      totalTime: 'PT60M',
      step: guide.points.map((p) => ({
        '@type': 'HowToStep',
        position: p.n,
        name: p.titre,
        text: `${p.pourquoi} Vérification : ${p.verifier}`,
      })),
    },
  ],
}

export default function GuideIaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GuideIaContent faqs={faqs} />
    </>
  )
}
