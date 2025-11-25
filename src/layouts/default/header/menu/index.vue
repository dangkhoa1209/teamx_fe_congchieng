<template>
  currentPath: {{ currentPath }}
  <nav class="sticky top-0 z-[999]">
    <div class="h-[75px]">
      <div class="header z-50 bg-main border border-primary">
        <x-content-place>
          <div class="relative flex justify-between items-center h-[75px] gap-5">
            <!-- MENU NGANG CÓ SCROLL -->
            <div ref="menuWrapper" class="relative overflow-hidden flex-1">
              <button
                v-if="showPrev"
                class="absolute left-0 top-1/2 -translate-y-1/2 w-[30px] h-[30px] rounded-full bg-main text-primary border border-primary shadow cursor-pointer z-50 flex items-center justify-center text-[16px]"
                @click="scrollLeft"
              >
                ‹
              </button>

              <ul ref="menuList" class="flex gap-[52px] overflow-x-auto no-scrollbar scroll-smooth">
                <MenuDropdownItem
                  v-for="item in menus"
                  :key="item.id || item.label"
                  :item="item"
                  :active-path="activePath"
                  :parent-path="[]"
                  :is-root="true"
                  :current-path="currentPath"
                  @update:path="updatePath"
                  @mouseleave="scheduleClose"
                />
              </ul>

              <button
                v-if="showNext"
                class="absolute right-0 top-1/2 -translate-y-1/2 w-[30px] h-[30px] rounded-full bg-main text-primary border border-primary shadow cursor-pointer z-50 flex items-center justify-center text-[16px]"
                @click="scrollRight"
              >
                ›
              </button>
            </div>

            <!-- SEARCH ICON -->
            <div
              class="relative h-[75px] flex items-center"
              @mouseenter="onEnter"
              @mouseleave="onLeave"
            >
              <IconFind class="w-6 h-6 fill-primary cursor-pointer" @click="focusInput" />
              <div
                v-if="showSearch"
                class="absolute bottom-0 right-0 translate-y-[100%] text-main w-64"
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
  import MenuDropdownItem from './MenuDropdownItem.vue';
  import InputFitter from './input-fitter.vue';
  import IconFind from '~/public/assets/icon/testsvg.svg';

  const router = useRouter();
  const route = useRoute();

  const currentPath = computed(() => {
    return route.path.replace(/\/$/, '') || '/trang-chu';
  });

  // === HOVER PATH STATE ===
  const activePath = ref([]);
  let closeTimer = null;

  const updatePath = (path) => {
    clearTimeout(closeTimer);
    activePath.value = path;
  };

  const scheduleClose = () => {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(() => {
      activePath.value = [];
    }, 350);
  };

  // === SCROLL NGANG MENU ===
  const menuList = ref(null);
  const showPrev = ref(false);
  const showNext = ref(false);

  const checkScroll = () => {
    if (!menuList.value) return;
    const el = menuList.value;
    showPrev.value = el.scrollLeft > 10;
    showNext.value = el.scrollWidth - el.clientWidth - el.scrollLeft > 10;
  };

  const scrollLeft = () => menuList.value?.scrollBy({ left: -200, behavior: 'smooth' });
  const scrollRight = () => menuList.value?.scrollBy({ left: 200, behavior: 'smooth' });

  onMounted(() => {
    checkScroll();
    menuList.value?.addEventListener('scroll', checkScroll);
  });

  onUnmounted(() => {
    menuList.value?.removeEventListener('scroll', checkScroll);
  });

  // === SEARCH ===
  const showSearch = ref(false);
  const isFocused = ref(false);
  const inputRef = ref(null);

  const onEnter = () => (showSearch.value = true);
  const onLeave = () => !isFocused.value && (showSearch.value = false);
  const focusInput = () => {
    showSearch.value = true;
    nextTick(() => inputRef.value?.$el?.focus());
  };
  const outForcus = () => {
    isFocused.value = false;
    onLeave();
  };
  const handleEnter = (v) => {
    if (!v) return;
    isFocused.value = false;
    onLeave();
    router.push({ path: '/tim-kiem', query: { q: v } });
  };

  // === MENU DATA ===
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
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
