import { NextResponse } from 'next/server'
import { getVideoById, getPlaybackInfo } from '@/lib/video-sources'

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const video = await getVideoById(id)

  if (!video) {
    return NextResponse.json({ error: 'Video not found' }, { status: 404 })
  }

  try {
    const info = await getPlaybackInfo(video)
    return NextResponse.json(info)
  } catch (err) {
    console.error(`Failed to resolve video URL for "${id}":`, err)
    return NextResponse.json({ error: 'Could not resolve video URL' }, { status: 500 })
  }
}
