import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  mode: 'jit',
  content: ['./components/**/*.{js,vue}', './layouts/**/*.{js,vue}', './pages/**/*.{js,vue}', './app.vue'],
  theme: {
    colors,
    screens: {
      ...defaultTheme.screens,
      tablet: '640px', 
      laptop: '1024px', 
      desktop: '1280px' 
    },
    extend: {
      colors: {
        main: 'F00000',
        transparent: 'transparent'
      }
    }
  }
}
