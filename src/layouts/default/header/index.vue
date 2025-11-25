<template>
  <header class="z-50 relative bg-primary">
    <!-- HEADER TRÊN CÙNG -->
    <div class="relative">
      <x-content-place>
        <div class="flex items-center justify-between py-6 lg:py-8">
          <!-- Logo + Tên đơn vị -->
          <div class="flex items-center gap-6 lg:gap-10">
            <img
              class="h-16 w-auto lg:h-20"
              :src="$image().urlSquare"
              alt="Logo"
              @error="onLogoError"
            />
            <div class="hidden sm:block">
              <p
                class="font-mont font-semibold text-white text-[18px] lg:text-[20px] leading-tight"
              >
                UBND TỈNH LÂM ĐỒNG
              </p>
              <p
                class="font-mont font-semibold text-white text-[24px] lg:text-[28px] leading-tight"
              >
                SỞ VĂN HOÁ, THỂ THAO VÀ DU LỊCH
              </p>
            </div>
          </div>

          <!-- NÚT MOBILE: Hamburger + Tìm kiếm -->
          <div class="flex items-center gap-4 lg:hidden">
            <button class="p-2" @click="toggleSearchMobile">
              <!-- <IconFind class="w-7 h-7 fill-white" /> -->
              <Icon name="heroicons:chevron-double-right" class="w-8 h-8 fill-white" />
            </button>
            <button class="p-2" @click="isOpen = true">
              <!-- <IconMenu class="w-8 h-8 fill-white" /> -->
              <Icon name="heroicons:chevron-double-right" class="w-8 h-8 fill-white" />
            </button>
          </div>

          <!-- ICON TÌM KIẾM + BACKGROUND TRANG TRÍ (chỉ desktop) -->
          <div class="absolute top-0 right-0 h-full">
            <div class="max-w-[1440px] w-full mx-auto h-full flex justify-end">
              <IconHeader class="h-full fill-primary" />
              <!-- <Icon name="heroicons:chevron-double-right" class="h-full" /> -->
            </div>
          </div>
        </div>
      </x-content-place>
    </div>

    <teleport to="body">
      <div v-if="isOpen" class="fixed inset-0 z-[9999] flex" @click.self="isOpen = false">
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/50" />

        <!-- Drawer panel -->
        <div
          class="relative w-full max-w-md bg-white shadow-2xl ml-auto flex flex-col"
          :class="isOpen ? 'animate-in slide-in-from-right' : 'animate-out slide-out-to-right'"
        >
          <!-- Header drawer -->
          <div class="bg-primary p-6 flex">
            <button class="p-2" @click="isOpen = false">
              <!-- <IconClose class="w-8 h-8 fill-white" /> -->
              <Icon name="heroicons:chevron-double-right" class="w-8 h-8 fill-white" />
            </button>
          </div>

          <!-- Menu trong drawer -->
          <div class="overflow-y-auto bg-gray-50">
            <MobileMenu :menus="menus" />
          </div>

          <!-- Thanh tìm kiếm trong drawer -->
          <div class="p-4 border-t w-full">
            <input-fitter ref="mobileSearchRef" class="w-full" @enter="handleMobileSearch" />
          </div>
        </div>
      </div>
    </teleport>
  </header>

  <!-- // laptop -->
  <Menu v-if="screenWidth >= 1024" class="mx-auto max-w-[1440px]" />
</template>

<script setup>
  import { ref, nextTick } from 'vue';
  import { useRouter } from 'vue-router';
  import Menu from './menu/index.vue';
  import MobileMenu from './menu/MobileMenu.vue'; // sẽ tạo bên dưới
  import IconHeader from '~/public/assets/icon/header.svg';
  import InputFitter from './menu/input-fitter.vue';

  // import IconFind from '~/public/assets/icon/find.svg';
  // import IconMenu from '~/public/assets/icon/menu.svg'; // icon 3 gạch
  // import IconClose from '~/public/assets/icon/close.svg'; // icon X

  const windowWidth = ref(window?.innerWidth);

  const handleResize = () => {
    windowWidth.value = window?.innerWidth;
  };

  onMounted(() => {
    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });

  // Computed nếu bạn muốn dùng trực tiếp
  const screenWidth = computed(() => windowWidth.value);

  const router = useRouter();
  const isOpen = ref(false);
  const showSearchMobile = ref(false);
  const mobileSearchRef = ref(null);

  const toggleSearchMobile = () => {
    showSearchMobile.value = !showSearchMobile.value;
    if (showSearchMobile.value) {
      nextTick(() => mobileSearchRef.value?.$el?.focus());
    }
  };

  const handleMobileSearch = (q) => {
    if (!q) return;
    showSearchMobile.value = false;
    isOpen.value = false;
    router.push({ path: '/tim-kiem', query: { q } });
  };

  const onLogoError = (e) => {
    e.target.style.display = 'none';
  };

  // Dữ liệu menu (copy từ file menu cũ của bạn)
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
  .animate-in {
    animation: slideIn 0.3s ease-out;
  }
  .animate-out {
    animation: slideOut 0.3s ease-in forwards;
  }
  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes slideOut {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
</style>
