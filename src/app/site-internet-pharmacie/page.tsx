import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Site internet pharmacie : création de site web optimisé SEO pour pharmacies d\'officine. Garde, parapharmacie, click and collect, conseils santé — capter les clients qui cherchent sur Google et Google Maps.'

export const metadata: Metadata = {
  title: 'Site Internet Pharmacie | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-pharmacie' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Une pharmacie a-t-elle vraiment besoin d\'un site internet ?',
    answer: 'Oui, pour trois raisons concrètes. D\'abord pour être trouvée quand un client cherche "pharmacie de garde" ou "pharmacie ouverte dimanche". Ensuite pour valoriser votre parapharmacie et vos conseils, qui sont souvent votre marge la plus intéressante. Enfin pour proposer le click and collect, devenu une attente basique depuis le Covid. Sans site, vous laissez ces leviers à vos concurrents.',
  },
  {
    question: 'Combien coûte un site internet pour une pharmacie ?',
    answer: 'Un site vitrine complet pour pharmacie démarre à 1 500 euros. Il inclut la page accueil avec horaires et garde, la page parapharmacie et marques vendues, les services proposés (click and collect, vaccination, entretien pharmaceutique), l\'équipe et les mentions obligatoires spécifiques aux officines.',
  },
  {
    question: 'Puis-je vendre des produits en ligne depuis le site ?',
    answer: 'Oui, c\'est légal pour les produits de parapharmacie et certains médicaments en vente libre, sous réserve d\'obtenir l\'agrément ARS préalable obligatoire. Je construis le site vitrine d\'abord, et si vous souhaitez passer à la vente en ligne, je peux intégrer une boutique conforme à la réglementation pharmaceutique avec tous les contrôles nécessaires.',
  },
  {
    question: 'Comment être visible quand un client cherche "pharmacie de garde" ?',
    answer: 'Par deux leviers. La fiche Google Business Profile de votre officine doit être parfaitement à jour sur les horaires et les périodes de garde. Le site affiche en page d\'accueil les horaires en temps réel et une mention claire "pharmacie de garde ce weekend". Google remonte très bien les pharmacies qui mettent à jour ces infos régulièrement.',
  },
  {
    question: 'Quelles pages sont indispensables pour une officine ?',
    answer: 'Accueil avec horaires et garde, équipe et biographies des pharmaciens, parapharmacie et marques distribuées, services (préparations, vaccination, location de matériel médical, orthopédie, entretien pharmaceutique), click and collect si proposé, conseils santé saisonniers, et contact avec plan d\'accès. Chaque page vise une requête locale précise.',
  },
  {
    question: 'Est-ce conforme aux règles du Code de la santé publique ?',
    answer: 'Oui. Je connais les règles spécifiques aux pharmaciens : pas de publicité sur les médicaments, pas de comparatif de prix sur les médicaments remboursés, mention du titulaire et numéro RPPS, respect de la charte du Code de déontologie pharmaceutique. Le site est livré conforme dès la mise en ligne.',
  },
  {
    question: 'Ma patientèle est surtout des seniors, vont-ils utiliser le site ?',
    answer: 'Les 65+ sont la tranche qui a le plus progressé sur les usages numériques ces 5 dernières années. Ils consultent les horaires en ligne, cherchent la pharmacie de garde, prennent rendez-vous pour la vaccination. Un site clair, avec des textes lisibles et des contrastes forts, fonctionne très bien pour cette clientèle — c\'est d\'ailleurs un point que je soigne particulièrement.',
  },
  {
    question: 'Je suis titulaire solo, j\'ai peu de temps à consacrer à ça.',
    answer: 'Justement, je m\'occupe de tout. Vous me donnez les infos de base (horaires, services, équipe, photos), je rédige le site, je le mets en ligne, j\'optimise la fiche Google. Ensuite vous gardez la main sur la mise à jour des horaires (c\'est l\'essentiel), et je reste disponible pour les évolutions plus complexes.',
  },
]

