import { NextResponse } from 'next/server'
import { createHmac, timingSafeEqual } from 'crypto'
import db from '@/lib/db'

export async function POST(req: Request) {
  const rawBody = await req.text()
  const signature = req.headers.get('x-razorpay-signature') ?? ''

  const expected = createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET!)
    .update(rawBody)
    .digest('hex')

  const expectedBuf = Buffer.from(expected)
  const actualBuf = Buffer.from(signature)

  const isValid = expectedBuf.length === actualBuf.length && timingSafeEqual(expectedBuf, actualBuf)

  if (!isValid) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  try {
    const payload = JSON.parse(rawBody)
    const event = payload.event

    if (event === 'payment.captured' || event === 'payment.failed') {
      const payment = payload.payload?.payment?.entity
      const orderId = payment?.order_id
      const paymentId = payment?.id

      if (orderId) {
        if (event === 'payment.captured') {
          db.prepare(
            `UPDATE payments SET razorpay_payment_id = ?, status = 'paid', updated_at = CURRENT_TIMESTAMP WHERE razorpay_order_id = ? AND status != 'paid'`
          ).run(paymentId, orderId)
        } else {
          db.prepare(
            `UPDATE payments SET status = 'failed', updated_at = CURRENT_TIMESTAMP WHERE razorpay_order_id = ? AND status != 'paid'`
          ).run(orderId)
        }
      }
    }

    return NextResponse.json({ received: true })
  } catch (err) {
    console.error('Webhook processing error:', err)
    return NextResponse.json({ received: true })
  }
}
