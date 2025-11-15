<template>
  <li 
    class="relative "
    @mouseenter="show = true"
    @mouseleave="handleMouseLeave"
  >
    <div>
       <x-link v-if="item.page" :to="item.page">
          <span class="leading-[75px] uppercase text-[16px] font-robo font-medium">{{ item.label }}</span>
        </x-link>
      <span v-else class="leading-[75px] uppercase text-[16px] font-robo font-medium">{{ item.label }}</span>
    </div>
    <div
      v-if="item.childrens"
      class="absolute bg-primary text-main"
      v-show="show"
    >
      <ul class="border border-main border-t-primary">
          <NestedItem
            v-for="(child,index) in item.childrens"
            :key="child.label"
            :item="child"
            :line="index < item.childrens.length - 1"
          />
      </ul>
    </div>
  </li>
</template>

<script setup>
import { ref } from 'vue'
import NestedItem from './nested-item.vue'
const show = ref(false)

const handleMouseLeave = $lodash.debounce(() => {
  show.value = false
},200)
defineProps({ item: Object })
</script>
