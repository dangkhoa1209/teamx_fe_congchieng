<template>
  <li
    ref="itemRef"
    class="relative"
    :class="{
      'h-[75px]': isRoot,
      'h-[40px]': !isRoot,
    }"
    @mouseenter="enter"
    @mouseleave="$emit('mouseleave')"
  >
    <!-- GẠCH CHÂN DƯỚI - CHỈ HIỆN KHI ACTIVE (ROOT) - KHÔNG HOVER -->
    <div
      v-if="isRoot && isActive"
      class="absolute bottom-[10px] left-0 right-0 h-[2px] bg-primary mx-4"
    />

    <!-- LINK HOẶC TEXT -->
    <x-link v-if="item.page" :to="item.page">
      <span
        class="block whitespace-nowrap transition-all duration-300 px-4"
        :class="[
          // Kích thước chữ
          isRoot
            ? 'leading-[75px] uppercase text-[16px] font-robo font-medium'
            : 'leading-[40px] text-14 font-robo font-medium px-[15px]',

          // MÀU CHỮ + NỀN KHI ACTIVE (cấp con) → giống hệt hover
          !isRoot && isActive ? 'bg-main text-primary' : 'text-main',

          // HOVER CHO CẤP CON (chỉ khi không active)
          !isRoot && !isActive ? 'hover:bg-main hover:text-primary' : '',

          // ROOT: chữ luôn xanh, chỉ đậm hơn khi active
          isRoot ? 'text-primary' : '',
          isRoot && isActive ? 'font-bold' : '',
        ]"
      >
        {{ item.label }}
      </span>
    </x-link>

    <span
      v-else
      class="block whitespace-nowrap cursor-default transition-all duration-300 px-4"
      :class="[
        isRoot
          ? 'leading-[75px] uppercase text-[16px] font-robo font-medium text-primary'
          : 'leading-[40px] text-14 font-robo font-medium text-main px-[15px]',
        !isRoot && isActive ? 'bg-main text-primary' : ' text-main',
        !isRoot && !isActive ? 'hover:bg-main hover:text-primary' : '',
      ]"
    >
      {{ item.label }}
    </span>

    <!-- Đường kẻ ngang giữa các item con -->
    <x-line v-if="!isRoot && line" classColor="bg-white opacity-30" className="mx-[15px]" />

    <!-- DROPDOWN CON -->
    <teleport v-if="item.childrens && isOpen" to="body">
      <div
        class="absolute bg-primary text-main border border-main z-[9999] shadow-2xl"
        :style="dropdownStyle"
        @mouseenter="enter"
        @mouseleave="$emit('mouseleave')"
      >
        <ul class="border border-main border-t-primary">
          <MenuDropdownItem
            v-for="(child, i) in item.childrens"
            :key="child.id || child.label"
            :item="child"
            :active-path="activePath"
            :current-path="currentPath"
            :parent-path="currentPathArray"
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
  import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const props = defineProps({
    item: Object,
    activePath: Array,
    currentPath: String,
    parentPath: { type: Array, default: () => [] },
    line: Boolean,
    isRoot: { type: Boolean, default: true },
  });

  const emit = defineEmits(['update:path', 'mouseleave']);

  const itemRef = ref(null);
  const dropdownStyle = ref({});

  // Đường dẫn để mở dropdown khi hover
  const currentPathArray = computed(() =>
    props.item.id ? [...props.parentPath, props.item.id] : props.parentPath
  );

  const isOpen = computed(() => {
    if (!props.item.id) return false;
    return (
      props.activePath.length >= currentPathArray.value.length &&
      currentPathArray.value.every((id, i) => props.activePath[i] === id)
    );
  });

  // ACTIVE: trang hiện tại có khớp với item.page không?
  // ACTIVE: trang hiện tại có nằm trong cây con của item này không?
  const isActive = computed(() => {
    if (!props.item.page && !props.item.childrens) return false;

    const current = props.currentPath;

    // Case 1: Item có page → khớp chính xác hoặc là cha của trang hiện tại
    if (props.item.page) {
      const itemPath = props.item.page.replace(/\/$/, '');
      if (itemPath === current) return true;
      if (current.startsWith(itemPath + '/')) return true;
    }

    // Case 2: Item KHÔNG có page (chỉ là nhóm) → kiểm tra xem có con nào active không
    // → dùng đệ quy qua tất cả childrens để tìm xem currentPath có nằm trong không
    if (props.item.childrens) {
      const checkChildren = (items) => {
        for (const child of items) {
          if (child.page) {
            const childPath = child.page.replace(/\/$/, '');
            if (childPath === current || current.startsWith(childPath + '/')) {
              return true;
            }
          }
          if (child.childrens && checkChildren(child.childrens)) {
            return true;
          }
        }
        return false;
      };
      return checkChildren(props.item.childrens);
    }

    return false;
  });

  const enter = () => {
    if (props.item.id) {
      emit('update:path', currentPathArray.value);
    }
  };

  // === VỊ TRÍ DROPDOWN - ĐÃ FIX STICKY + SCROLL ===
  const updateDropdownPosition = () => {
    if (!itemRef.value || !isOpen.value) return;
    const rect = itemRef.value.getBoundingClientRect();

    if (props.isRoot) {
      dropdownStyle.value = {
        top: `${rect.bottom + window.scrollY}px`,
        left: `${rect.left + window.scrollX}px`,
        minWidth: `${rect.width}px`,
      };
    } else {
      dropdownStyle.value = {
        top: `${rect.top + window.scrollY}px`,
        left: `${rect.right + window.scrollX}px`,
        minWidth: '240px',
      };
    }
  };

  watch(isOpen, (open) => open && nextTick(updateDropdownPosition), { flush: 'post' });

  const updatePositionHandler = () => isOpen.value && updateDropdownPosition();

  onMounted(() => {
    window.addEventListener('scroll', updatePositionHandler);
    window.addEventListener('resize', updatePositionHandler);
    if (props.isRoot) {
      document.querySelector('[ref="menuList"]')?.addEventListener('scroll', updatePositionHandler);
    }
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', updatePositionHandler);
    window.removeEventListener('resize', updatePositionHandler);
    if (props.isRoot) {
      document
        .querySelector('[ref="menuList"]')
        ?.removeEventListener('scroll', updatePositionHandler);
    }
  });
</script>
