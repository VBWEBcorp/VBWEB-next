import type { Metadata } from 'next'

import { DeveloppementWebLorientContent } from './developpement-web-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Développement web à Lorient : sites Next.js, React et applications sur mesure. Victor Béasse code pour les entreprises du Morbihan sud avec performance et SEO.'

export const metadata: Metadata = {
  title: 'Développement Web à Lorient | Sites & Applications - VBWEB',
  description,
  alternates: { canonical: '/developpement-web-lorient' },
}

const faqs = [
  {
    question: 'Pourquoi choisir un développeur web qui intervient à Lorient ?',
    answer: 'Parce qu\'à distance tout est plus compliqué. Un développeur qui vient parfois sur place comprend mieux vos enjeux, les spécificités du tissu économique lorientais, et fluidifie les échanges. La majorité du travail se fait en ligne, mais les rendez-vous physiques comptent.',
  },
  {
    question: 'Quel budget prévoir pour un site web à Lorient ?',
    answer: 'Un site vitrine correct démarre à 2 500 euros, un site plus complet se situe entre 4 000 et 8 000 euros, et une application sur mesure se chiffre sur cahier des charges. Je vous remets toujours un devis clair et ferme après notre premier échange.',
  },
  {
    question: 'Vous codez en Next.js, qu\'est-ce que ça change pour mon site ?',
    answer: 'Next.js, c\'est la Rolls des frameworks web actuels. Les pages sont rendues côté serveur, donc elles s\'affichent immédiatement. C\'est rapide pour vos visiteurs et apprécié de Google. Face à un WordPress classique, c\'est un saut de qualité important.',
  },
  {
    question: 'Développez-vous pour les entreprises du secteur portuaire lorientais ?',
    answer: 'Oui, Lorient a un tissu particulier autour du port, de la pêche et du nautisme. J\'ai déjà travaillé avec des entreprises de ces secteurs et j\'adapte mon approche à leurs spécificités : vocabulaire métier, contenus techniques, photos de qualité.',
  },
  {
    question: 'Faites-vous aussi du SEO local pour les sites que vous développez à Lorient ?',
    answer: 'Oui, c\'est un point fort : je suis à la fois développeur et consultant SEO. Le site est conçu dès le départ pour ranker à Lorient et dans le Morbihan sud. Balises, structure, contenu géolocalisé, fiche Google Business Profile : tout est traité ensemble.',
  },
  {
    question: 'Combien de temps pour livrer un site web à Lorient ?',
    answer: 'Entre 4 et 6 semaines pour un site vitrine, 8 à 10 semaines pour un site plus volumineux, et 2 à 4 mois pour une application web sur mesure. Chaque étape est planifiée et validée ensemble, pas de surprise en fin de projet.',
  },
  {
    question: 'Est-ce que je peux ajouter des fonctionnalités après la mise en ligne ?',
    answer: 'Oui, et c\'est même souvent souhaitable. Les outils modernes que j\'utilise permettent d\'ajouter des modules, des pages, des fonctionnalités sans tout refaire. C\'est l\'intérêt d\'un code propre et bien structuré.',
  },
  {
    question: 'Que devient le site si je ne veux plus travailler avec vous ?',
    answer: 'Vous restez propriétaire du code, du nom de domaine et des accès. Tout est livré avec une documentation complète. N\'importe quel développeur compétent peut reprendre la main sur un projet Next.js propre. Rien ne vous lie à moi.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Développement Web à Lorient', description, '/developpement-web-lorient', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Développement Web à Lorient', description, '/developpement-web-lorient', [
      { '@type': 'City', name: 'Lorient' },
      { '@type': 'AdministrativeArea', name: 'Morbihan' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Développement Web Lorient', path: '/developpement-web-lorient' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function DeveloppementWebLorientPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DeveloppementWebLorientContent faqs={faqs} />
    </>
  )
}
