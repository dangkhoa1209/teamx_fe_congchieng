<template>
  <li
    class="relative h-[40px] bg-primary text-main hover:bg-main hover:text-primary border-primary border-[1px] border-solid"
    @mouseenter="show = true"
    @mouseleave="handleMouseLeave"
  >
    <x-link v-if="item.page" :to="item.page">
      <span class="font-robo font-medium text-14 whitespace-nowrap leading-[40px] px-[15px]">
        {{ item.label }}
      </span>
    </x-link>
    <span v-else class="font-robo font-medium text-14 whitespace-nowrap leading-[40px] px-[15px]">
      {{ item.label }}
    </span>
    <!-- TODO: fix lỗi ko hiện line  -->
    <x-line v-if="line" classColor="bg-white" className="mx-[15px]" />
    <div v-if="item.childrens" v-show="show" class="absolute top-0 right-0 translate-x-[100%] z-50">
      <ul class="">
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
  import { ref } from 'vue';
  const show = ref(false);
  const props = defineProps({
    item: {
      type: Object,
    },
    line: {
      type: Boolean,
    },
  });

  const handleMouseLeave = $lodash.debounce(() => {
    show.value = false;
  }, 200);
</script>
