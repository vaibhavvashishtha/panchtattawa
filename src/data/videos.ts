/**
 * Mock video library — used when NEXT_PUBLIC_VIDEO_SOURCE=local (default).
 *
 * VIDEO SOURCE GUIDE:
 * ─────────────────────────────────────────────────────────────
 * LOCAL:    Put .mp4 files in public/videos/ and set source.localPath
 * YOUTUBE:  Set source.type='youtube' and source.youtubeId (11-char video ID)
 * S3:       Set source.type='s3', source.s3Key, and optionally source.s3Bucket
 * SUPABASE: Set source.type='supabase' and source.storagePath
 *
 * Thumbnails fall back to picsum.photos if no real image is available.
 * ─────────────────────────────────────────────────────────────
 *
 * In production: replace this with a Supabase query against your `content` table.
 */

import type { Video } from '@/lib/types'

export const MOCK_VIDEOS: Video[] = [
  // ── Panch Tatwa ──────────────────────────────────────────────────────────
  {
    id: 'pt-001',
    title: 'Introduction to Panch Tatwa — The Five Elements of Life',
    description:
      'Discover how the five sacred elements — Prithvi (Earth), Jal (Water), Agni (Fire), Vayu (Air), and Akash (Space) — form the foundation of all existence. Guru Ji explains how balancing these elements transforms health, relationships, and consciousness.',
    thumbnail: 'https://picsum.photos/seed/panch001/640/360',
    duration: '22:14',
    category: 'panch-tatwa',
    tags: ['elements', 'introduction', 'beginner', 'five elements', 'consciousness'],
    isPremium: false,
    isFeatured: true,
    source: {
      type: 'local',
      localPath: 'intro-panch-tatwa.mp4',
    },
    publishedAt: '2024-01-15',
    viewCount: 12400,
    instructor: 'Sri Guru Ji Manoj K Juyal',
  },
  {
    id: 'pt-002',
    title: 'Prithvi Tatwa — Connecting with Earth Energy',
    description:
      'Learn powerful grounding practices to activate the Earth element within you. This session covers mudras, breathwork, and meditations that strengthen your Prithvi Tatwa for stability and abundance.',
    thumbnail: 'https://picsum.photos/seed/prithvi002/640/360',
    duration: '38:45',
    category: 'panch-tatwa',
    tags: ['prithvi', 'earth', 'grounding', 'mudra', 'stability'],
    isPremium: true,
    isFeatured: false,
    source: {
      type: 'local',
      localPath: 'prithvi-tatwa.mp4',
    },
    publishedAt: '2024-02-03',
    viewCount: 8700,
    instructor: 'Sri Guru Ji Manoj K Juyal',
  },
  {
    id: 'pt-003',
    title: 'Jal Tatwa — Awakening the Water Within',
    description:
      'Water flows, adapts, and nurtures. In this session, Guru Ji guides you through practices to activate your Jal Tatwa — enhancing emotional intelligence, creativity, and the ability to receive abundance.',
    thumbnail: 'https://picsum.photos/seed/jal003/640/360',
    duration: '31:20',
    category: 'panch-tatwa',
    tags: ['jal', 'water', 'emotions', 'flow', 'creativity'],
    isPremium: true,
    isFeatured: false,
    source: {
      // Example: swap to YouTube with a real YouTube video ID
      type: 'youtube',
      youtubeId: 'dQw4w9WgXcQ',
    },
    publishedAt: '2024-02-20',
    viewCount: 6200,
    instructor: 'Sri Guru Ji Manoj K Juyal',
  },
  {
    id: 'pt-004',
    title: 'Agni Tatwa — Igniting Your Inner Fire',
    description:
      'Fire transforms. Learn to harness the transformative power of Agni Tatwa through Trataka (candle gazing), solar breathwork, and mantra to fuel your willpower, digestion, and spiritual clarity.',
    thumbnail: 'https://picsum.photos/seed/agni004/640/360',
    duration: '44:10',
    category: 'panch-tatwa',
    tags: ['agni', 'fire', 'transformation', 'willpower', 'trataka'],
    isPremium: true,
    isFeatured: true,
    source: {
      type: 'local',
      localPath: 'agni-tatwa.mp4',
    },
    publishedAt: '2024-03-05',
    viewCount: 9100,
    instructor: 'Sri Guru Ji Manoj K Juyal',
  },
  {
    id: 'pt-005',
    title: 'Vayu & Akash Tatwa — Air, Space & Expansion',
    description:
      'The subtlest elements — Air and Space — govern thought, communication, and the infinite field of consciousness. Guru Ji reveals how to work with these upper elements to expand awareness beyond the physical.',
    thumbnail: 'https://picsum.photos/seed/vayu005/640/360',
    duration: '52:33',
    category: 'panch-tatwa',
    tags: ['vayu', 'akash', 'air', 'space', 'consciousness', 'expansion'],
    isPremium: true,
    isFeatured: false,
    source: {
      type: 'local',
      localPath: 'vayu-akash-tatwa.mp4',
    },
    publishedAt: '2024-03-22',
    viewCount: 5400,
    instructor: 'Sri Guru Ji Manoj K Juyal',
  },

  // ── Meditation ────────────────────────────────────────────────────────────
  {
    id: 'med-001',
    title: 'Morning Sadhana — 21-Day Guided Practice',
    description:
      'Begin each day with this powerful 21-minute morning sadhana. Includes pranayama, silent meditation, and intention-setting aligned with the ancient Vedic tradition of Guru Ji\'s lineage.',
    thumbnail: 'https://picsum.photos/seed/morning001/640/360',
    duration: '21:00',
    category: 'meditation',
    tags: ['morning', 'sadhana', 'pranayama', 'daily practice', 'beginner'],
    isPremium: false,
    isFeatured: true,
    source: {
      type: 'local',
      localPath: 'morning-sadhana.mp4',
    },
    publishedAt: '2024-01-08',
    viewCount: 21300,
    instructor: 'Sri Guru Ji Manoj K Juyal',
  },
  {
    id: 'med-002',
    title: 'Yoga Nidra — Deep Rest & Subconscious Healing',
    description:
      'Enter the threshold between waking and sleep — the most powerful state for reprogramming the subconscious mind. This 45-minute Yoga Nidra session is suitable for all levels.',
    thumbnail: 'https://picsum.photos/seed/nidra002/640/360',
    duration: '45:00',
    category: 'meditation',
    tags: ['yoga nidra', 'sleep', 'healing', 'subconscious', 'relaxation'],
    isPremium: false,
    isFeatured: false,
    source: {
      type: 'local',
      localPath: 'yoga-nidra.mp4',
    },
    publishedAt: '2024-01-22',
    viewCount: 15600,
    instructor: 'Sri Guru Ji Manoj K Juyal',
  },
  {
    id: 'med-003',
    title: 'Trataka — The Art of Candle Gazing Meditation',
    description:
      'One of the most powerful cleansing practices in Hatha Yoga. Trataka purifies the optical nerve, builds concentration, and opens the Ajna chakra. Includes detailed technique instruction.',
    thumbnail: 'https://picsum.photos/seed/trataka003/640/360',
    duration: '28:15',
    category: 'meditation',
    tags: ['trataka', 'concentration', 'ajna', 'third eye', 'hatha yoga'],
    isPremium: true,
    isFeatured: false,
    source: {
      type: 'local',
      localPath: 'trataka.mp4',
    },
    publishedAt: '2024-02-14',
    viewCount: 7800,
    instructor: 'Sri Guru Ji Manoj K Juyal',
  },

  // ── Vedic Astrology ───────────────────────────────────────────────────────
  {
    id: 'va-001',
    title: 'Understanding Your Birth Chart — A Beginner\'s Guide',
    description:
      'Your birth chart is a cosmic map of your soul\'s journey. Guru Ji walks you through the 12 houses, 9 planets, and how they interact to shape your personality, purpose, and life path.',
    thumbnail: 'https://picsum.photos/seed/astro001/640/360',
    duration: '55:20',
    category: 'vedic-astrology',
    tags: ['birth chart', 'kundali', 'planets', 'houses', 'beginner'],
    isPremium: false,
    isFeatured: true,
    source: {
      type: 'local',
      localPath: 'birth-chart-basics.mp4',
    },
    publishedAt: '2024-01-30',
    viewCount: 18900,
    instructor: 'Sri Guru Ji Manoj K Juyal',
  },
  {
    id: 'va-002',
    title: 'Saturn & Its Transits — Karma, Lessons & Liberation',
    description:
      'Saturn (Shani) is the great teacher of the cosmos. Understanding Saturn\'s transit through your chart reveals the lessons your soul chose for this lifetime and how to work with — not against — karmic patterns.',
    thumbnail: 'https://picsum.photos/seed/saturn002/640/360',
    duration: '1:02:40',
    category: 'vedic-astrology',
    tags: ['saturn', 'shani', 'karma', 'transit', 'liberation'],
    isPremium: true,
    isFeatured: false,
    source: {
      type: 'local',
      localPath: 'saturn-transits.mp4',
    },
    publishedAt: '2024-02-28',
    viewCount: 11200,
    instructor: 'Sri Guru Ji Manoj K Juyal',
  },

  // ── Astrology ─────────────────────────────────────────────────────────────
  {
    id: 'ast-001',
    title: 'The 27 Nakshatras — Stars That Shape Your Destiny',
    description:
      'The Nakshatras are the 27 lunar mansions of Vedic Astrology, each carrying unique energies and divine qualities. This comprehensive session covers all 27 with their ruling deities, symbols, and life themes.',
    thumbnail: 'https://picsum.photos/seed/nakshatra001/640/360',
    duration: '1:48:00',
    category: 'astrology',
    tags: ['nakshatra', 'lunar mansion', 'stars', 'destiny', 'advanced'],
    isPremium: true,
    isFeatured: false,
    source: {
      type: 'local',
      localPath: 'nakshatras.mp4',
    },
    publishedAt: '2024-03-10',
    viewCount: 7300,
    instructor: 'Sri Guru Ji Manoj K Juyal',
  },

  // ── Healing ───────────────────────────────────────────────────────────────
  {
    id: 'heal-001',
    title: 'Sound Healing with Ancient Vedic Mantras',
    description:
      'Sound is the first creation. In this healing session, Guru Ji chants ancient Vedic mantras for cellular repair, emotional release, and spiritual alignment. No prior experience needed.',
    thumbnail: 'https://picsum.photos/seed/sound001/640/360',
    duration: '35:50',
    category: 'healing',
    tags: ['mantra', 'sound healing', 'chanting', 'vibration', 'cellular'],
    isPremium: false,
    isFeatured: true,
    source: {
      type: 'local',
      localPath: 'sound-healing.mp4',
    },
    publishedAt: '2024-03-18',
    viewCount: 14500,
    instructor: 'Sri Guru Ji Manoj K Juyal',
  },
  {
    id: 'heal-002',
    title: 'Chakra Balancing — Energy Centres & Healing Practices',
    description:
      'Journey through all 7 main chakras with Guru Ji. Learn to identify imbalances, apply targeted mudras, mantras, and visualisation techniques to restore the natural flow of prana through your energy body.',
    thumbnail: 'https://picsum.photos/seed/chakra002/640/360',
    duration: '58:00',
    category: 'healing',
    tags: ['chakra', 'energy', 'prana', 'balancing', 'mudra'],
    isPremium: true,
    isFeatured: false,
    source: {
      type: 'local',
      localPath: 'chakra-balancing.mp4',
    },
    publishedAt: '2024-04-02',
    viewCount: 9800,
    instructor: 'Sri Guru Ji Manoj K Juyal',
  },
]
