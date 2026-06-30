import type { Metadata } from 'next'

import { MetierTemplate, type MetierConfig } from '@/components/metier/metier-template'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Site internet dépannage informatique : création de site web optimisé SEO pour techniciens et entreprises de dépannage PC, Mac, réseau, infogérance. Particulier, pro, télémaintenance — capter les clients via Google.'

export const metadata: Metadata = {
  title: 'Site Internet Dépannage Informatique | Création Site Web SEO - VBWEB',
  description,
  alternates: { canonical: '/site-internet-depannage-informatique' },
  robots: { index: false, follow: true },
}

const faqs = [
  {
    question: 'Un dépanneur informatique a-t-il besoin d\'un site internet à l\'époque des tutos YouTube ?',
    answer: 'Plus que jamais. Les gens cherchent un tuto pour les petites choses, mais dès que ça devient sérieux (PC qui ne démarre plus, données perdues, cryptolocker, réseau en panne), ils cherchent un vrai professionnel sur Google. Les requêtes "dépannage informatique + ville", "réparation PC + ville", "récupération de données" sont massives et hautement qualifiées — ce sont des clients stressés qui payent sans négocier pour récupérer leurs données.',
  },
  {
    question: 'Combien coûte un site internet pour un dépanneur informatique ?',
    answer: 'Un site vitrine complet démarre à 1 400 euros. Il inclut une page par prestation (dépannage PC, Mac, réseau, récupération de données, infogérance, télémaintenance), une page pour les particuliers et une pour les professionnels, vos tarifs indicatifs, vos zones couvertes et la fiche Google optimisée.',
  },
  {
    question: 'Comment me différencier des grandes enseignes comme Fnac ou Darty dépannage ?',
    answer: 'Par la proximité, la réactivité et la personnalisation. Un dépanneur indépendant peut se déplacer dans l\'heure, passer plus de temps à expliquer, proposer de la télémaintenance régulière, accompagner dans le temps. Je mets ces avantages en avant sur le site : photo et bio du technicien, délai d\'intervention, tarifs au juste prix, et surtout la possibilité de construire une relation de confiance qui n\'existe pas chez un prestataire national.',
  },
  {
    question: 'L\'infogérance de PME est-elle un bon levier depuis un site ?',
    answer: 'Oui, c\'est même le levier le plus rentable. Un contrat d\'infogérance TPE à 400 €/mois signé via le site rapporte 4 800 € par an et est récurrent. Je crée une page dédiée "Infogérance PME + votre ville" qui cible les gérants de petites entreprises frustrés par leur prestataire actuel ou qui n\'en ont pas. Ces clients cherchent activement une alternative sérieuse et locale.',
  },
  {
    question: 'Faut-il afficher les tarifs du dépannage à domicile ?',
    answer: 'Oui, absolument. Les clients particuliers sont très méfiants sur les tarifs du dépannage informatique (à cause des arnaques qui existent). Afficher clairement "60 € la première heure, puis X € le quart d\'heure, forfait diagnostic gratuit" rassure énormément et différencie immédiatement des sites opaques. Les clients préfèrent payer un prix clair plutôt que d\'être dans l\'incertitude.',
  },
  {
    question: 'Comment capter les demandes urgentes type "PC qui ne démarre plus" ?',
    answer: 'Par une page "Urgence informatique" très visible dès l\'accueil, avec un numéro cliquable et une promesse de réponse rapide. Les requêtes urgence ("dépannage informatique urgent", "PC ne démarre plus", "écran bleu Windows") sont faites par des gens en détresse qui appellent immédiatement. La fiche Google Business Profile avec horaires et appels cliquables prend 70% du résultat sur ces requêtes.',
  },
  {
    question: 'La télémaintenance peut-elle être valorisée sur le site ?',
    answer: 'Oui, et c\'est un gros avantage compétitif. La télémaintenance vous permet de résoudre 60 à 80% des problèmes sans déplacement, donc plus rapidement et plus rentablement. Je crée une page dédiée qui explique le fonctionnement, les avantages (rapidité, pas de frais de déplacement, intervention immédiate), et qui rassure sur la sécurité (accès uniquement avec autorisation, outils professionnels). Beaucoup de clients y sont très réceptifs.',
  },
]

