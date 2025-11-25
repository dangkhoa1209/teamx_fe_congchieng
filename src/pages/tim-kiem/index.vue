<template>
  <x-content-place class="font-robo text-body">
    <x-space :height="40" />
    <h2 class="font-bold text-subtitle text-primary">KẾT QUẢ TÌM KIẾM</h2>
    <x-space :height="40" />
    <div class="flex gap-[40px] flex-col laptop:flex-row">
      <div class="w-full">
        <inpit-filter v-model="filter.search" class="w-full" placeholder="Nhập từ khoá" />

        <!-- filter -->
        <!-- PHẦN FILTER RESPONSIVE -->
        <div class="w-full user-select-none">
          <p class="font-robo font-medium text-subtitle text-primary mb-4 laptop:mb-0">
            Bộ lọc tìm kiếm
          </p>

          <div
            class="grid grid-cols-1 laptop:grid-cols-2 laptop:flex laptop:gap-8 mt-4 laptop:mt-1 items-start"
          >
            <!-- ITEM 1: TÌM KIẾM -->
            <div class="flex laptop:items-center gap-3 laptop:gap-5">
              <label
                class="font-robo font-medium leading-[40px] whitespace-nowrap text-gray-700 min-w-[100px]"
              >
                Tìm kiếm:
              </label>
              <div class="w-full laptop:w-[220px] laptop:w-[240px] wide:w-[280px]">
                <DropdownFilter v-model="filter.location" :actions="locationTypes" />
              </div>
            </div>

            <!-- ITEM 2: THỜI GIAN -->
            <div class="flex laptop:items-center gap-3 laptop:gap-5 mt-4 laptop:mt-0">
              <label
                class="font-robo font-medium leading-[40px] whitespace-nowrap text-gray-700 min-w-[100px]"
              >
                Thời gian:
              </label>
              <div class="w-full laptop:w-[220px] laptop:w-[240px] wide:w-[280px]">
                <DropdownFilter v-model="filter.time" :actions="timeOptions" />
              </div>
            </div>
          </div>
        </div>
        <x-line className="" />
        <x-space :height="30" />
        <div class="flex flex-col gap-[40px]">
          <template v-for="item in lists.data" :key="item">
            <x-page-news-thumb-hor :news="item" />
          </template>
        </div>

        <x-space :height="60" />
        <Pagination
          v-model="lists.page"
          :perPage="lists.perPage"
          :total="lists.total"
          @change="load"
        />
        <x-space :height="80" />
      </div>
      <div class="min-w-[400px] laptop:w-[400px]">
        <div>
          <h2 class="font-bold text-subtitle text-primary leading-[40px]">TIN TỨC NỔI BẬT</h2>
          <x-line className="" />
          <x-space :height="40" />
          <div class="flex flex-col gap-[25px]">
            <x-page-news-thumb-hor :exclude="['subTitle']" />
            <x-page-news-thumb-hor :exclude="['subTitle']" />
            <x-page-news-thumb-hor :exclude="['subTitle']" />
          </div>
        </div>
      </div>
    </div>
    <x-space :height="80" />
  </x-content-place>
</template>
<script setup>
  import { computed, watch } from 'vue';
  import InpitFilter from './ignore/input-fliter.vue';
  import DropdownFilter from './ignore/dropdown-filter.vue';
  import Pagination from './ignore/pagination.vue';
  import { locationTypes, timeOptions } from './ignore/data';
  const route = useRoute();
  const querySearch = computed(() => route.query.q);

  const filter = ref({
    search: '',
    location: '',
    time: '',
  });

  const lists = ref({
    data: [],
    page: 1,
    perPage: 2,
    total: 0,
  });

  const load = $lodash.debounce(async () => {
    const response = await $api($url.news.find, {
      body: {
        filter: filter.value,
        page: lists.value.page,
        perPage: lists.value.perPage,
      },
    });

    const { data, success } = response?.data?.value || {
      data: null,
      success: false,
    };

    if (success) {
      lists.value = data;
    }
  }, 300);

  watch(
    () => querySearch.value,
    () => {
      filter.value.search = querySearch.value;
    },
    { immediate: true }
  );

  watch(
    () => filter.value,
    () => {
      lists.value.page = 1;
      load();
    },
    { deep: true, immediate: true }
  );
</script>
