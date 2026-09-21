'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { usePathname } from 'next/navigation'

export type Lang = 'fr' | 'en'

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'fr',
  setLang: () => {},
})

export function HomeLangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr')
  const pathname = usePathname()

  // Reset to FR when leaving the homepage — translation scope is homepage only
  useEffect(() => {
    if (pathname !== '/') setLang('fr')
  }, [pathname])

  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>
}

export function useHomeLang() {
  return useContext(LangCtx)
}

export const t = {
  hero: {
    eyebrow: { fr: 'Victor Béasse - Référencement Google et IA', en: 'Victor Béasse - Google and AI visibility' },
    h1Part1: { fr: 'Plus de clients', en: 'More clients' },
    h1Part2: { fr: 'grâce à', en: 'thanks to' },
    h1Part3: { fr: "Google et l'IA", en: 'Google and AI' },
    subtitle: {
      fr: "Vos clients vous cherchent sur Google et dans l'IA. Je vous y rends visible et crédible. Développeur web et expert SEO depuis 5 ans, je maîtrise toute la chaîne, du référencement au site, et j'accompagne les TPE et PME dans leur croissance.",
      en: 'Your clients search on Google and in AI. I make you visible and credible there. Web developer and SEO expert for 5 years, I master the whole chain, from SEO to the site itself, and I help small businesses grow.',
    },
    ctaPrimary: { fr: 'Demandez votre audit gratuit', en: 'Request your free audit' },
    ctaSecondary: { fr: 'ou prendre directement rendez-vous', en: 'or book a meeting directly' },
    reviews: { fr: '80+ avis', en: '80+ reviews' },
    proofs: {
      fr: [
        { value: '150+', label: 'clients SEO accompagnés' },
        { value: '200+', label: 'sites créés' },
        { value: '10+', label: 'applications sur mesure' },
      ],
      en: [
        { value: '150+', label: 'SEO clients supported' },
        { value: '200+', label: 'websites delivered' },
        { value: '10+', label: 'custom apps built' },
      ],
    },
  },
  audiences: {
    fr: [
      'PME B2B (5-30 salariés)',
      "Cabinets d'avocats",
      'Notaires & Études',
      'Orthodontistes & Cabinets dentaires',
      'Vétérinaires premium',
      'Experts-comptables',
      "Architectes & Bureaux d'études",
      'Cabinets de conseil B2B',
      'Commissaires-priseurs',
      'Maisons de ventes',
    ],
    en: [
      'B2B SMBs (5-30 employees)',
      'Law firms',
      'Notaries',
      'Orthodontists & Dental practices',
      'Premium veterinarians',
      'Accounting firms',
      'Architects & Design studios',
      'B2B consulting firms',
      'Auctioneers',
      'Auction houses',
    ],
  },
  founder: {
    eyebrow: { fr: 'Votre expert en visibilité Google et IA', en: 'Your Google and AI visibility expert' },
    h2Part1: { fr: 'Ce que je crée', en: 'What I create' },
    h2Part2: { fr: 'pour votre PME', en: 'for your business' },
    resultLabel: { fr: 'Votre résultat', en: 'Your outcome' },
    resultTags: {
      fr: ['Plus de prospects qualifiés', 'Vous surpassez vos concurrents', 'Visible sur Google et dans les IA'],
      en: ['More qualified leads', 'You outrank your competitors', 'Visible on Google and in AI'],
    },
    videoCaption: {
      fr: "2 minutes pour comprendre comment j'accompagne les dirigeants de PME.",
      en: '2 minutes to understand how I work with SMB leaders.',
    },
    learnMore: { fr: 'En savoir plus', en: 'Learn more' },
    seeServices: { fr: 'Voir les services', en: 'See services' },
    resultCta: { fr: 'Voir les études de cas', en: 'See case studies' },
  },
  problemStats: {
    eyebrow: { fr: 'Le constat pour les TPE et PME', en: 'The reality for small businesses' },
    h2Part1: { fr: 'Cette situation', en: 'Does this' },
    h2Part2: { fr: 'vous dit quelque chose', en: 'sound familiar' },
    stat1Label: { fr: "des intentions d'achat passent par Google", en: 'of purchase intent goes through Google' },
    stat1Title: {
      fr: 'Votre site est joli. Votre concurrence, elle, encaisse',
      en: 'Your site looks great. Meanwhile, your competition is cashing in',
    },
    stat1Desc: {
      fr: "C'est 11 fois plus que sur les réseaux sociaux. Vos prospects tapent votre métier sur Google et atterrissent chez vos concurrents. Tous les jours.",
      en: "That's 11 times more than on social media. Prospects type your business into Google and land on your competitors. Every day.",
    },
    stat2Label: {
      fr: 'des décisions B2B commencent en ligne',
      en: 'of B2B decisions start online',
    },
    stat2Title: {
      fr: 'Vos clients ne se contentent plus de Google. Ils demandent à ChatGPT',
      en: "Your clients don't stop at Google. They ask ChatGPT",
    },
    stat2Desc: {
      fr: "Google, ChatGPT, Claude, Perplexity : vos prospects vous comparent partout. Si l'IA ne vous cite pas, vous n'existez pas. Vos concurrents, eux, sont déjà cités.",
      en: "Google, ChatGPT, Claude, Perplexity: prospects compare you everywhere. If AI doesn't cite you, you don't exist. Your competitors already do.",
    },
  },
  method: {
    eyebrow: { fr: 'Ma méthode', en: 'My method' },
    h2Part1: { fr: "De l'invisible à", en: 'From invisible to' },
    h2Part2: { fr: 'générateur de clients', en: 'client generator' },
    subtitle: {
      fr: 'Une approche structurée pour rendre votre entreprise visible sur Google ET dans les réponses de ChatGPT, Claude, Perplexity.',
      en: 'A structured approach to make your business visible on Google AND in answers from ChatGPT, Claude, Perplexity.',
    },
    steps: {
      fr: [
        {
          title: 'Audit gratuit',
          description: 'Site, fiche Google, concurrents, réponses des IA : ce qui marche, ce qui bloque.',
        },
        {
          title: 'Refonte ou optimisation',
          description: 'Une recommandation claire : périmètre, délai, budget. Vous décidez.',
        },
        {
          title: 'SEO chaque mois',
          description: 'Contenu et optimisations pour dépasser vos concurrents sur Google et dans les IA.',
        },
        {
          title: 'Suivi des résultats',
          description: 'Tout dans votre application VBWEB. Vous gardez votre temps pour votre métier.',
        },
      ],
      en: [
        {
          title: 'Free audit',
          description: 'Site, Google listing, competitors, AI answers: what works, what holds you back.',
        },
        {
          title: 'Rebuild or optimise',
          description: 'A clear recommendation: scope, timeline, budget. You decide.',
        },
        {
          title: 'SEO every month',
          description: 'Content and improvements to outrank your competitors on Google and in AI.',
        },
        {
          title: 'Results tracking',
          description: 'All in your VBWEB app. You keep your time for your business.',
        },
      ],
    },
    cta: { fr: 'Audit gratuit', en: 'Free audit' },
    bonusKicker: { fr: 'En bonus', en: 'Bonus' },
    bonusTitle: {
      fr: 'Des outils sur-mesure pour les dirigeants débordés',
      en: 'Custom tools for overworked leaders',
    },
    bonusDesc: {
      fr: "CRM, tableaux de bord, automatisations IA adaptés à votre PME. Vous arrêtez de perdre du temps sur l'administratif, vous le récupérez pour votre métier.",
      en: 'CRM, dashboards, AI automations tailored to your SMB. Stop wasting time on admin, get it back for your business.',
    },
  },
  results: {
    eyebrow: { fr: 'Résultats clients', en: 'Client results' },
    h2Part1: { fr: 'Des résultats', en: 'Real results,' },
    h2Part2: { fr: 'concrets et mesurables', en: 'concrete and measurable' },
    cases: {
      fr: [
        { name: 'Rennes Pneus', type: 'Garage automobile', big: '3 600', unit: 'visites organiques / mois', support: 'Depuis 30 visites · ~500 appels/mois · 1ᵉʳ sur « Pneus Rennes »' },
        { name: 'EPICU', type: 'Marque de guides & expériences', big: '5 000', unit: 'visites organiques / mois', support: 'Depuis ~100 visites · +4 900 % de trafic organique' },
        { name: 'Jumelles.com', type: 'E-commerce, 800+ produits', big: '+33 %', unit: 'trafic organique en 12 mois', support: 'Taux de rebond réduit de 68 % à 41 %' },
      ],
      en: [
        { name: 'Rennes Pneus', type: 'Auto garage', big: '3,600', unit: 'organic visits / month', support: 'From 30 visits · ~500 calls/month · #1 on “Pneus Rennes”' },
        { name: 'EPICU', type: 'Guides & experiences brand', big: '5,000', unit: 'organic visits / month', support: 'From ~100 visits · +4,900% organic traffic' },
        { name: 'Jumelles.com', type: 'E-commerce, 800+ products', big: '+33%', unit: 'organic traffic in 12 months', support: 'Bounce rate cut from 68% to 41%' },
      ],
    },
    disclaimer: {
      fr: 'Chaque activité a ses spécificités, mais les fondamentaux du référencement sont les mêmes dans tous les secteurs. La vraie différence se joue sur des années d’expertise.',
      en: 'Every business has its specifics, but the fundamentals of SEO are the same across every industry. The real difference comes from years of expertise.',
    },
    caseStudyLink: {
      fr: 'Voir toutes les études de cas',
      en: 'See all case studies',
    },
  },
  testimonials: {
    badge: { fr: '80+ avis Google', en: '80+ Google reviews' },
    h2Part1: { fr: 'Ils en parlent', en: 'They tell it' },
    h2Part2: { fr: 'mieux que moi', en: 'better than I do' },
    cta: { fr: 'Laissez un avis', en: 'Leave a review' },
  },
  caseStudies: {
    eyebrow: { fr: 'Portfolio', en: 'Portfolio' },
    h2Part1: { fr: 'Nos', en: 'Our' },
    h2Part2: { fr: 'réalisations', en: 'work' },
    subtitle: {
      fr: 'Trois disciplines, une obsession : transformer votre digital en levier de croissance.',
      en: 'Three disciplines, one obsession: turn your digital presence into a growth engine.',
    },
    categories: {
      fr: [
        {
          title: 'Sites Internet',
          description:
            'Vitrines, e-commerce et sites sur-mesure qui transforment vos visiteurs en clients.',
        },
        {
          title: 'Référencement SEO',
          description:
            'Stratégies de visibilité Google qui propulsent mes clients en première page.',
        },
        {
          title: 'IA en entreprise',
          description:
            'CRM, automatisations IA et outils sur mesure pour gagner du temps, gagner en productivité et automatiser vos tâches.',
        },
      ],
      en: [
        {
          title: 'Websites',
          description:
            'Showcase sites, e-commerce and custom builds that turn visitors into clients.',
        },
        {
          title: 'SEO',
          description: 'Google visibility strategies that push my clients to page one.',
        },
        {
          title: 'AI for business',
          description: 'CRMs, AI automations and custom tools to save time, boost productivity and automate your tasks.',
        },
      ],
    },
    seeAll: { fr: 'Voir les études de cas', en: 'See case studies' },
  },
  offers: {
    eyebrow: { fr: 'Ce que je fais', en: 'What I do' },
    title: { fr: 'Mon métier : vous rendre visible et générer des clients.', en: 'My job: make you visible and generate clients.' },
    intro: {
      fr: 'Je suis à la fois expert en référencement Google, en visibilité sur les IA, et développeur web full-stack. Ce double profil, c’est votre avantage : je connecte le référencement, le site et la technique, j’interviens sur tout le process d’un seul coup et je repère les failles techniques que les autres laissent passer.',
      en: 'I’m both a Google and AI visibility expert and a full-stack web developer. That dual profile is your advantage: I connect SEO, the site and the tech, act on the whole process at once, and spot the technical flaws others miss.',
    },
    items: {
      fr: [
        { label: 'Référencement Google et visibilité IA', href: '/referencement-seo' },
        { label: "Création de site et développement d'applications complexes", href: '/creation-site-internet' },
        { label: 'IA en entreprise & automatisations', href: '/ia-entreprise' },
      ],
      en: [
        { label: 'Google and AI visibility', href: '/referencement-seo' },
        { label: 'Website creation & complex app development', href: '/creation-site-internet' },
        { label: 'AI for business & automation', href: '/ia-entreprise' },
      ],
    },
    worksEyebrow: { fr: 'Réalisations', en: 'Selected work' },
    worksCta: { fr: 'Voir les {count} sites', en: 'See all {count} sites' },
  },
  ctaGallery: {
    eyebrow: { fr: 'Audit gratuit, sans engagement', en: 'Free audit, no commitment' },
    h2: {
      fr: 'Votre entreprise est-elle visible sur Google et dans ChatGPT ?',
      en: 'Is your business visible on Google and in ChatGPT?',
    },
    description: {
      fr: "Je vous réponds en vidéo, 10 minutes, sous 48 heures : ce qui fonctionne sur votre site, ce qui vous fait perdre des clients sur Google, et si les IA vous citent ou citent vos concurrents. Vous repartez avec un plan d'action clair, que vous deveniez client ou non.",
      en: 'I answer you on video, 10 minutes, within 48 hours: what works on your site, what makes you lose clients on Google, and whether AI cites you or your competitors. You leave with a clear action plan, whether you become a client or not.',
    },
    ctaPrimary: { fr: 'Demandez votre audit gratuit', en: 'Request your free audit' },
    ctaSecondary: {
      fr: 'ou contactez-moi directement',
      en: 'or contact me directly',
    },
  },
  navbar: {
    prendreRdv: { fr: 'Prendre RDV', en: 'Book a call' },
    services: { fr: 'Services', en: 'Services' },
    caseStudies: { fr: 'Études de cas', en: 'Case studies' },
    items: {
      fr: {
        about: { label: 'À propos', description: "L'histoire et la vision" },
        seo: { label: 'Référencement SEO', description: 'Optimisation technique et contenu' },
        localSeo: { label: 'Référencement local', description: 'Google Maps et SEO local' },
        webDesign: { label: 'Création de site internet', description: 'Sites vitrines & e-commerce' },
        ia: { label: 'IA en entreprise', description: 'Automatisations & outils sur-mesure' },
        diagnostic: { label: 'Audit gratuit', description: 'Analyse complète sous 48h' },
        sites: { label: 'Site internet', description: 'Vitrines, e-commerce, sur-mesure' },
        seoCase: { label: 'Référencement', description: 'Stratégies SEO et résultats' },
        apps: { label: 'IA en entreprise', description: 'CRM, dashboards, automatisations' },
      },
      en: {
        about: { label: 'About', description: 'Story and vision' },
        seo: { label: 'SEO', description: 'Technical SEO & content' },
        localSeo: { label: 'Local SEO', description: 'Google Maps & local SEO' },
        webDesign: { label: 'Website creation', description: 'Showcase & e-commerce sites' },
        ia: { label: 'AI for business', description: 'Automation & custom tools' },
        diagnostic: { label: 'Free audit', description: 'Full analysis within 48h' },
        sites: { label: 'Website', description: 'Showcase, e-commerce, custom' },
        seoCase: { label: 'SEO', description: 'SEO strategies & results' },
        apps: { label: 'AI for business', description: 'CRMs, dashboards, automation' },
      },
    },
  },
  popup: {
    badge: { fr: '100 % gratuit · sans engagement', en: '100% free · no commitment' },
    title: { fr: 'Votre audit de visibilité en vidéo', en: 'Your video visibility audit' },
    subtitle: {
      fr: 'Analyse vidéo de 10 min de votre visibilité sur Google + IA. Sous 48h.',
      en: '10-min video analysis of your visibility on Google + AI. Within 48h.',
    },
    nameLabel: { fr: 'Votre nom', en: 'Your name' },
    emailLabel: { fr: 'Votre email', en: 'Your email' },
    urlLabel: { fr: 'Votre site', en: 'Your website' },
    siteNone: { fr: "Je n'ai pas encore de site", en: "I don't have a website yet" },
    messageLabel: { fr: 'Votre projet', en: 'Your project' },
    messagePlaceholder: { fr: 'En quelques mots', en: 'A few words' },
    optional: { fr: 'optionnel', en: 'optional' },
    budgetLabel: { fr: 'Budget mensuel envisagé', en: 'Monthly budget' },
    budgetPlaceholder: { fr: 'Sélectionnez votre budget…', en: 'Select your budget…' },
    budgetOptions: {
      fr: [
        '- de 1 500 €/mois',
        '1 500 € - 3 000 €/mois',
        '3 000 € - 5 000 €/mois',
        '+ de 5 000 €/mois',
        'Je préfère en parler de vive voix',
      ],
      en: [
        '< 1,500 €/month',
        '1,500 € - 3,000 €/month',
        '3,000 € - 5,000 €/month',
        '> 5,000 €/month',
        "I'd rather discuss it in person",
      ],
    },
    submit: { fr: 'Recevoir mon audit', en: 'Get my audit' },
    submitting: { fr: 'Envoi en cours…', en: 'Sending…' },
    or: { fr: 'ou', en: 'or' },
    calendly: { fr: 'Prendre directement rendez-vous', en: 'Book a meeting directly' },
    successTitle: { fr: 'Demande envoyée !', en: 'Request sent!' },
    successMessage: {
      fr: 'Je vous envoie votre audit vidéo sous 48h. Pensez à vérifier vos spams.',
      en: "I'll send you the video audit within 48h. Check your spam folder just in case.",
    },
    close: { fr: 'Fermer', en: 'Close' },
    errorGeneric: {
      fr: 'Une erreur est survenue. Réessayez ou contactez-nous directement.',
      en: 'An error occurred. Please try again or contact us directly.',
    },
    errorNetwork: { fr: 'Erreur réseau. Vérifiez votre connexion.', en: 'Network error. Check your connection.' },
  },
  footer: {
    eyebrow: { fr: 'Discutons', en: "Let's talk" },
    h2Part1: { fr: 'Un projet en', en: 'Got a project' },
    h2Part2: { fr: 'tête', en: 'in mind' },
    subtitle: {
      fr: 'Réponse sous 24h. Échange sans engagement.',
      en: 'Reply within 24h. No commitment.',
    },
    cta: { fr: 'Parlez-moi de votre projet', en: 'Tell me about your project' },
    brandDesc: {
      fr: "VBWEB, fondée par Victor Béasse. J'accompagne les entreprises dans leur stratégie digitale : sites internet, référencement naturel, applications web sur mesure.",
      en: 'VBWEB, founded by Victor Béasse. I help businesses with their digital strategy: websites, SEO, custom web applications.',
    },
    navTitle: { fr: 'Navigation', en: 'Navigation' },
    servicesTitle: { fr: 'Services', en: 'Services' },
    legalTitle: { fr: 'Légal', en: 'Legal' },
    copyright: { fr: 'Tous droits réservés', en: 'All rights reserved' },
    subTagline: { fr: 'Référencement Google et IA', en: 'Google and AI visibility' },
  },
} as const