const config: MetierConfig = {
  metier: 'Pharmacie',
  metierLower: 'pharmacie',
  heroKicker: 'Sites web pour pharmacie',
  heroHeadline: 'Site internet pharmacie,',
  heroHeadlineItalic: 'trouvé avant la concurrence du coin',
  heroDescription:
    'Je crée des sites internet pour les pharmacies d\'officine partout en France. Garde, parapharmacie, click and collect, conseils santé : chaque page est pensée pour que votre officine apparaisse en haut de Google et Google Maps quand un client cherche à proximité.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour pharmacie',
  whatKicker: 'Sites web pour pharmacie',
  whatTitle: 'Une officine visible',
  whatTitleItalic: 'même à 22h un dimanche',
  whatPara1:
    'La moitié des recherches qui amènent à une pharmacie sont des urgences ou des questions pressées : "pharmacie de garde", "pharmacie ouverte dimanche", "pharmacie proche", "pharmacie + nom de ville". Le client tape sur son téléphone et appelle ou va directement à la première qui apparaît. Sans site et sans fiche Google à jour, vous n\'existez pas pour lui à ce moment-là.',
  whatPara2:
    'Je construis des sites pharmacie qui captent ces moments. Horaires clairs dès l\'accueil, mention garde visible, fiche Google optimisée pour remonter sur la carte, pages parapharmacie pour valoriser votre conseil, et click and collect si vous le proposez. Tout est conforme aux règles du Code de la santé publique.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1576602976047-174e57a47881-w800.webp',
  whatImageAlt: 'Création site internet pour pharmacie d\'officine',
  pillars: [
    { icon: 'Zap', title: 'Garde visible', desc: 'Horaires et période de garde affichés en gros sur l\'accueil. Google remonte les officines à jour.' },
    { icon: 'Target', title: 'Parapharmacie valorisée', desc: 'Pages marques et conseils pour capter le panier moyen hors ordonnance.' },
    { icon: 'MapPin', title: 'Google Maps au top', desc: 'Fiche optimisée avec photos, avis, itinéraire, appels cliquables. C\'est 70% des visites.' },
  ],
  whatFooterText:
    'Une pharmacie bien référencée capte en moyenne 50 à 100 visites supplémentaires par semaine via Google Maps après 3 mois.',
  timelineSteps: [
    { number: '01', title: 'On fait le point sur votre officine', description: 'Horaires, période de garde, équipe, services (vaccination, location matériel, orthopédie), parapharmacie, marques distribuées, click and collect. Je liste tout ce qui peut vous différencier.' },
    { number: '02', title: 'Construction du site', description: 'Je rédige chaque page dans le respect du Code de déontologie pharmaceutique, j\'intègre vos photos, j\'optimise les horaires en temps réel. Vous validez chaque page avant publication.' },
    { number: '03', title: 'Mise en ligne + Google Maps', description: 'Site en ligne, fiche Google Business Profile optimisée, premiers résultats dans le pack local. On regarde ensemble les visites entrantes et on ajuste si besoin.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des clients à une pharmacie',
  keywordsIntro:
    'Une pharmacie vit surtout de ses requêtes locales et d\'urgence. Un client tape rarement "acheter paracétamol en ligne" — il tape "pharmacie ouverte" ou "pharmacie + ma ville". Je construis votre site autour de ces requêtes de proximité qui font réellement rentrer du monde.',
  keywordCategories: [
    { icon: 'Zap', title: 'Urgence / Garde', text: 'pharmacie de garde, pharmacie ouverte dimanche, pharmacie nuit, pharmacie weekend.' },
    { icon: 'MapPin', title: 'Local', text: 'pharmacie + nom de ville, pharmacie proche, pharmacie + quartier, pharmacie centre-ville.' },
    { icon: 'Target', title: 'Services', text: 'vaccination pharmacie, test antigénique, location matériel médical, orthopédie, bas de contention.' },
    { icon: 'User', title: 'Parapharmacie', text: 'marques parapharmacie, conseils bébé, soins visage, compléments alimentaires.' },
  ],
  relatedTitle: 'Vous êtes un autre professionnel de santé ou commerce de santé ?',
  relatedPara:
    'Une pharmacie a des besoins similaires à d\'autres professionnels de santé : visibilité locale, respect déontologique, informations claires. Voici les autres métiers santé pour lesquels je construis des sites.',
  relatedLinks: [
    { label: 'Site internet médecin', href: '/site-internet-medecin' },
    { label: 'Site internet dentiste', href: '/site-internet-dentiste' },
    { label: 'Site internet sage-femme', href: '/site-internet-sage-femme' },
    { label: 'Site internet diététicien', href: '/site-internet-dieteticien' },
  ],
  miniCtaText: 'Envie d\'être trouvé en haut de Google Maps pour votre officine ?',
  caseStudiesKicker: 'Sites créés pour des professionnels',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Pharmacie', description, '/site-internet-pharmacie', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Pharmacie', description, '/site-internet-pharmacie'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Pharmacie', path: '/site-internet-pharmacie' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetPharmaciePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}
