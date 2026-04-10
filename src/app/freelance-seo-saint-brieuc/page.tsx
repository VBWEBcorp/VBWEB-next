import type { Metadata } from 'next'

import { FreelanceSeoSaintBrieucContent } from './freelance-seo-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Freelance SEO à Saint-Brieuc : j\'améliore votre visibilité sur Google dans les Côtes-d\'Armor. Audit gratuit, stratégie locale sur mesure. 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Freelance SEO à Saint-Brieuc | Référencement Naturel - VBWEB',
  description,
  alternates: { canonical: '/freelance-seo-saint-brieuc' },
}

const faqs = [
  {
    question: 'Pourquoi faire appel à un freelance SEO pour mon entreprise à Saint-Brieuc ?',
    answer: 'Saint-Brieuc est la préfecture des Côtes-d\'Armor, avec un bassin économique dynamique entre agroalimentaire, tourisme et commerce. Un freelance SEO vous aide à capter les recherches Google de vos clients locaux, que vous soyez artisan au Légué, commerçant aux Champs ou restaurateur en centre-ville.',
  },
  {
    question: 'Vous êtes basé à Rennes, comment travaillez-vous avec des clients briochins ?',
    answer: 'Rennes est à 1h de Saint-Brieuc par la voie express. Le SEO se fait principalement à distance : analyses, optimisations, reporting. Mais je me déplace à Saint-Brieuc pour les rendez-vous en personne quand c\'est utile. Je connais bien le tissu économique costarmoricain, ce qui fait la différence dans la stratégie.',
  },
  {
    question: 'Combien coûte un accompagnement SEO à Saint-Brieuc ?',
    answer: 'Un accompagnement mensuel démarre à 500 euros par mois. Le tarif dépend de la taille de votre site et de la concurrence sur vos mots-clés. Je propose un audit gratuit pour évaluer vos besoins avant tout engagement.',
  },
  {
    question: 'Le SEO est-il pertinent pour les entreprises agroalimentaires des Côtes-d\'Armor ?',
    answer: 'Oui, et pas seulement en B2C. Les sous-traitants, fournisseurs et recruteurs du secteur agroalimentaire recherchent aussi sur Google. Que vous soyez dans la filière porcine autour de Lamballe ou dans la transformation à Saint-Brieuc, le SEO vous rend visible auprès de vos partenaires et clients.',
  },
  {
    question: 'Quels types d\'entreprises accompagnez-vous à Saint-Brieuc ?',
    answer: 'J\'accompagne des profils variés : commerces du centre-ville, restaurants, hôtels de la Baie, artisans du bâtiment, professions libérales, PME industrielles. Chaque projet est différent, mais l\'objectif reste le même : plus de visibilité sur Google, plus de clients.',
  },
  {
    question: 'En combien de temps vais-je voir des résultats à Saint-Brieuc ?',
    answer: 'Comptez entre 3 et 6 mois pour les premiers résultats concrets. Sur des requêtes locales comme "plombier Saint-Brieuc" ou "restaurant Baie de Saint-Brieuc", ça peut aller plus vite car la concurrence est souvent moins forte que dans les grandes métropoles. Le SEO reste un travail de fond qui s\'accélère avec le temps.',
  },
  {
    question: 'Est-ce que le SEO local fonctionne bien pour le tourisme autour de la Baie de Saint-Brieuc ?',
    answer: 'C\'est même l\'un des secteurs où le SEO local a le plus d\'impact. Les touristes recherchent "hébergement Baie de Saint-Brieuc", "restaurant fruits de mer Saint-Brieuc" ou "sortie coquilles Saint-Jacques" avant de réserver. Si votre site apparaît en premier, c\'est vous qui captez la réservation.',
  },
  {
    question: 'Travaillez-vous aussi avec des entreprises en dehors de Saint-Brieuc dans les Côtes-d\'Armor ?',
    answer: 'Oui, j\'accompagne des entreprises à Plérin, Langueux, Trégueux, Lamballe, Ploufragan, Paimpol et dans tout le département. Je travaille aussi avec des clients à Rennes, Saint-Malo et dans toute la Bretagne. La majorité du travail se fait à distance, avec des points réguliers en visio ou en personne.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Freelance SEO à Saint-Brieuc', description, '/freelance-seo-saint-brieuc', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Freelance SEO à Saint-Brieuc', description, '/freelance-seo-saint-brieuc', [
      { '@type': 'City', name: 'Saint-Brieuc' },
      { '@type': 'AdministrativeArea', name: "Côtes-d'Armor" },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Freelance SEO Saint-Brieuc', path: '/freelance-seo-saint-brieuc' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function FreelanceSeoSaintBrieucPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FreelanceSeoSaintBrieucContent faqs={faqs} />
    </>
  )
}
