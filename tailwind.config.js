module.exports = {
  content: [
    "./layouts/**/*.html",
    "./themes/pembatik2/layouts/**/*.html",
    "./themes/temabaru/layouts/**/*.html",
    "./content/**/*.html",
  ],
  theme: {
    extend: {
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        }
      }
    }
  },
  darkMode: "class",
  plugins: [
    require('@tailwindcss/typography'),
  ],

}