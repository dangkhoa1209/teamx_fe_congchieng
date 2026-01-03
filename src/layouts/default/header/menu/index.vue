<template>
  <nav class="sticky top-0 z-[999] select-none">
    <div class="h-[75px]">
      <div class="header z-50 border-b border-primary">
        <x-content-place>
          <div class="relative flex justify-between items-center h-[75px] gap-[40px]">
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
              <MagnifyingGlassIcon
                name="heroicons:magnifying-glass"
                class="w-6 h-6 text-primary cursor-pointer"
                @click="focusInput"
              />

              <div
                v-if="showSearch"
                class="absolute bottom-0 right-0 translate-y-[100%] text-main w-64"
              >
                <input-fitter
                  ref="inputRef"
                  placeholder="Nhập từ khóa..."
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
  import menus from '~/data/menu/index.json';
  const router = useRouter();
  const route = useRoute();
  import MagnifyingGlassIcon from '~/public/assets/icon/he-thong/magnifying-glass.svg';

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
