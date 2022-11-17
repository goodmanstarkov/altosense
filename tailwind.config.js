/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./shared/**/*.{ts,tsx,css}', './widgets/**/*.{ts,tsx,css}', './app/**/*.{ts,tsx,css}'],
  important: true,
  theme: {
    colors: {
      transparent: 'transparent',
      primary: '#1b1b1b',
      primaryLight: '#a7a7a7',
      secondary: '#dddacd',
    },
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
  plugins: [
    ({ addVariant }) => {
      addVariant('child', '& > *')
      addVariant('child-hover', '& > *:hover')
    },
  ],
}
