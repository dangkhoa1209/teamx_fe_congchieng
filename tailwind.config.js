import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './nuxt.config.{js,ts}",',
    './app.vue'
  ],
  plugins: [
    require('daisyui')  // Thêm dòng này
  ],
  daisyui: {  // Tùy chọn: Cấu hình theme DaisyUI (ví dụ: dùng theme light)
    themes: ["light", "dark", "cupcake"]  // Hoặc true để dùng tất cả themes
  },
  theme: {
    screens: {
      ...defaultTheme.screens,
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px'
    },
    extend: {
      colors: {
        primary: '#4C2014',// nau
        main: '#FFF7EB', // sang nhat
        extra: '#FCEFDE', // sang dam
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
