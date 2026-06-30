import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet spa jacuzzi : création de site web optimisé SEO. Spa extérieur, encastré, gonflable, installation, entretien, dépannage — capter les clients via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Spa Jacuzzi | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-spa-jacuzzi' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Spa jacuzzi est-il un marché assez gros pour justifier un site dédié ?',
    answer: 'Oui, et en forte croissance. Le marché du spa à usage domestique explose depuis le Covid avec des ventes annuelles qui ont doublé. Les requêtes "installation spa + ville", "jacuzzi extérieur", "spa de nage" génèrent un volume important avec des paniers moyens de 5 à 20 k€. Une page dédiée capte cette clientèle qui complète bien l\'activité piscinier.',
  },
  {
    question: 'Spa encastré ou spa extérieur ?',
    answer: 'Deux marchés avec deux profils. Le spa extérieur (gonflable ou rigide, 2-10 k€) vise les primo-acheteurs, c\'est un volume. Le spa encastré ou spa de nage (10-25 k€) vise les clients premium déjà équipés en piscine, c\'est de la marge. Une page par segment capte les deux profils et maximise vos ventes.',
  },
  {
    question: 'L\'entretien spa est-il aussi récurrent que la piscine ?',
    answer: 'Oui, avec des cycles plus courts. Vidange et nettoyage tous les 3-4 mois, changement filtre, traitement de l\'eau, remise en service saisonnière. Une page "Entretien spa" capte les clients qui veulent déléguer et génère des contrats d\'entretien récurrents complémentaires aux piscines.',
  },
  {
    question: 'Comment valoriser l\'installation pour justifier les prix ?',
    answer: 'Par l\'expertise technique. L\'installation d\'un spa encastré demande du génie civil, de l\'électricité spécifique, de la plomberie. Une page qui explique les étapes, les contraintes techniques, les autorisations éventuelles, les garanties, positionne votre savoir-faire face aux vendeurs amateurs. Les clients qui investissent 15 k€ veulent être rassurés.',
  },
]

const config: MetierConfig = {
  metier: 'Spa Jacuzzi',
  metierLower: 'spa jacuzzi',
  heroKicker: 'Sites web pour installation spa jacuzzi',
  heroHeadline: 'Site internet spa jacuzzi,',
  heroHeadlineItalic: 'un marché en pleine explosion',
  heroDescription:
    'Je crée des sites internet pour les installateurs et revendeurs de spas et jacuzzis partout en France. Spa extérieur, encastré, spa de nage, entretien : chaque page capte une clientèle en forte croissance depuis le Covid.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour spa jacuzzi',
  whatKicker: 'Sites web pour spa jacuzzi',
  whatTitle: 'Un spécialiste du spa',
  whatTitleItalic: 'sur un marché qui a doublé en 5 ans',
  whatPara1:
    'Le marché du spa à usage privé est en pleine expansion. Les particuliers cherchent à s\'équiper pour profiter chez eux, que ce soit un spa gonflable à 2 000 euros ou un spa encastré haut de gamme à 20 000 euros. Ils tapent "installation spa + ville", "jacuzzi extérieur", "spa de nage prix" et comparent plusieurs revendeurs. Un site qui présente clairement votre offre et vos installations convertit beaucoup mieux qu\'un catalogue générique.',
  whatPara2:
    'Je construis des sites spa-jacuzzi qui captent à la fois les primo-acheteurs et les clients premium. Pages par type de spa, entretien et maintenance, galerie d\'installations réalisées, explications techniques qui justifient votre expertise. Un site qui transforme votre commerce en référent local sur un marché en croissance.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1602872030490-4a484a7b3ba6-w800.webp',
  whatImageAlt: 'Création site internet pour spa jacuzzi',
  pillars: [
    { icon: 'Target', title: 'Page par type de spa', desc: 'Gonflable, rigide, encastré, spa de nage : chaque budget a sa page dédiée.' },
    { icon: 'FileSearch', title: 'Expertise technique', desc: 'Installation, génie civil, électricité, garanties : ce qui justifie les prix premium.' },
    { icon: 'TrendingUp', title: 'Entretien récurrent', desc: 'Contrats d\'entretien complémentaires aux piscines. Revenus stables.' },
  ],
  whatFooterText:
    'Un spécialiste spa bien référencé vend 15 à 40 spas par an en plus via les demandes entrantes Google.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre offre', description: 'Marques distribuées, types de spas, installation, entretien, showroom, zones, garanties.' },
    { number: '02', title: 'Construction du site', description: 'Pages par type, galerie, expertise technique, entretien, formulaire de demande.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premières demandes, suivi des conversions en ventes.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des clients spa jacuzzi',
  keywordsIntro:
    'Les requêtes spa sont variées selon le budget et le type : gonflable pour l\'entrée de gamme, encastré pour le premium, spa de nage pour le haut de gamme.',
  keywordCategories: [
    { icon: 'Target', title: 'Entrée de gamme', text: 'spa gonflable, jacuzzi extérieur, spa 4 places, petit spa extérieur.' },
    { icon: 'Zap', title: 'Haut de gamme', text: 'spa encastré, spa de nage, swim spa, spa haut de gamme, spa premium.' },
    { icon: 'User', title: 'Installation', text: 'installation spa, pose jacuzzi, intégration spa terrasse, spa extérieur installé.' },
    { icon: 'FileSearch', title: 'Entretien', text: 'entretien spa, vidange jacuzzi, traitement eau spa, filtre spa, réparation jacuzzi.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel piscine et bien-être ?',
  relatedPara:
    'Les métiers piscine et spa ont une logique proche : expertise, galerie, entretien. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet piscinier', href: '/site-internet-piscinier' },
    { label: 'Site internet constructeur piscine', href: '/site-internet-constructeur-piscine' },
    { label: 'Site internet entretien piscine', href: '/site-internet-entretien-piscine' },
    { label: 'Site internet pisciniste', href: '/site-internet-pisciniste' },
  ],
  miniCtaText: 'Envie de profiter du boom du marché spa pour doubler vos ventes ?',
  caseStudiesKicker: 'Sites créés pour des commerces',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Spa Jacuzzi', description, '/site-internet-spa-jacuzzi', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Spa Jacuzzi', description, '/site-internet-spa-jacuzzi'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Spa Jacuzzi', path: '/site-internet-spa-jacuzzi' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetSpaJacuzziPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}
