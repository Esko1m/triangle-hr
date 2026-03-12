/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5', // Modern Indigo Blue
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        accent: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669', // Modern Emerald Green
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        slate: {
          850: '#162032',
          900: '#0f172a',
          950: '#020617',
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-hover': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glow': '0 0 20px rgba(20, 184, 166, 0.5)',
        'glow-primary': '0 0 40px -10px rgba(79, 70, 229, 0.4)',
        'glow-accent': '0 0 40px -10px rgba(5, 150, 105, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'marquee-seamless': 'marquee-seamless 25s linear infinite',
        'marquee-seamless-reverse': 'marquee-seamless-reverse 25s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'orbit': 'orbit 20s linear infinite',
        'shine': 'shine 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'marquee-seamless': {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
        },
        'marquee-seamless-reverse': {
          '0%': { transform: 'translate3d(-50%, 0, 0)' },
          '100%': { transform: 'translate3d(0, 0, 0)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        shine: {
          '0%, 100%': { backgroundPosition: '200% center' },
          '50%': { backgroundPosition: '-200% center' },
        }
      },
    },
  },
  plugins: [],
}
