import { CookieConsent } from '@/components/layout/cookie-consent'
import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import { SiteChrome } from '@/components/layout/site-chrome'

// Aucune lecture de la requête ici (ni headers() ni cookies()) : c'est ce qui
// permet aux pages sans données variables, l'accueil en tête, d'être servies
// en statique depuis le cache. Le cas /admin se règle dans SiteChrome.
export function RootWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SiteChrome navbar={<Navbar />} footer={<Footer />} extras={<CookieConsent />}>
      {children}
    </SiteChrome>
  )
}
