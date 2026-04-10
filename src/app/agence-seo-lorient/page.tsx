import type { Metadata } from 'next'

import { AgenceSeoLorientContent } from './agence-seo-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Besoin d\'une agence SEO à Lorient ? Un expert SEO dédié vous accompagne pour améliorer votre visibilité sur Google dans le pays de Lorient. Audit gratuit, résultats mesurables.'

export const metadata: Metadata = {
  title: 'Agence SEO à Lorient | Expert Référencement Naturel - VBWEB',
  description,
  alternates: { canonical: '/agence-seo-lorient' },
}

const faqs = [
  {
    question: 'Quelle différence entre un expert SEO et une agence SEO à Lorient ?',
    answer: 'L\'expert SEO indépendant travaille directement sur votre site, sans passer par un commercial ou un chef de projet intermédiaire. Vous gagnez en réactivité, en transparence et souvent en budget. La relation est plus simple et le suivi plus personnalisé.',
  },
  {
    question: 'Quel est le tarif d\'un accompagnement SEO à Lorient ?',
    answer: 'Les accompagnements démarrent à 500 euros par mois. Le tarif exact dépend de votre secteur d\'activité, de la concurrence sur vos mots-clés et de l\'ampleur du travail à réaliser. Je vous remets un devis clair après l\'audit gratuit.',
  },
  {
    question: 'Le SEO est-il adapté aux entreprises maritimes de Lorient ?',
    answer: 'Tout à fait. Le secteur maritime, la pêche, le nautisme et le tourisme côtier génèrent des volumes de recherche importants sur Google. Positionner votre entreprise sur les bonnes requêtes locales vous connecte directement à vos futurs clients.',
  },
  {
    question: 'Quels résultats concrets puis-je attendre du SEO ?',
    answer: 'Des exemples récents : un site passé de 100 à 5 000 visites mensuelles, un autre qui génère 500 appels par mois grâce au référencement local. Chaque projet est unique, mais les résultats sont toujours mesurables et documentés.',
  },
  {
    question: 'Comment se déroule la collaboration au fil des mois ?',
    answer: 'Après l\'audit initial, je déploie les optimisations mois après mois. Vous avez accès à un espace de suivi avec vos indicateurs clés. Un point mensuel permet de faire le bilan et d\'orienter les prochaines actions.',
  },
  {
    question: 'En combien de temps les premiers résultats apparaissent-ils ?',
    answer: 'Généralement entre 3 et 6 mois. Le SEO est un travail progressif : les positions s\'améliorent graduellement et le trafic augmente de façon durable. Sur un marché comme Lorient, les premières avancées peuvent arriver plus vite qu\'en grande métropole.',
  },
  {
    question: 'Intervenez-vous aussi sur Lanester, Hennebont et les alentours ?',
    answer: 'Oui, j\'accompagne des entreprises sur tout le pays de Lorient : Lanester, Hennebont, Ploemeur, Larmor-Plage, Quéven. Le SEO local couvre votre zone de chalandise complète.',
  },
  {
    question: 'Proposez-vous un audit SEO gratuit pour mon site ?',
    answer: 'Oui, l\'audit initial est gratuit et sans engagement. Il couvre la technique, le contenu et la popularité de votre site. Vous repartez avec un diagnostic clair et des pistes d\'amélioration concrètes.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Agence SEO à Lorient', description, '/agence-seo-lorient', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Agence SEO à Lorient', description, '/agence-seo-lorient', [
      { '@type': 'City', name: 'Lorient' },
      { '@type': 'AdministrativeArea', name: 'Morbihan' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Agence SEO Lorient', path: '/agence-seo-lorient' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function AgenceSeoLorientPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceSeoLorientContent faqs={faqs} />
    </>
  )
}
