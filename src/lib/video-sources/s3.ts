/**
 * AWS S3 (and S3-compatible: Cloudflare R2, MinIO, Backblaze B2) integration.
 *
 * How to enable:
 * 1. Set AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, AWS_S3_BUCKET in .env.local
 * 2. For Cloudflare R2: also set S3_ENDPOINT=https://<account-id>.r2.cloudflarestorage.com
 * 3. Upload videos to your bucket under a "videos/" prefix
 * 4. Set source.type = 's3' and source.s3Key on each video record
 *
 * Presigned URLs expire in 1 hour — never expose raw S3 URLs for premium content.
 */

import { S3Client, GetObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import type { Video } from '@/lib/types'

function buildS3Client() {
  return new S3Client({
    region: process.env.AWS_REGION || 'us-east-1',
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
    ...(process.env.S3_ENDPOINT ? { endpoint: process.env.S3_ENDPOINT } : {}),
  })
}

export async function getS3PresignedUrl(video: Video, expiresIn = 3600): Promise<string> {
  const key = video.source.s3Key
  const bucket = video.source.s3Bucket || process.env.AWS_S3_BUCKET

  if (!key || !bucket) {
    throw new Error(`Video "${video.id}" is missing s3Key or s3Bucket`)
  }

  const client = buildS3Client()
  const command = new GetObjectCommand({ Bucket: bucket, Key: key })
  return getSignedUrl(client, command, { expiresIn })
}

export async function listS3VideoKeys(prefix = 'videos/'): Promise<string[]> {
  const bucket = process.env.AWS_S3_BUCKET
  if (!bucket) return []

  const client = buildS3Client()
  const command = new ListObjectsV2Command({ Bucket: bucket, Prefix: prefix })
  const response = await client.send(command)

  return (response.Contents || [])
    .map((obj) => obj.Key!)
    .filter((key) => /\.(mp4|mov|webm|avi|mkv)$/i.test(key))
}
