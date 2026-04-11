import type { Metadata } from 'next'

import { CreationSiteInternetSaintMaloContent } from './creation-site-internet-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Création site internet Saint-Malo : sites web sur mesure, rapides et optimisés SEO. Je conçois des sites qui attirent vrais clients et touristes via Google. Devis gratuit.'

export const metadata: Metadata = {
  title: 'Création Site Internet à Saint-Malo | Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/creation-site-internet-saint-malo' },
}

const faqs = [
  {
    question: 'Quel est le tarif pour un site internet à Saint-Malo ?',
    answer: 'Un site vitrine démarre autour de 1 800 euros. Pour les hôtels, restaurants et commerces qui veulent intégrer la réservation en ligne, on monte plutôt à 4 000 ou 6 000 euros. Le devis est toujours gratuit et précis.',
  },
  {
    question: 'Combien de temps prend la création d\'un site web ?',
    answer: 'Entre 3 et 5 semaines pour un site vitrine malouin classique. Un peu plus si le projet intègre une partie réservation, un catalogue produits ou un espace membre. Je vous donne un planning dès la première réunion.',
  },
  {
    question: 'Mon activité dépend beaucoup du tourisme, comment l\'intégrer au site ?',
    answer: 'C\'est même un axe stratégique à Saint-Malo. J\'optimise le site pour capter les recherches de touristes en amont de leur séjour : "hôtel Saint-Malo vue sur mer", "restaurant Saint-Malo intra-muros". Ces visiteurs représentent une part énorme du trafic local.',
  },
  {
    question: 'Intervenez-vous aussi sur Dinard et Dinan ?',
    answer: 'Oui, régulièrement. J\'accompagne des entreprises sur tout le secteur : Saint-Malo, Dinard, Dinan, Cancale, Dol-de-Bretagne et Saint-Lunaire. La proximité rend les rendez-vous faciles quand c\'est nécessaire.',
  },
  {
    question: 'Que se passe-t-il si j\'ai déjà un site qui ne fonctionne pas ?',
    answer: 'Je fais un audit gratuit de votre site actuel. Si une refonte partielle suffit, on gagne du temps et du budget. Si la base est trop fragile, repartir proprement est souvent plus rentable sur le long terme. Je vous dis franchement ce qui est le mieux.',
  },
  {
    question: 'Est-ce que je pourrai ajouter des photos moi-même après ?',
    answer: 'Oui. Chaque site est livré avec un back-office simple. Vous ajoutez photos, actualités, menus ou tarifs sans toucher au code. Une session de formation est comprise dans la prestation pour vous mettre à l\'aise dès le départ.',
  },
  {
    question: 'Le site sera-t-il compatible avec les systèmes de réservation ?',
    answer: 'Oui, je peux intégrer la majorité des plateformes : Booking, The Fork, TockReservation, Calendly ou des solutions sur mesure. L\'objectif est que la réservation se fasse en un ou deux clics, sans friction pour votre client.',
  },
  {
    question: 'Le site sera-t-il bien trouvé par les touristes avant leur venue ?',
    answer: 'C\'est tout l\'intérêt d\'intégrer le SEO dès la création. Le site est structuré pour sortir sur les recherches touristiques longue traîne : "que faire à Saint-Malo", "meilleur restaurant bord de mer Saint-Malo". Ce trafic se transforme en réservations.',
  },
]

const areaServed = [
  { '@type': 'City', name: 'Saint-Malo' },
  { '@type': 'AdministrativeArea', name: 'Ille-et-Vilaine' },
  { '@type': 'AdministrativeArea', name: 'Bretagne' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd(
      'Création Site Internet à Saint-Malo',
      description,
      '/creation-site-internet-saint-malo',
      ['h1', '.hero-description', '.faq-answer']
    ),
    serviceJsonLd(
      'Création de site internet à Saint-Malo',
      description,
      '/creation-site-internet-saint-malo',
      areaServed
    ),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Création Site Internet Saint-Malo', path: '/creation-site-internet-saint-malo' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function CreationSiteInternetSaintMaloPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CreationSiteInternetSaintMaloContent faqs={faqs} />
    </>
  )
}
