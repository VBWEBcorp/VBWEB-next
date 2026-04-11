import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Site internet apiculteur : création de site web optimisé SEO. Miel artisanal, vente directe, pot de miel, gelée royale, propolis — capter les amateurs de miel local.'

export const metadata: Metadata = {
  title: 'Site Internet Apiculteur | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-apiculteur' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Un apiculteur peut-il vraiment vendre son miel via un site ?',
    answer: 'Oui, et c\'est probablement le meilleur canal de vente direct. Les consommateurs cherchent activement "miel producteur + ville", "apiculteur + région", "miel bio local". Ils veulent du vrai miel, pas celui des supermarchés mélangé et pasteurisé. Un site qui raconte votre rucher, vos essences, votre travail convertit très bien. Beaucoup d\'apiculteurs vendent 50 à 80 % de leur récolte en direct grâce à un bon site.',
  },
  {
    question: 'Comment mettre en avant les différentes variétés de miel ?',
    answer: 'Par une page par type de miel : miel de printemps, acacia, châtaignier, tilleul, sapin, montagne, forêt. Chaque miel a sa saveur, sa période de récolte, ses caractéristiques. Les clients avertis cherchent des miels spécifiques. Une page par variété multiplie vos captations et positionne votre rucher comme un producteur sérieux.',
  },
  {
    question: 'Faut-il vendre en ligne avec expédition ?',
    answer: 'C\'est une option intéressante mais pas obligatoire. Beaucoup d\'apiculteurs restent sur un modèle local (vente ferme, marchés, magasins bio) et le site sert à ramener des visiteurs. Si vous voulez vendre en ligne, je peux intégrer une boutique. Attention à bien calculer les frais de port qui sont élevés pour le miel (poids et fragilité).',
  },
  {
    question: 'La gelée royale, la propolis, le pollen sont-ils des leviers supplémentaires ?',
    answer: 'Oui, très rentables. La gelée royale se vend à 200-400 €/kg, la propolis à 100-200 €/kg. Les clients sensibilisés aux produits de la ruche cherchent activement ces produits d\'exception. Une page dédiée à chacun capte cette clientèle premium qui achète souvent à l\'année. C\'est un excellent complément à la vente de miel.',
  },
]

const config: MetierConfig = {
  metier: 'Apiculteur',
  metierLower: 'apiculteur',
  heroKicker: 'Sites web pour apiculteur',
  heroHeadline: 'Site internet apiculteur,',
  heroHeadlineItalic: 'une vente directe qui double la récolte valorisée',
  heroDescription:
    'Je crée des sites internet pour les apiculteurs partout en France. Miel artisanal, variétés, gelée royale, propolis, vente directe : chaque page capte les amateurs de miel local et de produits de la ruche.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour apiculteur',
  whatKicker: 'Sites web pour apiculteur',
  whatTitle: 'Un apiculteur trouvé',
  whatTitleItalic: 'par des amateurs de vrai miel local',
  whatPara1:
    'Les consommateurs sont de plus en plus nombreux à chercher du vrai miel local, loin des mélanges pasteurisés des supermarchés. Ils tapent "apiculteur + leur ville", "miel local + région", "acheter miel producteur", "miel bio + département". Ils veulent connaître l\'apiculteur, voir les ruches, comprendre le travail. Un site authentique vous place en tête de leurs recherches et fidélise une clientèle engagée.',
  whatPara2:
    'Je construis des sites apiculteur qui racontent votre passion avec authenticité. Pages par variété de miel, produits de la ruche (gelée royale, propolis, pollen), photos des ruches, histoire de votre démarche, points de vente, engagements bio éventuels. Un site qui fait aimer votre travail avant même la première dégustation.',
  whatImageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80',
  whatImageAlt: 'Création site internet pour apiculteur',
  pillars: [
    { icon: 'Target', title: 'Page par variété', desc: 'Acacia, châtaignier, tilleul : chaque miel a sa saveur et sa requête Google.' },
    { icon: 'FileSearch', title: 'Produits ruche premium', desc: 'Gelée royale, propolis, pollen : compléments à forte valeur ajoutée.' },
    { icon: 'User', title: 'Histoire authentique', desc: 'Votre passion, vos ruches, votre démarche : ce qui fidélise les amateurs de vrai miel.' },
  ],
  whatFooterText:
    'Un apiculteur bien référencé vend 50 à 80 % de sa récolte en direct, soit 30-50 % de marge supplémentaire.',
  timelineSteps: [
    { number: '01', title: 'On parle de votre rucher', description: 'Variétés de miel produites, produits de la ruche, bio ou conventionnel, zones de butinage, histoire, points de vente.' },
    { number: '02', title: 'Construction du site', description: 'Pages par variété, produits ruche, histoire, ruches, points de vente, boutique éventuelle.' },
    { number: '03', title: 'Mise en ligne et Google', description: 'Fiche Google optimisée, premiers visiteurs, fidélisation des clients miel local.' },
  ],
  keywordsTitle: 'Les requêtes Google qui amènent des clients à un apiculteur',
  keywordsIntro:
    'Les amateurs de miel cherchent par variété, par origine géographique, par qualité. Chaque requête reflète une attente précise.',
  keywordCategories: [
    { icon: 'Target', title: 'Général', text: 'apiculteur + ville, miel producteur + ville, miel local, miel artisanal.' },
    { icon: 'FileSearch', title: 'Variétés', text: 'miel acacia, miel châtaignier, miel tilleul, miel sapin, miel montagne, miel forêt.' },
    { icon: 'Zap', title: 'Ruche premium', text: 'gelée royale fraîche, propolis française, pollen producteur, cire d\'abeille artisanale.' },
    { icon: 'User', title: 'Qualité', text: 'miel bio, miel récolte, miel non chauffé, miel France, miel artisanal non pasteurisé.' },
  ],
  relatedTitle: 'Vous êtes un autre producteur local ?',
  relatedPara:
    'Les métiers de producteurs locaux ont une logique proche : authenticité, vente directe, valeur ajoutée. Voici les autres pages disponibles.',
  relatedLinks: [
    { label: 'Site internet producteur', href: '/site-internet-producteur' },
    { label: 'Site internet maraîcher', href: '/site-internet-maraicher' },
    { label: 'Site internet producteur bio', href: '/site-internet-producteur-bio' },
    { label: 'Site internet ferme', href: '/site-internet-ferme' },
  ],
  miniCtaText: 'Envie de valoriser votre miel en doublant vos ventes en direct ?',
  caseStudiesKicker: 'Sites créés pour des producteurs',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Apiculteur', description, '/site-internet-apiculteur', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Apiculteur', description, '/site-internet-apiculteur'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Apiculteur', path: '/site-internet-apiculteur' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetApiculteurPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetierTemplate config={config} faqs={faqs} />
    </>
  )
}
