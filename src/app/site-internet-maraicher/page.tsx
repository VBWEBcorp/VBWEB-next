import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet maraîcher : création de site web optimisé SEO. Vente directe, légumes bio, panier, marché, AMAP, drive fermier — capter une clientèle locale via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Maraîcher | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-maraicher' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Un maraîcher a-t-il vraiment besoin d\'un site internet ?',
    answer: 'Oui, et c\'est l\'un des meilleurs leviers pour une clientèle locale fidèle. Les consommateurs cherchent activement "maraîcher + leur ville", "légumes bio + ville", "panier légumes producteur". Ils veulent manger local, connaître le producteur, venir sur la ferme. Un site bien référencé vous amène 30 à 100 nouveaux clients par saison qui deviennent souvent des abonnés à vos paniers.',
  },
  {
    question: 'Vaut-il mieux AMAP ou drive fermier ?',
    answer: 'Les deux modèles coexistent. L\'AMAP apporte des clients engagés sur l\'année mais demande une logistique de distribution. Le drive fermier est plus flexible pour les clients mais demande des horaires d\'ouverture. Je crée des pages pour les deux si vous proposez les deux, ou une page dédiée à votre modèle principal. Chaque page capte ses clients.',
  },
  {
    question: 'Comment mettre en avant le bio et la saisonnalité ?',
    answer: 'Par une page dédiée "Nos légumes de saison" mise à jour régulièrement, et une page "Nos engagements bio" qui explique vos certifications, votre approche, vos refus (pas de pesticides, pas de plastique, etc.). Ces deux pages sont très recherchées et fidélisent une clientèle engagée prête à payer le juste prix pour des légumes de qualité.',
  },
  {
    question: 'Le calendrier des marchés est-il utile sur le site ?',
    answer: 'Très utile. Les clients cherchent "maraîcher marché + ville + jour". Une page "Calendrier des marchés" qui liste jours, heures, emplacements exacts amène du trafic qualifié qui vient ensuite sur votre stand. C\'est aussi un moyen de fidéliser : les clients vous retrouvent semaine après semaine grâce à ces infos claires.',
  },
]

const config: MetierConfig = {
  metier: 'Maraîcher',
  metierLower: 'maraîcher',
  heroKicker: 'Sites web pour maraîcher',
  heroHeadline: 'Site internet maraîcher,',
  heroHeadlineItalic: 'une clientèle fidèle qui vient chercher ses légumes',
  heroDescription:
    'Je crée des sites internet pour les maraîchers en vente directe partout en France. Légumes bio, paniers, AMAP, drive fermier, marchés : chaque page capte une clientèle locavore fidèle et sensible au circuit court.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour maraîcher',
  whatKicker: 'Sites web pour maraîcher',
  whatTitle: 'Un maraîcher trouvé',
  whatTitleItalic: 'par des clients qui veulent manger local',
  whatPara1:
    'Les consommateurs engagés cherchent activement leurs producteurs locaux. Ils tapent "maraîcher + leur ville", "légumes bio producteur", "AMAP + ville", "drive fermier proche". Ces clients ne cherchent pas le moins cher, ils cherchent la qualité, la proximité, et la relation directe avec le producteur. Ils paient sans négocier et reviennent chaque semaine une fois fidélisés.',
  whatPara2:
    'Je construis des sites maraîcher qui captent cette clientèle engagée. Pages vente directe, calendrier des marchés, AMAP ou drive, engagements bio, photos de la ferme, histoire de votre parcours. Un site qui raconte votre travail avec authenticité et convertit les visiteurs en abonnés à vos paniers.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1605000797499-95a51c5269ae-w800.webp',
  whatImageAlt: 'Création site internet pour maraîcher',
  pillars: [
    { icon: 'MapPin', title: 'Points de vente clairs', desc: 'Ferme, marchés, AMAP, drive : chaque point avec adresse et horaires pour les clients qui viennent.' },
    { icon: 'FileSearch', title: 'Bio valorisé', desc: 'Certifications, approche, engagements : ce qui fidélise une clientèle sensibilisée.' },
    { icon: 'User', title: 'Histoire de la ferme', desc: 'Authentique, humaine. Ce qui crée l\'attachement et transforme les clients en ambassadeurs.' },
  ],
  whatFooterText:
    'Un maraîcher bien référencé signe 50 à 150 nouveaux abonnements paniers par saison et remplit ses stands de marché.',
  timelineSteps: [
    { number: '01', title: 'On parle de votre ferme', description: 'Production, certifications, points de vente (ferme, marché, AMAP, drive), saison, histoire, engagements.' },
    { number: '02', title: 'Construction du site', description: 'Pages vente directe, bio, marchés, paniers, histoire, photos de la ferme. Ton authentique.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée avec horaires ferme, premières visites et commandes, fidélisation des clients.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des clients à un maraîcher',
  keywordsIntro:
    'Les clients cherchent local et bio, avec des intentions claires selon leur mode de consommation préféré (marché, AMAP, drive, ferme).',
  keywordCategories: [
    { icon: 'Target', title: 'Direct ferme', text: 'maraîcher + ville, légumes producteur, vente directe maraîcher, maraîcher bio + ville.' },
    { icon: 'Zap', title: 'AMAP / Panier', text: 'AMAP + ville, panier légumes producteur, abonnement panier bio, panier hebdomadaire.' },
    { icon: 'User', title: 'Drive', text: 'drive fermier + ville, drive légumes producteur, retrait panier, commande en ligne ferme.' },
    { icon: 'MapPin', title: 'Marché', text: 'maraîcher marché + ville, stand marché producteur, légumes bio marché, jour marché.' },
  ],
  relatedTitle: 'Vous êtes un autre producteur local ?',
  relatedPara:
    'Les métiers de producteurs locaux ont une logique proche : authenticité, circuit court, fidélisation. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet producteur', href: '/site-internet-producteur' },
    { label: 'Site internet producteur bio', href: '/site-internet-producteur-bio' },
    { label: 'Site internet apiculteur', href: '/site-internet-apiculteur' },
    { label: 'Site internet ferme', href: '/site-internet-ferme' },
  ],
  miniCtaText: 'Envie de remplir vos paniers et votre stand de marché grâce à Google ?',
  caseStudiesKicker: 'Sites créés pour des producteurs',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Maraîcher', description, '/site-internet-maraicher', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Maraîcher', description, '/site-internet-maraicher'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Maraîcher', path: '/site-internet-maraicher' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetMaraicherPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}
