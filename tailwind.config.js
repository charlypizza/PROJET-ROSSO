/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rosso: '#f02721',
        accent: '#ffcc00',
      },
      fontFamily: {
        mono: ['"DM Mono"', 'monospace'],
      },
      borderRadius: {
        'btn': '20px',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-mobile': 'marquee 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
