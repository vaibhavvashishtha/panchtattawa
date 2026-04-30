import { cn } from '@/lib/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'gold' | 'terracotta' | 'sage' | 'muted' | 'premium' | 'free'
  className?: string
}

export function Badge({ children, variant = 'muted', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-body font-medium',
        {
          'bg-gold/15 text-gold border border-gold/20': variant === 'gold',
          'bg-terracotta/15 text-terracotta border border-terracotta/20': variant === 'terracotta',
          'bg-sage/15 text-sage border border-sage/20': variant === 'sage',
          'bg-black/5 text-parchment-muted border border-black/10': variant === 'muted',
          'bg-gold/20 text-gold-light border border-gold/30 font-semibold': variant === 'premium',
          'bg-sage/20 text-sage-light border border-sage/30 font-semibold': variant === 'free',
        },
        className
      )}
    >
      {children}
    </span>
  )
}
