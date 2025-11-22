<template>
    <x-content-place class="font-robo text-body">
      <x-space :height="40"></x-space>
        <h2 class="font-bold text-subtitle text-primary">
          KẾT QUẢ TÌM KIẾM
        </h2>
      <x-space :height="40"></x-space>
      <div class="flex gap-[40px]">
        <div class="w-full">
          <inpit-filter class="w-full" v-model="filter.search"></inpit-filter>

          <!-- filter -->
          <div class="flex gap-8 mt-1 user-select-none">
            <div class="flex gap-5">
              <p class="leading-[40px]">Tìm kiếm:</p>
              <div class="w-[220px]">
                <DropdownFilter 
                  v-model="filter.location" 
                  :actions="locationTypes">
                </DropdownFilter>
              </div>
            </div>
            <div class="flex gap-5">
              <p class="leading-[40px]">Thời gian:</p>
              <div class="w-[220px]">
                <DropdownFilter 
                  v-model="filter.time" 
                  :actions="timeOptions">
                </DropdownFilter>
              </div>
            </div>
          </div>
          <x-line className=""></x-line>
          <x-space :height="30"></x-space>
          <div class="flex flex-col gap-[40px]">
            <template v-for="item in lists.data" :key="item">
              <x-page-news-thumb-hor :news="item"></x-page-news-thumb-hor>
            </template>
          </div>

           <x-space :height="60"></x-space>
          <Pagination 
          v-model="lists.page" 
          :perPage="lists.perPage"
          :total="lists.total"
          @change="load"
          ></Pagination>
           <x-space :height="80"></x-space>
        </div>
        <div class=" min-w-[400px] w-[400px]">
          <div>
            <h2 class="font-bold text-subtitle text-primary leading-[40px]">TIN TỨC NỔI BẬT</h2>
            <x-line className=""></x-line>
            <x-space :height="40"></x-space>
            <div class="flex flex-col gap-[25px]">
              <x-page-news-thumb-hor :exclude="['subTitle']"></x-page-news-thumb-hor>
              <x-page-news-thumb-hor :exclude="['subTitle']"></x-page-news-thumb-hor>
              <x-page-news-thumb-hor :exclude="['subTitle']"></x-page-news-thumb-hor>
            </div>
          </div>
        </div>
      </div>
    </x-content-place>
</template>
<script setup>
import { computed, watch } from 'vue';
import InpitFilter from './ignore/input-fliter.vue'
import DropdownFilter from './ignore/dropdown-filter.vue'
import Pagination from './ignore/pagination.vue';
import {
    locationTypes,
  timeOptions
} from './ignore/data'
const route = useRoute()
const querySearch = computed(() => route.query.q)

const filter = ref({
  search: '',
  location: '',
  time: ''
})

const lists = ref({
  data: [],
  page: 1,
  perPage: 2,
  total: 0
})


const load = $lodash.debounce(async () => {
   const response = await $api($url.news.find, {
    body: {
      filter: filter.value,
      page: lists.value.page,
      perPage: lists.value.perPage
    }
  })

  const { data, success } = response?.data?.value || { data: null, success: false }

  if(success) {
    lists.value = data
  }
}, 300)


watch(() => querySearch.value, () => {  
  filter.value.search = querySearch.value
}, {immediate: true})

watch(() => filter.value, () => {
  lists.value.page = 1
  load()
}, {deep: true, immediate: true})
</script>