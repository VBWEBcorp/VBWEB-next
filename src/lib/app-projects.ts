// Applications et plateformes presentees dans /etudes-de-cas/applications-web
// et en aperçu sur l'accueil. Deux formes : une demonstration Loom avec le
// temoignage du client, ou une plateforme en ligne avec sa capture (bucket
// R2 vbweb-images, 1440x900, voir scripts/capture-vignette.mjs).

export interface AppProject {
  id: string
  title: string
  /** Nature du projet, affichee en pastille. */
  kind: string
  description: string
  features: string[]
  /** Demonstration video : identifiant Loom. */
  loomId?: string
  /** Plateforme en ligne : capture et adresse publique. */
  image?: string
  href?: string
  stack?: string[]
  testimonial?: {
    text: string
    author: string
  }
}

export const APP_PROJECTS_HREF = '/etudes-de-cas/applications-web'

export const appProjects: AppProject[] = [
  {
    id: 'turbo-boost',
    title: 'Turbo Boost',
    kind: 'Plateforme SaaS',
    description:
      "Plateforme de gamification commerciale pour les PME : quêtes, quiz, badges, classements par équipe et boutique de récompenses, validés par le manager. Conçue, développée et éditée par VBWEB.",
    features: [
      'Quêtes et quiz avec preuve, validés par le manager',
      'Classements par équipe, saisons et badges',
      'Boutique de récompenses et récapitulatif du lundi',
      'Abonnement en ligne, rôles collaborateur, manager et admin',
    ],
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/TURBO-DEAL-3o8hjmqx.webp',
    // Pas de lien tant que le site du produit porte encore son ancien nom (Turbo Deal).
    stack: ['Next.js', 'MongoDB', 'Stripe', 'Resend'],
  },
  {
    id: 'couvreurs-verifies',
    title: 'Couvreurs Vérifiés',
    kind: 'Plateforme de mise en relation',
    description:
      "Annuaire national des entreprises de couverture, par département et par ville : 36 887 entreprises, 101 départements. Une demande de devis ne part qu'à un seul couvreur, jamais revendue.",
    features: [
      '36 887 entreprises issues des données publiques',
      'Pages par département, par ville et par type de travaux',
      'Demande de devis envoyée à un seul professionnel',
      'Espace pro avec fiche enrichie et abonnement',
    ],
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/COUVREURS-VERIFIES-buybuems.webp',
    href: 'https://couvreurs-verifies.netlify.app/',
    stack: ['Next.js', 'MongoDB', 'API recherche-entreprises', 'Stripe'],
  },
  {
    id: 'happy-hour-sxm',
    title: 'Happy Hour SXM',
    kind: 'Application locale',
    description:
      "Le guide des happy hours et soirées de Saint-Martin : bars et restaurants par quartier, horaires, offres du moment, favoris et espace pour les établissements, en français et en anglais.",
    features: [
      'Recherche par quartier, par type et par horaire',
      'Fiches établissements avec offres et événements',
      'Favoris et carte interactive',
      'Espace pro pour publier ses offres',
    ],
    image: 'https://pub-698f857760da42999dac8854114fbc41.r2.dev/HAPPY-HOUR-SXM-7zvaot6a.webp',
    href: 'https://happy-hour-sxm.netlify.app/',
    stack: ['Next.js', 'MongoDB'],
  },
  {
    id: 'rennes-pneus',
    title: 'Logiciel Rennes Pneus',
    kind: 'Logiciel de gestion',
    description:
      'Application de gestion sur mesure pour un spécialiste du pneumatique : stocks, devis, factures et planning techniciens réunis dans un seul outil.',
    loomId: 'dd922ad389a343168e8cbfbcfdb42dd9',
    features: [
      'Gestion des stocks avec alertes automatiques',
      'Génération automatique de devis et factures',
      'Planning techniciens et suivi des interventions',
      'Tableau de bord avec KPIs en temps réel',
    ],
    testimonial: {
      text: 'Ce logiciel a révolutionné notre quotidien. On se concentre enfin sur notre métier au lieu de la paperasse !',
      author: 'Gérant Rennes Pneus',
    },
  },
  {
    id: 'isy-communication',
    title: 'CRM ISY Communication',
    kind: 'CRM sur mesure',
    description:
      'CRM intégré pour une agence de communication : gestion des clients, suivi des projets, deadlines et facturation centralisés.',
    loomId: '5920fdd169e8423fb0532d69310f7227',
    features: [
      'Gestion centralisée des clients et projets',
      'Suivi des deadlines et livrables automatisé',
      'Facturation intégrée au CRM',
      "Tableaux de bord pour le pilotage d'activité",
    ],
    testimonial: {
      text: 'On ne peut plus se passer de cet outil ! Il centralise tout et nous fait gagner un temps précieux.',
      author: 'Directrice ISY Communication',
    },
  },
  {
    id: 'bimi-restaurant',
    title: 'BIMI Restaurant',
    kind: 'Plateforme restaurant',
    description:
      'Plateforme digitale sur mesure pour un restaurant : gestion des réservations, menu en ligne et outil de fidélisation client.',
    loomId: 'ddd4ef5f817a4abf969f23c21ee2073a',
    features: [
      'Système de réservation en ligne intégré',
      'Menu digital mis à jour en temps réel',
      'Outil de fidélisation et gestion clients',
      "Interface d'administration simple et intuitive",
    ],
    testimonial: {
      text: 'La plateforme a simplifié toute notre gestion. Les clients réservent en ligne et nous gagnons un temps fou au quotidien.',
      author: 'Gérant BIMI Restaurant',
    },
  },
]

/** Les plateformes en ligne (avec capture), pour l'aperçu de l'accueil. */
export const platformProjects = appProjects.filter((p) => p.image)
