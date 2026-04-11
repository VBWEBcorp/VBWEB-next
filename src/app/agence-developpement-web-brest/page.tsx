import type { Metadata } from 'next'

import { AgenceDeveloppementWebBrestContent } from './agence-developpement-web-content'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Agence développement web à Brest ? Un expert direct qui conçoit, code et référence votre site. Contact en direct, devis clair, audit gratuit.'

export const metadata: Metadata = {
  title: 'Agence Développement Web à Brest | Expert Web - VBWEB',
  description,
  alternates: { canonical: '/agence-developpement-web-brest' },
}

const faqs = [
  {
    question: 'Pourquoi envisager un expert indépendant plutôt qu\'une agence développement web à Brest ?',
    answer: 'Quand vous tapez "agence développement web Brest" sur Google, vous cherchez avant tout quelqu\'un de compétent pour livrer un site sérieux. Un expert indépendant remplit exactement cette mission, avec en plus l\'avantage d\'un contact direct, d\'une flexibilité qu\'une agence ne peut pas offrir, et de tarifs généralement plus accessibles.',
  },
  {
    question: 'Peut-on travailler efficacement sur un projet web brestois depuis Rennes ?',
    answer: 'Oui, et c\'est même courant. La distance Rennes-Brest n\'est plus un frein aujourd\'hui : outils collaboratifs, visios, partage d\'écran, tout permet de travailler comme si on était dans le même bureau. Pour les projets qui le justifient, je me déplace à Brest pour les rendez-vous clés. Beaucoup de mes clients finistériens ont choisi ce fonctionnement et en sont contents.',
  },
  {
    question: 'Quels types de sites pouvez-vous livrer pour une entreprise brestoise ?',
    answer: 'Sites vitrines pour PME, artisans, professions libérales, sites e-commerce, plateformes métier, espaces clients sécurisés. J\'ai travaillé pour des secteurs aussi variés que le nautisme, l\'artisanat, le commerce, la restauration et les services. Chaque projet est unique et le cadrage initial sert justement à vérifier que mon approche correspond à vos besoins.',
  },
  {
    question: 'Combien coûte un site internet à Brest ?',
    answer: 'Un site vitrine démarre à 2 500 euros, un e-commerce peut aller de 5 000 à 15 000 euros selon la complexité. Le coût dépend des fonctionnalités, du nombre de pages, de l\'intégration d\'outils tiers. Un devis détaillé précise chaque poste pour que vous sachiez exactement à quoi correspond votre budget.',
  },
  {
    question: 'Le site sera-t-il optimisé pour le SEO dès la livraison ?',
    answer: 'Absolument. Je suis consultant SEO avant d\'être développeur, donc chaque site que je code est pensé pour Google dès la première ligne : architecture, vitesse, balises, données structurées, contenu. C\'est ce qui permet à mes clients d\'apparaître sur Google dès les premières semaines après la mise en ligne.',
  },
  {
    question: 'Quelle est la différence concrète avec une agence web brestoise ?',
    answer: 'Une agence a une structure : équipe, bureaux, plusieurs interlocuteurs. C\'est rassurant et parfois utile pour les très gros projets. Moi je suis seul avec mon outil de production, ce qui veut dire moins de frais, plus de réactivité et un lien direct avec la personne qui travaille sur votre site. Les deux modèles sont valables, selon ce que vous cherchez vraiment.',
  },
  {
    question: 'Intervenez-vous aussi à Guipavas, Plougastel-Daoulas ou Landerneau ?',
    answer: 'Oui, tout le bassin brestois et ses environs : Guipavas, Plouzané, Le Relecq-Kerhuon, Plougastel-Daoulas, Landerneau. Je travaille pour des entreprises dans toute la métropole et jusqu\'au Pays de Morlaix si le projet le demande.',
  },
  {
    question: 'Que se passe-t-il si j\'ai besoin de modifications après la mise en ligne ?',
    answer: 'Deux options : soit vous gérez directement via l\'interface d\'administration pour les modifications simples, soit je propose un forfait de maintenance et évolutions qui permet d\'intervenir rapidement sur les demandes techniques. Vous n\'êtes jamais enfermé, le site vous appartient complètement.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Agence Développement Web à Brest', description, '/agence-developpement-web-brest', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Agence Développement Web à Brest', description, '/agence-developpement-web-brest', [
      { '@type': 'City', name: 'Brest' },
      { '@type': 'AdministrativeArea', name: 'Finistère' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
    ]),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Agence Développement Web Brest', path: '/agence-developpement-web-brest' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function AgenceDeveloppementWebBrestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgenceDeveloppementWebBrestContent faqs={faqs} />
    </>
  )
}
