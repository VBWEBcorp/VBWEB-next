import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet constructeur piscine : création de site web optimisé SEO. Piscine coque, béton, liner, couloir de nage, sur mesure — capter les chantiers 30 000 € via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Constructeur Piscine | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-constructeur-piscine' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Pourquoi une page "constructeur piscine" spécifiquement ?',
    answer: 'Parce que "constructeur piscine + ville" est une requête différente de "piscinier + ville". Les gens qui tapent "constructeur" sont en phase de projet neuf, avec un budget prévu, pas en recherche d\'entretien. Ce sont les clients les plus rentables du secteur (chantiers 20-60 k€). Une page dédiée à la construction capte précisément ces projets neufs.',
  },
  {
    question: 'Faut-il une page par type de piscine ?',
    answer: 'Impératif. Piscine coque (entrée de gamme, 15-25 k€), piscine béton sur mesure (30-60 k€), piscine liner (moyen de gamme), couloir de nage (haut de gamme). Chaque type a son client, son budget, ses arguments. Une page par type = trois fois plus de chantiers captés car les clients cherchent très précisément.',
  },
  {
    question: 'La galerie de réalisations est-elle vraiment décisive ?',
    answer: 'C\'est le premier critère de choix. Les clients ne lisent pas les textes, ils regardent les photos. Avant/pendant/après, différents types de piscines, environnements variés. Je construis une galerie soignée qui met en avant vos plus beaux chantiers. Une galerie convaincante augmente le taux de demande de devis de 40 à 60 % sur un site piscinier.',
  },
  {
    question: 'Les démarches administratives doivent-elles être expliquées ?',
    answer: 'Oui, c\'est une vraie préoccupation client. Déclaration préalable, permis de construire selon la surface, réglementation de sécurité, distance des limites. Une page qui explique clairement ces démarches rassure et positionne en expert. Vous évitez aussi les appels interminables au standard pour les mêmes questions.',
  },
]

const config: MetierConfig = {
  metier: 'Constructeur Piscine',
  metierLower: 'constructeur piscine',
  heroKicker: 'Sites web pour constructeur piscine',
  heroHeadline: 'Site internet constructeur piscine,',
  heroHeadlineItalic: 'des projets à 30 000 € qui rentrent par Google',
  heroDescription:
    'Je crée des sites internet pour les constructeurs de piscines partout en France. Coque, béton, liner, couloir de nage, sur mesure : chaque page capte les projets neufs avec des galeries de réalisations qui convertissent.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour constructeur piscine',
  whatKicker: 'Sites web pour constructeur piscine',
  whatTitle: 'Un constructeur piscine',
  whatTitleItalic: 'choisi grâce à ses réalisations',
  whatPara1:
    'Construire une piscine est un projet à 30 000 euros en moyenne. Les clients y réfléchissent des mois, regardent des dizaines de sites de pisciniers, comparent les types de piscines, les prix, les réalisations. Ils demandent 3 à 5 devis. Votre site est votre vitrine principale pendant cette longue phase de comparaison. Si vos photos et votre contenu ne convainquent pas, vous êtes éliminé avant même le premier rendez-vous.',
  whatPara2:
    'Je construis des sites constructeur piscine qui transforment des visiteurs curieux en demandeurs de devis. Galerie de réalisations soignée, pages par type de piscine, démarches expliquées, études de cas chantiers, formulaire de demande détaillé. L\'objectif : que les clients arrivent au rendez-vous déjà convaincus.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1460925895917-afdab827c52f-w800.webp',
  whatImageAlt: 'Création site internet pour constructeur piscine',
  pillars: [
    { icon: 'Target', title: 'Page par type', desc: 'Coque, béton, liner, couloir de nage : chaque type a sa requête et son budget spécifique.' },
    { icon: 'FileSearch', title: 'Galerie valorisée', desc: 'Vos plus belles réalisations bien présentées. Premier critère de choix des clients.' },
    { icon: 'User', title: 'Démarches expliquées', desc: 'Déclaration, permis, sécurité : clarté qui rassure et positionne en expert.' },
  ],
  whatFooterText:
    'Un constructeur piscine bien référencé signe en moyenne 15 à 30 chantiers par an supplémentaires via Google.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre offre', description: 'Types de piscines construites, marques de coques, chantiers emblématiques, zones, tarifs indicatifs, délais.' },
    { number: '02', title: 'Construction du site', description: 'Pages par type, galerie soignée, études de cas, démarches, formulaire de devis détaillé.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premières demandes de devis, suivi des conversions en chantiers signés.' },
  ],
  keywordsTitle: 'Les requêtes Google qui ramènent des chantiers de construction piscine',
  keywordsIntro:
    'Les clients en projet neuf cherchent soit un type de piscine, soit un constructeur local, soit une solution clé en main. Chaque requête correspond à un budget et un profil.',
  keywordCategories: [
    { icon: 'Target', title: 'Par type', text: 'piscine coque, piscine béton, piscine liner, couloir de nage, piscine sur mesure.' },
    { icon: 'FileSearch', title: 'Projet neuf', text: 'construction piscine, constructeur piscine, créer piscine maison, projet piscine enterrée.' },
    { icon: 'User', title: 'Prix / Budget', text: 'prix piscine enterrée, coût construction piscine, piscine 8x4 prix, piscine coque prix.' },
    { icon: 'Zap', title: 'Clé en main', text: 'piscine clé en main, piscine avec terrasse, piscine éclairée, piscine avec pompe à chaleur.' },
  ],
  relatedTitle: 'Vous proposez d\'autres services piscine ?',
  relatedPara:
    'Les métiers de la piscine ont une logique proche : galerie, types, aides. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet piscinier', href: '/site-internet-piscinier' },
    { label: 'Site internet entretien piscine', href: '/site-internet-entretien-piscine' },
    { label: 'Site internet spa jacuzzi', href: '/site-internet-spa-jacuzzi' },
    { label: 'Site internet pisciniste', href: '/site-internet-pisciniste' },
  ],
  miniCtaText: 'Envie de remplir votre carnet de commandes piscine avec des projets neufs ?',
  caseStudiesKicker: 'Sites créés pour des artisans',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Constructeur Piscine', description, '/site-internet-constructeur-piscine', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Constructeur Piscine', description, '/site-internet-constructeur-piscine'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Constructeur Piscine', path: '/site-internet-constructeur-piscine' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetConstructeurPiscinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}
