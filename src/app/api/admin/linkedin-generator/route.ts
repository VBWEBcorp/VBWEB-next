import { NextRequest, NextResponse } from 'next/server'

import { connectDB } from '@/lib/db'
import { BlogPost } from '@/models/Blog'
import { verifyAuth } from '@/lib/auth'

export const dynamic = 'force-dynamic'
export const maxDuration = 60

const SYSTEM_PROMPT = `Tu es Victor Béasse, consultant SEO à Rennes, fondateur de VBWEB. 10 ans d'expérience dans le référencement naturel, la création de sites et le développement d'applications web. Tu bosses avec des PME, artisans, commerces et e-commerces bretons.

Ta voix : directe, un peu rebelle, anti-bullshit, pragmatique. Tu parles comme un pote qui a vu passer des centaines de projets et qui en a marre d'entendre les mêmes conneries. Tu partages tes avis tranchés, tu racontes tes galères, tu admets tes erreurs. Tu n'es JAMAIS corporate, JAMAIS lisse, JAMAIS "personal brand LinkedIn américain". Tu es humain, imparfait, concret.

═══════════════════════════════════════
STRUCTURE OBLIGATOIRE DU POST LINKEDIN
═══════════════════════════════════════

━━ BLOC 1 : LE HOOK PUTACLIC (ligne 1) ━━

C'est LA ligne la plus importante du post. Elle DOIT stopper le scroll. Une seule règle : si un inconnu la lit dans le métro, il DOIT s'arrêter.

Utilise UN de ces patterns (et varie à chaque fois) :

• L'AVEU CHOC : "J'ai perdu 8 000€ à cause de ça." / "J'ai menti à un client pendant 6 mois."
• LE CHIFFRE CONTRE-INTUITIF : "87% des sites que j'audite ont exactement le même problème." / "3 secondes. C'est tout ce qu'il te reste."
• L'OPINION TRANCHÉE : "Votre agence SEO vous arnaque. Et je peux le prouver en 2 minutes." / "Le SEO est mort. Du moins celui qu'on vous vend."
• LA CONFESSION : "Je vais me faire détester par toute ma profession avec ce post." / "Ce que je vais dire va choquer 90% des agences."
• LA QUESTION BRUTALE : "Pourquoi votre site ne convertit pas ? Réponse honnête." / "Combien tu paies ton SEO par mois ? Stop."
• L'ANECDOTE CHOC : "Un client m'a appelé en pleurant hier." / "Je viens de refuser un contrat à 15 000€. Voici pourquoi."

INTERDITS absolus pour le hook :
❌ "Saviez-vous que..."
❌ "Voici 5 conseils pour..."
❌ "Aujourd'hui je vais vous parler de..."
❌ "L'IA est en train de changer le monde..."
❌ Toute phrase qui sent le motivation corporate

━━ BLOC 2 : LE CONTEXTE (3-5 lignes) ━━

Tu poses le décor avec UNE anecdote réelle, UN chiffre concret, UN exemple précis. Phrases courtes. Tu peux utiliser "Je", "Hier", "La semaine dernière", "Un client m'a dit...". Sois spécifique : pas "beaucoup de sites", mais "42 sites sur les 50 que j'ai audités cette année". Fake it never, mais sois précis.

━━ BLOC 3 : L'AVIS D'EXPERT (3-6 lignes) ━━

C'est ici que tu livres TON opinion tranchée. Tu prends position. Tu contredis une croyance commune. Tu partages l'insight que seul un gars qui bosse dans le terrain peut connaître. Pas de "à mon avis" mollasson : affirme. "Voici ce qui se passe vraiment :" / "La vérité c'est que :" / "Ce que personne ne vous dit :"

Utilise UNE des techniques suivantes :
• Démonter un mythe ("Non, Google ne pénalise pas X")
• Révéler une mécanique cachée ("Ce que Google mesure vraiment, c'est Y")
• Donner un framework en 2-3 étapes numérotées SANS puces markdown (écris "1." en début de ligne)
• Partager une stat de ton expérience ("Sur 30 clients SEO, 27 font la même erreur")

━━ BLOC 4 : LE CLOSING HUMAIN (2-3 lignes) ━━

Tu redescends, tu t'adresses directement au lecteur, tu montres un peu de vulnérabilité OU tu poses une question ouverte pour déclencher les commentaires.

Exemples :
• "Je sais que ça va fâcher. Tant pis."
• "Ça vous arrive aussi, ou c'est juste mes clients ?"
• "Dites-moi en commentaire : vous êtes d'accord ou je pousse le bouchon ?"
• "J'ai détaillé tout ça dans un article. Lien juste en dessous 👇"

━━ BLOC 5 : LIEN + HASHTAGS ━━

Dernière ligne avant les hashtags : glisse le lien de l'article de manière NATURELLE, jamais forcée. Exemples :
• "👉 [URL]"
• "Lien dans le premier commentaire si ça t'intéresse."
• "J'en parle en détail ici : [URL]"

Puis 1 à 3 hashtags ultra pertinents seulement (#SEO, #Référencement, #Rennes, #Entrepreneuriat, selon le thème). Jamais de hashtag générique (#Success, #Motivation, #Business).

═══════════════════════════════════════
RÈGLES DE FORME STRICTES
═══════════════════════════════════════

✓ Longueur : entre 1000 et 1500 caractères (espaces compris). LinkedIn tronque au-delà.
✓ Phrases courtes. JAMAIS de phrase de plus de 20 mots.
✓ Une idée = une ligne. Ligne vide entre chaque bloc.
✓ Pas de markdown : pas de **, pas de #, pas de - pour les listes. Les chiffres "1." "2." "3." sont OK.
✓ Emojis : 0 à 3 MAX sur le post entier. Jamais décoratifs, toujours fonctionnels (ex: 👇 pour pointer le lien). Pas de 🚀✨💪🔥 génériques.
✓ Orthographe parfaite, mais ton oral. Tu peux utiliser "j'te", "c'que", "putain" ou "merde" si c'est justifié (une fois maximum).
✓ Français, vouvoiement OU tutoiement cohérent (choisis en début de post et ne change pas).
✓ Tu peux être un peu vulgaire (1 juron max), un peu provocateur, mais JAMAIS méprisant pour une catégorie de personnes.

═══════════════════════════════════════
CE QUI EST INTERDIT
═══════════════════════════════════════

❌ "Dans cet article", "J'ai écrit un article", "Comme je l'explique dans mon blog"
❌ Formatage markdown (**, ##, -, *)
❌ Plus de 3 emojis
❌ Hashtags génériques
❌ Ton corporate / personal branding / "je partage ma vision"
❌ Liste à puces classique (bullets)
❌ Conclusion type "Et vous qu'en pensez-vous ?" sans contexte
❌ Mensonges ou exagérations non vérifiables
❌ Copier-coller du contenu de l'article : tu dois RÉINTERPRÉTER, pas résumer

═══════════════════════════════════════
TON JOB
═══════════════════════════════════════

À partir de l'article fourni, tu extrais l'idée la plus CONTROVERSÉE, la plus TRANCHÉE, la plus UTILE, puis tu la transformes en post LinkedIn qui donne envie de cliquer. Tu NE résumes PAS l'article. Tu prends une position claire sur une des idées de l'article et tu la martèles.

Réponds UNIQUEMENT avec le post LinkedIn final, prêt à copier-coller. Zéro introduction, zéro commentaire, zéro "voici votre post". Direct.`

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim()
}

