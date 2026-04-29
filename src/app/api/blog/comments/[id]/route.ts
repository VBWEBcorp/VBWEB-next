import { NextRequest, NextResponse } from 'next/server'

import { connectDB } from '@/lib/db'
import { BlogComment } from '@/models/Blog'
import { verifyAuth } from '@/lib/auth'

export const dynamic = 'force-dynamic'

type Ctx = { params: Promise<{ id: string }> }

// Admin: approve / unapprove a comment
export async function PATCH(request: NextRequest, { params }: Ctx) {
  try {
    const { authenticated, user } = await verifyAuth(request)
    if (!authenticated || user?.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const body = await request.json()
    await connectDB()

    const update: Record<string, unknown> = {}
    if (typeof body.approved === 'boolean') update.approved = body.approved

    const comment = await BlogComment.findByIdAndUpdate(id, update, { new: true }).lean()
    if (!comment) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    return NextResponse.json({ comment })
  } catch (error) {
    console.error('Admin comment update error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// Admin: delete a comment
export async function DELETE(request: NextRequest, { params }: Ctx) {
  try {
    const { authenticated, user } = await verifyAuth(request)
    if (!authenticated || user?.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    await connectDB()
    const result = await BlogComment.findByIdAndDelete(id)
    if (!result) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Admin comment delete error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
