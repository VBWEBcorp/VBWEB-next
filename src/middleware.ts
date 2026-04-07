import { NextResponse, type NextRequest } from 'next/server'

/**
 * Middleware Next.js : injecte le pathname courant dans un header
 * `x-pathname` que les server components peuvent lire via `headers()`.
 *
 * Utilise par RootWrapper pour decider si on rend navbar/footer (public)
 * ou pas (admin).
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  response.headers.set('x-pathname', request.nextUrl.pathname)
  return response
}

export const config = {
  matcher: [
    /*
     * Match tout sauf :
     * - les fichiers statiques (_next/static, _next/image)
     * - le favicon
     * - les fichiers avec extension (.png, .jpg, .svg, .xml, .txt, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|xml|txt|woff|woff2|ttf|otf)$).*)',
  ],
}
