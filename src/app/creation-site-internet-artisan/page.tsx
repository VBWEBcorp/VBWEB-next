import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const path = '/creation-site-internet-artisan'
const description =
  "Création de site internet pour artisan : un site vitrine qui fait sonner le téléphone, trouvé sur « votre métier + votre ville », avec vos réalisations en vitrine."

export const metadata: Metadata = {
  title: 'Création de site internet pour artisan',
  description,
  alternates: { canonical: path },
}

const faqs = [
  {
    question: 'Un artisan a-t-il vraiment besoin d’un site internet ?',
    answer:
      "Le bouche-à-oreille reste votre premier canal, mais il passe aujourd'hui par Google : la personne à qui l'on vous recommande tape votre nom, regarde vos réalisations et vos avis avant d'appeler. Sans site, ou avec un site qui ne rassure pas, une partie de ces recommandations se perd au profit d'un concurrent mieux présenté.",
  },
  {
    question: 'Que doit contenir le site d’un artisan ?',
    answer:
      "L'essentiel tient en peu de pages : vos prestations, une page par service important, votre zone d'intervention, vos réalisations en photos, vos avis, vos garanties et assurances (décennale, labels comme RGE ou Qualibat si vous les avez), et un moyen simple de demander un devis. Le numéro de téléphone doit être cliquable sur mobile, en haut de chaque page.",
  },
  {
    question: 'Comment être trouvé sur « plombier + ma ville » ?',
    answer:
      "En combinant une fiche Google bien réglée, des avis réguliers et un site qui confirme votre métier et votre zone. Sur ces recherches, Google affiche d'abord une carte avec trois artisans : c'est là que se jouent la plupart des appels. Le site sert à gagner la confiance de ceux qui cliquent, et à remonter aussi dans les résultats classiques.",
  },
  {
    question: 'Pourrai-je ajouter mes chantiers moi-même ?',
    answer:
      "Oui. Vous ajoutez vos photos de chantier depuis votre téléphone, dans un espace d'administration simple. Des réalisations récentes rassurent vos clients et montrent à Google que votre entreprise est active.",
  },
  {
    question: 'Faut-il une page par commune où j’interviens ?',
    answer:
      "Non, pas des dizaines de pages copiées où seul le nom change : Google les écarte. Une page par grande zone, avec des chantiers réellement réalisés sur place, suffit et fonctionne bien mieux.",
  },
  {
    question: 'Avez-vous déjà créé des sites pour des artisans ?',
    answer:
      "Oui : couvreur, rénovation, pneus, nettoyage, déménagement. Ces sites sont présentés dans les études de cas. Rennes Pneus, par exemple, est passé de 30 à 3 600 visites par mois grâce au référencement, avec environ 500 appels mensuels.",
  },
]

const config: MetierConfig = {
  metier: 'Artisan',
  metierLower: 'artisan',
  heroKicker: 'Site internet · Artisans',
  heroHeadline: 'Création de site internet pour artisan,',
  heroHeadlineItalic: 'des chantiers qui arrivent par Google',
  heroDescription:
    "Vos clients vous cherchent sur leur téléphone, souvent dans l'urgence. Je crée des sites d'artisans simples, rapides et rassurants, trouvés sur « votre métier + votre ville », avec vos réalisations en vitrine et un bouton d'appel toujours visible.",
  heroImageAlt: 'Victor Béasse, création de site internet pour artisans',
  whatKicker: 'Site pour artisans',
  whatTitle: 'Un site qui travaille',
  whatTitleItalic: 'pendant que vous êtes sur le chantier',
  whatPara1:
    "Un artisan n'a pas le temps de gérer un site. Il lui faut un outil qui fonctionne seul : trouvé sur Google, lisible sur un téléphone, qui montre vos chantiers et vos avis, et qui transforme une visite en appel ou en demande de devis. C'est ce que je construis, sans pages inutiles.",
  whatPara2:
    "J'ai créé des sites pour un couvreur, une entreprise de rénovation, un spécialiste du pneu, une société de nettoyage et des déménageurs. Chaque fois, le même principe : une page par prestation qui compte, votre zone clairement indiquée, votre fiche Google reliée au site, et vos preuves (garanties, labels, avis) là où le client les cherche.",
  whatImageUrl:
    'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1553877522-43269d4ea984-w720.webp',
  whatImageAlt: 'Site internet d’artisan consulté sur un téléphone',
  pillars: [
    { icon: 'Zap', title: 'Appel en un clic', desc: 'Le téléphone et le devis toujours visibles, sur chaque page.' },
    { icon: 'MapPin', title: 'Votre zone', desc: 'Trouvé sur votre métier et les communes que vous desservez.' },
    { icon: 'User', title: 'Vos chantiers', desc: 'Des réalisations que vous ajoutez vous-même, depuis votre téléphone.' },
  ],
  whatFooterText:
    "Un bon site d'artisan tient souvent en cinq à dix pages. Ce qui compte, c'est que chacune serve à obtenir un appel.",
  timelineSteps: [
    {
      number: '01',
      title: 'Échange sur votre activité',
      description:
        "Vos prestations, votre zone, vos meilleurs chantiers, vos clients types. Je regarde qui apparaît sur Google dans votre ville et pourquoi.",
    },
    {
      number: '02',
      title: 'Site et fiche Google',
      description:
        "Rédaction des pages, mise en valeur de vos réalisations, développement d'un site rapide, réglage de votre fiche Google et lien entre les deux.",
    },
    {
      number: '03',
      title: 'Mise en ligne et avis',
      description:
        "Mise en ligne, indexation, mise en place d'une demande d'avis simple après chaque chantier. Vous êtes autonome pour ajouter vos photos.",
    },
  ],
  keywordsTitle: 'Les recherches qui amènent des chantiers',
  keywordsIntro:
    "Les clients d'un artisan cherchent un besoin précis, près de chez eux, souvent vite. Le site est construit autour de ces recherches.",
  keywordCategories: [
    { icon: 'MapPin', title: 'Métier + ville', text: 'couvreur Rennes, électricien Vannes, menuisier Saint-Malo.' },
    { icon: 'Zap', title: 'Urgence', text: 'dépannage, fuite, urgence, le week-end, rapide.' },
    { icon: 'Target', title: 'Prestation', text: 'rénovation de toiture, pose de pompe à chaleur, isolation.' },
    { icon: 'MessageCircle', title: 'Confiance', text: 'avis, artisan RGE, garantie décennale, devis gratuit.' },
  ],
  relatedTitle: 'Vous voulez aussi être visible sur la carte ?',
  relatedPara:
    "Pour un artisan, la fiche Google compte autant que le site. Les deux se travaillent ensemble.",
  relatedLinks: [
    { label: 'Référencement local et fiche Google', href: '/referencement-local' },
    { label: 'Création de site internet', href: '/creation-site-internet' },
    { label: 'Études de cas : sites internet', href: '/etudes-de-cas/sites-internet' },
  ],
  miniCtaText: 'Artisan et envie d’un site qui fait sonner le téléphone ?',
  caseStudiesKicker: 'Résultats de mes clients',
  faqTitlePrefix: 'Site internet artisan',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Création de site internet pour artisan', description, path, ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Création de site internet pour artisan', description, path),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Création de site internet pour artisan', path },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function CreationSiteArtisanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}
