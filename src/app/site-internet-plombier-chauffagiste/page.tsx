import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet plombier-chauffagiste : création de site web optimisé SEO. Dépannage, chaudière, pompe à chaleur, sanitaire, urgence, RGE — capter les deux activités via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Plombier-Chauffagiste | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-plombier-chauffagiste' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Faut-il un site séparé pour plomberie et chauffage ou un seul site ?',
    answer: 'Un seul site qui couvre clairement les deux activités. Vos clients cherchent soit "plombier + ville", soit "chauffagiste + ville" — et parfois les deux requêtes sur des besoins différents. Un site qui montre vos deux compétences avec des pages dédiées à chaque prestation capte toutes les requêtes sans dilution.',
  },
  {
    question: 'Comment organiser les pages pour capter les deux métiers ?',
    answer: 'Par un menu clair "Plomberie" et "Chauffage" avec des sous-pages prestations. Côté plomberie : dépannage urgence, sanitaire, rénovation salle de bain, débouchage. Côté chauffage : installation chaudière, pompe à chaleur, entretien, dépannage. Chaque sous-page vise une requête précise. Google comprend et remonte sur chacune d\'elles.',
  },
  {
    question: 'Dépannage urgence vs rénovation lourde, comment prioriser ?',
    answer: 'Les deux sont importants mais n\'ont pas le même cycle. Le dépannage urgence remonte vite sur Google et ramène des appels immédiats (100-300 €). La rénovation (salle de bain, PAC) prend 4-6 mois à convertir mais ramène des chantiers à 5-25 k€. Je structure votre site pour ne rien sacrifier : urgence pour le flux immédiat, rénovation pour la marge long terme.',
  },
  {
    question: 'Le label RGE est-il indispensable à afficher ?',
    answer: 'Pour le chauffage, c\'est indispensable (obligatoire pour que vos clients obtiennent MaPrimeRénov). Pour la plomberie sanitaire, c\'est un plus. Je crée une page dédiée à votre certification RGE avec le logo officiel, le numéro et l\'explication des aides que vos clients peuvent obtenir grâce à vous. C\'est un énorme argument de vente.',
  },
]

const config: MetierConfig = {
  metier: 'Plombier-Chauffagiste',
  metierLower: 'plombier-chauffagiste',
  heroKicker: 'Sites web pour plombier-chauffagiste',
  heroHeadline: 'Site internet plombier-chauffagiste,',
  heroHeadlineItalic: 'deux métiers, un site, tous les chantiers',
  heroDescription:
    'Je crée des sites internet pour les plombiers-chauffagistes partout en France. Dépannage, chaudière, pompe à chaleur, sanitaire, rénovation salle de bain, urgence : chaque page capte une requête, sans diluer votre positionnement.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour plombier-chauffagiste',
  whatKicker: 'Sites web pour plombier-chauffagiste',
  whatTitle: 'Un plombier-chauffagiste',
  whatTitleItalic: 'qui capte les deux métiers à la fois',
  whatPara1:
    'La double compétence plombier-chauffagiste est un atout commercial : vous pouvez tout gérer, du dépannage d\'une fuite à l\'installation d\'une pompe à chaleur complète. Mais si votre site ne structure pas clairement les deux activités, vous perdez en lisibilité et en référencement. Google remonte les pages spécifiques, pas les pages généralistes qui mélangent tout.',
  whatPara2:
    'Je construis des sites plombier-chauffagiste à deux niveaux : un menu clair qui sépare les deux métiers, et des pages détaillées pour chaque prestation (dépannage, sanitaire, chaudière, PAC, entretien). Votre label RGE mis en avant, vos zones d\'intervention, un formulaire de devis rapide. L\'objectif : capter à la fois les urgences et les gros chantiers.',
  whatImageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour plombier-chauffagiste',
  pillars: [
    { icon: 'Zap', title: 'Dépannage urgence', desc: 'Flux immédiat de 100-300 € par appel. Base du chiffre d\'affaires.' },
    { icon: 'Target', title: 'Gros chantiers PAC', desc: 'Pages dédiées aux installations 10-25 k€. Marge long terme.' },
    { icon: 'FileSearch', title: 'RGE valorisé', desc: 'Indispensable pour les aides MaPrimeRénov. Fort argument de conversion.' },
  ],
  whatFooterText:
    'Un plombier-chauffagiste bien référencé capte 10 à 25 appels par semaine en dépannage et 3-6 gros chantiers par mois.',
  timelineSteps: [
    { number: '01', title: 'On cadre vos deux activités', description: 'Dépannage, sanitaire, chaudière, PAC, entretien, RGE. Répartition du chiffre d\'affaires, zones, tarifs.' },
    { number: '02', title: 'Construction du site', description: 'Menu structuré en deux métiers, pages par prestation, RGE valorisé, formulaire devis.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premiers appels dépannage et demandes de devis chauffage.' },
  ],
  keywordsTitle: 'Les requêtes Google qui remplissent le planning d\'un plombier-chauffagiste',
  keywordsIntro:
    'Vous captez à la fois les urgences de plomberie et les gros chantiers de chauffage. Chaque requête correspond à un type d\'intervention et un panier moyen précis.',
  keywordCategories: [
    { icon: 'Zap', title: 'Plomberie urgence', text: 'plombier urgence, fuite eau, canalisation bouchée, débouchage, robinet fuit.' },
    { icon: 'Target', title: 'Chauffage installation', text: 'installation chaudière, pompe à chaleur, changement chaudière, PAC air-eau, chauffe-eau thermodynamique.' },
    { icon: 'User', title: 'Entretien', text: 'entretien chaudière annuel, contrat entretien, ramonage, vérification PAC.' },
    { icon: 'FileSearch', title: 'Sanitaire', text: 'rénovation salle de bain, installation WC, douche italienne, salle de bain PMR.' },
  ],
  relatedTitle: 'Vous êtes un autre artisan du bâtiment ou du chauffage ?',
  relatedPara:
    'Les métiers du bâtiment et du chauffage ont une logique proche : urgence, certifications, aides. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet plombier', href: '/site-internet-plombier' },
    { label: 'Site internet chauffagiste', href: '/site-internet-chauffagiste' },
    { label: 'Site internet pompe à chaleur', href: '/site-internet-pompe-a-chaleur' },
    { label: 'Site internet artisan', href: '/site-internet-artisan' },
  ],
  miniCtaText: 'Envie d\'un site qui capte à la fois vos urgences plomberie et vos chantiers chauffage ?',
  caseStudiesKicker: 'Sites créés pour des artisans',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Plombier-Chauffagiste', description, '/site-internet-plombier-chauffagiste', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Plombier-Chauffagiste', description, '/site-internet-plombier-chauffagiste'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Plombier-Chauffagiste', path: '/site-internet-plombier-chauffagiste' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetPlombierChauffagistePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}
