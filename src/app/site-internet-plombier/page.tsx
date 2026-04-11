import type { Metadata } from 'next'

import { SiteInternetPlombierContent } from './site-internet-plombier-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Site internet plombier : création de site web optimisé SEO pour plombiers et chauffagistes partout en France. Urgences, dépannage, salle de bain, plus d\'appels grâce à Google.'

export const metadata: Metadata = {
  title: 'Site Internet Plombier | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-plombier' },
}

const faqs = [
  {
    question: 'Pourquoi un plombier doit-il avoir un site internet en 2026 ?',
    answer: 'Parce qu\'une fuite n\'attend pas. Quand un particulier tape "plombier urgence" ou "fuite eau dimanche" sur Google, il appelle le premier qui remonte. Sans site et sans fiche Google optimisée, vous passez à côté de ces appels chauds. Un site internet plombier bien construit, c\'est la garantie d\'être visible au moment où le client est prêt à payer tout de suite.',
  },
  {
    question: 'Combien coûte la création d\'un site internet pour plombier ?',
    answer: 'Un site vitrine complet pour plombier démarre à 1 500 euros. Cela inclut les pages prestation (dépannage, débouchage, salle de bain, chauffe-eau), les photos de vos installations, la fiche Google optimisée et le SEO de base. Le devis est clair, sans surprise.',
  },
  {
    question: 'Quelles pages doit contenir un site de plombier ?',
    answer: 'Au minimum une page par prestation : dépannage urgence, recherche de fuite, débouchage canalisation, installation de salle de bain, chauffe-eau et ballon, plomberie neuve. Plus une page sur votre zone d\'intervention, vos tarifs de déplacement, et une page contact avec numéro cliquable. Chaque page doit pouvoir répondre à une recherche Google précise.',
  },
  {
    question: 'Mes clients cherchent surtout en urgence, comment capter ces appels ?',
    answer: 'Les requêtes "plombier urgence", "plombier dimanche", "plombier nuit" sont prioritaires. Je crée une page dédiée à ces interventions d\'urgence, avec votre numéro en gros, vos zones couvertes et une promesse de temps d\'intervention. Sur mobile, le bouton appel est toujours en bas de l\'écran, pour que le client appuie en un geste.',
  },
  {
    question: 'Je suis plombier en région, pas à Rennes, vous travaillez avec moi ?',
    answer: 'Oui, j\'accompagne des plombiers partout en France. Le travail se fait à distance, par téléphone et par email. Vous m\'envoyez les photos de vos chantiers et j\'adapte le site à votre zone d\'intervention, que vous soyez à Lyon, Bordeaux, Lille ou dans une commune rurale.',
  },
  {
    question: 'Je n\'ai pas le temps de gérer un site, comment ça se passe ?',
    answer: 'Justement, je m\'occupe de tout. Vous me donnez les infos de base (prestations, zone, photos), je construis le site, je rédige les textes, je mets en ligne. Ensuite, je propose un forfait maintenance : vous ne touchez à rien, vous recevez juste les demandes de devis dans votre boîte mail ou sur votre téléphone.',
  },
  {
    question: 'Comment vais-je remonter sur Google pour "plombier + ma ville" ?',
    answer: 'Par trois leviers : une fiche Google Business Profile bien remplie (c\'est souvent 60% du travail pour un plombier), un site avec du contenu réel et localisé, et des avis clients réguliers. Les premiers résultats sur les requêtes locales arrivent entre 2 et 4 mois. Pour les requêtes urgence, la fiche Google prend le relais presque immédiatement.',
  },
  {
    question: 'Est-ce que vous gérez aussi les avis clients ?',
    answer: 'Je mets en place le système pour récolter des avis automatiquement après intervention. SMS ou email avec un lien direct vers votre fiche Google. Plus vous avez d\'avis récents et positifs, plus vous remontez. C\'est ce qui fait basculer le choix du client entre deux plombiers affichés dans les résultats.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Plombier', description, '/site-internet-plombier', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Plombier', description, '/site-internet-plombier'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Plombier', path: '/site-internet-plombier' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetPlombierPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteInternetPlombierContent faqs={faqs} />
    </>
  )
}
