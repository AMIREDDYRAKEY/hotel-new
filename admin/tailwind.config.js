/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbf8f3',
          100: '#f5edd9',
          200: '#ebdbb5',
          300: '#dcc28a',
          400: '#cba361',
          500: '#c5a880', // Primary luxury champagne gold
          600: '#b3956c', // Secondary gold hover
          700: '#997e57',
          800: '#7c6543',
          900: '#665235',
          950: '#3b2f1e',
        },
        luxury: {
          gold: '#c5a880',
          goldLight: '#e5d5be',
          goldDark: '#9c8360',
          bg: '#0c0a09', // Deep luxurious black/stone
          card: '#161310', // Dark card background
          border: '#2c2520', // Subtle warm border
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'luxury-glow': 'radial-gradient(circle at center, rgba(197, 168, 128, 0.12) 0%, transparent 70%)',
        'hero-gradient': 'linear-gradient(to bottom, rgba(12, 10, 9, 0.3) 0%, rgba(12, 10, 9, 0.95) 100%)',
      },
      keyframes: {
        'subtle-zoom': {
          '0%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1.08)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'subtle-zoom': 'subtle-zoom 20s infinite alternate ease-in-out',
        'fade-in': 'fade-in 1.2s ease-out forwards',
      }
    },
  },
  plugins: [],
}