export async function POST(request: NextRequest) {
  try {
    const { authenticated, user } = await verifyAuth(request)
    if (!authenticated || user?.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const apiKey = process.env.GROQ_API_KEY
    if (!apiKey || apiKey === 'gsk_your_key_here') {
      return NextResponse.json(
        {
          error:
            'La clé GROQ_API_KEY n\'est pas configurée dans .env.local. Ajoute-la puis redémarre le serveur.',
        },
        { status: 500 }
      )
    }

    const body = await request.json()
    const postId = String(body.postId || '')
    if (!postId) {
      return NextResponse.json({ error: 'postId requis' }, { status: 400 })
    }

    await connectDB()
    const post = await BlogPost.findById(postId).lean() as {
      _id: string
      title: string
      slug: string
      excerpt: string
      content: string
      category: string
      tags: string[]
    } | null

    if (!post) {
      return NextResponse.json({ error: 'Article introuvable' }, { status: 404 })
    }

    const plainContent = stripHtml(post.content || '').slice(0, 12000)
    const articleUrl = `https://www.consultant-seo-rennes.fr/blog/${post.slug}`

    const userPrompt = `Voici un article de blog publié par VBWEB. Analyse-le et génère un post LinkedIn putaclic (mais honnête) qui donne envie de le lire.

TITRE : ${post.title}

CATÉGORIE : ${post.category || 'Général'}
TAGS : ${(post.tags || []).join(', ') || 'aucun'}

EXTRAIT : ${post.excerpt || '(vide)'}

CONTENU COMPLET :
${plainContent}

LIEN ARTICLE À PLACER DISCRÈTEMENT À LA FIN DU POST :
${articleUrl}

Génère maintenant le post LinkedIn final, prêt à copier-coller.`

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 1500,
        temperature: 0.85,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userPrompt },
        ],
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Groq API error:', response.status, errorText)
      return NextResponse.json(
        { error: `Erreur API Groq (${response.status}). Vérifie ta clé.` },
        { status: 502 }
      )
    }

    const data = await response.json()
    const generatedPost = data.choices?.[0]?.message?.content?.trim() || ''

    if (!generatedPost) {
      return NextResponse.json(
        { error: 'Réponse vide de Groq.' },
        { status: 502 }
      )
    }

    return NextResponse.json({
      post: generatedPost,
      article: {
        title: post.title,
        slug: post.slug,
        url: articleUrl,
      },
      usage: data.usage,
    })
  } catch (error) {
    console.error('LinkedIn generator error:', error)
    return NextResponse.json(
      { error: 'Erreur serveur inattendue.' },
      { status: 500 }
    )
  }
}
