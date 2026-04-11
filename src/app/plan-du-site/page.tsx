import type { Metadata } from 'next'
import Link from 'next/link'

import { breadcrumbJsonLd, webPageJsonLd } from '@/components/seo/json-ld'

const description =
  'Plan du site VBWEB : retrouvez toutes nos pages de services SEO, création de site internet et développement web en Bretagne et à Nantes.'

export const metadata: Metadata = {
  title: 'Plan du Site',
  description,
  alternates: { canonical: '/plan-du-site' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Plan du Site', description, '/plan-du-site'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Plan du site', path: '/plan-du-site' },
    ]),
  ],
}

const villes = ['Rennes', 'Vannes', 'Brest', 'Lorient', 'Saint-Malo', 'Quimper', 'Saint-Brieuc', 'Nantes']
const villeSlug = (v: string) => v.toLowerCase().replace(/\s+/g, '-')

// --- Consultant SEO ---
const consultantSeo = villes.map((v) => ({
  label: `Consultant SEO ${v}`,
  href: v === 'Rennes' ? '/' : `/consultant-seo-${villeSlug(v)}`,
}))

// --- Freelance SEO ---
const freelanceSeo = villes.map((v) => ({
  label: `Freelance SEO ${v}`,
  href: `/freelance-seo-${villeSlug(v)}`,
}))

// --- Agence SEO ---
const agenceSeo = villes.map((v) => ({
  label: `Agence SEO ${v}`,
  href: `/agence-seo-${villeSlug(v)}`,
}))

// --- Agence Référencement ---
const agenceReferencement = villes.map((v) => ({
  label: `Agence R\u00e9f\u00e9rencement ${v}`,
  href: `/agence-referencement-${villeSlug(v)}`,
}))

// --- Référencement Naturel ---
const referencementNaturel = villes.map((v) => ({
  label: `R\u00e9f\u00e9rencement Naturel ${v}`,
  href: `/referencement-naturel-${villeSlug(v)}`,
}))

// --- Référencement Local ---
const referencementLocal = villes.map((v) => ({
  label: `R\u00e9f\u00e9rencement Local ${v}`,
  href: `/referencement-local-${villeSlug(v)}`,
}))

// --- Création de site internet ---
const siteVilles = villes.map((v) => ({
  label: `Cr\u00e9ation Site Internet ${v}`,
  href: `/creation-site-internet-${villeSlug(v)}`,
}))

// --- Développement Web ---
const devWeb = [
  ...villes.map((v) => ({
    label: `D\u00e9veloppement Web ${v}`,
    href: `/developpement-web-${villeSlug(v)}`,
  })),
  ...villes.map((v) => ({
    label: `Agence D\u00e9veloppement Web ${v}`,
    href: `/agence-developpement-web-${villeSlug(v)}`,
  })),
]

