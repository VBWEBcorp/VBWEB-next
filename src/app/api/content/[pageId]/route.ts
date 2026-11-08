import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import SiteContent from '@/models/SiteContent'
import { verifyAuth } from '@/lib/auth'
import { PREFIXE_STATS } from '@/lib/stats-site'

type Params = Promise<{ pageId: string }>

// GET page content (public)
export async function GET(request: NextRequest, { params }: { params: Params }) {
  try {
    const { pageId } = await params
    // Les compteurs de la mesure d'audience (stats:AAAA-MM-JJ) ne sont pas publics.
    if (pageId.startsWith(PREFIXE_STATS)) {
      return NextResponse.json({ pageId, content: {} })
    }
    await connectDB()

    const page = await SiteContent.findOne({ pageId })
    if (!page) {
      return NextResponse.json({ pageId, content: {} })
    }

    return NextResponse.json(page)
  } catch (error) {
    console.error('Content fetch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// PUT update page content (admin only)
export async function PUT(request: NextRequest, { params }: { params: Params }) {
  try {
    const { authenticated, user } = await verifyAuth(request)
    if (!authenticated || user?.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { pageId } = await params
    if (pageId.startsWith(PREFIXE_STATS)) {
      return NextResponse.json({ error: 'Réservé à la mesure d’audience' }, { status: 400 })
    }
    await connectDB()

    const { content } = await request.json()

    const page = await SiteContent.findOneAndUpdate(
      { pageId },
      { pageId, content },
      { upsert: true, new: true }
    )

    return NextResponse.json(page)
  } catch (error) {
    console.error('Content update error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
