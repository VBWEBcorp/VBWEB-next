import { NextRequest, NextResponse } from 'next/server'

import { connectDB } from '@/lib/db'
import { BlogComment } from '@/models/Blog'
import { verifyAuth } from '@/lib/auth'

export const dynamic = 'force-dynamic'

// Admin: list all comments (with filter)
export async function GET(request: NextRequest) {
  try {
    const { authenticated, user } = await verifyAuth(request)
    if (!authenticated || user?.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    const url = new URL(request.url)
    const status = url.searchParams.get('status')

    const filter: Record<string, unknown> = {}
    if (status === 'pending') filter.approved = false
    else if (status === 'approved') filter.approved = true

    const comments = await BlogComment.find(filter)
      .sort({ createdAt: -1 })
      .limit(200)
      .lean()

    return NextResponse.json({ comments })
  } catch (error) {
    console.error('Admin comments list error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
