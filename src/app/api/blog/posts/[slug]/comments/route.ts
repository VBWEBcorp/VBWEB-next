import { NextRequest, NextResponse } from 'next/server'

import { connectDB } from '@/lib/db'
import { BlogComment, BlogPost, BlogSettings } from '@/models/Blog'

export const dynamic = 'force-dynamic'

type Ctx = { params: Promise<{ slug: string }> }

const RATE_LIMIT_MS = 60_000
const rateLimitStore = new Map<string, number>()

function cleanupRateLimit() {
  const now = Date.now()
  for (const [ip, ts] of rateLimitStore.entries()) {
    if (now - ts > RATE_LIMIT_MS) rateLimitStore.delete(ip)
  }
}

function getClientIp(req: NextRequest): string {
  const fwd = req.headers.get('x-forwarded-for')
  if (fwd) return fwd.split(',')[0].trim()
  const real = req.headers.get('x-real-ip')
  if (real) return real
  return 'unknown'
}

export async function GET(_req: NextRequest, { params }: Ctx) {
  try {
    const { slug } = await params
    await connectDB()
    const comments = await BlogComment.find({ postSlug: slug, approved: true })
      .sort({ createdAt: -1 })
      .select('author content createdAt')
      .lean()
    return NextResponse.json({ comments })
  } catch {
    return NextResponse.json({ comments: [] })
  }
}

export async function POST(req: NextRequest, { params }: Ctx) {
  try {
    const { slug } = await params
    const body = await req.json()

    const author = String(body.author || '').trim().slice(0, 80)
    const email = String(body.email || '').trim().slice(0, 160)
    const content = String(body.content || '').trim().slice(0, 2000)
    const honeypot = String(body.website || '').trim()

    if (honeypot) {
      return NextResponse.json({ ok: true }, { status: 200 })
    }

    if (!author || !email || !content) {
      return NextResponse.json(
        { error: 'Nom, email et commentaire sont requis.' },
        { status: 400 }
      )
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!emailOk) {
      return NextResponse.json({ error: 'Email invalide.' }, { status: 400 })
    }

    if (content.length < 3) {
      return NextResponse.json(
        { error: 'Commentaire trop court.' },
        { status: 400 }
      )
    }

    cleanupRateLimit()
    const ip = getClientIp(req)
    const last = rateLimitStore.get(ip)
    if (last && Date.now() - last < RATE_LIMIT_MS) {
      const retryAfter = Math.ceil((RATE_LIMIT_MS - (Date.now() - last)) / 1000)
      return NextResponse.json(
        { error: `Merci de patienter ${retryAfter}s avant de publier un autre commentaire.` },
        { status: 429, headers: { 'Retry-After': String(retryAfter) } }
      )
    }

    await connectDB()

    const post = await BlogPost.findOne({ slug, published: true }).select('_id').lean()
    if (!post) {
      return NextResponse.json({ error: 'Article introuvable.' }, { status: 404 })
    }

    const settings = (await BlogSettings.findOne().select('moderateComments').lean()) as { moderateComments?: boolean } | null
    const autoApprove = !settings?.moderateComments

    const comment = await BlogComment.create({
      postSlug: slug,
      author,
      email,
      content,
      approved: autoApprove,
    })

    rateLimitStore.set(ip, Date.now())

    return NextResponse.json({
      pending: !autoApprove,
      comment: autoApprove
        ? {
            _id: comment._id,
            author: comment.author,
            content: comment.content,
            createdAt: comment.createdAt,
          }
        : null,
    })
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Blog comment error:', error)
    }
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}
