<template>
  <header class="relative z-50 user-select-none">
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
            <div class="hidden tablet:block text-main">
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
              <Icon name="heroicons:magnifying-glass" class="w-7 h-7 text-main" />
            </button>
            <button class="p-2" @click="isDrawerOpen = true">
              <Icon name="heroicons:bars-3" class="w-8 h-8 text-main" />
            </button>
          </div>
        </div>
      </x-content-place>

      <!-- Background trang trí (desktop) -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="max-w-[1440px] mx-auto h-full flex justify-end">
          <IconHeader class="h-full text-primary" />
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
            class="absolute inset-y-0 right-0 w-full max-w-md bg-main shadow-2xl flex flex-col pointer-events-auto translate-x-0 transition-transform duration-300 ease-out"
            :class="isDrawerOpen ? 'translate-x-0' : 'translate-x-full'"
          >
            <!-- Header drawer -->
            <div class="bg-primary p-5 flex items-center justify-between">
              <div class="flex items-center gap-4">
                <img class="h-12 w-auto" :src="$image().urlSquare" alt="Logo" />
                <div class="text-main">
                  <p class="font-mont text-xs">UBND TỈNH LÂM ĐỒNG</p>
                  <p class="font-mont text-sm font-bold opacity-90">
                    SỞ VĂN HOÁ, THỂ THAO VÀ DU LỊCH
                  </p>
                </div>
              </div>
              <button class="p-2" @click="isDrawerOpen = false">
                <Icon name="heroicons:x-mark" class="w-8 h-8 text-main" />
              </button>
            </div>

            <!-- Menu mobile -->
            <nav class="flex-1 overflow-y-auto">
              <MobileMenu :menus="menus" @close="isDrawerOpen = false" />
            </nav>
          </div>
        </div>
      </transition>
    </teleport>
  </header>

  <div class="sticky top-0 z-40 bg-main laptop:block hidden">
    <Menu :menus="menus" />
  </div>
</template>

<script setup>
  import { ref, nextTick } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import Menu from './menu/index.vue';
  import MobileMenu from './menu/MobileMenu.vue';
  import IconHeader from '~/public/assets/icon/header.svg';
  import InputFitter from './menu/input-fitter.vue';
  import menus from '~/data/menu/admin.json';

  const router = useRouter();
  const route = useRoute();

  const isDrawerOpen = ref(false);
  const searchRef = ref(null);

  const toggleSearch = () => {
    isDrawerOpen.value = true;
    nextTick(() => searchRef.value?.$el?.focus());
  };

  const handleSearch = (q) => {
    if (!q) return;
    isDrawerOpen.value = false;
    router.push({ path: '/tim-kiem', query: { q } });
  };

  const onLogoError = (e) => (e.target.style.display = 'none');
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
