<template>
  <nav class="h-[75px]"> 
    <div ref="headerWrapper" class="h-0"></div>
    <header class="h-[75px] ">
      <div
        ref="header"
        class="header z-50 bg-main"
        :class="{ 'fixed-header': isFixed }"
      >
        <x-content-place>
          <div class="flex justify-between items-center h-[75px]">
            <!-- Menu -->
            <nav>
              <ul class="flex gap-[52px] uppercase text-[16px] font-robo font-medium">
                <li
                  v-for="item in menus"
                  :key="item.label"
                  class="cursor-pointer hover:text-secondary"
                >
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
    </header>
  </nav>
 
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import IconFind from '~/public/assets/icon/find.svg'

const menus = [
  // { label: 'Trang chủ', page: '/trang-chu' },
  // { label: 'Giới thiệu', page: '/gioi-thieu' },
  // { label: 'Văn hoá cồng chiêng', page: '/van-hoa-cong-chieng' },
  // { label: 'Tiềm năng phát triển', page: '/tiem-nang-phat-trien' },
  { label: 'Tin tức - Sự kiện', page: '/admin/tin-tuc-su-kien' },
  // { label: 'Hợp tác', page: '/hop-tac' },
  // { label: 'Liên hệ', page: '/lien-he' }
]

const headerWrapper = ref(null)
const isFixed = ref(false)
let observer

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      isFixed.value = !entry.isIntersecting
    },
    { threshold: 0 }
  )
  if (headerWrapper.value) observer.observe(headerWrapper.value)
})

onUnmounted(() => {
  observer?.disconnect()
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
