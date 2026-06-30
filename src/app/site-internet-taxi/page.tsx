import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Site internet taxi : création de site web optimisé SEO pour taxis, VTC et chauffeurs privés. Transport aéroport, conventionné, longue distance, événementiel — capter les réservations via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Taxi | Création Site Web Optimisé SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-taxi' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Un taxi artisan a-t-il besoin d\'un site internet avec les applis qui existent ?',
    answer: 'Plus que jamais, et paradoxalement grâce aux applis. Les applis prennent 25 à 30% de commission, aspirent votre marge et vous rendent remplaçable. Un site internet, c\'est le moyen de capter des clients en direct (sans commission) et de fidéliser une clientèle qui vous appelle personnellement. Les courses au long cours, l\'aéroport réservé à l\'avance, les transports conventionnés : ce sont justement les courses qui passent par le téléphone et pas par l\'appli.',
  },
  {
    question: 'Combien coûte un site internet pour un taxi ?',
    answer: 'Un site vitrine complet démarre à 1 200 euros. Il inclut une page par prestation (aéroport, gare, longue distance, conventionné CPAM, événementiel, nuit), vos tarifs et zones couvertes, un formulaire de réservation par email, vos certifications (carte pro taxi, numéro ADS, conventionnement) et la fiche Google optimisée.',
  },
  {
    question: 'Comment capter les clients qui réservent leur taxi aéroport à l\'avance ?',
    answer: 'C\'est la requête la plus rentable pour un taxi. "Taxi aéroport + votre ville" ou "transfert aéroport + nom d\'aéroport" sont des requêtes faites 24 à 72h avant le vol par des clients qui veulent sécuriser leur transport. Je crée une page dédiée très détaillée avec les tarifs indicatifs par zone, le temps de trajet, les options (véhicule 7 places, bagages volumineux), et un formulaire de réservation simple. Ces clients paient sans négocier.',
  },
  {
    question: 'Les transports conventionnés CPAM sont-ils un levier intéressant via le site ?',
    answer: 'Énormément. Les transports assis professionnels (dialyse, chimio, consultations) sont une activité récurrente qui remplit votre planning sur des mois. Une page "Taxi conventionné CPAM + votre ville" peut capter à la fois les patients qui cherchent directement et les secrétariats médicaux qui organisent les transports. C\'est un chiffre d\'affaires stable et peu concurrentiel sur le web.',
  },
  {
    question: 'Comment me démarquer des VTC en tant que taxi ?',
    answer: 'Par ce que vous avez qu\'ils n\'ont pas : la lumineuse taxi (droit de prendre en charge dans la rue), les tarifs réglementés (transparents et sécurisants), le conventionnement CPAM, et les arrêts en stations aux aéroports et gares. Je mets ces spécificités en avant sur le site car ce sont des arguments que beaucoup de clients recherchent activement (notamment pour les transports médicaux et les courses sans surprise de prix).',
  },
  {
    question: 'Est-ce utile pour un VTC qui passe par les plateformes ?',
    answer: 'Totalement. Un site VTC permet de capter les courses en direct (aéroport, événementiel, longue distance, mariages) qui échappent aux plateformes et qui ont des paniers beaucoup plus élevés. Une course aéroport en direct à 80 € vous rapporte 80 €. La même course sur Uber vous en rapporte 55. Multiplié par 3 à 10 courses directes par semaine, c\'est entre 200 et 1 000 € supplémentaires dans votre poche chaque semaine.',
  },
  {
    question: 'Combien de temps avant que le site ramène des réservations ?',
    answer: 'Les premières demandes via Google Business Profile et le SEO local arrivent dans les 2 à 4 semaines après optimisation. Pour un flux régulier de 10 à 25 réservations directes par semaine, il faut compter 3 à 4 mois. C\'est à la fois un levier de chiffre d\'affaires et un moyen de moins dépendre des plateformes.',
  },
]

