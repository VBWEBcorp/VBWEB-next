import type { Metadata } from 'next'

import { PlombierContent } from './plombier-content'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Création de site internet pour plombier à Rennes. Recevez plus d\'appels grâce à un site professionnel optimisé Google. Devis gratuit, résultats concrets.'

export const metadata: Metadata = {
  title: 'Création Site Internet Plombier Rennes | Plus d\'Appels Clients',
  description,
  alternates: { canonical: '/creation-site-internet-plombier-rennes' },
}

const faqs = [
  {
    question: 'Pourquoi un plombier a-t-il besoin d\'un site internet ?',
    answer: 'Aujourd\'hui, 97% des clients cherchent un plombier sur Google avant d\'appeler. Sans site, vous laissez ces appels à vos concurrents. Un site professionnel vous rend visible 24h/24 et génère des demandes de devis même la nuit.',
  },
  {
    question: 'Combien coûte un site internet pour un plombier ?',
    answer: 'Un site professionnel pour plombier démarre à partir de 1 200€. Il comprend le design, l\'optimisation Google, la fiche Google Business et un formulaire de devis. Vous recevez un devis détaillé sous 24h.',
  },
  {
    question: 'En combien de temps mon site sera-t-il en ligne ?',
    answer: 'Votre site est livré en 2 à 3 semaines. Dès la mise en ligne, il est indexé par Google. Les premiers résultats SEO apparaissent généralement entre 1 et 3 mois.',
  },
  {
    question: 'Mon site sera-t-il visible sur Google Maps ?',
    answer: 'Oui. Je configure et optimise votre fiche Google Business Profile en parallèle du site. Les deux travaillent ensemble pour vous faire apparaître dans le pack local Google Maps quand un client cherche un plombier à Rennes.',
  },
  {
    question: 'Est-ce que je peux modifier le site moi-même ?',
    answer: 'Bien sûr. Chaque site est livré avec un accès simple pour modifier vos textes, photos et tarifs. Et si vous préférez ne pas vous en occuper, je gère la maintenance pour vous.',
  },
  {
    question: 'Que se passe-t-il si je ne suis pas satisfait ?',
    answer: 'Je travaille avec des maquettes validées à chaque étape. Vous voyez le résultat avant la mise en ligne. Si un élément ne vous convient pas, on ajuste ensemble jusqu\'à ce que ce soit parfait.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Création Site Internet Plombier Rennes', description, '/creation-site-internet-plombier-rennes', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Création de site internet pour plombier', description, '/creation-site-internet-plombier-rennes'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Création Site Internet', path: '/creation-site-internet-rennes' },
      { name: 'Plombier Rennes', path: '/creation-site-internet-plombier-rennes' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function PlombierPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PlombierContent faqs={faqs} />
    </>
  )
}