const config: MetierConfig = {
  metier: 'Dépannage Informatique',
  metierLower: 'dépannage informatique',
  heroKicker: 'Sites web pour dépanneur informatique',
  heroHeadline: 'Site internet dépannage informatique,',
  heroHeadlineItalic: 'des clients qui appellent en urgence',
  heroDescription:
    'Je crée des sites internet pour les techniciens et entreprises de dépannage informatique partout en France. PC, Mac, réseau, récupération de données, infogérance PME, télémaintenance : chaque page capte une requête Google au moment où le client est prêt à payer pour résoudre son problème.',
  heroImageAlt: 'Victor Béasse, créateur de sites internet pour dépanneur informatique',
  whatKicker: 'Sites web pour dépanneur informatique',
  whatTitle: 'Un dépanneur trouvé',
  whatTitleItalic: 'quand le PC refuse de démarrer à 9h du matin',
  whatPara1:
    'Le dépannage informatique, c\'est un métier d\'urgence. Un PC qui plante avant une réunion, un serveur qui tombe, un ransomware qui bloque les fichiers, une récupération de données après un crash disque. Les clients (particuliers et PME) tapent leur problème sur Google en panique et appellent le premier qui leur inspire confiance. Les grandes enseignes ne sont pas compétitives sur la rapidité — c\'est votre avantage, à condition d\'être visible.',
  whatPara2:
    'Je construis des sites qui captent ces urgences. Pages détaillées par type de panne (démarrage, virus, récupération de données), une page particulier et une pro, tarifs affichés clairement pour rassurer, fiche Google Business optimisée pour le pack local. L\'objectif : que votre téléphone sonne à chaque PC qui tombe en rade dans votre zone, avec des clients qui savent qu\'ils paient un prix juste.',
  whatImageUrl: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/unsplash-photo-1518770660439-4636190af475-w800.webp',
  whatImageAlt: 'Création site internet pour dépannage informatique',
  pillars: [
    { icon: 'Zap', title: 'Page urgence visible', desc: 'Numéro cliquable et promesse de délai. Les clients en panique appellent sans hésiter.' },
    { icon: 'FileSearch', title: 'Tarifs transparents', desc: 'Forfait diagnostic, taux horaire, déplacement. Ce qui rassure face aux arnaques courantes.' },
    { icon: 'TrendingUp', title: 'Infogérance PME récurrente', desc: 'Page dédiée pour capter les contrats récurrents 400-800 €/mois. Votre meilleur levier de marge.' },
  ],
  whatFooterText:
    'Un dépanneur informatique bien référencé reçoit en moyenne 20 à 50 appels qualifiés par mois après 3 à 4 mois en ligne.',
  timelineSteps: [
    { number: '01', title: 'On cadre vos prestations', description: 'Particuliers ou pros, type d\'interventions (PC, Mac, réseau, récupération, infogérance), zone d\'intervention, télémaintenance, tarifs indicatifs. Je repère les requêtes locales à cibler en priorité.' },
    { number: '02', title: 'Construction du site', description: 'Une page par type de panne, une page particuliers et une pros, page infogérance, page télémaintenance, tarifs clairs. Je rédige pour rassurer un client stressé par une urgence informatique.' },
    { number: '03', title: 'Mise en ligne et suivi', description: 'Site en ligne, fiche Google optimisée, premiers appels qualifiés dans 3 à 4 semaines via le local. Mise en place de la collecte d\'avis après chaque intervention.' },
  ],
  keywordsTitle: 'Les requêtes Google qui font sonner le téléphone d\'un dépanneur informatique',
  keywordsIntro:
    'Les requêtes informatiques vont de l\'urgence ("PC ne démarre plus") au récurrent ("infogérance PME"). Chaque requête correspond à un type de client et un panier moyen différent. Je structure votre site pour capter toutes les intentions rentables.',
  keywordCategories: [
    { icon: 'Zap', title: 'Urgence', text: 'dépannage informatique urgent, PC ne démarre plus, écran bleu, virus, ransomware.' },
    { icon: 'Target', title: 'Réparation', text: 'réparation PC, réparation Mac, changement disque dur, écran portable cassé, batterie portable.' },
    { icon: 'User', title: 'Données', text: 'récupération de données, disque dur HS, clé USB corrompue, carte SD récupération.' },
    { icon: 'FileSearch', title: 'PME', text: 'infogérance PME, maintenance informatique entreprise, installation serveur, réseau professionnel.' },
  ],
  relatedTitle: 'Vous êtes un autre prestataire B2B ou technique ?',
  relatedPara:
    'Les métiers techniques et B2B ont une logique SEO proche : pages par prestation, mise en avant des certifications, tarifs transparents. Voici les autres pages métiers disponibles.',
  relatedLinks: [
    { label: 'Site internet graphiste', href: '/site-internet-graphiste' },
    { label: 'Site internet entreprise de nettoyage', href: '/site-internet-entreprise-nettoyage' },
    { label: 'Site internet serrurier', href: '/site-internet-serrurier' },
    { label: 'Site internet électricien', href: '/site-internet-electricien' },
  ],
  miniCtaText: 'Envie d\'avoir un téléphone qui sonne à chaque PC en rade dans votre zone ?',
  caseStudiesKicker: 'Sites créés pour des prestataires',
  faqTitleItalic: 'vos questions',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Site Internet Dépannage Informatique', description, '/site-internet-depannage-informatique', ['h1', '.hero-description', '.faq-answer']),
    serviceJsonLd('Site Internet Dépannage Informatique', description, '/site-internet-depannage-informatique'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Site Internet Dépannage Informatique', path: '/site-internet-depannage-informatique' },
    ]),
    faqJsonLd(faqs),
  ],
}

export default function SiteInternetDepannageInformatiquePage() {
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
