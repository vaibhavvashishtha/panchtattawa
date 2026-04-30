/**
 * Supabase Storage integration for video hosting.
 *
 * How to enable:
 * 1. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local
 * 2. Create a "videos" bucket in Supabase Storage (public for free content, private for premium)
 * 3. Set source.type = 'supabase' and source.storagePath on each video record
 *
 * Premium videos use signed URLs (1 hour TTL).
 * Free videos use the public bucket URL.
 */

import { createClient } from '@supabase/supabase-js'
import type { Video } from '@/lib/types'

function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  return createClient(url, key)
}

export async function getSupabaseVideoUrl(video: Video): Promise<string> {
  const path = video.source.storagePath
  if (!path) throw new Error(`Video "${video.id}" is missing storagePath`)

  const supabase = getSupabaseAdmin()

  if (video.isPremium) {
    const { data, error } = await supabase.storage
      .from('videos')
      .createSignedUrl(path, 3600)
    if (error) throw error
    return data.signedUrl
  }

  const { data } = supabase.storage.from('videos').getPublicUrl(path)
  return data.publicUrl
}
