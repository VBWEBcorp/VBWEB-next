import type { Metadata } from 'next'

import { ReferencementNaturelBrestContent } from './referencement-naturel-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Référencement naturel à Brest : gagnez en visibilité sur Google et développez votre clientèle dans le Finistère. Audit gratuit, stratégie personnalisée. 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Référencement Naturel à Brest | Expert SEO - VBWEB',
  description,
  alternates: { canonical: '/referencement-naturel-brest' },
}

const faqs = [
  {
    question: 'Pourquoi investir dans le référencement naturel quand on est une entreprise à Brest ?',
    answer: 'Brest est la deuxième ville de Bretagne, avec un bassin économique dynamique et une vraie concurrence en ligne. Le référencement naturel vous permet d\'apparaître dans les premiers résultats Google quand vos futurs clients cherchent vos services. C\'est le canal d\'acquisition le plus rentable sur le long terme.',
  },
  {
    question: 'En quoi consiste concrètement une prestation de référencement naturel ?',
    answer: 'Je commence par analyser votre site et votre positionnement actuel sur Google. Ensuite, je travaille sur trois axes : la technique (vitesse, structure du site), le contenu (pages optimisées avec les bons mots-clés) et la notoriété (liens de qualité vers votre site). Chaque mois, vous suivez vos progrès dans un tableau de bord.',
  },
  {
    question: 'Combien de temps avant de remonter sur Google avec le référencement naturel à Brest ?',
    answer: 'Les premiers résultats apparaissent entre 3 et 6 mois. Sur des recherches locales comme "plombier Brest" ou "avocat Finistère", c\'est souvent plus rapide. La progression est continue : chaque mois renforce la suivante.',
  },
  {
    question: 'Le référencement naturel est-il rentable pour une PME brestoise ?',
    answer: 'Oui, et c\'est souvent le meilleur investissement marketing pour une PME. Contrairement à la publicité Google où chaque clic a un coût, le référencement naturel vous apporte du trafic qualifié sans payer à la visite. Un accompagnement démarre à 500 euros par mois.',
  },
  {
    question: 'Je suis artisan à Brest, le référencement naturel peut m\'aider ?',
    answer: 'C\'est même l\'un des profils qui en bénéficie le plus. Quand quelqu\'un cherche "menuisier Brest" ou "électricien Guipavas" sur Google, il a un besoin immédiat. Le référencement naturel vous place devant ces personnes au moment où elles sont prêtes à vous contacter.',
  },
  {
    question: 'Quelle est la différence entre référencement naturel et référencement payant ?',
    answer: 'Le référencement payant (Google Ads), vous louez votre visibilité : quand le budget s\'arrête, vous disparaissez. Le référencement naturel, vous construisez votre visibilité : les résultats durent et se renforcent avec le temps. Les deux peuvent se combiner, mais le naturel offre un meilleur retour sur investissement.',
  },
  {
    question: 'Comment travaillez-vous avec des entreprises à Brest depuis Rennes ?',
    answer: 'Le référencement naturel se fait essentiellement à distance : analyse de données, optimisation du site, suivi des positions. On échange par visio ou téléphone, et je me déplace à Brest pour les rendez-vous importants. Rennes-Brest, c\'est 2h30 de route, ça reste la Bretagne.',
  },
  {
    question: 'Mon site est tout neuf, est-ce que le référencement naturel va marcher quand même ?',
    answer: 'Un site récent a moins d\'ancienneté aux yeux de Google, mais c\'est aussi une opportunité : on peut construire les fondations correctement dès le départ. La structure, les mots-clés, le maillage interne... Bien fait dès le début, votre site progressera plus vite qu\'un site ancien mal optimisé.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Référencement Naturel à Brest', description, '/referencement-naturel-brest', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Référencement Naturel à Brest', description, '/referencement-naturel-brest', [
      { '@type': 'City', name: 'Brest' },
      { '@type': 'AdministrativeArea', name: 'Finistère' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Référencement Naturel Brest', path: '/referencement-naturel-brest' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function ReferencementNaturelBrestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReferencementNaturelBrestContent faqs={faqs} />
    </>
  )
}
