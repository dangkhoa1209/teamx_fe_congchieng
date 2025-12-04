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

            <div>
              <ul ref="menuList" class="flex gap-[52px] overflow-x-auto no-scrollbar scroll-smooth">
                <MenuDropdownItem
                  v-for="item in profileMenu"
                  :key="item.id || item.label"
                  :item="item"
                  :active-path="activePath"
                  :parent-path="[]"
                  :is-root="true"
                  :current-path="currentPath"
                  @update:path="updatePath"
                  @mouseleave="scheduleClose"
                  @action="handleAction"
                />
              </ul>
            </div>
          </div>
        </x-content-place>
      </div>
    </div>

    <ModelChangePassWord ref="modelChangePassWord" />
  </nav>
</template>

<script setup>
  import { computed } from 'vue';
  import MenuDropdownItem from './MenuDropdownItem.vue';
  import InputFitter from './input-fitter.vue';
  import menus from '~/data/menu/admin.json';
  import profile from '~/data/menu/profile.json';
  import { values } from 'lodash-es';
  const router = useRouter();
  const route = useRoute();
  const { auth } = $store();

  import ModelChangePassWord from './ignore/change-password.vue';

  const modelChangePassWord = ref();

  const currentPath = computed(() => {
    return route.path.replace(/\/$/, '') || '/trang-chu';
  });

  const profileMenu = computed(() => {
    return [
      {
        label: auth?.user?.username?.toUpperCase() || '',
        id: 'admin-profile',
        iconName: 'heroicons:chevron-down',
        childrens: [
          {
            label: auth?.user?.username?.toUpperCase() || '',
            id: 'admin-profile-admin',
          },
          {
            label: 'Đổi mật khẩu',
            id: 'admin-profile-password',
            itemIconName: 'heroicons:lock-open',
            isAction: true,
          },
          {
            label: 'Đăng xuất',
            id: 'admin-profile-log-out',
            itemIconName: 'heroicons:arrow-right-start-on-rectangle',
            isAction: true,
          },
        ],
      },
    ];
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

  const handleAction = (value) => {
    if (value == 'admin-profile-log-out') {
      handleLogOut();
      return;
    }
    if (value == 'admin-profile-password') {
      handleChangePassword();
    }
  };

  const handleLogOut = async () => {
    try {
      await $api($url.admin.profile.logout, { method: 'POST' });
    } catch (e) {
    } finally {
      auth.clear();
      router.push({ name: 'admin-auth-login' });
    }
  };

  const handleChangePassword = () => {
    modelChangePassWord.value && modelChangePassWord.value.open(auth.user);
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
