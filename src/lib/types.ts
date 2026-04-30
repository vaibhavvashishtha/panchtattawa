export type VideoCategory =
  | 'all'
  | 'panch-tatwa'
  | 'meditation'
  | 'astrology'
  | 'vedic-astrology'
  | 'healing'

export type VideoSourceType = 'youtube' | 's3' | 'supabase' | 'local'

export interface VideoSource {
  type: VideoSourceType
  // YouTube
  youtubeId?: string
  // AWS S3 or S3-compatible (Cloudflare R2)
  s3Key?: string
  s3Bucket?: string
  s3Region?: string
  // Supabase Storage
  storagePath?: string
  // Local file inside public/videos/
  localPath?: string
}

export interface Video {
  id: string
  title: string
  description: string
  thumbnail: string
  duration: string
  category: VideoCategory
  tags: string[]
  isPremium: boolean
  isFeatured: boolean
  source: VideoSource
  publishedAt: string
  viewCount?: number
  instructor?: string
}

export interface CategoryOption {
  value: VideoCategory
  label: string
  color: string
}

export interface SessionType {
  id: string
  name: string
  description: string
  duration: number
  price: number
  currency: string
  icon: string
}

export interface TimeSlot {
  id: string
  datetime: string
  isAvailable: boolean
}

export interface Booking {
  id: string
  sessionTypeId: string
  sessionType: SessionType
  datetime: string
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled'
  meetLink?: string
  userName: string
  userEmail: string
}

export interface Testimonial {
  id: string
  name: string
  location: string
  text: string
  rating: number
  avatarSeed: string
}
