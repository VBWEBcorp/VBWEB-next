import { headers } from 'next/headers'

import { CookieConsent } from '@/components/layout/cookie-consent'
import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import { FloatingCallButton } from '@/components/floating-call-button'

export async function RootWrapper({ children }: { children: React.ReactNode }) {
  // Detection du path cote serveur via x-pathname header (set par middleware Next)
  // ou fallback : on renvoie navbar/footer par defaut
  const headersList = await headers()
  const pathname = headersList.get('x-pathname') || headersList.get('x-invoke-path') || ''
  const isAdmin = pathname.startsWith('/admin')

  // En espace admin: pas de header/footer (pleine largeur pour le dashboard)
  if (isAdmin) {
    return <>{children}</>
  }

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingCallButton />
      <CookieConsent />
    </>
  )
}
