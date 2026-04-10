import type { Metadata } from 'next'

import { ReferencementLocalNantesContent } from './referencement-local-content'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Référencement local à Nantes : apparaissez en tête sur Google Maps et le pack local. Optimisation Google Business Profile, avis clients et SEO local pour commerces et PME en Loire-Atlantique.'

export const metadata: Metadata = {
  title: 'Référencement Local à Nantes | Google Maps & SEO Local - VBWEB',
  description,
  alternates: { canonical: '/referencement-local-nantes' },
}

const faqs = [
  { question: 'Comment apparaître dans le pack local Google à Nantes ?', answer: 'Trois leviers : une fiche Google Business Profile optimisée, des avis clients récents et un site web avec un bon maillage local. Je travaille sur les trois en parallèle pour maximiser votre visibilité dans le pack local nantais.' },
  { question: 'Le référencement local fonctionne-t-il pour les commerces nantais ?', answer: 'C\'est même le levier le plus rentable. Un restaurant sur l\'Île de Nantes, un coiffeur à Saint-Herblain, un plombier à Rezé : dès que vos clients vous cherchent "près de moi", le SEO local fait la différence.' },
  { question: 'Combien de temps pour remonter sur Google Maps à Nantes ?', answer: 'Les premiers gains arrivent souvent en 4 à 8 semaines sur des requêtes peu concurrentielles. Pour les secteurs plus disputés (restaurants, avocats), comptez 3 à 6 mois de travail régulier.' },
  { question: 'Quelle différence entre SEO classique et référencement local ?', answer: 'Le SEO classique vise des requêtes larges. Le référencement local cible les recherches géolocalisées : "dentiste Nantes centre", "garage Orvault". L\'objectif est d\'apparaître dans le pack de 3 résultats Google Maps.' },
  { question: 'Vous êtes basé à Rennes, comment travaillez-vous à Nantes ?', answer: 'Rennes et Nantes sont à 1h10 en TGV. Je me déplace régulièrement. Le référencement local se pilote aussi très bien à distance : audit, optimisation, suivi de positions. On fait des points en visio ou en personne selon vos préférences.' },
  { question: 'Comment obtenir plus d\'avis Google pour mon commerce à Nantes ?', answer: 'Je mets en place un système de collecte simple : QR code en boutique, lien dans vos emails, relance après prestation. Des avis authentiques et réguliers qui rassurent vos futurs clients et améliorent votre classement local.' },
  { question: 'Le SEO local couvre-t-il aussi Saint-Herblain et Rezé ?', answer: 'Oui. J\'optimise votre visibilité sur Nantes métropole et toutes les communes : Saint-Herblain, Rezé, Orvault, Carquefou, Saint-Nazaire, La Baule.' },
  { question: 'Quel budget prévoir pour du référencement local à Nantes ?', answer: 'Un accompagnement SEO local sérieux démarre à quelques centaines d\'euros par mois. Le retour sur investissement est souvent rapide pour les commerces qui dépendent de la clientèle de proximité.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Référencement Local à Nantes', description, '/referencement-local-nantes', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Référencement local à Nantes', description, '/referencement-local-nantes', [
      { '@type': 'City', name: 'Nantes' },
      { '@type': 'AdministrativeArea', name: 'Loire-Atlantique' },
      { '@type': 'AdministrativeArea', name: 'Pays de la Loire' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Référencement Local Nantes', path: '/referencement-local-nantes' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function ReferencementLocalNantesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ReferencementLocalNantesContent faqs={faqs} />
    </>
  )
}
