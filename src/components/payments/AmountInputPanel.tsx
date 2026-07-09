'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const QUICK_AMOUNTS = [101, 501, 1001]

interface AmountInputPanelProps {
  minAmount: number // rupees
  onConfirm: (data: { amount: number; name: string; email: string }) => void
  onCancel: () => void
  submitLabel?: string
}

export function AmountInputPanel({ minAmount, onConfirm, onCancel, submitLabel = 'Continue to Pay' }: AmountInputPanelProps) {
  const [amount, setAmount] = useState<number | ''>('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {
    const numAmount = Number(amount)
    if (!Number.isFinite(numAmount) || numAmount < minAmount) {
      setError(`Minimum amount is ₹${minAmount}`)
      return
    }
    setError('')
    onConfirm({ amount: numAmount, name, email })
  }

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden"
    >
      <div className="mt-3 p-4 rounded-xl border border-parchment/10 bg-obsidian-100 space-y-3">
        <div className="flex gap-2 flex-wrap">
          {QUICK_AMOUNTS.map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => setAmount(a)}
              className={`px-3 py-1.5 rounded-full text-xs font-body border transition-colors ${
                amount === a
                  ? 'bg-gold text-white border-gold'
                  : 'border-parchment/20 text-parchment-muted hover:border-gold/50'
              }`}
            >
              ₹{a}
            </button>
          ))}
        </div>

        <input
          type="number"
          placeholder={`Custom amount (min ₹${minAmount})`}
          value={amount}
          onChange={(e) => setAmount(e.target.value === '' ? '' : Number(e.target.value))}
          className="w-full px-3 py-2 rounded-lg bg-obsidian border border-parchment/15 font-body text-sm text-parchment placeholder:text-parchment-muted/50 focus:outline-none focus:border-gold/50"
        />

        <input
          type="text"
          placeholder="Your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-obsidian border border-parchment/15 font-body text-sm text-parchment placeholder:text-parchment-muted/50 focus:outline-none focus:border-gold/50"
        />

        <input
          type="email"
          placeholder="Your email (optional)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-obsidian border border-parchment/15 font-body text-sm text-parchment placeholder:text-parchment-muted/50 focus:outline-none focus:border-gold/50"
        />

        {error && <p className="font-body text-xs text-red-500">{error}</p>}

        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleSubmit}
            className="flex-1 bg-gold text-white font-body text-sm font-medium py-2 rounded-lg hover:bg-gold-dark transition-colors"
          >
            {submitLabel}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 rounded-lg font-body text-sm text-parchment-muted border border-parchment/15 hover:border-parchment/30 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </motion.div>
  )
}
