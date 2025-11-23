<template>
  <nav class="sticky top-0 z-[999]">
    <div class="h-[75px]">
      <div
        ref="header"
        class="header z-50 bg-main border border-primary"
        :class="{ 'fixed-header': false }"
      >
        <x-content-place>
          <!-- <div class="flex justify-between items-center h-[75px] gap-5">
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
          </div> -->
          <div class="relative flex justify-between items-center h-[75px] gap-5">
            <!-- WRAPPER cuộn ngang -->
            <div ref="menuWrapper" class="relative overflow-hidden flex-1">
              <!-- Nút PRE -->
              <button
                v-if="showPrev"
                class="absolute left-0 top-1/2 -translate-y-1/2 w-[30px] h-[30px] rounded-full bg-main text-primary border border-primary shadow cursor-pointer z-50 flex items-center justify-center text-[16px]"
                @click="scrollLeft"
              >
                ‹
              </button>

              <!-- List menu scroll ngang -->
              <ul ref="menuList" class="flex gap-[52px] overflow-x-auto no-scrollbar scroll-smooth">
                <menu-item
                  v-for="item in menus"
                  :key="item.label"
                  :item="item"
                  @showDropdown="openDropdown"
                />
              </ul>

              <!-- Nút NEXT -->
              <button
                v-if="showNext"
                class="absolute right-0 top-1/2 -translate-y-1/2 w-[30px] h-[30px] rounded-full bg-main text-primary border border-primary shadow cursor-pointer z-50 flex items-center justify-center text-[16px]"
                @click="scrollRight"
              >
                ›
              </button>
            </div>

            <!-- SEARCH -->
            <div
              class="relative h-[75px] flex items-center"
              @mouseenter="onEnter"
              @mouseleave="onLeave"
            >
              <IconFind class="w-6 h-6 fill-primary cursor-pointer" @click="focusInput" />

              <div v-if="show" class="absolute bottom-0 right-0 translate-y-[100%] text-main w-64">
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
  import InputFitter from './input-fitter.vue';
  import MenuItem from './menu-item.vue';
  import IconFind from '~/public/assets/icon/testsvg.svg';
  const router = useRouter();

  const menuWrapper = ref(null);
  const menuList = ref(null);

  const showPrev = ref(false);
  const showNext = ref(false);

  const checkScroll = () => {
    const el = menuList.value;
    if (!el) return;

    showPrev.value = el.scrollLeft > 10;
    showNext.value = el.scrollWidth - el.clientWidth - el.scrollLeft > 10;
  };

  const scrollLeft = () => {
    menuList.value.scrollBy({ left: -200, behavior: 'smooth' });
    setTimeout(checkScroll, 300);
  };

  const scrollRight = () => {
    menuList.value.scrollBy({ left: 200, behavior: 'smooth' });
    setTimeout(checkScroll, 300);
  };

  onMounted(() => {
    checkScroll();
    menuList.value?.addEventListener('scroll', checkScroll);
  });

  const menus = [
    {
      label: 'Trang chủ',
      page: '/trang-chu',
    },
    {
      label: 'Giới thiệu',
      page: '/gioi-thieu',
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
              page: '/van-hoa-cong-chieng/xa/lac-duong',
            },
            {
              label: 'Xã Đạ Tẻh',
              page: '/van-hoa-cong-chieng/xa/da-teh',
            },
            {
              label: 'Xã Bảo Lâm 3',
              page: '/van-hoa-cong-chieng/xa/bao-lam-3',
            },
            {
              label: 'Xã Đinh Trang Thượng',
              page: '/van-hoa-cong-chieng/xa/dinh-trang-thuong',
            },
            {
              label: 'Xã Đam Rông 4',
              page: '/van-hoa-cong-chieng/xa/tam-dong-4',
            },
          ],
        },
      ],
    },
    {
      label: 'Tiềm năng phát triển',
      // page: '/tiem-nang-phat-trien'
      childrens: [
        {
          label: 'Phát triển văn hóa - nghệ thuật',
          page: '/tiem-nang-phat-trien/van-hoa-nghe-thuat',
        },
        {
          label: 'Phát triển du lịch văn hóa - cộng đồng',
          page: '/tiem-nang-phat-trien/du-lich-van-hoa-cong-dong',
        },
        {
          label: 'Phát triển du lịch tại địa phương',
          page: '/tiem-nang-phat-trien/du-lich-tai-dia-phuong',
        },
      ],
    },
    {
      label: 'Tin tức - Sự kiện',
      page: '/tin-tuc-su-kien',
    },
    {
      label: 'Hợp tác',
      page: '/hop-tac',
    },
    { label: 'Liên hệ', page: '/lien-he' },
  ];

  const show = ref(false);
  const isFocused = ref(false);
  const inputRef = ref(null);

  const onEnter = () => {
    show.value = true;
  };

  const onLeave = $lodash.debounce(() => {
    console.log('isFocused.value', isFocused.value);
    if (!isFocused.value) {
      show.value = false;
    }
  }, 2000);

  const focusInput = () => {
    show.value = true;
    setTimeout(() => {
      inputRef.value?.$el?.focus?.();
    }, 0);
  };

  const outForcus = () => {
    isFocused.value = false;
    onLeave();
  };

  const handleEnter = (value) => {
    if (!value) {
      return;
    }

    router.push({
      path: '/tim-kiem',
      query: { q: value },
    });
  };
</script>

<style scoped>
  .fixed-header {
    position: sticky !important;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999999;
  }

  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .no-scrollbar {
    -ms-overflow-style: none; /* IE & Edge */
    scrollbar-width: none; /* Firefox */
  }
</style>
