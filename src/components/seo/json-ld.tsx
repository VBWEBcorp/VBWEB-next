import { siteConfig } from '@/lib/seo'

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: [siteConfig.shortName, siteConfig.legalName],
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.svg`,
    founder: {
      '@type': 'Person',
      name: siteConfig.founder,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      email: siteConfig.email,
      contactType: 'customer service',
      availableLanguage: 'French',
    },
    sameAs: siteConfig.socialProfiles,
  }
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.name,
    alternateName: [siteConfig.shortName, siteConfig.legalName],
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: siteConfig.ogImage,
    description: siteConfig.description,
    founder: {
      '@id': `${siteConfig.url}/#person`,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    areaServed: [
      { '@type': 'City', name: 'Rennes' },
      { '@type': 'Country', name: 'France' },
      { '@type': 'Place', name: 'Worldwide (remote)' },
    ],
    knowsAbout: [
      'Référencement naturel',
      'SEO local',
      'Google Business Profile',
      'Création de site internet',
      'Audit SEO',
      'Core Web Vitals',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Référencement naturel SEO',
            url: `${siteConfig.url}/referencement-seo`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Référencement local',
            url: `${siteConfig.url}/referencement-seo`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Création de site internet',
            url: `${siteConfig.url}/creation-site-internet`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Audit SEO gratuit',
            url: `${siteConfig.url}/audit-seo-gratuit`,
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '80',
      bestRating: '5',
    },
    priceRange: '€€',
    sameAs: siteConfig.socialProfiles,
  }
}

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteConfig.url}/#person`,
    name: siteConfig.founder,
    description: 'Fondateur de VBWEB, agence web spécialisée en création de sites internet, référencement naturel et applications web sur mesure. Basé à Rennes, accompagne des clients en France et à l\'international.',
    jobTitle: 'Fondateur VBWEB - Consultant SEO & Développeur Web',
    worksFor: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/a-propos`,
    knowsAbout: [
      'SEO',
      'Référencement naturel',
      'Référencement local',
      'SEO local',
      'Google Business Profile',
      'Core Web Vitals',
      'Audit SEO',
      'Développement web',
      'Next.js',
      'React',
      'Création de site internet',
      'Optimisation de la vitesse de site',
      'Stratégie de contenu SEO',
    ],
    knowsLanguage: ['fr', 'en'],
    award: '80+ avis Google 5 étoiles',
    sameAs: siteConfig.socialProfiles,
  }
}

export function webSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: 'fr-FR',
    publisher: {
      '@id': `${siteConfig.url}/#organization`,
    },
    about: {
      '@id': `${siteConfig.url}/#business`,
    },
    mainEntity: {
      '@id': `${siteConfig.url}/#person`,
    },
  }
}

export function webPageJsonLd(
  name: string,
  description: string,
  path: string,
  speakable?: string[]
) {
  const page: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `${siteConfig.url}${path}`,
    inLanguage: 'fr-FR',
    isPartOf: {
      '@id': `${siteConfig.url}/#website`,
    },
    about: {
      '@id': `${siteConfig.url}/#business`,
    },
  }

  if (speakable && speakable.length > 0) {
    page.speakable = {
      '@type': 'SpeakableSpecification',
      cssSelector: speakable,
    }
  }

  return page
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function serviceJsonLd(
  name: string,
  description: string,
  path: string,
  areaServed?: { '@type': string; name: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@id': `${siteConfig.url}/#business`,
    },
    areaServed: areaServed ?? [
      { '@type': 'City', name: 'Rennes' },
      { '@type': 'Country', name: 'France' },
    ],
    url: `${siteConfig.url}${path}`,
  }
}

export function blogPostingJsonLd(post: {
  title: string
  description: string
  slug: string
  image?: string
  publishedAt: string
  updatedAt?: string
  author: string
  tags?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: `${siteConfig.url}/blog/${post.slug}`,
    image: post.image || siteConfig.ogImage,
    datePublished: post.publishedAt,
    ...(post.updatedAt && { dateModified: post.updatedAt }),
    author: {
      '@id': `${siteConfig.url}/#person`,
    },
    publisher: {
      '@id': `${siteConfig.url}/#organization`,
    },
    isPartOf: {
      '@id': `${siteConfig.url}/#website`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${post.slug}`,
    },
    inLanguage: 'fr-FR',
    ...(post.tags &&
      post.tags.length > 0 && { keywords: post.tags.join(', ') }),
  }
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  }
}
