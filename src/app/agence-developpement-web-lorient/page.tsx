import type { Metadata } from 'next'

import { AgenceDeveloppementWebLorientContent } from './agence-developpement-web-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Agence développement web à Lorient ? Une alternative directe : un expert dédié qui conçoit et code votre site. Sans intermédiaires, sans sur-facturation.'

export const metadata: Metadata = {
  title: 'Agence Développement Web à Lorient | Expert Web - VBWEB',
  description,
  alternates: { canonical: '/agence-developpement-web-lorient' },
}

const faqs = [
  {
    question: 'Agence développement web à Lorient ou expert indépendant : quelle est la vraie différence ?',
    answer: 'Une agence, c\'est une équipe et une structure. Un expert indépendant, c\'est une personne avec les mêmes compétences techniques mais sans les frais généraux à répartir. Sur un site vitrine ou un e-commerce classique, la différence de résultat est nulle, la différence de coût peut être significative et la réactivité est bien meilleure côté indépendant.',
  },
  {
    question: 'Vous êtes basé à Rennes, comment ça se passe pour un client à Lorient ?',
    answer: 'Lorient est à une heure de Rennes en train. Je peux me déplacer pour les rendez-vous importants et pour le reste, on travaille en visio avec partage d\'écran. Je connais bien le bassin lorientais pour y intervenir régulièrement, notamment sur les secteurs du nautisme, de l\'agroalimentaire et du commerce de centre-ville.',
  },
  {
    question: 'Quels sont les délais pour un site internet livré à Lorient ?',
    answer: 'Un site vitrine est généralement livré en 4 à 8 semaines après validation du cahier des charges. Un e-commerce ou une application plus complexe demande 2 à 4 mois. La clé est d\'avoir un projet cadré au départ : plus le brief est clair, plus le développement est rapide.',
  },
  {
    question: 'Quel budget pour un site web de qualité à Lorient ?',
    answer: 'Un site vitrine professionnel démarre à 2 500 euros. Un e-commerce varie entre 5 000 et 15 000 euros selon les fonctionnalités souhaitées. Le devis détaille chaque poste pour que vous sachiez exactement à quoi correspond l\'investissement. Pas de forfait flou, pas de surprise en cours de route.',
  },
  {
    question: 'Quelle technologie utilisez-vous pour développer les sites ?',
    answer: 'Cela dépend du projet. WordPress pour les sites éditoriaux classiques, Next.js et React quand la performance et la flexibilité sont prioritaires. Le choix technique se fait en fonction de vos besoins réels, pas d\'une préférence personnelle. Chaque outil a ses forces, je choisis le plus adapté.',
  },
  {
    question: 'Le site sera-t-il visible sur Google après sa mise en ligne ?',
    answer: 'Oui, c\'est même intégré d\'office. Je suis consultant SEO en plus d\'être développeur, donc tout est pensé pour Google dès le départ : architecture, performance, balises, contenu. Mes clients, comme EPICU qui est passé de 100 à 5 000 visites mensuelles, en sont la preuve concrète.',
  },
  {
    question: 'Et après la mise en ligne, comment se passe la suite ?',
    answer: 'Je propose un suivi mensuel pour la maintenance, les mises à jour et les petites évolutions. Vous pouvez aussi choisir de tout gérer en interne via l\'interface d\'administration. Vous restez libre : le site est 100% à vous, rien n\'est verrouillé. C\'est un vrai transfert de propriété.',
  },
  {
    question: 'Travaillez-vous aussi à Lanester, Hennebont et sur la côte ?',
    answer: 'Oui, toute la région lorientaise : Lanester, Hennebont, Ploemeur, Larmor-Plage, Quéven. Les entreprises de la côte comme de l\'arrière-pays ont toutes besoin d\'un site efficace, et le travail à distance fonctionne très bien pour tous ces secteurs.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Agence Développement Web à Lorient', description, '/agence-developpement-web-lorient', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Agence Développement Web à Lorient', description, '/agence-developpement-web-lorient', [
      { '@type': 'City', name: 'Lorient' },
      { '@type': 'AdministrativeArea', name: 'Morbihan' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Agence Développement Web Lorient', path: '/agence-developpement-web-lorient' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function AgenceDeveloppementWebLorientPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceDeveloppementWebLorientContent faqs={faqs} />
    </>
  )
}
