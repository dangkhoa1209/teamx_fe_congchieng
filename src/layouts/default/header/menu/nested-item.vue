<template>
  <li ref="itemRef" class="relative h-[75px]" @mouseenter="handleEnter" @mouseleave="handleLeave">
    <div>
      <x-link v-if="item.page" :to="item.page">
        <span
          class="leading-[75px] uppercase text-[16px] font-robo font-medium text-primary whitespace-nowrap"
        >
          {{ item.label }}
        </span>
      </x-link>
      <span
        v-else
        class="leading-[75px] uppercase text-[16px] font-robo font-medium text-primary whitespace-nowrap cursor-default"
      >
        {{ item.label }}
      </span>
    </div>

    <!-- Dropdown cấp 2+ -->
    <teleport to="body">
      <div
        v-if="isOpen && item.childrens"
        ref="dropdownRef"
        class="absolute bg-primary text-main border border-main z-50 shadow-2xl"
        :style="{ top: top + 'px', left: left + 'px', minWidth: width + 'px' }"
        @mouseenter="setActive(item.id)"
        @mouseleave="$emit('leave')"
      >
        <ul class="border border-main border-t-primary">
          <NestedItem
            v-for="(child, i) in item.childrens"
            :key="child.id"
            :item="child"
            :active-id="activeId"
            :line="i < item.childrens.length - 1"
            @hover="setActive(child.id)"
            @leave="$emit('leave')"
          />
        </ul>
      </div>
    </teleport>
  </li>
</template>

<script setup>
  const props = defineProps({ item: Object, activeId: [String, null] });
  const emit = defineEmits(['hover', 'leave']);

  const itemRef = ref(null);
  const dropdownRef = ref(null);
  const top = ref(0);
  const left = ref(0);
  const width = ref(200);

  const isOpen = computed(() => props.activeId === props.item.id);

  const setActive = (id) => emit('hover', id);

  const handleEnter = () => {
    if (props.item.id) setActive(props.item.id);
    updatePosition();
  };
  const handleLeave = () => emit('leave');

  const updatePosition = async () => {
    await nextTick();
    if (itemRef.value) {
      const rect = itemRef.value.getBoundingClientRect();
      top.value = rect.bottom;
      left.value = rect.left;
      width.value = rect.width;
    }
  };

  watch(isOpen, (v) => v && updatePosition());
</script>

<style scoped>
  li::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    height: 15px;
    background: transparent;
  }
</style>
