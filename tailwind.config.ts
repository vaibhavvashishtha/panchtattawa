import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: ['text-cobalt', 'text-cobalt-light'],
  theme: {
    extend: {
      colors: {
        // "obsidian" = main background surfaces (light cream in new theme)
        obsidian: {
          DEFAULT: '#FAF0E6',
          50: '#F0E2D0',
          100: '#F5E8D8',
        },
        // "gold" = primary brand colour (orange in new theme)
        gold: {
          DEFAULT: '#E86830',
          light: '#F0885A',
          dark: '#C04E18',
        },
        terracotta: {
          DEFAULT: '#C4714F',
          light: '#D4936E',
        },
        sage: {
          DEFAULT: '#5C8A5C',
          light: '#7BAA7B',
        },
        // "parchment" = text colours (dark in new theme)
        parchment: {
          DEFAULT: '#1E1A16',
          muted: '#6B5E52',
        },
        // Brand blue used for tagline "The Law of Creation"
        cobalt: {
          DEFAULT: '#3D6BB3',
          light: '#5A8DD4',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 24s linear infinite',
        'spin-reverse': 'spin-reverse 32s linear infinite',
        'pulse-gold': 'pulse-gold 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.4s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(232,104,48,0.15)' },
          '50%': { boxShadow: '0 0 50px rgba(232,104,48,0.35)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(24px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E86830 0%, #F0885A 50%, #C04E18 100%)',
        'obsidian-gradient': 'linear-gradient(180deg, #FAF0E6 0%, #F5E8D8 100%)',
        'hero-gradient': 'radial-gradient(ellipse at 60% 0%, rgba(232,104,48,0.07) 0%, transparent 60%)',
      },
    },
  },
  plugins: [],
}

export default config
