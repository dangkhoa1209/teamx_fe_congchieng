<!-- MobileMenuItem.vue -->
<template>
  <li>
    <nuxt-link
      :to="item.page || '#'"
      class="flex items-center justify-between px-6 py-4 text-lg font-medium transition"
      :class="[
        depth === 0 ? 'text-primary' : 'text-gray-800 pl-10',
        isActive ? 'bg-main/10 font-bold text-primary' : 'hover:bg-gray-100',
      ]"
      @click="handleClick"
    >
      <span>{{ item.label }}</span>
      <ChevronRightIcon
        v-if="item.childrens"
        name="heroicons:chevron-right"
        class="w-5 h-5 transition-transform"
        :class="open ? 'rotate-90' : ''"
      />
    </nuxt-link>

    <!-- Submenu -->
    <ul v-if="item.childrens && open" class="bg-main">
      <MobileMenuItem
        v-for="child in item.childrens"
        :key="child.id || child.label"
        :item="child"
        :depth="depth + 1"
        @close="$emit('close')"
      />
    </ul>
  </li>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import ChevronRightIcon from '~/public/assets/icon/he-thong/chevron-right.svg';
  const props = defineProps({
    item: Object,
    depth: Number,
  });
  const emit = defineEmits(['close']);
  const route = useRoute();

  const open = ref(false);

  const isActive = computed(() => {
    if (!props.item.page) return false;
    const path = props.item.page.replace(/\/$/, '');
    return route.path === path || route.path.startsWith(path + '/');
  });

  const handleClick = () => {
    if (props.item.page) emit('close');
    if (props.item.childrens) open.value = !open.value;
  };
</script>
