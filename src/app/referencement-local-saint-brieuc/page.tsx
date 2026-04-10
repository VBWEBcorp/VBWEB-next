import type { Metadata } from 'next'

import { ReferencementLocalSaintBrieucContent } from './referencement-local-content'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Référencement local à Saint-Brieuc : apparaissez sur Google Maps et le pack local. Optimisation Google Business Profile, avis clients et SEO local pour commerces et PME des Côtes-d\'Armor.'

export const metadata: Metadata = {
  title: 'Référencement Local à Saint-Brieuc | Google Maps & SEO Local - VBWEB',
  description,
  alternates: { canonical: '/referencement-local-saint-brieuc' },
}

const faqs = [
  { question: 'Comment remonter dans le pack local Google à Saint-Brieuc ?', answer: 'Trois piliers : une fiche Google Business Profile bien renseignée, des avis clients authentiques, et un site web avec du contenu local optimisé. Je travaille sur ces trois axes pour vous placer dans le top 3 Maps.' },
  { question: 'Le référencement local fonctionne-t-il pour les professionnels briochins ?', answer: 'C\'est le levier le plus efficace pour les commerces de proximité. Garage, restaurant, ostéopathe, boulangerie : si vos clients sont dans les Côtes-d\'Armor, le SEO local les amène directement chez vous.' },
  { question: 'En combien de temps je serai visible sur Google Maps à Saint-Brieuc ?', answer: 'Les premières améliorations sont souvent visibles en 4 à 8 semaines. Pour les requêtes concurrentielles comme "restaurant Saint-Brieuc", comptez 3 à 6 mois pour un positionnement solide.' },
  { question: 'Quelle différence entre SEO et référencement local ?', answer: 'Le SEO classique vise des requêtes nationales. Le référencement local cible les recherches géolocalisées : "coiffeur Saint-Brieuc", "plombier Plérin". L\'objectif est le pack de 3 résultats Maps.' },
  { question: 'Comment avoir plus d\'avis Google pour mon commerce à Saint-Brieuc ?', answer: 'Je mets en place un système simple : QR code en caisse, lien dans vos emails de confirmation, relance SMS. L\'important c\'est la régularité, pas le volume.' },
  { question: 'Le SEO local couvre-t-il aussi Plérin et Lamballe ?', answer: 'Oui. J\'optimise votre visibilité sur Saint-Brieuc et toute l\'agglomération : Plérin, Langueux, Trégueux, Lamballe, Ploufragan, et jusqu\'à Paimpol.' },
  { question: 'Faut-il un site web en plus de la fiche Google ?', answer: 'La fiche Google Business suffit pour démarrer. Mais un site avec des pages locales optimisées multiplie votre visibilité et renforce votre crédibilité auprès de Google.' },
  { question: 'Quel budget pour du référencement local à Saint-Brieuc ?', answer: 'Un accompagnement SEO local démarre à quelques centaines d\'euros par mois. Pour un commerce qui vit de sa clientèle locale, le retour sur investissement est rapide.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Référencement Local à Saint-Brieuc', description, '/referencement-local-saint-brieuc', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Référencement local à Saint-Brieuc', description, '/referencement-local-saint-brieuc', [
      { '@type': 'City', name: 'Saint-Brieuc' },
      { '@type': 'AdministrativeArea', name: "Côtes-d'Armor" },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Référencement Local Saint-Brieuc', path: '/referencement-local-saint-brieuc' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function ReferencementLocalSaintBrieucPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ReferencementLocalSaintBrieucContent faqs={faqs} />
    </>
  )
}
