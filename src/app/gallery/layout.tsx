import type { Metadata } from 'next'

import { connectDB } from '@/lib/db'
import { GalleryImage } from '@/models/Gallery'

/**
 * La galerie se remplit depuis l'admin. Vide, c'est une page pauvre : elle
 * reste hors de l'index (et hors du sitemap) jusqu'à la première photo.
 */
export async function generateMetadata(): Promise<Metadata> {
  let vide = true
  try {
    await connectDB()
    vide = (await GalleryImage.countDocuments()) === 0
  } catch {
    // Base injoignable : prudence, on n'indexe pas.
  }
  return {
    title: 'Galerie de réalisations',
    description: 'Les réalisations de VBWEB en images : sites internet, applications web et identités visuelles conçus pour des entreprises partout en France.',
    alternates: { canonical: '/gallery' },
    ...(vide ? { robots: { index: false, follow: true } } : {}),
  }
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children
}
