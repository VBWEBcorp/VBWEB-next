import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet technicien informatique : création de site web optimisé SEO. Intervention, dépannage, installation, PC, Mac, réseau — capter les clients particuliers et pros.'

export const metadata: Metadata = {
  title: 'Site Internet Technicien Informatique | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-technicien-informatique' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Technicien informatique, quelle spécificité SEO ?',
    answer: '"Technicien informatique" est une requête plus humaine que "dépannage informatique" : les clients cherchent une personne, pas juste un service. Ils veulent voir qui vient chez eux, quelles sont ses compétences, son expérience. Une page qui présente le technicien (photo, bio, formations, années d\'expérience) convertit très bien cette clientèle en recherche de relation de confiance.',
  },
  {
    question: 'Particulier ou pro, faut-il trancher ?',
    answer: 'Non, les deux se complètent. Les particuliers apportent du volume et les pros apportent du récurrent. Une page "Particuliers" (tarif à l\'intervention, principaux problèmes traités) et une page "Professionnels" (infogérance, maintenance, contrats) couvrent les deux marchés sans dilution.',
  },
  {
    question: 'La photo et la bio du technicien sont-elles décisives ?',
    answer: 'Oui, absolument. Les clients qui vont faire entrer un technicien chez eux veulent savoir à qui ils ont affaire. Photo souriante, parcours, formations, approche pédagogique : ces éléments rassurent et convertissent. C\'est souvent ce qui fait la différence entre un simple "dépannage informatique" anonyme et un technicien de confiance qu\'on appelle pour chaque problème.',
  },
  {
    question: 'Comment récurer un client particulier ?',
    answer: 'Par le conseil post-intervention et la disponibilité. Après chaque intervention, proposez un numéro direct pour toute question ou aide rapide à distance. Les clients apprécient énormément cette continuité. Le bouche-à-oreille suit, et vous devenez "leur" technicien informatique plutôt qu\'un prestataire ponctuel. C\'est ce que le site doit promettre et rendre visible.',
  },
]

const config: MetierConfig = {
  metier: 'Technicien Informatique',
  metierLower: 'technicien informatique',
  heroKicker: 'Sites web pour technicien informatique',
  heroHeadline: 'Site internet technicien informatique,',
  heroHeadlineItalic: 'devenir le technicien attitré des clients de votre zone',
  heroDescription:
    'Je crée des sites internet pour les techniciens informatiques indépendants partout en France. Dépannage, installation, conseil, PC, Mac, réseau, particuliers et pros : chaque page valorise votre profil et votre relation client.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour technicien informatique',
  whatKicker: 'Sites web pour technicien informatique',
  whatTitle: 'Un technicien trouvé',
  whatTitleItalic: 'par des clients qui cherchent quelqu\'un de confiance',
  whatPara1:
    'Les clients qui cherchent "technicien informatique + leur ville" ne cherchent pas un prestataire anonyme, ils cherchent une personne. Ils veulent savoir à qui ils vont confier leur PC, leurs données, leur réseau. Votre site est votre carte de visite humaine. S\'il vous présente clairement avec photo, parcours, approche, valeurs, vous captez des clients qui veulent construire une relation durable.',
  whatPara2:
    'Je construis des sites technicien informatique qui mettent en avant votre personnalité. Présentation détaillée, pages particuliers et professionnels distinctes, conseils, approche pédagogique, tarifs transparents. Un positionnement humain qui vous différencie des enseignes anonymes et fidélise une clientèle locale.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1547658719-da2b51169166-w800.webp',
  whatImageAlt: 'Création site internet pour technicien informatique',
  pillars: [
    { icon: 'User', title: 'Bio et photo', desc: 'Personnaliser le service. Clés de conversion pour une relation de confiance.' },
    { icon: 'Target', title: 'Particulier + pro', desc: 'Deux pages distinctes pour capter les deux marchés sans dilution.' },
    { icon: 'FileSearch', title: 'Suivi post-intervention', desc: 'Votre avantage compétitif : devenir le technicien attitré de chaque client.' },
  ],
  whatFooterText:
    'Un technicien informatique bien référencé fidélise 40 à 120 clients récurrents sur 2-3 ans.',
  timelineSteps: [
    { number: '01', title: 'On parle de vous', description: 'Parcours, formations, spécialités, zones, tarifs, approche, particuliers ou professionnels, récurrence souhaitée.' },
    { number: '02', title: 'Construction du site', description: 'Présentation personnelle, pages particuliers/pros, interventions types, tarifs, témoignages anonymisés.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premiers appels, fidélisation des premiers clients.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des clients fidèles à un technicien informatique',
  keywordsIntro:
    'Les clients cherchent un technicien humain et disponible, pas une grande enseigne. Les requêtes reflètent ce besoin de proximité.',
  keywordCategories: [
    { icon: 'User', title: 'Humain', text: 'technicien informatique + ville, technicien à domicile, dépanneur informatique proche.' },
    { icon: 'Target', title: 'Interventions', text: 'installation internet, configuration wifi, installation PC, sauvegarde données.' },
    { icon: 'Zap', title: 'Problèmes', text: 'PC lent, Windows refuse de démarrer, virus ordinateur, disque dur HS.' },
    { icon: 'FileSearch', title: 'Pro', text: 'technicien informatique entreprise, maintenance PC pro, dépannage réseau entreprise.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel informatique ?',
  relatedPara:
    'Les métiers informatiques ont une logique proche : confiance, relation client, suivi. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet dépannage informatique', href: '/site-internet-depannage-informatique' },
    { label: 'Site internet réparation ordinateur', href: '/site-internet-reparation-ordinateur' },
    { label: 'Site internet infogérance', href: '/site-internet-infogerance' },
    { label: 'Site internet maintenance informatique', href: '/site-internet-maintenance-informatique' },
  ],
  miniCtaText: 'Envie de devenir le technicien informatique de confiance dans votre zone ?',
  caseStudiesKicker: 'Sites créés pour des prestataires',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Technicien Informatique', description, '/site-internet-technicien-informatique', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Technicien Informatique', description, '/site-internet-technicien-informatique'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Technicien Informatique', path: '/site-internet-technicien-informatique' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetTechnicienInformatiquePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}
