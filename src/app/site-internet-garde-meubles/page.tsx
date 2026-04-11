import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet garde-meubles : création de site web optimisé SEO. Stockage sécurisé, box, self-stockage, longue durée, courte durée — capter les clients via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Garde-Meubles | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-garde-meubles' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Le garde-meubles est-il un vrai marché récurrent ?',
    answer: 'Oui, et très rentable. Un box de 6 m² à 80 euros par mois, loué 12 mois, génère près de 1 000 euros par an et par box. Sur 50 box, cela représente un chiffre d\'affaires récurrent de 50 000 euros annuels. Les clients qui cherchent "garde-meubles + ville" ou "self-stockage + ville" sont souvent en déménagement, en travaux ou en situation transitoire qui dure plusieurs mois.',
  },
  {
    question: 'Box en self-stockage ou garde-meubles traditionnel ?',
    answer: 'Les deux modèles coexistent. Le self-stockage (client accède quand il veut) est en forte croissance, tiré par les acteurs comme Shurgard ou Une Pièce en Plus. Le garde-meubles traditionnel (dépôt fermé) reste pertinent pour les longues durées et les meubles volumineux. Je structure votre site selon votre modèle, ou en cumulant les deux si vous proposez les deux formules.',
  },
  {
    question: 'Comment se démarquer des grandes enseignes ?',
    answer: 'Par les tarifs, la proximité, et la flexibilité contractuelle. Les grandes enseignes ont des tarifs rigides et des contrats longs. Un acteur local peut proposer des prix plus accessibles, un contrat plus souple (engagement au mois), et un contact humain. Je valorise ces atouts sur votre site face aux géants du secteur.',
  },
  {
    question: 'Les tarifs doivent-ils être affichés ?',
    answer: 'Oui, absolument. C\'est une question que les clients se posent en premier, et sans réponse, ils partent voir ailleurs. Une grille de tarifs claire par taille de box, avec mention des prix mensuels, des frais de dossier et des éventuelles promotions (premier mois offert, par exemple) augmente fortement les demandes entrantes.',
  },
]

const config: MetierConfig = {
  metier: 'Garde-Meubles',
  metierLower: 'garde-meubles',
  heroKicker: 'Sites web pour garde-meubles',
  heroHeadline: 'Site internet garde-meubles,',
  heroHeadlineItalic: 'des box qui se louent par mois sans prospecter',
  heroDescription:
    'Je crée des sites internet pour les garde-meubles et centres de self-stockage partout en France. Box, self-stockage, longue durée, courte durée, entreprise : chaque page capte des clients qui ont besoin de stocker rapidement.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour garde-meubles',
  whatKicker: 'Sites web pour garde-meubles',
  whatTitle: 'Un garde-meubles trouvé',
  whatTitleItalic: 'par des clients qui louent dans les 48 heures',
  whatPara1:
    'Les clients qui cherchent un garde-meubles sont pressés : déménagement en cours, travaux imminents, succession à gérer, expatriation. Ils tapent "garde-meubles + ville", "self-stockage + ville", "box de stockage + quartier" et réservent souvent dans les 48 heures. Votre site doit répondre à toutes leurs questions (taille, prix, accès, sécurité) en quelques secondes.',
  whatPara2:
    'Je construis des sites garde-meubles qui convertissent rapidement. Grille de tarifs claire, pages par taille de box, sécurité mise en avant, flexibilité contractuelle, possibilité de réservation en ligne. Un site qui remplit vos box sans que vous ayez à prospecter.',
  whatImageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour garde-meubles',
  pillars: [
    { icon: 'FileSearch', title: 'Tarifs clairs', desc: 'Grille par taille de box. Les clients comparent vite et choisissent en transparence.' },
    { icon: 'Target', title: 'Pages par taille', desc: '3, 6, 10, 20 m² : chaque taille cible un besoin différent et sa requête associée.' },
    { icon: 'User', title: 'Sécurité valorisée', desc: 'Vidéosurveillance, alarme, accès contrôlé : ce qui rassure sur le stockage long terme.' },
  ],
  whatFooterText:
    'Un garde-meubles bien référencé loue 5 à 15 nouveaux box par mois via Google, avec des contrats souvent annuels.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre offre', description: 'Tailles de box disponibles, tarifs, sécurité, accès 24/7 ou non, formules courte et longue durée, zones.' },
    { number: '02', title: 'Construction du site', description: 'Grille de tarifs, pages par taille, sécurité, flexibilité, formulaire de réservation ou de demande.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premières réservations, suivi du taux d\'occupation.' },
  ],
  keywordsTitle: 'Les requêtes Google qui remplissent un garde-meubles',
  keywordsIntro:
    'Les clients cherchent selon la taille, la durée, et la localisation. Chaque requête correspond à une situation précise de stockage.',
  keywordCategories: [
    { icon: 'Target', title: 'Type', text: 'garde-meubles, self-stockage, box stockage, location box, garde-meubles sécurisé.' },
    { icon: 'FileSearch', title: 'Taille', text: 'box 3m2, box 5m2, box 10m2, box 20m2, garde-meubles grand volume.' },
    { icon: 'User', title: 'Durée', text: 'garde-meubles longue durée, stockage temporaire, box location mois, stockage annuel.' },
    { icon: 'MapPin', title: 'Local', text: 'garde-meubles + ville, self-stockage + ville, box stockage proche, centre stockage + ville.' },
  ],
  relatedTitle: 'Vous proposez d\'autres services de déménagement ou stockage ?',
  relatedPara:
    'Les métiers du déménagement et stockage ont une logique proche : clients pressés, tarifs clairs. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet déménageur', href: '/site-internet-demenageur' },
    { label: 'Site internet entreprise de déménagement', href: '/site-internet-entreprise-demenagement' },
    { label: 'Site internet transport mobilier', href: '/site-internet-transport-mobilier' },
    { label: 'Site internet déménagement international', href: '/site-internet-demenagement-international' },
  ],
  miniCtaText: 'Envie que vos box se louent en continu sans jamais prospecter ?',
  caseStudiesKicker: 'Sites créés pour des prestataires',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Garde-Meubles', description, '/site-internet-garde-meubles', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Garde-Meubles', description, '/site-internet-garde-meubles'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Garde-Meubles', path: '/site-internet-garde-meubles' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetGardeMeublesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}
