import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Consultant SEO : référencement naturel pour PME, artisans et commerces partout en France. Audit gratuit, stratégie sur mesure, résultats mesurables. 80+ avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Consultant SEO | Référencement Naturel',
  description,
  alternates: { canonical: '/referencement-seo' },
}

const faqs = [
  {
    question: 'Combien coûte un consultant SEO ?',
    answer: 'Le tarif dépend de la taille de votre site et de vos objectifs. Un accompagnement SEO mensuel démarre généralement à partir de 500€/mois. Je propose un audit gratuit pour évaluer vos besoins avant tout engagement.',
  },
  {
    question: 'Combien de temps faut-il pour voir des résultats en SEO ?',
    answer: 'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Le référencement naturel est un investissement à long terme qui s\'accélère avec le temps, contrairement à la publicité qui s\'arrête dès que vous arrêtez de payer.',
  },
  {
    question: 'Quelle est la différence entre SEO et SEA ?',
    answer: 'Le SEO (référencement naturel) vous positionne dans les résultats organiques de Google : c\'est gratuit et durable. Le SEA (Google Ads) est de la publicité payante, les résultats sont immédiats mais s\'arrêtent dès que le budget est épuisé.',
  },
  {
    question: 'Pourquoi choisir un consultant SEO indépendant ?',
    answer: 'Un consultant indépendant comprend votre marché et vos concurrents, et vous travaillez en direct avec la personne qui pilote votre référencement. Réactivité, relation directe et stratégie adaptée à votre secteur.',
  },
  {
    question: 'Comment savoir si mon site est bien référencé sur Google ?',
    answer: 'Je propose un audit SEO gratuit qui analyse votre positionnement actuel, vos performances techniques et vos opportunités de croissance. Vous recevez un rapport complet avec des recommandations concrètes.',
  },
  {
    question: 'Le référencement naturel est-il adapté aux petites entreprises ?',
    answer: 'Absolument. Le SEO est souvent le canal le plus rentable pour les PME et artisans. Contrairement à la publicité, un bon référencement continue de vous apporter des clients pendant des années.',
  },
  {
    question: 'Qu\'est-ce qu\'un audit SEO et à quoi ça sert ?',
    answer: 'Un audit SEO analyse l\'état de santé de votre site : performance technique, contenu, mots-clés, concurrence. Il identifie exactement ce qui vous empêche d\'être visible sur Google et propose un plan d\'action priorisé.',
  },
  {
    question: 'Travaillez-vous partout en France ?',
    answer: 'Oui, j\'accompagne des clients partout en France. Le travail se fait à distance, avec des rendez-vous en personne lorsque c\'est pertinent. Je suis flexible sur la localisation.',
  },
]

