import type { Metadata } from 'next'

import { ArtisanContent } from './artisan-content'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Création de site internet pour artisan à Rennes : plombier, couvreur, électricien, maçon, peintre. Un site professionnel qui vous apporte des chantiers. Devis gratuit.'

export const metadata: Metadata = {
  title: 'Création Site Internet Artisan Rennes | Plombier, Couvreur, Électricien',
  description,
  alternates: { canonical: '/creation-site-internet-artisan-rennes' },
}

const faqs = [
  {
    question: 'Un artisan a-t-il vraiment besoin d\'un site internet en 2025 ?',
    answer: 'Oui. 72% des particuliers cherchent un artisan sur Google avant de demander autour d\'eux. Si vous n\'avez pas de site, ces clients vont chez votre concurrent qui en a un. C\'est aussi simple que ça.',
  },
  {
    question: 'Je suis artisan solo, est-ce adapté à mon budget ?',
    answer: 'Absolument. Les sites pour artisans démarrent à 1 200€. C\'est un investissement qui se rentabilise dès les premiers chantiers décrochés grâce au site. Pas d\'abonnement caché.',
  },
  {
    question: 'Quels types d\'artisans accompagnez-vous ?',
    answer: 'Tous les métiers du bâtiment et de l\'artisanat : plomberie, couverture, électricité, maçonnerie, peinture, menuiserie, carrelage, paysagisme, serrurerie et bien d\'autres.',
  },
  {
    question: 'Comment le site va-t-il m\'apporter des clients ?',
    answer: 'Votre site est optimisé pour apparaître quand un client cherche votre métier + votre ville sur Google. Combiné à une fiche Google Business, vous recevez des appels et des demandes de devis en continu.',
  },
  {
    question: 'Faut-il que je fournisse les textes et les photos ?',
    answer: 'Non. Je rédige tous les textes optimisés SEO pour votre métier. Pour les photos, des photos de vos chantiers sont un vrai plus, mais je peux aussi travailler avec des visuels professionnels.',
  },
  {
    question: 'Le site sera-t-il visible sur Google Maps ?',
    answer: 'Oui. Je crée ou optimise votre fiche Google Business Profile en parallèle. Site + fiche Google Maps forment un duo redoutable pour capter les recherches locales.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Création Site Internet Artisan Rennes', description, '/creation-site-internet-artisan-rennes', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Création de site internet pour artisan', description, '/creation-site-internet-artisan-rennes'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Création Site Internet', path: '/creation-site-internet-rennes' },
      { name: 'Artisan Rennes', path: '/creation-site-internet-artisan-rennes' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function ArtisanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArtisanContent faqs={faqs} />
    </>
  )
}
