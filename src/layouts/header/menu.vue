<template>
  <div class="h-[75px]" ref="position">
    <div
      ref="refMainMenu"
      class="header transition-all z-50"
    >
      <x-content-place>
        <div class="flex justify-between items-center h-[75px] px-4">
          <!-- Menu -->
          <nav>
            <ul class="flex gap-8 md:gap-[52px] uppercase text-sm font-medium">
              <li v-for="item in menus" :key="item.label" class="cursor-pointer hover:text-secondary transition">
                <x-link :to="item.page">
                  <span class="text-primary">{{ item.label }}</span>
                </x-link>
              </li>
            </ul>
          </nav>

          <!-- Icon -->
          <IconFind class="w-6 h-6 fill-primary" />
        </div>
      </x-content-place>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menus = ref([
  { label: 'Trang chủ', page: '/trang-chu' },
  { label: 'Giới thiệu', page: '/gioi-thieu' },
  { label: 'Văn hoá cồng chiêng', page: '/van-hoa-cong-chieng' },
  { label: 'Tiềm năng phát triển', page: '/tiem-nang-phat-trien' },
  { label: 'Tin tức - Sự kiện', page: '/tin-tuc-su-kien' },
  { label: 'Hợp tác', page: '/hop-tac' },
  { label: 'Liên hệ', page: '/lien-he' }
])

import IconFind from '~/public/assets/icon/find.svg'

const refMainMenu = ref()
const position = ref()

const handleScroll = () => {
    const y = position.value.getBoundingClientRect().top
    if(y <= 0) {
      refMainMenu.value.classList.add('fixed-header')
    }else{
      refMainMenu.value.classList.remove('fixed-header')
    }
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
  .fixed-header {
    position: fixed !important;
    top: 0;
    left: 0;
    right: 0;
  }
</style>