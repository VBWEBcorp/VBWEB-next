import type { Metadata } from 'next'

import { AgenceReferencementBrestContent } from './agence-referencement-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Vous cherchez une agence de référencement à Brest ? Expert SEO indépendant, j\'accompagne les entreprises finistériennes pour gagner en visibilité sur Google. Audit gratuit, 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Agence de Référencement à Brest | Expert SEO - VBWEB',
  description,
  alternates: { canonical: '/agence-referencement-brest' },
}

const faqs = [
  {
    question: 'Qu\'est-ce qu\'une agence de référencement apporte à une entreprise brestoise ?',
    answer: 'Le référencement positionne votre site dans les résultats Google quand vos clients potentiels cherchent vos services à Brest. Un bon référencement, c\'est plus de trafic qualifié, plus de demandes de devis et plus de clients, sans dépendre uniquement du bouche-à-oreille.',
  },
  {
    question: 'Pourquoi choisir un expert indépendant plutôt qu\'une agence de référencement à Brest ?',
    answer: 'Avec un expert indépendant, vous travaillez directement avec la personne qui optimise votre site. Un seul interlocuteur, des décisions rapides, une stratégie cohérente dans le temps. Pas de turnover ni de sous-traitance en cascade.',
  },
  {
    question: 'Quel budget faut-il prévoir pour le référencement d\'un site à Brest ?',
    answer: 'Un accompagnement mensuel démarre à 500 euros par mois. Le budget dépend de votre secteur, de la taille de votre site et du niveau de concurrence. L\'audit gratuit permet de poser les bases et de vous proposer un devis adapté.',
  },
  {
    question: 'En combien de temps peut-on voir des résultats en référencement à Brest ?',
    answer: 'Les premiers résultats concrets apparaissent entre 3 et 6 mois. Sur les requêtes locales brestoises, la concurrence en ligne est parfois moins rude que dans les grandes métropoles, ce qui peut accélérer les choses. Le référencement gagne en puissance avec le temps.',
  },
  {
    question: 'Travaillez-vous à distance avec des entreprises brestoises ?',
    answer: 'Oui, le référencement se gère très bien à distance : analyses, optimisations, reporting. Je me déplace à Brest pour les rendez-vous stratégiques. Et je connais bien le tissu économique du Finistère, ce qui est essentiel pour bâtir une bonne stratégie.',
  },
  {
    question: 'Le référencement est-il pertinent pour les entreprises liées au port de Brest ?',
    answer: 'Absolument. Que ce soit le nautisme, la réparation navale, le commerce portuaire ou les activités touristiques liées à la rade, ces secteurs sont recherchés sur Google. Le référencement local permet de capter cette demande au moment où elle s\'exprime.',
  },
  {
    question: 'Quelle est votre méthode de travail pour référencer un site brestois ?',
    answer: 'Je commence par un audit complet de votre site : aspects techniques, contenu, positionnement par rapport à vos concurrents locaux. Ensuite, je définis un plan d\'action priorisé et les optimisations sont déployées mois après mois avec un suivi transparent.',
  },
  {
    question: 'Pouvez-vous améliorer le référencement d\'un site déjà existant à Brest ?',
    answer: 'C\'est la majorité de mes missions. Je reprends des sites existants, j\'identifie ce qui fonctionne et ce qui freine, puis j\'optimise progressivement. Que votre site ait été créé par une agence ou par vous-même, il y a toujours des leviers d\'amélioration.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Agence de Référencement à Brest', description, '/agence-referencement-brest', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Agence de Référencement à Brest', description, '/agence-referencement-brest', [
      { '@type': 'City', name: 'Brest' },
      { '@type': 'AdministrativeArea', name: 'Finistère' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Agence Référencement Brest', path: '/agence-referencement-brest' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function AgenceReferencementBrestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceReferencementBrestContent faqs={faqs} />
    </>
  )
}
