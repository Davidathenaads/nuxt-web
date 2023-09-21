/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.{js,ts,vue}'
  ],
  theme: {
    extend: {
      colors: {
        primarycolor: '#d93b57',
        yogapink: '#f19d94',
        yoga: {
          pink: '##f19d94',
          card: {
            left: '#e84860',
            right: '#eec8a1'
          },
          pink2: '#d98683',
          red: '#FF0000',
          linecolor: '#ea8c89',
          linebtncolor: '#e24e64',
          btncolor: '#db485d',
          footercolor: '#E74760',
          mobilecolor: '#825450d9'
        }
      }
    }
  },
  plugins: []
};
