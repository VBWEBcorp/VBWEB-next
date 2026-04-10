import type { Metadata } from 'next'

import { ReferencementNaturelLorientContent } from './referencement-naturel-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Référencement naturel à Lorient : boostez votre visibilité Google et attirez de nouveaux clients dans le Morbihan. Audit gratuit, résultats mesurables. 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Référencement Naturel à Lorient | Expert SEO - VBWEB',
  description,
  alternates: { canonical: '/referencement-naturel-lorient' },
}

const faqs = [
  {
    question: 'Comment le référencement naturel peut aider mon entreprise à Lorient ?',
    answer: 'Le référencement naturel positionne votre site dans les premiers résultats Google quand vos clients potentiels cherchent vos services. Pour une entreprise lorientaise, c\'est la différence entre être visible sur internet ou laisser vos concurrents capter tous les appels.',
  },
  {
    question: 'Le référencement naturel fonctionne-t-il pour tous les secteurs à Lorient ?',
    answer: 'Oui, du moment que vos clients vous cherchent sur Google. Que vous soyez dans le nautisme, la restauration, les services à la personne ou le bâtiment à Lorient, le référencement naturel s\'adapte à votre secteur et à vos mots-clés.',
  },
  {
    question: 'Combien de temps pour apparaître en première page Google depuis Lorient ?',
    answer: 'Entre 3 et 6 mois pour les premières positions. Les requêtes locales comme "serrurier Lorient" ou "restaurant Lorient port" sont souvent moins concurrentielles que des requêtes nationales, ce qui peut accélérer les résultats.',
  },
  {
    question: 'Quel budget prévoir pour le référencement naturel à Lorient ?',
    answer: 'Un accompagnement mensuel démarre à 500 euros par mois. Le tarif dépend de votre secteur et du nombre de mots-clés à travailler. Je réalise un audit gratuit avant tout engagement pour vous donner une vision claire de ce qui est nécessaire.',
  },
  {
    question: 'Le référencement naturel, c\'est quoi exactement ?',
    answer: 'C\'est le travail qui permet à votre site d\'être trouvé sur Google sans payer de publicité. Quand un Lorientais tape "plombier Lorient" et que votre site apparaît dans les premiers résultats, c\'est grâce au référencement naturel. Ça repose sur la technique du site, son contenu et sa notoriété en ligne.',
  },
  {
    question: 'Pourquoi choisir un consultant plutôt qu\'une agence pour le référencement naturel ?',
    answer: 'Avec un consultant, vous travaillez avec la même personne du début à la fin. Pas de commercial, pas de chargé de compte qui change. Le suivi est plus réactif, la stratégie plus cohérente, et les tarifs souvent plus accessibles qu\'en agence.',
  },
  {
    question: 'Le référencement naturel peut-il aider les entreprises du port de Lorient ?',
    answer: 'Les activités liées au port, au nautisme et à la pêche ont des recherches spécifiques sur Google. Le référencement naturel permet de capter cette demande locale, que ce soit pour des chantiers navals, des shipchandlers ou des services portuaires.',
  },
  {
    question: 'Accompagnez-vous aussi des entreprises autour de Lorient ?',
    answer: 'J\'accompagne des entreprises à Lanester, Hennebont, Ploemeur, Larmor-Plage, Quéven et dans tout le bassin lorientais. Je travaille aussi avec des clients à Vannes, Quimper et Rennes. La majorité des échanges se fait à distance, avec des rendez-vous en personne quand c\'est utile.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Référencement Naturel à Lorient', description, '/referencement-naturel-lorient', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Référencement Naturel à Lorient', description, '/referencement-naturel-lorient', [
      { '@type': 'City', name: 'Lorient' },
      { '@type': 'AdministrativeArea', name: 'Morbihan' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Référencement Naturel Lorient', path: '/referencement-naturel-lorient' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function ReferencementNaturelLorientPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReferencementNaturelLorientContent faqs={faqs} />
    </>
  )
}
