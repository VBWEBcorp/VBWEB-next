import type { Metadata } from 'next'

import { SiteInternetPaysagisteContent } from './site-internet-paysagiste-content'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Création de site internet paysagiste partout en France. Un site qui capte les demandes de création de jardin, entretien et terrasse bois quand elles explosent au printemps.'

export const metadata: Metadata = {
  title: 'Site Internet Paysagiste | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-paysagiste' },
}

const faqs = [
  {
    question: 'Pourquoi un paysagiste a-t-il besoin d\'un site internet en 2026 ?',
    answer: 'Parce que votre activité est saisonnière. En février, les gens commencent déjà à penser à leur jardin pour le printemps et ils tapent des requêtes comme "paysagiste + ville" sur Google. Sans site, vous passez à côté de ce pic de demandes qui conditionne tout le carnet de commandes de la saison.',
  },
  {
    question: 'Faut-il un site pour les clients particuliers ou pour les entreprises ?',
    answer: 'Les deux, mais le site doit être pensé différemment. Pour les particuliers, on met en avant la création de jardin, la terrasse bois, les aménagements paysagers. Pour les collectivités et entreprises, on parle entretien d\'espaces verts et contrats annuels. Je structure le site pour parler aux deux publics sans diluer le message.',
  },
  {
    question: 'Comment gérer la saisonnalité sur le site d\'un paysagiste ?',
    answer: 'On ne la subit pas, on l\'anticipe. Le site contient des pages optimisées pour chaque saison : création de jardin au printemps, entretien et arrosage en été, taille et élagage en automne, préparation et protection en hiver. Résultat : des demandes toute l\'année, avec un pic encore plus marqué à la bonne période.',
  },
  {
    question: 'Les photos sont-elles aussi importantes que pour un peintre ?',
    answer: 'Encore plus. Un jardin bien aménagé se vend d\'abord avec les yeux. Je mets en place une galerie classée par type de prestation : création de jardin, terrasse bois, allée, bassin, piscine, élagage. Des photos prises à différentes saisons prouvent que votre travail tient dans le temps.',
  },
  {
    question: 'Combien coûte un site internet pour un paysagiste ?',
    answer: 'Un site professionnel pour paysagiste démarre autour de 1 200€. Il inclut le design, la galerie de réalisations, le formulaire de demande de devis, l\'optimisation SEO et la mise en place de votre fiche Google Business. Vous recevez un devis détaillé sous 24h.',
  },
  {
    question: 'Est-ce que le site peut m\'aider à proposer des contrats d\'entretien annuels ?',
    answer: 'Oui. Une page dédiée à l\'entretien annuel avec un formulaire simple permet de transformer les demandes ponctuelles en contrats récurrents. C\'est le chiffre d\'affaires récurrent qui sécurise votre activité pendant les mois creux. On met en avant la tranquillité pour le client et la régularité des passages.',
  },
  {
    question: 'Vous travaillez avec des paysagistes partout en France ?',
    answer: 'Oui. Je suis basé à Rennes mais j\'accompagne des artisans paysagistes partout en France, des Alpes à l\'Occitanie. Tout se gère à distance : visio pour le brief, envoi des photos par lien, validation des maquettes en ligne. Vous continuez à travailler sur vos chantiers pendant que je construis votre site.',
  },
  {
    question: 'Et pour Google Maps, comment ça se passe ?',
    answer: 'Je configure et optimise votre fiche Google Business Profile en même temps que le site. L\'objectif est d\'apparaître dans le pack local Google Maps quand un client cherche "paysagiste près de chez moi". Les deux travaillent ensemble et se renforcent mutuellement.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Paysagiste', description, '/site-internet-paysagiste', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Création de site internet pour paysagiste', description, '/site-internet-paysagiste'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Artisan', path: '/site-internet-artisan' },
      { name: 'Paysagiste', path: '/site-internet-paysagiste' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetPaysagistePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteInternetPaysagisteContent faqs={faqs} />
    </>
  )
}
