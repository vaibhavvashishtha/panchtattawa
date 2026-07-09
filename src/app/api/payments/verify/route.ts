import { NextResponse } from 'next/server'
import { createHmac, timingSafeEqual } from 'crypto'
import db from '@/lib/db'

export async function POST(req: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json()

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json({ error: 'Missing verification fields' }, { status: 400 })
    }

    const expected = createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex')

    const expectedBuf = Buffer.from(expected)
    const actualBuf = Buffer.from(razorpay_signature)

    const isValid =
      expectedBuf.length === actualBuf.length && timingSafeEqual(expectedBuf, actualBuf)

    if (!isValid) {
      db.prepare(`UPDATE payments SET status = 'failed', updated_at = CURRENT_TIMESTAMP WHERE razorpay_order_id = ?`).run(
        razorpay_order_id
      )
      return NextResponse.json({ error: 'Signature verification failed' }, { status: 400 })
    }

    db.prepare(
      `UPDATE payments SET razorpay_payment_id = ?, razorpay_signature = ?, status = 'paid', updated_at = CURRENT_TIMESTAMP WHERE razorpay_order_id = ?`
    ).run(razorpay_payment_id, razorpay_signature, razorpay_order_id)

    const row = db
      .prepare(`SELECT item_label, amount FROM payments WHERE razorpay_order_id = ?`)
      .get(razorpay_order_id) as { item_label: string; amount: number } | undefined

    return NextResponse.json({
      success: true,
      itemLabel: row?.item_label ?? '',
      amount: row?.amount ?? 0,
    })
  } catch (err) {
    console.error('Verify payment error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
