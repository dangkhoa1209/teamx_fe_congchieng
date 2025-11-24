<template>
  <li
    ref="itemRef"
    class="relative"
    :class="
      isRoot
        ? 'h-[75px]'
        : 'h-[40px] bg-primary text-main hover:bg-main hover:text-primary border-primary border-[1px] border-solid border-t-0 first:border-t'
    "
    @mouseenter="enter"
    @mouseleave="$emit('mouseleave')"
  >
    <!-- Label -->
    <x-link v-if="item.page" :to="item.page">
      <span
        :class="
          isRoot
            ? 'leading-[75px] uppercase text-[16px] font-robo font-medium text-primary whitespace-nowrap'
            : 'font-robo font-medium text-14 whitespace-nowrap leading-[40px] px-[15px]'
        "
      >
        {{ item.label }}
      </span>
    </x-link>
    <span
      v-else
      :class="
        isRoot
          ? 'leading-[75px] uppercase text-[16px] font-robo font-medium text-primary whitespace-nowrap cursor-default'
          : 'font-robo font-medium text-14 whitespace-nowrap leading-[40px] px-[15px]'
      "
    >
      {{ item.label }}
    </span>

    <!-- Đường kẻ ngang -->
    <x-line v-if="!isRoot && line" classColor="bg-white opacity-30" className="mx-[15px]" />

    <!-- Dropdown con -->
    <teleport v-if="item.childrens && isOpen" to="body">
      <div
        class="absolute bg-primary text-main border border-main z-50 shadow-2xl"
        :style="dropdownStyle"
        @mouseenter="enter"
        @mouseleave="$emit('mouseleave')"
      >
        <ul class="border border-main border-t-primary">
          <MenuDropdownItem
            v-for="(child, i) in item.childrens"
            :key="child.id"
            :item="child"
            :active-path="activePath"
            :parent-path="currentPath"
            :line="i < item.childrens.length - 1"
            :is-root="false"
            @update:path="$emit('update:path', $event)"
            @mouseleave="$emit('mouseleave')"
          />
        </ul>
      </div>
    </teleport>
  </li>
</template>

<script setup>
  const props = defineProps({
    item: Object,
    activePath: Array,
    parentPath: { type: Array, default: () => [] },
    line: Boolean,
    isRoot: { type: Boolean, default: true },
  });

  const emit = defineEmits(['update:path', 'mouseleave']);
  const itemRef = ref(null);

  // Đường dẫn đầy đủ đến item này
  const currentPath = computed(() => [...props.parentPath, props.item.id]);

  // Item này có đang được mở không?
  const isOpen = computed(() => {
    if (!props.item.id) return false;
    const path = currentPath.value;
    return (
      props.activePath.length >= path.length && path.every((id, i) => props.activePath[i] === id)
    );
  });

  const enter = () => {
    if (props.item.id) {
      emit('update:path', currentPath.value);
    }
  };

  // Tính vị trí dropdown
  const dropdownStyle = computed(() => {
    if (!itemRef.value) return {};
    const rect = itemRef.value.getBoundingClientRect();
    if (props.isRoot) {
      return {
        top: rect.bottom + 'px',
        left: rect.left + 'px',
        minWidth: rect.width + 'px',
      };
    } else {
      return {
        top: rect.top + 'px',
        left: rect.right + 'px',
        minWidth: '240px',
      };
    }
  });
</script>

<style scoped>
  li::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    height: 18px;
    background: transparent;
  }
</style>