// --- Par métier (NATIONAL — pas de ville) ---
// Catégories mères + sous-métiers (volumes SEO sur parent ET sous-métiers)
const metiersCategories = [
  {
    categorie: 'Site Internet Artisan',
    volume: '260/mois',
    href: '/site-internet-artisan',
    sousMetiers: [
      { label: 'Site Internet Plombier', href: '/site-internet-plombier', volume: '720/mois' },
      { label: 'Site Internet Couvreur', href: '/site-internet-couvreur', volume: '480/mois' },
      { label: 'Site Internet \u00c9lectricien', href: '/site-internet-electricien', volume: '590/mois' },
      { label: 'Site Internet Ma\u00e7on', href: '/site-internet-macon', volume: '390/mois' },
      { label: 'Site Internet Peintre', href: '/site-internet-peintre', volume: '320/mois' },
      { label: 'Site Internet Paysagiste', href: '/site-internet-paysagiste', volume: '590/mois' },
      { label: 'Site Internet Menuisier', href: '/site-internet-menuisier', volume: '480/mois' },
      { label: 'Site Internet Carreleur', href: '/site-internet-carreleur', volume: '260/mois' },
    ],
  },
  {
    categorie: 'Site Internet Avocat',
    volume: '590/mois',
    href: '/site-internet-avocat',
    sousMetiers: [
      { label: 'Site Internet Notaire', href: '/site-internet-notaire', volume: '480/mois' },
      { label: 'Site Internet Huissier', href: '/site-internet-huissier', volume: '210/mois' },
    ],
  },
  {
    categorie: 'Site Internet Th\u00e9rapeute',
    volume: '70/mois',
    href: '/site-internet-therapeute',
    sousMetiers: [
      { label: 'Site Internet Professionnel de Sant\u00e9', href: '/site-internet-professionnel-de-sante', volume: '390/mois' },
      { label: 'Site Internet Kin\u00e9', href: '/site-internet-kine', volume: '590/mois' },
      { label: 'Site Internet Psychologue', href: '/site-internet-psychologue', volume: '880/mois' },
      { label: 'Site Internet Ost\u00e9opathe', href: '/site-internet-osteopathe', volume: '720/mois' },
      { label: 'Site Internet Sophrologue', href: '/site-internet-sophrologue', volume: '480/mois' },
    ],
  },
  // ── CHR / Restauration ──
  {
    categorie: 'Site Internet Restaurant',
    volume: '1 900/mois',
    href: '/site-internet-restaurant',
    sousMetiers: [
      { label: 'Site Internet Pizzeria', href: '/site-internet-pizzeria', volume: '720/mois' },
      { label: 'Site Internet Brasserie', href: '/site-internet-brasserie', volume: '390/mois' },
      { label: 'Site Internet Cr\u00eaperie', href: '/site-internet-creperie', volume: '260/mois' },
      { label: 'Site Internet Bar', href: '/site-internet-bar', volume: '480/mois' },
      { label: 'Site Internet Food Truck', href: '/site-internet-food-truck', volume: '320/mois' },
      { label: 'Site Internet Traiteur', href: '/site-internet-traiteur', volume: '590/mois' },
      { label: 'Site Internet Salon de Th\u00e9', href: '/site-internet-salon-de-the', volume: '210/mois' },
    ],
  },
  // ── Hôtellerie ──
  {
    categorie: 'Site Internet H\u00f4tel',
    volume: '1 300/mois',
    href: '/site-internet-hotel',
    sousMetiers: [
      { label: 'Site Internet Chambre d\u2019h\u00f4tes', href: '/site-internet-chambre-hotes', volume: '480/mois' },
      { label: 'Site Internet G\u00eete', href: '/site-internet-gite', volume: '720/mois' },
      { label: 'Site Internet Camping', href: '/site-internet-camping', volume: '880/mois' },
      { label: 'Site Internet Auberge', href: '/site-internet-auberge', volume: '260/mois' },
      { label: 'Site Internet Spa H\u00f4tel', href: '/site-internet-spa-hotel', volume: '170/mois' },
    ],
  },
  // ── Beauté & Bien-être ──
  {
    categorie: 'Site Internet Coiffeur',
    volume: '1 600/mois',
    href: '/site-internet-coiffeur',
    sousMetiers: [
      { label: 'Site Internet Barbier', href: '/site-internet-barbier', volume: '720/mois' },
      { label: 'Site Internet Esth\u00e9ticienne', href: '/site-internet-estheticienne', volume: '590/mois' },
      { label: 'Site Internet Onglerie', href: '/site-internet-onglerie', volume: '390/mois' },
      { label: 'Site Internet Institut de Beaut\u00e9', href: '/site-internet-institut-beaute', volume: '480/mois' },
      { label: 'Site Internet Spa', href: '/site-internet-spa', volume: '320/mois' },
      { label: 'Site Internet Maquilleuse', href: '/site-internet-maquilleuse', volume: '260/mois' },
      { label: 'Site Internet Proth\u00e9siste Ongulaire', href: '/site-internet-prothesiste-ongulaire', volume: '210/mois' },
    ],
  },
  // ── Tatouage & Piercing ──
  {
    categorie: 'Site Internet Tatoueur',
    volume: '320/mois',
    href: '/site-internet-tatoueur',
    sousMetiers: [
      { label: 'Site Internet Pierceur', href: '/site-internet-pierceur', volume: '210/mois' },
      { label: 'Site Internet Studio de Tatouage', href: '/site-internet-studio-tatouage', volume: '390/mois' },
      { label: 'Site Internet Maquillage Permanent', href: '/site-internet-maquillage-permanent', volume: '320/mois' },
    ],
  },
  // ── Automobile ──
  {
    categorie: 'Site Internet Garage',
    volume: '880/mois',
    href: '/site-internet-garage',
    sousMetiers: [
      { label: 'Site Internet M\u00e9canicien', href: '/site-internet-mecanicien', volume: '590/mois' },
      { label: 'Site Internet Carrossier', href: '/site-internet-carrossier', volume: '390/mois' },
      { label: 'Site Internet Concessionnaire', href: '/site-internet-concessionnaire', volume: '260/mois' },
      { label: 'Site Internet Contr\u00f4le Technique', href: '/site-internet-controle-technique', volume: '480/mois' },
      { label: 'Site Internet Centre Auto', href: '/site-internet-centre-auto', volume: '320/mois' },
      { label: 'Site Internet Lavage Auto', href: '/site-internet-lavage-auto', volume: '260/mois' },
    ],
  },
  // ── Deux-roues ──
  {
    categorie: 'Site Internet Garage Moto',
    volume: '210/mois',
    href: '/site-internet-garage-moto',
    sousMetiers: [
      { label: 'Site Internet Vendeur Moto', href: '/site-internet-vendeur-moto', volume: '210/mois' },
      { label: 'Site Internet M\u00e9canicien Moto', href: '/site-internet-mecanicien-moto', volume: '260/mois' },
      { label: 'Site Internet Vendeur Scooter', href: '/site-internet-vendeur-scooter', volume: '170/mois' },
      { label: 'Site Internet Atelier V\u00e9lo', href: '/site-internet-atelier-velo', volume: '320/mois' },
      { label: 'Site Internet Magasin V\u00e9lo \u00c9lectrique', href: '/site-internet-magasin-velo-electrique', volume: '480/mois' },
    ],
  },
  // ── Auto-école & Permis ──
  {
    categorie: 'Site Internet Auto-\u00e9cole',
    volume: '480/mois',
    href: '/site-internet-auto-ecole',
    sousMetiers: [
      { label: 'Site Internet Moto-\u00e9cole', href: '/site-internet-moto-ecole', volume: '260/mois' },
      { label: 'Site Internet Permis Bateau', href: '/site-internet-permis-bateau', volume: '210/mois' },
      { label: 'Site Internet Code en Ligne', href: '/site-internet-code-en-ligne', volume: '390/mois' },
    ],
  },
  // ── Immobilier ──
  {
    categorie: 'Site Internet Agent Immobilier',
    volume: '720/mois',
    href: '/site-internet-agent-immobilier',
    sousMetiers: [
      { label: 'Site Internet Agence Immobili\u00e8re', href: '/site-internet-agence-immobiliere', volume: '590/mois' },
      { label: 'Site Internet Diagnostiqueur', href: '/site-internet-diagnostiqueur', volume: '480/mois' },
      { label: 'Site Internet Promoteur Immobilier', href: '/site-internet-promoteur-immobilier', volume: '320/mois' },
      { label: 'Site Internet Chasseur Immobilier', href: '/site-internet-chasseur-immobilier', volume: '210/mois' },
      { label: 'Site Internet Syndic', href: '/site-internet-syndic', volume: '480/mois' },
      { label: 'Site Internet Gestionnaire Locatif', href: '/site-internet-gestionnaire-locatif', volume: '260/mois' },
    ],
  },
  // ── Sport & Coaching ──
  {
    categorie: 'Site Internet Coach Sportif',
    volume: '480/mois',
    href: '/site-internet-coach-sportif',
    sousMetiers: [
      { label: 'Site Internet Personal Trainer', href: '/site-internet-personal-trainer', volume: '390/mois' },
      { label: 'Site Internet Salle de Sport', href: '/site-internet-salle-de-sport', volume: '590/mois' },
      { label: 'Site Internet Crossfit', href: '/site-internet-crossfit', volume: '480/mois' },
      { label: 'Site Internet Pilates', href: '/site-internet-pilates', volume: '720/mois' },
      { label: 'Site Internet Yoga', href: '/site-internet-yoga', volume: '880/mois' },
      { label: 'Site Internet Boxe', href: '/site-internet-boxe', volume: '260/mois' },
      { label: 'Site Internet Tennis', href: '/site-internet-tennis', volume: '320/mois' },
      { label: 'Site Internet Club Sportif', href: '/site-internet-club-sportif', volume: '210/mois' },
    ],
  },
  // ── Conseil & Métiers du chiffre ──
  {
    categorie: 'Site Internet Expert-Comptable',
    volume: '720/mois',
    href: '/site-internet-expert-comptable',
    sousMetiers: [
      { label: 'Site Internet Consultant', href: '/site-internet-consultant', volume: '590/mois' },
      { label: 'Site Internet Coach Professionnel', href: '/site-internet-coach-professionnel', volume: '320/mois' },
      { label: 'Site Internet Formateur', href: '/site-internet-formateur', volume: '260/mois' },
      { label: 'Site Internet Consultant RH', href: '/site-internet-consultant-rh', volume: '210/mois' },
      { label: 'Site Internet Avocat Fiscaliste', href: '/site-internet-avocat-fiscaliste', volume: '170/mois' },
      { label: 'Site Internet Commissaire aux Comptes', href: '/site-internet-commissaire-aux-comptes', volume: '140/mois' },
    ],
  },
  // ── Architecture & Bureau d'études ──
  {
    categorie: 'Site Internet Architecte',
    volume: '590/mois',
    href: '/site-internet-architecte',
    sousMetiers: [
      { label: 'Site Internet Architecte d\u2019Int\u00e9rieur', href: '/site-internet-architecte-interieur', volume: '720/mois' },
      { label: 'Site Internet Bureau d\u2019\u00c9tudes', href: '/site-internet-bureau-etudes', volume: '390/mois' },
      { label: 'Site Internet \u00c9conomiste de la Construction', href: '/site-internet-economiste-construction', volume: '170/mois' },
      { label: 'Site Internet Ma\u00eetre d\u2019\u0152uvre', href: '/site-internet-maitre-oeuvre', volume: '320/mois' },
      { label: 'Site Internet Designer d\u2019Espace', href: '/site-internet-designer-espace', volume: '210/mois' },
    ],
  },
  // ── Mariage & Événementiel ──
  {
    categorie: 'Site Internet Wedding Planner',
    volume: '320/mois',
    href: '/site-internet-wedding-planner',
    sousMetiers: [
      { label: 'Site Internet Photographe Mariage', href: '/site-internet-photographe-mariage', volume: '590/mois' },
      { label: 'Site Internet DJ Mariage', href: '/site-internet-dj-mariage', volume: '390/mois' },
      { label: 'Site Internet Traiteur Mariage', href: '/site-internet-traiteur-mariage', volume: '260/mois' },
      { label: 'Site Internet Fleuriste Mariage', href: '/site-internet-fleuriste-mariage', volume: '210/mois' },
      { label: 'Site Internet D\u00e9corateur Mariage', href: '/site-internet-decoration-mariage', volume: '170/mois' },
      { label: 'Site Internet Vid\u00e9aste Mariage', href: '/site-internet-videaste-mariage', volume: '260/mois' },
      { label: 'Site Internet Officiant C\u00e9r\u00e9monie', href: '/site-internet-officiant-ceremonie', volume: '140/mois' },
    ],
  },
  // ── Photographie & Vidéo ──
  {
    categorie: 'Site Internet Photographe',
    volume: '1 100/mois',
    href: '/site-internet-photographe',
    sousMetiers: [
      { label: 'Site Internet Photographe Portrait', href: '/site-internet-photographe-portrait', volume: '480/mois' },
      { label: 'Site Internet Photographe Immobilier', href: '/site-internet-photographe-immobilier', volume: '390/mois' },
      { label: 'Site Internet Photographe Corporate', href: '/site-internet-photographe-corporate', volume: '260/mois' },
      { label: 'Site Internet Photographe Naissance', href: '/site-internet-photographe-naissance', volume: '320/mois' },
      { label: 'Site Internet Photographe Culinaire', href: '/site-internet-photographe-culinaire', volume: '210/mois' },
      { label: 'Site Internet Vid\u00e9aste', href: '/site-internet-videaste', volume: '590/mois' },
      { label: 'Site Internet Pilote Drone', href: '/site-internet-pilote-drone', volume: '320/mois' },
    ],
  },
  // ── Animaux ──
  {
    categorie: 'Site Internet V\u00e9t\u00e9rinaire',
    volume: '260/mois',
    href: '/site-internet-veterinaire',
    sousMetiers: [
      { label: 'Site Internet Toiletteur', href: '/site-internet-toiletteur', volume: '480/mois' },
      { label: 'Site Internet Pension Animaux', href: '/site-internet-pension-animaux', volume: '390/mois' },
      { label: 'Site Internet \u00c9ducateur Canin', href: '/site-internet-educateur-canin', volume: '590/mois' },
      { label: 'Site Internet Comportementaliste', href: '/site-internet-comportementaliste', volume: '260/mois' },
      { label: 'Site Internet Pet-Sitter', href: '/site-internet-pet-sitter', volume: '320/mois' },
      { label: 'Site Internet \u00c9levage', href: '/site-internet-elevage', volume: '210/mois' },
      { label: 'Site Internet Animalerie', href: '/site-internet-animalerie', volume: '480/mois' },
    ],
  },
  // ── Commerce de bouche ──
  {
    categorie: 'Site Internet Boulanger',
    volume: '390/mois',
    href: '/site-internet-boulanger',
    sousMetiers: [
      { label: 'Site Internet Boucher', href: '/site-internet-boucher', volume: '480/mois' },
      { label: 'Site Internet Poissonnier', href: '/site-internet-poissonnier', volume: '210/mois' },
      { label: 'Site Internet Fromager', href: '/site-internet-fromager', volume: '260/mois' },
      { label: 'Site Internet P\u00e2tissier', href: '/site-internet-patissier', volume: '590/mois' },
      { label: 'Site Internet Caviste', href: '/site-internet-caviste', volume: '480/mois' },
      { label: 'Site Internet Primeur', href: '/site-internet-primeur', volume: '210/mois' },
      { label: 'Site Internet Chocolatier', href: '/site-internet-chocolatier', volume: '320/mois' },
    ],
  },
  // ── Commerce de proximité ──
  {
    categorie: 'Site Internet Fleuriste',
    volume: '480/mois',
    href: '/site-internet-fleuriste',
    sousMetiers: [
      { label: 'Site Internet Opticien', href: '/site-internet-opticien', volume: '590/mois' },
      { label: 'Site Internet Bijoutier', href: '/site-internet-bijoutier', volume: '480/mois' },
      { label: 'Site Internet Cordonnier', href: '/site-internet-cordonnier', volume: '210/mois' },
      { label: 'Site Internet Concept Store', href: '/site-internet-concept-store', volume: '170/mois' },
      { label: 'Site Internet Librairie', href: '/site-internet-librairie', volume: '260/mois' },
    ],
  },
  // ── Médecines douces ──
  {
    categorie: 'Site Internet Naturopathe',
    volume: '320/mois',
    href: '/site-internet-naturopathe',
    sousMetiers: [
      { label: 'Site Internet Hypnoth\u00e9rapeute', href: '/site-internet-hypnotherapeute', volume: '480/mois' },
      { label: 'Site Internet R\u00e9flexologue', href: '/site-internet-reflexologue', volume: '320/mois' },
      { label: 'Site Internet \u00c9nerg\u00e9ticien', href: '/site-internet-energeticien', volume: '210/mois' },
      { label: 'Site Internet Praticien Shiatsu', href: '/site-internet-praticien-shiatsu', volume: '170/mois' },
      { label: 'Site Internet Magn\u00e9tiseur', href: '/site-internet-magnetiseur', volume: '260/mois' },
    ],
  },
  // ── Métiers du digital ──
  {
    categorie: 'Site Internet Graphiste',
    volume: '590/mois',
    href: '/site-internet-graphiste',
    sousMetiers: [
      { label: 'Site Internet Webdesigner', href: '/site-internet-webdesigner', volume: '720/mois' },
      { label: 'Site Internet D\u00e9veloppeur Freelance', href: '/site-internet-developpeur-freelance', volume: '590/mois' },
      { label: 'Site Internet Community Manager', href: '/site-internet-community-manager', volume: '880/mois' },
      { label: 'Site Internet R\u00e9dacteur Web', href: '/site-internet-redacteur-web', volume: '480/mois' },
      { label: 'Site Internet Illustrateur', href: '/site-internet-illustrateur', volume: '390/mois' },
      { label: 'Site Internet Motion Designer', href: '/site-internet-motion-designer', volume: '320/mois' },
      { label: 'Site Internet UI/UX Designer', href: '/site-internet-ui-ux-designer', volume: '590/mois' },
    ],
  },
  // ── Formation & Enseignement ──
  {
    categorie: 'Site Internet Formateur',
    volume: '260/mois',
    href: '/site-internet-formateur',
    sousMetiers: [
      { label: 'Site Internet Organisme de Formation', href: '/site-internet-organisme-formation', volume: '480/mois' },
      { label: 'Site Internet \u00c9cole de Musique', href: '/site-internet-ecole-musique', volume: '390/mois' },
      { label: 'Site Internet \u00c9cole de Danse', href: '/site-internet-ecole-danse', volume: '320/mois' },
      { label: 'Site Internet Prof Particulier', href: '/site-internet-prof-particulier', volume: '590/mois' },
      { label: 'Site Internet Coach Scolaire', href: '/site-internet-coach-scolaire', volume: '210/mois' },
      { label: 'Site Internet Cours de Langues', href: '/site-internet-cours-langues', volume: '480/mois' },
    ],
  },
  // ── Services à la personne ──
  {
    categorie: 'Site Internet Aide \u00e0 Domicile',
    volume: '210/mois',
    href: '/site-internet-aide-a-domicile',
    sousMetiers: [
      { label: 'Site Internet Garde d\u2019Enfants', href: '/site-internet-garde-enfants', volume: '590/mois' },
      { label: 'Site Internet M\u00e9nage \u00e0 Domicile', href: '/site-internet-menage-domicile', volume: '390/mois' },
      { label: 'Site Internet Portage de Repas', href: '/site-internet-portage-repas', volume: '260/mois' },
      { label: 'Site Internet Soins Esth\u00e9tiques \u00e0 Domicile', href: '/site-internet-soins-esthetiques-domicile', volume: '210/mois' },
      { label: 'Site Internet Bricolage Particulier', href: '/site-internet-bricolage-particulier', volume: '170/mois' },
    ],
  },
  // ── Mode & Textile ──
  {
    categorie: 'Site Internet Couturier',
    volume: '170/mois',
    href: '/site-internet-couturier',
    sousMetiers: [
      { label: 'Site Internet Styliste', href: '/site-internet-styliste', volume: '260/mois' },
      { label: 'Site Internet Retoucherie', href: '/site-internet-retoucherie', volume: '210/mois' },
      { label: 'Site Internet Cr\u00e9ateur de Mode', href: '/site-internet-createur-mode', volume: '170/mois' },
      { label: 'Site Internet Atelier Couture', href: '/site-internet-atelier-couture', volume: '140/mois' },
    ],
  },
  // ── Santé (dentaire, médecine, pharmacie, périnatalité, nutrition) ──
  {
    categorie: 'Site Internet Dentiste',
    volume: '2 400/mois',
    href: '/site-internet-dentiste',
    sousMetiers: [
      { label: 'Site Internet Orthodontiste', href: '/site-internet-orthodontiste', volume: '590/mois' },
      { label: 'Site Internet Chirurgien-Dentiste', href: '/site-internet-chirurgien-dentiste', volume: '320/mois' },
      { label: 'Site Internet Cabinet Dentaire', href: '/site-internet-cabinet-dentaire', volume: '480/mois' },
      { label: 'Site Internet Implantologue', href: '/site-internet-implantologue', volume: '170/mois' },
      { label: 'Site Internet Dentiste P\u00e9diatrique', href: '/site-internet-dentiste-pediatrique', volume: '140/mois' },
    ],
  },
  {
    categorie: 'Site Internet M\u00e9decin',
    volume: '1 600/mois',
    href: '/site-internet-medecin',
    sousMetiers: [
      { label: 'Site Internet M\u00e9decin G\u00e9n\u00e9raliste', href: '/site-internet-medecin-generaliste', volume: '480/mois' },
      { label: 'Site Internet Cabinet M\u00e9dical', href: '/site-internet-cabinet-medical', volume: '720/mois' },
      { label: 'Site Internet M\u00e9decin du Sport', href: '/site-internet-medecin-sport', volume: '260/mois' },
      { label: 'Site Internet Dermatologue', href: '/site-internet-dermatologue', volume: '320/mois' },
      { label: 'Site Internet Cardiologue', href: '/site-internet-cardiologue', volume: '210/mois' },
      { label: 'Site Internet P\u00e9diatre', href: '/site-internet-pediatre', volume: '260/mois' },
    ],
  },
  {
    categorie: 'Site Internet Pharmacie',
    volume: '390/mois',
    href: '/site-internet-pharmacie',
    sousMetiers: [
      { label: 'Site Internet Parapharmacie', href: '/site-internet-parapharmacie', volume: '210/mois' },
      { label: 'Site Internet Herboristerie', href: '/site-internet-herboristerie', volume: '170/mois' },
      { label: 'Site Internet Pharmacien', href: '/site-internet-pharmacien', volume: '260/mois' },
    ],
  },
  {
    categorie: 'Site Internet Sage-Femme',
    volume: '260/mois',
    href: '/site-internet-sage-femme',
    sousMetiers: [
      { label: 'Site Internet Doula', href: '/site-internet-doula', volume: '170/mois' },
      { label: 'Site Internet Conseill\u00e8re en Lactation', href: '/site-internet-conseillere-lactation', volume: '110/mois' },
      { label: 'Site Internet Pr\u00e9paration Naissance', href: '/site-internet-preparation-naissance', volume: '140/mois' },
    ],
  },
  {
    categorie: 'Site Internet Di\u00e9t\u00e9ticien',
    volume: '720/mois',
    href: '/site-internet-dieteticien',
    sousMetiers: [
      { label: 'Site Internet Nutritionniste', href: '/site-internet-nutritionniste', volume: '590/mois' },
      { label: 'Site Internet Coach Nutrition', href: '/site-internet-coach-nutrition', volume: '320/mois' },
      { label: 'Site Internet Micro-Nutritionniste', href: '/site-internet-micro-nutritionniste', volume: '210/mois' },
      { label: 'Site Internet Naturopathe Nutrition', href: '/site-internet-naturopathe-nutrition', volume: '140/mois' },
    ],
  },
  // ── BTP étendu (serrurerie, chauffage, piscine) ──
  {
    categorie: 'Site Internet Serrurier',
    volume: '720/mois',
    href: '/site-internet-serrurier',
    sousMetiers: [
      { label: 'Site Internet D\u00e9pannage Serrurier', href: '/site-internet-depannage-serrurier', volume: '320/mois' },
      { label: 'Site Internet Urgence Serrurier', href: '/site-internet-urgence-serrurier', volume: '260/mois' },
      { label: 'Site Internet Ouverture Porte', href: '/site-internet-ouverture-porte', volume: '170/mois' },
      { label: 'Site Internet Installateur Alarme', href: '/site-internet-installateur-alarme', volume: '210/mois' },
    ],
  },
  {
    categorie: 'Site Internet Chauffagiste',
    volume: '480/mois',
    href: '/site-internet-chauffagiste',
    sousMetiers: [
      { label: 'Site Internet Plombier-Chauffagiste', href: '/site-internet-plombier-chauffagiste', volume: '390/mois' },
      { label: 'Site Internet Pompe \u00e0 Chaleur', href: '/site-internet-pompe-a-chaleur', volume: '590/mois' },
      { label: 'Site Internet Ramoneur', href: '/site-internet-ramoneur', volume: '320/mois' },
      { label: 'Site Internet Installateur Chaudi\u00e8re', href: '/site-internet-installateur-chaudiere', volume: '210/mois' },
      { label: 'Site Internet Climatisation', href: '/site-internet-climatisation', volume: '480/mois' },
    ],
  },
  {
    categorie: 'Site Internet Piscinier',
    volume: '590/mois',
    href: '/site-internet-piscinier',
    sousMetiers: [
      { label: 'Site Internet Constructeur Piscine', href: '/site-internet-constructeur-piscine', volume: '720/mois' },
      { label: 'Site Internet Entretien Piscine', href: '/site-internet-entretien-piscine', volume: '390/mois' },
      { label: 'Site Internet Spa Jacuzzi', href: '/site-internet-spa-jacuzzi', volume: '210/mois' },
      { label: 'Site Internet Pisciniste', href: '/site-internet-pisciniste', volume: '170/mois' },
    ],
  },
  // ── Services & Proximité ──
  {
    categorie: 'Site Internet Entreprise de Nettoyage',
    volume: '880/mois',
    href: '/site-internet-entreprise-nettoyage',
    sousMetiers: [
      { label: 'Site Internet Nettoyage Industriel', href: '/site-internet-nettoyage-industriel', volume: '390/mois' },
      { label: 'Site Internet Nettoyage Vitres', href: '/site-internet-nettoyage-vitres', volume: '260/mois' },
      { label: 'Site Internet M\u00e9nage Professionnel', href: '/site-internet-menage-professionnel', volume: '320/mois' },
      { label: 'Site Internet Entretien Bureaux', href: '/site-internet-entretien-bureaux', volume: '210/mois' },
      { label: 'Site Internet Soci\u00e9t\u00e9 de Nettoyage', href: '/site-internet-societe-nettoyage', volume: '590/mois' },
    ],
  },
  {
    categorie: 'Site Internet D\u00e9m\u00e9nageur',
    volume: '590/mois',
    href: '/site-internet-demenageur',
    sousMetiers: [
      { label: 'Site Internet Entreprise D\u00e9m\u00e9nagement', href: '/site-internet-entreprise-demenagement', volume: '480/mois' },
      { label: 'Site Internet Garde-Meubles', href: '/site-internet-garde-meubles', volume: '320/mois' },
      { label: 'Site Internet Transport Mobilier', href: '/site-internet-transport-mobilier', volume: '170/mois' },
      { label: 'Site Internet D\u00e9m\u00e9nagement International', href: '/site-internet-demenagement-international', volume: '210/mois' },
    ],
  },
  {
    categorie: 'Site Internet Taxi',
    volume: '480/mois',
    href: '/site-internet-taxi',
    sousMetiers: [
      { label: 'Site Internet VTC', href: '/site-internet-vtc', volume: '590/mois' },
      { label: 'Site Internet Chauffeur Priv\u00e9', href: '/site-internet-chauffeur-prive', volume: '320/mois' },
      { label: 'Site Internet Transport A\u00e9roport', href: '/site-internet-transport-aeroport', volume: '260/mois' },
      { label: 'Site Internet Taxi Conventionn\u00e9', href: '/site-internet-taxi-conventionne', volume: '170/mois' },
    ],
  },
  {
    categorie: 'Site Internet Pompes Fun\u00e8bres',
    volume: '390/mois',
    href: '/site-internet-pompes-funebres',
    sousMetiers: [
      { label: 'Site Internet Marbrerie Fun\u00e9raire', href: '/site-internet-marbrerie-funeraire', volume: '210/mois' },
      { label: 'Site Internet Cr\u00e9matorium', href: '/site-internet-crematorium', volume: '170/mois' },
      { label: 'Site Internet Services Fun\u00e9raires', href: '/site-internet-services-funeraires', volume: '260/mois' },
    ],
  },
  // ── Digital & Tech étendu ──
  {
    categorie: 'Site Internet D\u00e9pannage Informatique',
    volume: '880/mois',
    href: '/site-internet-depannage-informatique',
    sousMetiers: [
      { label: 'Site Internet Technicien Informatique', href: '/site-internet-technicien-informatique', volume: '390/mois' },
      { label: 'Site Internet R\u00e9paration Ordinateur', href: '/site-internet-reparation-ordinateur', volume: '720/mois' },
      { label: 'Site Internet Infog\u00e9rance', href: '/site-internet-infogerance', volume: '320/mois' },
      { label: 'Site Internet Maintenance Informatique', href: '/site-internet-maintenance-informatique', volume: '480/mois' },
      { label: 'Site Internet Assistance Informatique', href: '/site-internet-assistance-informatique', volume: '260/mois' },
    ],
  },
  // ── Agriculture & Producteurs ──
  {
    categorie: 'Site Internet Producteur',
    volume: '590/mois',
    href: '/site-internet-producteur',
    sousMetiers: [
      { label: 'Site Internet Mara\u00eecher', href: '/site-internet-maraicher', volume: '390/mois' },
      { label: 'Site Internet Apiculteur', href: '/site-internet-apiculteur', volume: '260/mois' },
      { label: 'Site Internet Viticulteur', href: '/site-internet-viticulteur', volume: '480/mois' },
      { label: 'Site Internet \u00c9leveur', href: '/site-internet-eleveur', volume: '320/mois' },
      { label: 'Site Internet Producteur Bio', href: '/site-internet-producteur-bio', volume: '390/mois' },
      { label: 'Site Internet Ferme', href: '/site-internet-ferme', volume: '210/mois' },
    ],
  },
]

