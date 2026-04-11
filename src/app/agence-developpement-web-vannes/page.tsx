import type { Metadata } from 'next'

import { AgenceDeveloppementWebVannesContent } from './agence-developpement-web-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Agence développement web à Vannes ? Un expert dédié qui conçoit et code votre site, sans intermédiaire. Relation directe, devis clair, audit gratuit.'

export const metadata: Metadata = {
  title: 'Agence Développement Web à Vannes | Expert Web - VBWEB',
  description,
  alternates: { canonical: '/agence-developpement-web-vannes' },
}

const faqs = [
  {
    question: 'Pourquoi chercher une agence développement web à Vannes quand on peut avoir un expert en direct ?',
    answer: 'Beaucoup d\'entreprises vannetaises cherchent d\'abord une agence parce que c\'est le réflexe. Mais pour un site vitrine, un e-commerce ou une application métier, un expert indépendant fait exactement le même travail sans la lourdeur administrative. Vous avez la compétence, la réactivité et souvent un meilleur rapport qualité-prix.',
  },
  {
    question: 'Êtes-vous vraiment disponible pour un projet à Vannes depuis Rennes ?',
    answer: 'Oui, complètement. Vannes est à 1h15 de Rennes par la N24. Je me déplace pour les rendez-vous qui le justifient et le reste du travail se fait en visio et par messagerie. De nombreux clients du Morbihan m\'ont choisi précisément parce que la proximité culturelle et géographique compte, sans être à 10 minutes.',
  },
  {
    question: 'Quels types de projets web avez-vous déjà livrés dans le Morbihan ?',
    answer: 'Sites vitrines pour professions libérales, e-commerces pour commerces du port, sites pour restaurants et hôtels du Golfe, plateformes pour artisans. Le Morbihan est un terrain varié : tourisme, nautisme, artisanat, commerce. Chaque secteur demande une approche différente et j\'adapte mes propositions à votre réalité.',
  },
  {
    question: 'Combien coûte un site internet professionnel à Vannes ?',
    answer: 'Un site vitrine démarre à 2 500 euros, un e-commerce entre 5 000 et 15 000 euros selon les fonctionnalités. Le budget dépend surtout de la complexité et du nombre de pages. Je fournis un devis détaillé avec chaque poste clairement identifié, sans surprise à la fin.',
  },
  {
    question: 'Quelle est la différence avec une agence vannetaise classique ?',
    answer: 'Une agence locale vous offre la proximité géographique et une équipe. Moi, je vous offre la proximité avec l\'expert qui code réellement votre site. Pas de junior en apprentissage sur votre projet, pas de rotation d\'équipe. La contrepartie : je ne prends que quelques projets en parallèle pour garantir la qualité.',
  },
  {
    question: 'Mon site doit être prêt pour la saison touristique du Golfe, c\'est faisable ?',
    answer: 'Oui, à condition de s\'y prendre à temps. Pour un site vitrine avant la saison d\'été, il faut compter 6 à 8 semaines. Pour un site de réservation plus complexe, prévoir 3 à 4 mois. Si vous me contactez avant l\'hiver, on a le temps de bien faire les choses avant les beaux jours.',
  },
  {
    question: 'Le site sera-t-il bien référencé sur Google pour attirer les clients du Morbihan ?',
    answer: 'C\'est même le cœur de ma valeur ajoutée. Je suis consultant SEO avant d\'être développeur. Chaque site est pensé pour performer sur Google dès sa mise en ligne : structure optimisée, contenu pertinent pour les recherches locales, balises techniques impeccables. Le référencement n\'est pas une option ajoutée après coup.',
  },
  {
    question: 'Intervenez-vous aussi sur la presqu\'île et autour du Golfe ?',
    answer: 'Oui, je travaille pour des clients à Arradon, Séné, Theix-Noyalo, Sarzeau, et jusqu\'à Auray. Le Morbihan a des zones très touristiques et d\'autres plus résidentielles, chaque secteur a ses enjeux propres. Je connais bien les particularités de la zone.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Agence Développement Web à Vannes', description, '/agence-developpement-web-vannes', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Agence Développement Web à Vannes', description, '/agence-developpement-web-vannes', [
      { '@type': 'City', name: 'Vannes' },
      { '@type': 'AdministrativeArea', name: 'Morbihan' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Agence Développement Web Vannes', path: '/agence-developpement-web-vannes' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function AgenceDeveloppementWebVannesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceDeveloppementWebVannesContent faqs={faqs} />
    </>
  )
}