const config: MetierConfig = {
  metier: 'Référencement SEO',
  metierLower: 'référencement SEO',
  heroKicker: 'Consultant SEO · France',
  heroHeadline: 'Référencement naturel,',
  heroHeadlineItalic: 'des clients qui viennent à vous',
  heroDescription:
    'Je positionne votre site en haut de Google sur les requêtes que tapent vos futurs clients partout en France. Audit, stratégie, contenu, technique, liens : une approche complète pour transformer votre site en premier canal d\'acquisition.',
  heroImageAlt: 'Victor Béasse, consultant SEO',
  whatKicker: 'Consultant SEO',
  whatTitle: 'Du SEO qui ramène',
  whatTitleItalic: 'de vrais clients, pas juste du trafic',
  whatPara1:
    'Beaucoup de consultants SEO vendent du trafic. Le problème, c\'est que le trafic ne paye pas vos factures : les clients qualifiés si. Mon approche est différente : j\'identifie les requêtes Google qui correspondent à une intention d\'achat réelle dans votre secteur, et je positionne votre site dessus. Chaque position gagnée est une position qui vous ramène un client potentiel, pas juste une visite perdue.',
  whatPara2:
    'Je construis votre stratégie SEO comme on construit un canal d\'acquisition durable : audit technique poussé pour corriger ce qui freine Google, création de contenu qui répond exactement aux questions de vos prospects, optimisation du maillage interne pour faire remonter les pages qui convertissent, et suivi mensuel transparent. Pas de blabla, que des actions qui bougent vos positions et vos revenus.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1432888622747-4eb9a8efeb07-w800.webp',
  whatImageAlt: 'Consultant SEO, stratégie de référencement naturel',
  pillars: [
    { icon: 'FileSearch', title: 'Audit stratégique', desc: 'Diagnostic technique, contenu, concurrence. Je vous montre exactement où vous perdez et où vous pouvez gagner.' },
    { icon: 'Target', title: 'Contenu qui convertit', desc: 'Pages pensées pour les requêtes à forte intention d\'achat, pas les mots-clés vanity sans retour.' },
    { icon: 'TrendingUp', title: 'Suivi mensuel transparent', desc: 'Rapport clair chaque mois : positions gagnées, trafic, conversions. Pas de rapports creux.' },
  ],
  whatFooterText:
    'Un accompagnement SEO sérieux, c\'est en moyenne +120 à +300 % de trafic qualifié après 12 mois, avec des positions tenues dans la durée.',
  timelineTitle: 'Du diagnostic',
  timelineTitleItalic: 'aux premiers clients venus de Google',
  timelineSteps: [
    {
      number: '01',
      title: 'Audit SEO complet',
      description:
        'Analyse technique (vitesse, indexation, structure), analyse de contenu, analyse concurrentielle, identification des requêtes à fort potentiel dans votre secteur. Vous repartez avec un plan d\'action priorisé.',
    },
    {
      number: '02',
      title: 'Stratégie et mise en œuvre',
      description:
        'Correction des freins techniques, optimisation on-page, création de contenu ciblé sur les requêtes qui convertissent, maillage interne, netlinking qualitatif si nécessaire.',
    },
    {
      number: '03',
      title: 'Suivi mensuel et optimisation continue',
      description:
        'Reporting clair chaque mois (positions, trafic, conversions), ajustements en fonction des résultats, nouvelles pages à créer, opportunités repérées. Vous gardez la main sur les décisions.',
    },
  ],
  keywordsTitle: 'Les requêtes Google qui rapportent le plus en SEO',
  keywordsIntro:
    'Toutes les requêtes ne se valent pas. Certaines amènent des curieux qui ne convertissent jamais, d\'autres amènent des clients qui signent dans la semaine. Je construis votre stratégie SEO autour de celles qui font réellement sonner le téléphone ou rentrer les devis.',
  keywordCategories: [
    { icon: 'Target', title: 'Intention commerciale', text: 'votre service + ville, prix, tarifs, devis, meilleur, comparatif, avis.' },
    { icon: 'Zap', title: 'Urgence', text: 'urgence, dépannage, 24/24, près de moi, disponible, rapide.' },
    { icon: 'MapPin', title: 'Local', text: 'votre métier + votre ville, + votre région, + votre quartier, + département.' },
    { icon: 'FileSearch', title: 'Comparaison', text: 'alternatives, vs, meilleur choix, fonctionnalités, recommandation.' },
  ],
  relatedTitle: 'Vous cherchez un autre type d\'accompagnement SEO ?',
  relatedPara:
    'Le référencement naturel couvre plusieurs leviers. Selon votre besoin, voici les autres services qui peuvent vous intéresser.',
  relatedLinks: [
    { label: 'Audit SEO gratuit', href: '/audit-seo-gratuit' },
    { label: 'Création de site internet', href: '/creation-site-internet' },
    { label: 'Freelance SEO', href: '/freelance-seo' },
  ],
  miniCtaText: 'Envie de savoir ce que le SEO peut vraiment vous rapporter ?',
  caseStudiesKicker: 'Résultats SEO de mes clients',
  faqTitlePrefix: 'Référencement naturel',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Consultant SEO', description, '/referencement-seo', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Référencement naturel SEO', description, '/referencement-seo'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Référencement SEO', path: '/referencement-seo' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SeoRennesPage() {
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
