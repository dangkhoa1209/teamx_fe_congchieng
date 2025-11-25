<!-- MobileMenuItem.vue -->
<template>
  <li>
    <div
      class="flex items-center justify-between px-6 py-4 text-lg font-medium"
      :class="depth === 0 ? 'text-primary' : 'text-gray-800'"
      @click="toggle"
    >
      <nuxt-link :to="item.page || '#'" class="flex-1">
        {{ item.label }}
      </nuxt-link>
      <IconChevron
        v-if="item.childrens"
        class="w-5 h-5 transition-transform"
        :class="open ? 'rotate-90' : ''"
      />
    </div>

    <ul v-if="item.childrens && open" class="bg-gray-100">
      <MobileMenuItem
        v-for="child in item.childrens"
        :key="child.id || child.label"
        :item="child"
        :depth="depth + 1"
      />
    </ul>
  </li>
</template>

<script setup>
  const props = defineProps({
    item: Object,
    depth: Number,
  });

  const open = ref(false);
  const toggle = () => {
    if (props.item.childrens) open.value = !open.value;
  };
</script>
