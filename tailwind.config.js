import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './app.vue'
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px'
    },
    extend: {
      colors: {
        primary: '#4C2014',
        main: '#FFF7EB',
        extra: '#FCEFDE',
        white: '#FFFFFF',
        transparent: 'transparent',
        ...colors
      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        robo: ['Roboto', 'sans-serif'],
      }
    }
  }
}
