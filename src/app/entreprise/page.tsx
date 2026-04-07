import type { Metadata } from 'next'

import { HeroEntrepriseSection } from '@/components/sections/hero-entreprise-section'
import { AudiencesMarquee } from '@/components/sections/audiences-marquee'
import { FounderSection } from '@/components/sections/founder-section'
import { ProblemStatsSection } from '@/components/sections/problem-stats-section'
import { MethodSection } from '@/components/sections/method-section'
import { ResultsSection } from '@/components/sections/results-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { CaseStudiesSection } from '@/components/sections/case-studies-section'
import { CtaGallerySection } from '@/components/sections/cta-gallery-section'

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
