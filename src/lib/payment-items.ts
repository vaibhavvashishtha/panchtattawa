export type PaymentItem = {
  id: string
  label: string
  type: 'donation' | 'service'
  amount: number | 'variable' // paise
  minAmount?: number // paise; only for 'variable' items
}

export const PAYMENT_ITEMS: Record<string, PaymentItem> = {
  shiksha: { id: 'shiksha', label: 'Shiksha Daan', type: 'donation', amount: 50000 },
  ann: { id: 'ann', label: 'Ann Daan', type: 'donation', amount: 'variable', minAmount: 5100 },
  temple: { id: 'temple', label: 'Shiva Kami Pooja', type: 'donation', amount: 100000 },
  gau: { id: 'gau', label: 'Gau Seva', type: 'donation', amount: 50000 },
  kanya: { id: 'kanya', label: 'Kanya Daan', type: 'donation', amount: 900000 },
  ashram: { id: 'ashram', label: 'Ashram Daan', type: 'donation', amount: 'variable', minAmount: 5100 },
  'astro-consult': { id: 'astro-consult', label: 'Vedic Astrology Consultation', type: 'service', amount: 210000 },
  'vastu-consult': { id: 'vastu-consult', label: 'Vastu Consultation', type: 'service', amount: 510000 },
  'astro-vastu-combined': { id: 'astro-vastu-combined', label: 'Astro-Vastu Combined', type: 'service', amount: 750000 },
}
