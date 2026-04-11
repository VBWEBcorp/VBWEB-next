import type { Metadata } from 'next'

import { AgenceDeveloppementWebSaintMaloContent } from './agence-developpement-web-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Agence développement web à Saint-Malo ? Un expert dédié qui conçoit, code et optimise votre site. Contact direct avec le développeur, audit gratuit.'

export const metadata: Metadata = {
  title: 'Agence Développement Web à Saint-Malo | Expert Web - VBWEB',
  description,
  alternates: { canonical: '/agence-developpement-web-saint-malo' },
}

const faqs = [
  {
    question: 'Pourquoi contacter un expert indépendant plutôt qu\'une agence développement web à Saint-Malo ?',
    answer: 'Les entreprises malouines, notamment dans le tourisme, l\'hôtellerie et le commerce, ont souvent besoin d\'un site qui sort du modèle pour refléter leur identité. Un expert indépendant passe directement du brief à la réalisation, sans filtre intermédiaire qui dilue la vision d\'origine. Le résultat est plus personnel et plus proche de ce que vous aviez en tête.',
  },
  {
    question: 'Saint-Malo est-il loin de Rennes pour un projet web ?',
    answer: 'Pas du tout, 1h de voiture par la N137. Je me déplace régulièrement pour des rendez-vous malouins, et le reste du travail se fait en distanciel avec des outils modernes. La distance n\'a pas d\'impact sur la qualité du projet : ce qui compte, c\'est la compétence et la disponibilité.',
  },
  {
    question: 'Quels types de sites livrez-vous à Saint-Malo ?',
    answer: 'Sites vitrines pour hôtels, restaurants, campings, sites e-commerce pour commerces intramuros, plateformes pour artisans, sites pour professions libérales. Le bassin malouin a un tissu économique très orienté tourisme et je connais bien les attentes spécifiques de ce secteur, notamment la saisonnalité et la dimension multilingue.',
  },
  {
    question: 'Un site en plusieurs langues, c\'est possible ?',
    answer: 'Oui, c\'est même courant pour les clients malouins qui accueillent beaucoup de touristes internationaux. Je peux intégrer des versions anglaise, espagnole ou allemande, soit dès la mise en ligne, soit dans une deuxième phase. Le SEO multilingue est un domaine que je maîtrise et qui peut rapporter beaucoup sur une ville touristique.',
  },
  {
    question: 'Combien coûte la création d\'un site à Saint-Malo ?',
    answer: 'Un site vitrine démarre à 2 500 euros. Pour un hôtel avec intégration moteur de réservation, comptez plutôt entre 6 000 et 12 000 euros selon les fonctionnalités. Un e-commerce varie entre 5 000 et 15 000 euros. Chaque devis est détaillé, rien n\'est caché.',
  },
  {
    question: 'Le site sera-t-il visible sur Google pour les recherches touristiques ?',
    answer: 'Oui, c\'est précisément l\'un de mes domaines d\'expertise. Je suis consultant SEO en plus d\'être développeur, donc chaque site est pensé pour capter du trafic dès la mise en ligne. Pour un professionnel du tourisme malouin, être visible sur des requêtes comme "hôtel Saint-Malo" ou "restaurant intramuros" fait toute la différence.',
  },
  {
    question: 'Travaillez-vous aussi à Dinard et dans le pays malouin ?',
    answer: 'Oui, j\'interviens dans tout le bassin malouin : Dinard, Dinan, Cancale, Dol-de-Bretagne, Saint-Lunaire. Les entreprises de la Côte d\'Émeraude ont des enjeux similaires à ceux de Saint-Malo, et je travaille régulièrement dans ces communes.',
  },
  {
    question: 'Quand vaut-il mieux commencer le projet pour être prêt à la saison ?',
    answer: 'Pour un site qui doit être opérationnel avant les grandes vacances, il faut idéalement démarrer en hiver. Un projet lancé en février ou mars est prêt pour avril-mai. Plus on s\'y prend tôt, plus on peut peaufiner les détails, optimiser le SEO et tester sereinement avant l\'afflux touristique.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Agence Développement Web à Saint-Malo', description, '/agence-developpement-web-saint-malo', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Agence Développement Web à Saint-Malo', description, '/agence-developpement-web-saint-malo', [
      { '@type': 'City', name: 'Saint-Malo' },
      { '@type': 'AdministrativeArea', name: 'Ille-et-Vilaine' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Agence Développement Web Saint-Malo', path: '/agence-developpement-web-saint-malo' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function AgenceDeveloppementWebSaintMaloPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceDeveloppementWebSaintMaloContent faqs={faqs} />
    </>
  )
}
