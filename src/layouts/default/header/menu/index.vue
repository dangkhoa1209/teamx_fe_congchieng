<template>
  <nav class="sticky top-0 z-[999] "> 
    <div class="h-[75px] ">
      <div
        ref="header"
        class="header z-50 bg-main border border-primary"
        :class="{ 'fixed-header': false }"
      >
        <x-content-place>
          <div class="flex justify-between items-center h-[75px] ">
            <ul class="flex gap-[52px] z-50">
              <menu-item v-for="item in menus" :key="item.label" :item="item" />
            </ul>
            <div 
              class="relative h-[75px] flex items-center"
              @mouseenter="onEnter"
              @mouseleave="onLeave"
            >
              <IconFind 
                class="w-6 h-6 fill-primary cursor-pointer"
                @click="focusInput"
              />

              <div
                class="absolute bottom-0 right-0 translate-y-[100%] text-main w-64"
                v-if="show"
              >
                <input-fitter
                  ref="inputRef"
                  @focus="isFocused = true"
                  @blur="outForcus"
                  @enter="handleEnter"
                />
              </div>
            </div>
          </div>
        </x-content-place>
      </div>
    </div>
  </nav>
</template>
<script setup>
import InputFitter from './input-fitter.vue'
import MenuItem from './menu-item.vue'
import IconFind from '~/public/assets/icon/find.svg'
const router = useRouter()

const menus = [
  { 
    label: 'Trang chủ', 
    page: '/trang-chu' 
  },
  { 
    label: 'Giới thiệu', 
    page: '/gioi-thieu' 
  },
  { 
    label: 'Văn hoá cồng chiêng', 
    // page: '/van-hoa-cong-chieng',
    childrens: [
      {
        label: 'Tổng quan văn hoá cồng chiêng',
        page: '/van-hoa-cong-chieng/tong-quan',
      },
      {
        label: 'Văn hóa cồng chiêng tại các Xã',
        // page: '/van-hoa-cong-chieng/xa',
        childrens: [
          {
            label: 'Xã Lạc Dương',
            page: '/van-hoa-cong-chieng/xa/lac-duong'
          },
          {
            label: 'Xã Đạ Tẻh',
            page: '/van-hoa-cong-chieng/xa/da-teh'
          },
          {
            label: 'Xã Bảo Lâm 3',
            page: '/van-hoa-cong-chieng/xa/bao-lam-3'
          },
          {
            label: 'Xã Đinh Trang Thượng',
            page: '/van-hoa-cong-chieng/xa/dinh-trang-thuong'
          },
          {
            label: 'Xã Đam Rông 4',
            page: '/van-hoa-cong-chieng/xa/tam-dong-4'
          }
        ]
      }
    ]
  },
  { 
    label: 'Tiềm năng phát triển', 
    // page: '/tiem-nang-phat-trien' 
    childrens: [
      {
        label: 'Phát triển văn hóa - nghệ thuật',
        page: '/tiem-nang-phat-trien/van-hoa-nghe-thuat'
      },
      {
        label: 'Phát triển du lịch văn hóa - cộng đồng',
        page: '/tiem-nang-phat-trien/du-lich-van-hoa-cong-dong'
      },
      {
        label: 'Phát triển du lịch tại địa phương',
        page: '/tiem-nang-phat-trien/du-lich-tai-dia-phuong'
      }
    ]
  },
  { 
    label: 'Tin tức - Sự kiện', 
    page: '/tin-tuc-su-kien' 
  },
  { 
    label: 'Hợp tác', 
    page: '/hop-tac' 
  },
  { label: 'Liên hệ', 
    page: '/lien-he' 
  }
]


const show = ref(false)
const isFocused = ref(false)
const inputRef = ref(null)

const onEnter = () => {
  show.value = true
}

const onLeave = $lodash.debounce(() => {
  console.log('isFocused.value', isFocused.value);
  
  if (!isFocused.value) {
    show.value = false
  }
}, 2000)

const focusInput = () => {
  show.value = true
  setTimeout(() => {
    inputRef.value?.$el?.focus?.()
  }, 0)
}

const outForcus = () => {
  isFocused.value = false
  onLeave()
}


const handleEnter = (value) => {
  if(!value) {
    return 
  }

  router.push({
    path: '/tim-kiem',
    query: {q: value}
  })
}

</script>

<style scoped>
.fixed-header{
  position: sticky !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999999;
}
</style>
