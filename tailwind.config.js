/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['./shared/**/*.{ts,tsx,css}', './widgets/**/*.{ts,tsx,css}', './app/**/*.{ts,tsx,css}'],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '1440px',
        md: '1440px',
        lg: '1440px',
        xl: '1440px',
        '2xl': '1440px',
      },
    },
    extend: {},
  },
}
