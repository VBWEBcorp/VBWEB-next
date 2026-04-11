import type { Metadata } from 'next'

import { CreationSiteInternetVannesContent } from './creation-site-internet-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Création site internet Vannes : sites web sur mesure, optimisés SEO dès la conception. Un site qui attire vos clients sur Google, pas juste une vitrine. Devis gratuit.'

export const metadata: Metadata = {
  title: 'Création Site Internet à Vannes | Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/creation-site-internet-vannes' },
}

const faqs = [
  {
    question: 'Combien coûte la création d\'un site internet à Vannes ?',
    answer: 'Un site vitrine professionnel à Vannes démarre autour de 1 800 euros. Le tarif dépend du nombre de pages, des fonctionnalités et du niveau de personnalisation. Je vous remets un devis détaillé sous 24h, sans engagement.',
  },
  {
    question: 'Quels délais pour créer un site web à Vannes ?',
    answer: 'Comptez 3 à 5 semaines pour un site vitrine complet, 6 à 10 semaines pour un projet plus ambitieux avec e-commerce ou espace client. Je vous communique un rétroplanning précis dès le démarrage.',
  },
  {
    question: 'Mon site sera-t-il bien référencé sur Google dès le lancement ?',
    answer: 'Oui, c\'est le cœur de mon approche. Chaque site que je crée à Vannes est pensé SEO dès la maquette : structure des pages, vitesse de chargement, balisage, contenu ciblé sur les recherches locales comme "restaurant Vannes" ou "artisan Morbihan".',
  },
  {
    question: 'Travaillez-vous avec des entreprises du Golfe du Morbihan ?',
    answer: 'Régulièrement. J\'accompagne des commerces, artisans et PME à Vannes, Arradon, Séné, Theix-Noyalo, Sarzeau et Auray. La proximité géographique permet des rendez-vous en personne quand c\'est utile.',
  },
  {
    question: 'Je peux gérer moi-même le contenu de mon site ?',
    answer: 'Absolument. Je livre chaque site avec un back-office clair où vous pouvez modifier textes, photos et articles de blog en autonomie. Une session de formation est incluse pour que vous soyez à l\'aise dès le premier jour.',
  },
  {
    question: 'Faut-il refaire un site existant ou peut-on l\'améliorer ?',
    answer: 'Ça dépend de la base technique. Parfois une refonte partielle suffit, parfois repartir de zéro est plus rentable sur le long terme. Je fais un audit gratuit de votre site actuel et je vous dis franchement ce qui est le plus pertinent.',
  },
  {
    question: 'Le site sera-t-il adapté aux mobiles ?',
    answer: 'Oui, tous les sites que je crée sont conçus mobile-first. La majorité des recherches "Vannes" se font depuis un smartphone, donc l\'expérience mobile est la priorité absolue, pas un détail à régler en fin de projet.',
  },
  {
    question: 'Proposez-vous un accompagnement après la mise en ligne ?',
    answer: 'Oui. Je propose un forfait maintenance mensuel qui inclut sécurité, mises à jour, sauvegardes et petites évolutions. Je peux aussi gérer le SEO en continu pour faire progresser vos positions Google sur Vannes et le Morbihan.',
  },
]

const areaServed = [
  { '@type': 'City', name: 'Vannes' },
  { '@type': 'AdministrativeArea', name: 'Morbihan' },
  { '@type': 'AdministrativeArea', name: 'Bretagne' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd(
      'Création Site Internet à Vannes',
      description,
      '/creation-site-internet-vannes',
      ['h1', '.hero-description', '.faq-answer']
    ),
    serviceJsonLd(
      'Création de site internet à Vannes',
      description,
      '/creation-site-internet-vannes',
      areaServed
    ),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Création Site Internet Vannes', path: '/creation-site-internet-vannes' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function CreationSiteInternetVannesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CreationSiteInternetVannesContent faqs={faqs} />
    </>
  )
}
