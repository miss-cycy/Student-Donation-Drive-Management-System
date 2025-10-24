/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./tsrc/**/*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  },
  plugins: [],
}