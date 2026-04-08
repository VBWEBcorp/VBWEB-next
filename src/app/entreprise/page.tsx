import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

import { HeroEntrepriseSection } from '@/components/sections/hero-entreprise-section'
import { AudiencesMarquee } from '@/components/sections/audiences-marquee'

const FounderSection = dynamic(() =>
  import('@/components/sections/founder-section').then((m) => m.FounderSection),
)
const ProblemStatsSection = dynamic(() =>
  import('@/components/sections/problem-stats-section').then((m) => m.ProblemStatsSection),
)
const MethodSection = dynamic(() =>
  import('@/components/sections/method-section').then((m) => m.MethodSection),
)
const ResultsSection = dynamic(() =>
  import('@/components/sections/results-section').then((m) => m.ResultsSection),
)
const TestimonialsSection = dynamic(() =>
  import('@/components/sections/testimonials-section').then((m) => m.TestimonialsSection),
)
const CaseStudiesSection = dynamic(() =>
  import('@/components/sections/case-studies-section').then((m) => m.CaseStudiesSection),
)
const CtaGallerySection = dynamic(() =>
  import('@/components/sections/cta-gallery-section').then((m) => m.CtaGallerySection),
)

export const metadata: Metadata = {
  title: 'VBWEB | Victor Béasse',
  description:
    'Plus de clients grâce à Google. Référencement naturel, création de sites internet et applications web pour PME, artisans et commerces.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/entreprise' },
}

export default function EntreprisePage() {
  return (
    <>
      <HeroEntrepriseSection />
      <AudiencesMarquee />
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
