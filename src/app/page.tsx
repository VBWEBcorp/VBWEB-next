import type { Metadata } from 'next'

import { HeroSection } from '@/components/sections/hero-section'
import { FounderSection } from '@/components/sections/founder-section'
import { ProblemStatsSection } from '@/components/sections/problem-stats-section'
import { MethodSection } from '@/components/sections/method-section'
import { ResultsSection } from '@/components/sections/results-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { CaseStudiesSection } from '@/components/sections/case-studies-section'
import { CtaGallerySection } from '@/components/sections/cta-gallery-section'
import {
  localBusinessJsonLd,
  organizationJsonLd,
  personJsonLd,
  webPageJsonLd,
  webSiteJsonLd,
} from '@/components/seo/json-ld'
import { siteConfig } from '@/lib/seo'

const description =
  'Consultant SEO à Rennes : plus de clients grâce à Google. Référencement naturel, création de sites internet et applications web pour PME, artisans et commerces en Bretagne. 75 avis 5 étoiles.'

export const metadata: Metadata = {
  title: 'Consultant SEO Rennes : Plus de Clients grâce à Google | VBWEB',
  description,
  alternates: { canonical: '/' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webSiteJsonLd(),
    organizationJsonLd(),
    localBusinessJsonLd(),
    personJsonLd(),
    webPageJsonLd('Consultant SEO Rennes | VBWEB', description, '/', ['h1', '.hero-description']),
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <FounderSection />
      <ProblemStatsSection />
      <MethodSection />
      <ResultsSection />
      <TestimonialsSection />
      <CaseStudiesSection />
      <CtaGallerySection />
    </>
  )
}
