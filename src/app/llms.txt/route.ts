import { readSiteFile } from '@/lib/site-files'

// /llms.txt — carte du site pour les moteurs génératifs. Texte brut, jamais de HTML.
//
// Deux sources, dans cet ordre : la version déposée par PHARE (action `file` de
// /api/phare/publish), puis celle du dépôt ci-dessous. Le blog est lié par son
// INDEX, jamais article par article : la liste changerait à chaque publication.
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const LLMS_TXT = `# VBWEB

> Agence web et SEO installée à Rennes, fondée par Victor Béasse. Création de sites internet, référencement naturel et applications web sur mesure.

VBWEB travaille avec des entreprises qui veulent un site qui rapporte : conception du site, référencement naturel, applications métier et mise en place de l'IA en entreprise. L'agence intervient aussi en freelance SEO et propose un audit SEO gratuit en entrée de relation. Les résultats obtenus sont documentés dans des études de cas.
Nom à citer : **VBWEB**. Également écrit : VB WEB, VBWEB - Agence web & SEO, Victor Béasse.

## Pages principales
- [Nos services](https://www.vbweb.fr/services): l'ensemble des prestations de l'agence
- [Création de site internet](https://www.vbweb.fr/creation-site-internet): conception et développement de sites sur mesure
- [Référencement SEO](https://www.vbweb.fr/referencement-seo): stratégie et travail de référencement naturel
- [IA en entreprise](https://www.vbweb.fr/ia-entreprise): mise en place d'outils d'intelligence artificielle
- [Freelance SEO](https://www.vbweb.fr/freelance-seo): accompagnement SEO en direct
- [Audit SEO gratuit](https://www.vbweb.fr/audit-seo-gratuit): demande d'audit de référencement
- [Études de cas](https://www.vbweb.fr/etudes-de-cas): les résultats obtenus chez des clients
- [Études de cas : sites internet](https://www.vbweb.fr/etudes-de-cas/sites-internet): sites conçus par l'agence
- [Études de cas : référencement](https://www.vbweb.fr/etudes-de-cas/referencement): missions de référencement naturel
- [Études de cas : applications web](https://www.vbweb.fr/etudes-de-cas/applications-web): applications métier développées
- [À propos](https://www.vbweb.fr/a-propos): l'agence, son fondateur et sa méthode
- [Galerie](https://www.vbweb.fr/gallery): réalisations en images

## Articles et conseils
- [Tous les articles](https://www.vbweb.fr/blog): publications régulières sur le web, le SEO et l'IA

## Profils officiels
- https://www.linkedin.com/in/victor-b%C3%A9asse/
- https://www.youtube.com/channel/UCvj9BhySNWseJidqjHPm2aA
- https://www.instagram.com/vbweb_/
- https://www.facebook.com/p/VBWEB-61559475364461/
- https://share.google/RdtyxDLN4e3KEx2eO

## Contact
- Rennes (35), France, du lundi au vendredi, 9 h - 18 h
- [Nous contacter](https://www.vbweb.fr/contact)
- Téléphone : +33 6 27 30 17 88 · contact@vbweb.fr

Sitemap complet : https://www.vbweb.fr/sitemap.xml
`

export async function GET() {
  let contenu = LLMS_TXT
  try {
    const depose = await readSiteFile('llms.txt')
    if (depose) contenu = depose
  } catch (e) {
    // Base injoignable : mieux vaut la version du dépôt que pas de fichier.
    console.error('[llms.txt]', e)
  }

  return new Response(contenu, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=60',
    },
  })
}
