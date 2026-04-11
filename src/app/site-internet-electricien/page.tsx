import type { Metadata } from 'next'

import { SiteInternetElectricienContent } from './site-internet-electricien-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Site internet électricien : création de site web optimisé SEO pour électriciens partout en France. Mise aux normes, tableau électrique, dépannage, domotique, bornes IRVE : plus de demandes via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Électricien | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-electricien' },
}

const faqs = [
  {
    question: 'Pourquoi un électricien a-t-il besoin d\'un site internet ?',
    answer: 'Parce que l\'électricité touche à la sécurité du logement. Les clients vérifient toujours la légitimité de l\'artisan avant d\'appeler : qualifications, avis, photos de chantiers, assurance décennale. Sans site, vous êtes écarté d\'office sur les beaux chantiers. Un site internet électricien bien fait rassure et transforme les visiteurs en demandes de devis concrètes.',
  },
  {
    question: 'Combien coûte un site internet pour électricien ?',
    answer: 'Un site vitrine complet démarre à 1 500 euros. Il inclut les pages prestations (mise aux normes, tableau électrique, dépannage, domotique, bornes de recharge IRVE), la fiche Google optimisée, les photos de chantiers et tout le travail SEO de base. Le devis est clair et sans frais cachés.',
  },
  {
    question: 'Quelles prestations mettre en avant sur le site ?',
    answer: 'Mise aux normes, rénovation électrique complète, installation et changement de tableau électrique, dépannage, éclairage intérieur et extérieur, domotique, installation de bornes de recharge IRVE pour voitures électriques, alarme et vidéosurveillance. Chaque prestation mérite sa page dédiée, car les clients ne cherchent pas un électricien en général, ils cherchent la solution à leur problème précis.',
  },
  {
    question: 'Est-ce intéressant de créer une page dédiée aux bornes IRVE ?',
    answer: 'Absolument. C\'est un marché en pleine croissance et les recherches explosent : "installation borne recharge maison", "électricien IRVE", "borne voiture électrique". Si vous êtes certifié IRVE, une page dédiée peut vous apporter énormément de demandes qualifiées, souvent mieux rémunérées que le dépannage classique.',
  },
  {
    question: 'Mise aux normes et diagnostic électrique, comment les valoriser ?',
    answer: 'Les mises aux normes (NF C 15-100) sont un gros poste pour un électricien. Je crée une page qui explique simplement les obligations légales, les cas où c\'est indispensable (vente, location, travaux), et ce que le client peut attendre concrètement. Les visiteurs comprennent vite pourquoi ils doivent vous appeler.',
  },
  {
    question: 'Je travaille surtout en dépannage urgence, c\'est valorisable ?',
    answer: 'Oui, énormément. Les requêtes "électricien urgence", "panne électrique", "plus de courant", "disjoncteur qui saute" sont très fréquentes. Je crée une page urgence avec numéro direct, zones d\'intervention et promesse de temps de réaction. Sur mobile, le bouton d\'appel est en permanence visible.',
  },
  {
    question: 'Je suis électricien en France hors Bretagne, vous travaillez avec moi ?',
    answer: 'Oui, j\'accompagne des électriciens partout en France, de la métropole aux zones rurales. Le travail se fait à distance, par téléphone, visio et email. La localisation n\'a aucune importance, seule la qualité du site compte et elle ne dépend pas de l\'endroit où on se rencontre.',
  },
  {
    question: 'Comment gérer les certifications et labels sur le site ?',
    answer: 'Les labels Qualifelec, RGE, IRVE, Consuel, assurance décennale : tout ça rassure énormément les particuliers et les entreprises. Je les mets bien en évidence sur la page d\'accueil et sur les pages prestation concernées. C\'est un argument massue face à des concurrents moins crédibles.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Électricien', description, '/site-internet-electricien', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Électricien', description, '/site-internet-electricien'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Électricien', path: '/site-internet-electricien' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetElectricienPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteInternetElectricienContent faqs={faqs} />
    </>
  )
}
