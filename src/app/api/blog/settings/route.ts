import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import { BlogSettings } from '@/models/Blog'
import { verifyAuth } from '@/lib/auth'

export const dynamic = 'force-dynamic'

const DEFAULT_SETTINGS = {
  enabled: true,
  title: 'Nos dernières actualités',
  eyebrow: 'Blog',
  description: 'Retrouvez nos conseils, nos projets récents et les tendances du secteur.',
  moderateComments: false,
}

const CACHE_HEADERS = {
  'Cache-Control': 'public, max-age=300, s-maxage=300, stale-while-revalidate=3600',
}

export async function GET() {
  try {
    await connectDB()
    const settings = await BlogSettings.findOne()
    return NextResponse.json(settings ?? DEFAULT_SETTINGS, { headers: CACHE_HEADERS })
  } catch {
    // DB indisponible (env var manquante, timeout, etc.) — fallback gracieux
    return NextResponse.json(DEFAULT_SETTINGS, { headers: CACHE_HEADERS })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { authenticated, user } = await verifyAuth(request)
    if (!authenticated || user?.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    const body = await request.json()

    let settings = await BlogSettings.findOne()
    if (!settings) {
      settings = await BlogSettings.create(body)
    } else {
      const fields = ['enabled', 'title', 'description', 'eyebrow', 'heroImage', 'categories', 'moderateComments']
      for (const field of fields) {
        if (body[field] !== undefined) (settings as any)[field] = body[field]
      }
      await settings.save()
    }

    return NextResponse.json(settings)
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Blog settings update error:', error)
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
