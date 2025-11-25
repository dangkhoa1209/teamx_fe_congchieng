<template>
  <header class="relative z-50">
    <!-- HEADER TRÊN CÙNG -->
    <div class="bg-primary relative">
      <x-content-place>
        <div class="flex items-center justify-between py-5 laptop:py-8">
          <!-- Logo + Tên đơn vị -->
          <div class="flex items-center gap-4 laptop:gap-10">
            <img
              class="h-14 w-auto laptop:h-20"
              :src="$image().urlSquare"
              alt="Logo"
              @error="onLogoError"
            />
            <div class="hidden tablet:block text-white">
              <p class="font-mont font-semibold text-[16px] laptop:text-[20px] leading-tight">
                UBND TỈNH LÂM ĐỒNG
              </p>
              <p class="font-mont font-semibold text-[22px] laptop:text-[28px] leading-tight">
                SỞ VĂN HOÁ, THỂ THAO VÀ DU LỊCH
              </p>
            </div>
          </div>

          <!-- NÚT MOBILE (dưới laptop) -->
          <div class="flex items-center gap-4 laptop:hidden">
            <button class="p-2" @click="toggleSearch">
              <Icon name="heroicons:magnifying-glass" class="w-7 h-7 text-white" />
            </button>
            <button class="p-2" @click="isDrawerOpen = true">
              <Icon name="heroicons:bars-3" class="w-8 h-8 text-white" />
            </button>
          </div>
        </div>
      </x-content-place>

      <!-- Background trang trí (desktop) -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="max-w-[1440px] mx-auto h-full flex justify-end">
          <IconHeader class="h-full text-primary opacity-20" />
        </div>
      </div>
    </div>

    <!-- MENU NGANG - CHỈ HIỆN TỪ LAPTOP TRỞ LÊN + STICKY -->

    <!-- DRAWER MOBILE -->
    <teleport to="body">
      <transition name="fade">
        <div v-if="isDrawerOpen" class="fixed inset-0 z-[9999]" @click.self="isDrawerOpen = false">
          <!-- 1. Overlay – chỉ che phần ngoài drawer -->
          <div class="absolute inset-0 bg-black/50" />

          <!-- 2. Drawer – phải nằm SAU overlay và có pointer-events-auto -->
          <div
            class="absolute inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl flex flex-col pointer-events-auto translate-x-0 transition-transform duration-300 ease-out"
            :class="isDrawerOpen ? 'translate-x-0' : 'translate-x-full'"
          >
            <!-- Header drawer -->
            <div class="bg-primary p-5 flex items-center justify-between">
              <div class="flex items-center gap-4">
                <img class="h-12 w-auto" :src="$image().urlSquare" alt="Logo" />
                <div class="text-white">
                  <p class="font-mont font-bold text-sm">SỞ VHTTDL</p>
                  <p class="font-mont text-xs opacity-90">LÂM ĐỒNG</p>
                </div>
              </div>
              <button class="p-2" @click="isDrawerOpen = false">
                <Icon name="heroicons:x-mark" class="w-8 h-8 text-white" />
              </button>
            </div>

            <!-- Menu mobile -->
            <nav class="flex-1 overflow-y-auto">
              <MobileMenu :menus="menus" @close="isDrawerOpen = false" />
            </nav>

            <!-- Thanh tìm kiếm -->
            <div v-if="showSearch" class="p-4 border-t bg-gray-50">
              <input-fitter
                ref="searchRef"
                placeholder="Nhập từ khóa..."
                class="w-full"
                @enter="handleSearch"
              />
            </div>
          </div>
        </div>
      </transition>
    </teleport>
  </header>

  <div class="sticky top-0 z-40 bg-main laptop:block hidden">
    <x-content-place>
      <Menu :menus="menus" />
    </x-content-place>
  </div>
</template>

<script setup>
  import { ref, nextTick } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import Menu from './menu/index.vue';
  import MobileMenu from './menu/MobileMenu.vue';
  import IconHeader from '~/public/assets/icon/header.svg';

  const router = useRouter();
  const route = useRoute();

  const isDrawerOpen = ref(false);
  const showSearch = ref(false);
  const searchRef = ref(null);

  const toggleSearch = () => {
    showSearch.value = !showSearch.value;
    if (showSearch.value) {
      nextTick(() => searchRef.value?.$el?.focus());
    }
  };

  const handleSearch = (q) => {
    if (!q) return;
    showSearch.value = false;
    isDrawerOpen.value = false;
    router.push({ path: '/tim-kiem', query: { q } });
  };

  const onLogoError = (e) => (e.target.style.display = 'none');

  // Menu data
  const menus = [
    { label: 'Trang chủ', page: '/trang-chu' },
    { label: 'Giới thiệu', page: '/gioi-thieu' },
    {
      label: 'Văn hoá cồng chiêng',
      id: 'van-hoa',
      childrens: [
        {
          label: 'Tổng quan văn hoá cồng chiêng',
          id: 'tong-quan',
          page: '/van-hoa-cong-chieng/tong-quan',
        },
        {
          label: 'Văn hóa cồng chiêng tại các Xã',
          id: 'xa-parent',
          childrens: [
            {
              label: 'Xã Lạc Dương',
              id: 'xa-lac-duong',
              page: '/van-hoa-cong-chieng/xa/lac-duong',
            },
            { label: 'Xã Đạ Tẻh', id: 'xa-da-teh', page: '/van-hoa-cong-chieng/xa/da-teh' },
            { label: 'Xã Bảo Lâm 3', id: 'xa-bao-lam', page: '/van-hoa-cong-chieng/xa/bao-lam-3' },
            {
              label: 'Xã Đinh Trang Thượng',
              id: 'xa-dinh-trang',
              page: '/van-hoa-cong-chieng/xa/dinh-trang-thuong',
            },
            {
              label: 'Xã Đam Rông 4',
              id: 'xa-dam-rong',
              page: '/van-hoa-cong-chieng/xa/tam-dong-4',
            },
          ],
        },
      ],
    },
    {
      label: 'Tiềm năng phát triển',
      id: 'tiem-nang',
      childrens: [
        {
          label: 'Phát triển văn hóa - nghệ thuật',
          id: 'tn1',
          page: '/tiem-nang-phat-trien/van-hoa-nghe-thuat',
        },
        {
          label: 'Phát triển du lịch văn hóa - cộng đồng',
          id: 'tn2',
          page: '/tiem-nang-phat-trien/du-lich-van-hoa-cong-dong',
        },
        {
          label: 'Phát triển du lịch tại địa phương',
          id: 'tn3',
          page: '/tiem-nang-phat-trien/du-lich-tai-dia-phuong',
        },
      ],
    },
    { label: 'Tin tức - Sự kiện', page: '/tin-tuc-su-kien' },
    { label: 'Hợp tác', page: '/hop-tac' },
    { label: 'Liên hệ', page: '/lien-he' },
  ];
</script>
<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease-out;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
