<template>
  <li 
    class="relative h-[40px]"
    @mouseenter="show = true"
    @mouseleave="handleMouseLeave"
  >
    <x-link v-if="item.page" :to="item.page">
      <span class="font-robo font-medium text-14 whitespace-nowrap leading-[40px] px-2">{{ item.label }}</span>
    </x-link>
    <span v-else class="font-robo font-medium text-14 whitespace-nowrap leading-[40px] px-2">{{ item.label }}</span>
    
    <x-line v-if="line" classColor="bg-main" className="mx-2"></x-line>
    <div
      v-if="item.childrens"
      class="absolute top-0 right-0 translate-x-[100%] bg-primary text-main"
      v-show="show"
    >
      <ul class="border border-main">
        <NestedItem
          v-for="(child, index) in item.childrens"
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
const show = ref(false)
const props = defineProps({ 
  item: {
    type: Object
  },
  line: {
    type: Boolean
  }
})

const handleMouseLeave = $lodash.debounce(() => {
  show.value = false
},200)
</script>
