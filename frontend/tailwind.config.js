/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0E14',
          surface: '#101722',
          alt: '#16202C',
          border: '#223040',
        },
        copper: {
          DEFAULT: '#C9834A',
          light: '#E3A870',
          dark: '#8F5A2E',
        },
        signal: {
          DEFAULT: '#48D8B4',
          light: '#7EE9CE',
          dark: '#2E9E82',
        },
        ivory: {
          DEFAULT: '#E9EEF3',
          muted: '#8695A7',
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        'dot-grid':
          'radial-gradient(circle, rgba(134,149,167,0.18) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-grid': '24px 24px',
      },
      keyframes: {
        dash: {
          to: { strokeDashoffset: '0' },
        },
        pulseNode: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.35)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        dash: 'dash 2.4s linear forwards',
        pulseNode: 'pulseNode 2.6s ease-in-out infinite',
        fadeUp: 'fadeUp 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
}
