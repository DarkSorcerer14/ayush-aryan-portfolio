/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'glow': 'glow 2.0s linear infinite',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'glow': {
          '0%, 100%': {
            boxShadow: '0 0 5px #06b6d4, 0 0 10px #06b6d4',
            borderColor: '#06b6d4'
          },
          '50%': {
            boxShadow: '0 0 15px #06b6d4, 0 0 25px #06b6d4',
            borderColor: '#0891b2'
          },
        },
      },
    },
  },
  plugins: [],
};