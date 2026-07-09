'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { loadRazorpayScript } from '@/lib/loadRazorpayScript'
import { AmountInputPanel } from './AmountInputPanel'
import { cn } from '@/lib/cn'

type Stage = 'idle' | 'collecting' | 'processing' | 'success' | 'error'

interface RazorpayCheckoutButtonProps {
  itemId: string
  itemLabel: string
  amount: number | 'variable' // rupees
  minAmount?: number // rupees, only for 'variable'
  buttonLabel?: string
  buttonClassName?: string
  icon?: React.ReactNode
  onSuccess?: (payment: { itemLabel: string; amount: number }) => void
}

export function RazorpayCheckoutButton({
  itemId,
  itemLabel,
  amount,
  minAmount = 51,
  buttonLabel = 'Donate Now',
  buttonClassName = 'bg-gold hover:bg-gold-dark',
  icon,
  onSuccess,
}: RazorpayCheckoutButtonProps) {
  const [stage, setStage] = useState<Stage>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [paidAmount, setPaidAmount] = useState<number | null>(null)

  const isVariable = amount === 'variable'

  const runCheckout = async (payload: { amount?: number; donorName?: string; donorEmail?: string }) => {
    setStage('processing')
    setErrorMsg('')

    try {
      await loadRazorpayScript()

      const res = await fetch('/api/payments/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ itemId, ...payload }),
      })
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Could not start checkout')
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: 'Panchtatwa Ashram',
        description: data.itemLabel,
        order_id: data.orderId,
        prefill: {
          name: payload.donorName || '',
          email: payload.donorEmail || '',
        },
        theme: { color: '#E86830' },
        handler: async (response: any) => {
          try {
            const verifyRes = await fetch('/api/payments/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            })
            const verifyData = await verifyRes.json()

            if (!verifyRes.ok || !verifyData.success) {
              setStage('error')
              setErrorMsg('Payment verification failed. Please contact us if the amount was deducted.')
              return
            }

            setPaidAmount(verifyData.amount)
            setStage('success')
            onSuccess?.({ itemLabel: verifyData.itemLabel, amount: verifyData.amount })
          } catch {
            setStage('error')
            setErrorMsg('Could not verify payment. Please contact us if the amount was deducted.')
          }
        },
        modal: {
          ondismiss: () => {
            setStage((s) => (s === 'processing' ? 'idle' : s))
          },
        },
      }

      const rzp = new (window as any).Razorpay(options)
      rzp.on('payment.failed', () => {
        setStage('error')
        setErrorMsg('Payment failed. Please try again.')
      })
      rzp.open()
    } catch (err: any) {
      setStage('error')
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
    }
  }

  const handleClick = () => {
    if (isVariable) {
      setStage('collecting')
      return
    }
    runCheckout({})
  }

  if (stage === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-2 text-green-600 font-body text-sm"
      >
        <CheckCircle2 size={18} />
        <span>
          Thank you! ₹{((paidAmount ?? 0) / 100).toLocaleString('en-IN')} received for {itemLabel}.
        </span>
      </motion.div>
    )
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        disabled={stage === 'processing'}
        className={cn(
          'self-start flex items-center gap-2 text-white font-body text-sm px-5 py-2.5 rounded-lg transition-colors disabled:opacity-60',
          buttonClassName
        )}
      >
        {stage === 'processing' ? <Loader2 size={14} className="animate-spin" /> : icon}
        {stage === 'processing' ? 'Processing…' : buttonLabel}
      </button>

      <AnimatePresence>
        {stage === 'collecting' && (
          <AmountInputPanel
            minAmount={minAmount}
            onCancel={() => setStage('idle')}
            onConfirm={({ amount: a, name, email }) =>
              runCheckout({ amount: a, donorName: name, donorEmail: email })
            }
          />
        )}
      </AnimatePresence>

      {stage === 'error' && (
        <p className="mt-2 font-body text-xs text-red-500">{errorMsg}</p>
      )}
    </div>
  )
}
