// composables/useMenuHover.js
import { reactive } from 'vue';

export const menuHoverState = reactive({
  activeTree: null, // 'van-hoa' | 'tiem-nang' | null
  activeKey: null, // id của item đang được hover trực tiếp
});

let closeTimer = null;

const clearTimer = () => {
  if (closeTimer) clearTimeout(closeTimer);
};

export function useMenuHover(treeId, itemId) {
  const open = () => {
    clearTimer();
    menuHoverState.activeTree = treeId;
    menuHoverState.activeKey = itemId;
  };

  const close = () => {
    clearTimer();
    closeTimer = setTimeout(() => {
      menuHoverState.activeTree = null;
      menuHoverState.activeKey = null;
    }, 250);
  };

  const isOpen = computed(() => {
    return menuHoverState.activeTree === treeId && menuHoverState.activeKey === itemId;
  });

  // Dùng để biết cây nào đang active (có thể dùng để style hover cha)
  const isTreeActive = computed(() => menuHoverState.activeTree === treeId);

  onUnmounted(clearTimer);

  return { open, close, isOpen, isTreeActive };
}