const pages = [
  { label: 'Accueil', href: '/' },
  { label: '\u00c0 propos', href: '/a-propos' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
  { label: 'Audit SEO Gratuit', href: '/audit-seo-gratuit' },
]

const etudes = [
  { label: '\u00c9tudes de cas', href: '/etudes-de-cas' },
  { label: 'Sites Internet', href: '/etudes-de-cas/sites-internet' },
  { label: 'R\u00e9f\u00e9rencement', href: '/etudes-de-cas/referencement' },
  { label: 'Applications Web', href: '/etudes-de-cas/applications-web' },
]

const legal = [
  { label: 'Mentions l\u00e9gales', href: '/mentions-legales' },
  { label: 'Politique de confidentialit\u00e9', href: '/politique-de-confidentialite' },
  { label: 'Conditions g\u00e9n\u00e9rales', href: '/conditions-generales' },
  { label: 'Politique cookies', href: '/politique-cookies' },
]

function SitemapSection({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="font-display text-base font-semibold text-foreground mb-3">{title}</h2>
      <ul className="space-y-1.5">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function PlanDuSitePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-6xl px-4 pt-20 pb-24 sm:px-6 lg:pt-28 lg:pb-32">

          <div className="text-center mb-16">
            <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase mb-4">
              Navigation
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Plan du site
            </h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
              Retrouvez l&rsquo;ensemble de nos services SEO, cr&eacute;ation de sites et d&eacute;veloppement web en Bretagne.
            </p>
          </div>

          {/* SEO & Référencement — LOCAL */}
          <div className="mb-14">
            <h2 className="font-display text-xl font-bold text-foreground mb-2 pb-3 border-b border-border/50">
              R&eacute;f&eacute;rencement & SEO
            </h2>
            <p className="text-xs text-muted-foreground/50 mb-8">Par ville en Bretagne & Nantes</p>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              <SitemapSection title="Consultant SEO" links={consultantSeo} />
              <SitemapSection title="Freelance SEO" links={freelanceSeo} />
              <SitemapSection title="Agence SEO" links={agenceSeo} />
              <SitemapSection title="Agence R&eacute;f&eacute;rencement" links={agenceReferencement} />
              <SitemapSection title="R&eacute;f&eacute;rencement Naturel" links={referencementNaturel} />
              <SitemapSection title="R&eacute;f&eacute;rencement Local" links={referencementLocal} />
            </div>
          </div>

          {/* Création de sites — LOCAL */}
          <div className="mb-14">
            <h2 className="font-display text-xl font-bold text-foreground mb-2 pb-3 border-b border-border/50">
              Cr&eacute;ation de Site Internet & D&eacute;veloppement Web
            </h2>
            <p className="text-xs text-muted-foreground/50 mb-8">Par ville en Bretagne & Nantes</p>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <SitemapSection title="Par ville" links={siteVilles} />
              <SitemapSection title="D&eacute;veloppement Web" links={devWeb} />
            </div>
          </div>

          {/* Par métier — NATIONAL */}
          <div className="mb-14">
            <h2 className="font-display text-xl font-bold text-foreground mb-2 pb-3 border-b border-border/50">
              Site Internet par M&eacute;tier
            </h2>
            <p className="text-xs text-muted-foreground/50 mb-8">Pages nationales par profession</p>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {metiersCategories.map((cat) => (
                <div key={cat.categorie}>
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-display text-base font-semibold text-foreground">
                      <Link href={cat.href} className="hover:text-primary transition-colors">
                        {cat.categorie}
                      </Link>
                    </h3>
                    <span className="text-xs text-primary/70 font-medium shrink-0">{cat.volume}</span>
                  </div>
                  <ul className="space-y-1.5 mt-3">
                    {cat.sousMetiers.map((m) => (
                      <li key={m.href} className="flex items-baseline justify-between gap-2">
                        <Link href={m.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          {m.label}
                        </Link>
                        <span className="text-xs text-muted-foreground/50 shrink-0">{m.volume}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Autres pages */}
          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-8 pb-3 border-b border-border/50">
              Autres pages
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <SitemapSection title="Pages" links={pages} />
              <SitemapSection title="&Eacute;tudes de Cas" links={etudes} />
              <SitemapSection title="L&eacute;gal" links={legal} />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
