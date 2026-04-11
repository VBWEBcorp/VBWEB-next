import type { Metadata } from 'next'

import { SiteInternetPeintreContent } from './site-internet-peintre-content'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Création de site internet peintre partout en France. Un site qui met en valeur vos photos avant/après et qui remonte sur Google quand un client cherche un peintre près de chez lui.'

export const metadata: Metadata = {
  title: 'Site Internet Peintre | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-peintre' },
}

const faqs = [
  {
    question: 'Pourquoi un peintre en bâtiment a-t-il vraiment besoin d\'un site internet ?',
    answer: 'Quand quelqu\'un veut repeindre son salon ou ravaler sa façade, le premier réflexe est de taper "peintre + sa ville" sur Google. Sans site, vous êtes invisible au moment exact où la décision se prend. Un site bien construit capte ces demandes 7j/7, même quand vous êtes sur un chantier.',
  },
  {
    question: 'Quelles photos faut-il mettre sur un site de peintre ?',
    answer: 'Les photos avant/après sont le cœur du site d\'un peintre. J\'organise une galerie par type de prestation : peinture intérieure, ravalement de façade, pose de papier peint, enduits décoratifs. Les clients achètent ce qu\'ils voient, donc plus les visuels sont parlants, plus les devis arrivent.',
  },
  {
    question: 'Le site va-t-il m\'apporter des demandes pour du ravalement de façade ?',
    answer: 'Oui, à condition de créer une page dédiée au ravalement avec les bons mots-clés. Les recherches "ravalement façade" sont très concurrentielles mais très qualifiées : les personnes qui tapent ça ont un vrai projet et un budget. Une page bien optimisée peut vous ramener plusieurs devis par mois.',
  },
  {
    question: 'Combien coûte un site internet pour un peintre ?',
    answer: 'Un site professionnel pour peintre démarre autour de 1 200€. Ce prix inclut le design, la structure SEO, la galerie avant/après, le formulaire de devis et la configuration Google Business Profile. Je vous envoie un devis clair sous 24h avec le détail.',
  },
  {
    question: 'Combien de temps pour voir des résultats sur Google ?',
    answer: 'Le site est en ligne en 2 à 3 semaines. Les premières positions locales arrivent entre 1 et 3 mois. Sur des requêtes plus larges comme "peintre + grande ville", il faut compter 4 à 6 mois de travail SEO régulier pour s\'installer dans le haut de page.',
  },
  {
    question: 'Est-ce que vous pouvez m\'aider à afficher mes avis clients ?',
    answer: 'Oui. J\'intègre directement vos avis Google sur le site avec la note et les étoiles visibles. C\'est un élément rassurant qui fait nettement grimper le taux de conversion. Si vous n\'avez pas encore d\'avis, je vous explique comment en obtenir rapidement auprès de vos clients satisfaits.',
  },
  {
    question: 'Vous travaillez avec des peintres partout en France ?',
    answer: 'Oui, je suis basé à Rennes mais j\'accompagne des artisans partout en France. Tout se fait à distance : visio pour l\'échange, envoi des photos en ligne, validation des maquettes par lien partagé. Ça fonctionne aussi bien avec un peintre à Lille qu\'à Marseille.',
  },
  {
    question: 'Je pourrai modifier mes photos et textes moi-même ?',
    answer: 'Oui. Chaque site est livré avec un accès simple pour ajouter de nouveaux chantiers dans la galerie, changer un texte ou mettre à jour vos tarifs. Si vous préférez ne pas vous en occuper, je propose aussi une formule maintenance où je m\'en charge pour vous.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Peintre', description, '/site-internet-peintre', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Création de site internet pour peintre', description, '/site-internet-peintre'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Artisan', path: '/site-internet-artisan' },
      { name: 'Peintre', path: '/site-internet-peintre' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetPeintrePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteInternetPeintreContent faqs={faqs} />
    </>
  )
}
