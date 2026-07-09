import { NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import { getRazorpay } from '@/lib/razorpay'
import { PAYMENT_ITEMS } from '@/lib/payment-items'
import db from '@/lib/db'

export async function POST(req: Request) {
  try {
    const { itemId, amount, donorName, donorEmail, donorPhone } = await req.json()

    const item = PAYMENT_ITEMS[itemId]
    if (!item) {
      return NextResponse.json({ error: 'Unknown item' }, { status: 404 })
    }

    let amountPaise: number

    if (item.amount === 'variable') {
      const rupees = Number(amount)
      const minRupees = (item.minAmount ?? 0) / 100
      if (!Number.isFinite(rupees) || rupees <= 0) {
        return NextResponse.json({ error: 'Invalid amount' }, { status: 400 })
      }
      amountPaise = Math.round(rupees * 100)
      if (amountPaise < (item.minAmount ?? 0)) {
        return NextResponse.json(
          { error: `Minimum amount is ₹${minRupees}` },
          { status: 400 }
        )
      }
    } else {
      amountPaise = item.amount
    }

    const receipt = `rcpt_${randomUUID().slice(0, 24)}`

    const order = await getRazorpay().orders.create({
      amount: amountPaise,
      currency: 'INR',
      receipt,
      notes: {
        item_type: item.type,
        item_id: item.id,
        item_label: item.label,
        donor_email: donorEmail ?? '',
      },
    })

    const id = randomUUID()
    db.prepare(
      `INSERT INTO payments (id, razorpay_order_id, amount, currency, item_type, item_id, item_label, donor_name, donor_email, donor_phone, status)
       VALUES (?, ?, ?, 'INR', ?, ?, ?, ?, ?, ?, 'created')`
    ).run(
      id,
      order.id,
      amountPaise,
      item.type,
      item.id,
      item.label,
      donorName ?? null,
      donorEmail ?? null,
      donorPhone ?? null
    )

    return NextResponse.json({
      orderId: order.id,
      amount: amountPaise,
      currency: 'INR',
      itemLabel: item.label,
    })
  } catch (err) {
    console.error('Create order error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
