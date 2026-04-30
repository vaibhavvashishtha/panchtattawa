'use client'

import { cn } from '@/lib/cn'
import { type ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline' | 'gold'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-full font-body font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 disabled:opacity-50 disabled:cursor-not-allowed',
          {
            // primary — solid gold
            'bg-gold text-obsidian hover:bg-gold-light active:scale-95 shadow-lg shadow-gold/20 hover:shadow-gold/40':
              variant === 'primary',
            // gold gradient
            'bg-gold-gradient text-obsidian hover:opacity-90 active:scale-95 shadow-lg shadow-gold/25':
              variant === 'gold',
            // ghost — transparent
            'bg-transparent text-parchment hover:bg-black/5 active:scale-95':
              variant === 'ghost',
            // outline — gold border
            'border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold active:scale-95':
              variant === 'outline',
          },
          {
            'text-sm px-4 py-2': size === 'sm',
            'text-base px-6 py-3': size === 'md',
            'text-lg px-8 py-4': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
