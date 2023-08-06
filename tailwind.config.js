/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: { DEFAULT: '#202c37', tint: '#2b3945', shade: '#111517' },
        light: { DEFAULT: colors.neutral[50], shade: '#858585' },
      },
    },
  },
  plugins: [],
}
