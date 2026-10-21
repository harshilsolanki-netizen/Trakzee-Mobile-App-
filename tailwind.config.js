/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0095FF',
          dark: '#0077E6',
          light: '#E0F2FE',
          glow: 'rgba(0, 149, 255, 0.30)',
        },
        canvas: '#F8FAFC',
        surface: {
          DEFAULT: '#FFFFFF',
          subtle: '#F1F5F9',
        },
        border: {
          subtle: '#EEF2F6',
          input: '#E2E8F0',
          focus: '#0095FF',
          dashed: '#CBD5E1',
        },
        category: {
          blue: { bg: '#E0F2FE', icon: '#0284C7' },
          purple: { bg: '#F3E8FF', icon: '#9333EA' },
          pink: { bg: '#FCE7F3', icon: '#DB2777' },
          green: { bg: '#DCFCE7', icon: '#16A34A' },
          orange: { bg: '#FFEDD5', icon: '#EA580C' },
          salmon: { bg: '#FEE2E2', icon: '#DC2626' },
        },
        status: {
          high: { bg: '#FEE2E2', text: '#EF4444' },
          med: { bg: '#FEF3C7', text: '#D97706' },
          low: { bg: '#DCFCE7', text: '#16A34A' },
          online: '#22C55E',
        }
      },
      borderRadius: {
        'squircle': '14px',
        'input': '16px',
        'card': '18px',
        'card-lg': '24px',
        'sheet': '30px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.03), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'card-elevated': '0 8px 16px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.02)',
        'primary-cta': '0 8px 20px rgba(0, 149, 255, 0.28)',
        'fab': '0 10px 24px rgba(0, 149, 255, 0.35)',
        'sheet': '0 -8px 28px rgba(0, 0, 0, 0.08)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