const config: MetierConfig = {
  metier: 'Taxi',
  metierLower: 'taxi',
  heroKicker: 'Sites web pour taxi et VTC',
  heroHeadline: 'Site internet taxi,',
  heroHeadlineItalic: 'des réservations en direct sans commission',
  heroDescription:
    'Je crée des sites internet pour les taxis, VTC et chauffeurs privés partout en France. Aéroport, gare, longue distance, conventionné CPAM, événementiel : chaque page capte une requête Google et vous permet de recevoir des réservations directes, sans commission de plateforme.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour taxi',
  whatKicker: 'Sites web pour taxi',
  whatTitle: 'Un taxi qu\'on réserve',
  whatTitleItalic: 'sans passer par une appli qui prend 30%',
  whatPara1:
    'Les applis Uber, Bolt, Heetch sont pratiques, mais elles vous prennent 25 à 30% de commission et vous privent de toute relation directe avec le client. Parallèlement, chaque jour des milliers de gens cherchent un taxi sur Google : "taxi aéroport + votre ville", "taxi conventionné + ville", "taxi longue distance", "transfert gare". Ces clients veulent réserver à l\'avance, en direct, et ils paient au juste prix sans commission.',
  whatPara2:
    'Je construis des sites qui captent ces réservations directes. Une page par type de course (aéroport, gare, longue distance, conventionné, événementiel), un formulaire de réservation simple, vos certifications (carte pro, ADS, conventionnement) mises en avant, et une fiche Google Business optimisée. L\'objectif : reprendre la main sur votre clientèle et récupérer la marge que les plateformes vous volent.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1460925895917-afdab827c52f-w800.webp',
  whatImageAlt: 'Création site internet pour taxi chauffeur privé',
  pillars: [
    { icon: 'MapPin', title: 'Page aéroport / gare', desc: 'Tarifs indicatifs, véhicule, options. La requête la plus rentable pour un taxi en direct.' },
    { icon: 'FileSearch', title: 'Conventionné CPAM', desc: 'Transport médical récurrent qui remplit votre planning sur des mois.' },
    { icon: 'User', title: 'Réservation directe', desc: 'Formulaire simple et numéro cliquable. Aucune commission plateforme sur les courses entrantes.' },
  ],
  whatFooterText:
    'Un taxi bien référencé capte en moyenne 10 à 25 réservations directes par semaine après 4 mois en ligne.',
  timelineSteps: [
    { number: '01', title: 'On cadre votre activité', description: 'Type de véhicule (berline, van, 7 places), courses principales (aéroport, gare, CPAM, événementiel), zones couvertes, tarifs indicatifs, certifications (carte pro taxi, numéro ADS, conventionnement).' },
    { number: '02', title: 'Construction du site', description: 'Une page par type de course, formulaire de réservation, mise en avant de vos certifications, présentation du chauffeur et du véhicule. Je rédige pour convaincre un client qui veut réserver en confiance.' },
    { number: '03', title: 'Mise en ligne + Google Business', description: 'Site en ligne, fiche Google optimisée, premières réservations directes dans 2 à 4 semaines. Mise en place de la collecte d\'avis après course.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des courses directes à un taxi',
  keywordsIntro:
    'Les courses directes (hors appli) se concentrent sur quelques types de demandes très précises : aéroport réservé à l\'avance, transport médical conventionné, longue distance, événementiel. Ce sont justement les courses les plus rentables.',
  keywordCategories: [
    { icon: 'Target', title: 'Transport gare / aéroport', text: 'taxi aéroport, transfert aéroport, taxi gare TGV, taxi vers Paris, navette aéroport.' },
    { icon: 'User', title: 'Médical', text: 'taxi conventionné CPAM, transport malade, taxi dialyse, transport chimio, VSL.' },
    { icon: 'Zap', title: 'Longue distance', text: 'taxi longue distance, taxi intercité, taxi Paris-province, taxi jour férié.' },
    { icon: 'MapPin', title: 'Local', text: 'taxi + ville, taxi proche, taxi 24h/24, taxi artisan + ville.' },
  ],
  relatedTitle: 'Vous êtes un autre prestataire de transport ou de services ?',
  relatedPara:
    'Les métiers de transport et de services à la personne ont une logique SEO proche : pages par prestation, mise en avant des certifications, réservation directe. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet déménageur', href: '/site-internet-demenageur' },
    { label: 'Site internet aide à domicile', href: '/site-internet-aide-a-domicile' },
    { label: 'Site internet auto-école', href: '/site-internet-auto-ecole' },
    { label: 'Site internet entreprise de nettoyage', href: '/site-internet-entreprise-nettoyage' },
  ],
  miniCtaText: 'Envie de reprendre la main sur vos courses sans perdre 30% en commission ?',
  caseStudiesKicker: 'Sites créés pour des prestataires',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Taxi', description, '/site-internet-taxi', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Taxi', description, '/site-internet-taxi'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Taxi', path: '/site-internet-taxi' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetTaxiPage() {
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
