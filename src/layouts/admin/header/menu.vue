<template>
  <nav class="h-[75px]">
    <div ref="headerWrapper" class="h-0" />
    <header class="h-[75px]">
      <div ref="header" class="header z-50 bg-main" :class="{ 'fixed-header': isFixed }">
        <x-content-place>
          <div class="flex justify-between items-center h-[75px]">
            <!-- Menu -->
            <nav>
              <ul class="flex gap-[52px] uppercase text-[16px] font-robo font-medium">
                <template v-for="item in menus">
                  <li
                    v-if="checkPermission(item.permissions, true)"
                    :key="item.label"
                    class="cursor-pointer hover:text-secondary"
                  >
                    <x-link :to="item.page">
                      <span class="text-primary">
                        {{ item.label }}
                        {{ checkPermission(item.permissions, true) }}
                      </span>
                    </x-link>
                  </li>
                </template>
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
  import { ref, onMounted, onUnmounted } from 'vue';
  import IconFind from '~/public/assets/icon/find.svg';
  import { checkPermission } from '@/utils/permission-check.js';

  const menus = [
    {
      label: 'Tin tức - Sự kiện',
      page: '/admin/tin-tuc-su-kien',
      permissions: [
        'tin-tuc-su-kien',
        'xa-lac-duong',
        'xa-da-teh',
        'xa-lac-bao-lam-3',
        'xa-dinh-trang-thuong',
        'xa-tam-dong-4',
      ],
    },
    {
      label: 'Tài khoản',
      page: '/admin/tai-khoan',
      permissions: ['tai-khoan'],
    },
    { label: 'Cá nhân', page: '/admin/ca-nhan' },
  ];

  const headerWrapper = ref(null);
  const isFixed = ref(false);
  let observer;

  onMounted(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        isFixed.value = !entry.isIntersecting;
      },
      { threshold: 0 }
    );
    if (headerWrapper.value) observer.observe(headerWrapper.value);
  });

  onUnmounted(() => {
    observer?.disconnect();
  });
</script>

<style scoped>
  .fixed-header {
    position: fixed !important;
    top: 0;
    left: 0;
    right: 0;
  }
</style>
