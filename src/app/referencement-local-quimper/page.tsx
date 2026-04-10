import type { Metadata } from 'next'

import { ReferencementLocalQuimperContent } from './referencement-local-content'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Référencement local à Quimper : soyez visible sur Google Maps et le pack local. Optimisation fiche Google, avis clients et SEO local pour artisans, commerces et PME en Cornouaille.'

export const metadata: Metadata = {
  title: 'Référencement Local à Quimper | Google Maps & SEO Local - VBWEB',
  description,
  alternates: { canonical: '/referencement-local-quimper' },
}

const faqs = [
  { question: 'Comment être visible sur Google Maps à Quimper ?', answer: 'Il faut une fiche Google Business Profile complète et à jour, des avis clients réguliers, et un site web optimisé pour les recherches locales quimpéroises. C\'est la combinaison des trois qui vous place dans le pack local.' },
  { question: 'Le référencement local est-il utile pour les artisans en Cornouaille ?', answer: 'C\'est leur meilleur levier. Un faïencier à Quimper, un menuisier à Ergué-Gabéric, un couvreur à Pluguffan : dès qu\'un client tape votre métier + ville, vous devez apparaître. Le SEO local rend ça possible.' },
  { question: 'Combien de temps pour des résultats en SEO local à Quimper ?', answer: 'Les premières améliorations sur Google Maps arrivent en 4 à 8 semaines. Pour les requêtes plus concurrentielles, le travail de fond prend 3 à 6 mois mais les résultats durent.' },
  { question: 'Quelle différence entre référencement local et référencement classique ?', answer: 'Le référencement classique positionne votre site sur des requêtes larges. Le référencement local cible les recherches avec une intention géographique : "boulangerie Quimper centre", "plombier Fouesnant".' },
  { question: 'Comment gérer les avis Google de mon commerce à Quimper ?', answer: 'Je mets en place un processus de collecte d\'avis simple : QR code en boutique, lien par SMS après prestation. Des avis authentiques et fréquents qui améliorent votre réputation et votre classement.' },
  { question: 'Le SEO local couvre-t-il aussi Bénodet et Concarneau ?', answer: 'Oui. J\'optimise votre visibilité sur Quimper et les communes de Cornouaille : Ergué-Gabéric, Pluguffan, Fouesnant, Bénodet, Concarneau, Douarnenez.' },
  { question: 'Faut-il un site web pour le référencement local ?', answer: 'La fiche Google Business suffit pour démarrer, mais un site optimisé avec des pages locales renforce fortement votre positionnement. Les deux se complètent.' },
  { question: 'Quel budget pour du référencement local à Quimper ?', answer: 'Un accompagnement sérieux commence à quelques centaines d\'euros par mois. Pour un commerce de proximité à Quimper, le retour sur investissement est souvent très rapide.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Référencement Local à Quimper', description, '/referencement-local-quimper', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Référencement local à Quimper', description, '/referencement-local-quimper', [
      { '@type': 'City', name: 'Quimper' },
      { '@type': 'AdministrativeArea', name: 'Finistère' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Référencement Local Quimper', path: '/referencement-local-quimper' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function ReferencementLocalQuimperPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ReferencementLocalQuimperContent faqs={faqs} />
    </>
  )
}
