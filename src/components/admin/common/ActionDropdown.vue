<template>
  <div ref="triggerRef" class="relative inline-flex text-left">
    <button
      type="button"
      class="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/40"
      @click="toggle"
    >
      <Icon name="mdi:dots-vertical" class="h-4 w-4" />
      <p class="whitespace-nowrap">Thao tác</p>
    </button>

    <Transition name="dropdown-fade bg-white">
      <div
        v-if="open"
        class="absolute right-0 w-44 origin-top-right rounded-xl border border-gray-100 bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
      >
        <ul class="py-2 text-sm text-gray-700">
          <li
            v-for="action in actions"
            :key="action.value"
          >
            <button
              type="button"
              class="flex w-full items-center gap-2 px-4 py-2 text-left transition-colors"
              :class="actionButtonClasses(action)"
              @click="selectAction(action)"
            >
              <Icon
                v-if="action.icon"
                :name="action.icon"
                class="h-4 w-4"
              />
              <span>{{ action.label }}</span>
            </button>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
  actions: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['select'])

const triggerRef = ref(null)
const open = ref(false)

const toggle = () => {
  open.value = !open.value
}

const close = () => {
  open.value = false
}

const selectAction = (action) => {
  emit('select', action)
  close()
}

const actionButtonClasses = computed(() => {
  return (action) => {
    if (action.variant === 'danger') {
      return 'text-red-600 hover:bg-red-50'
    }
    if (action.variant === 'warning') {
      return 'text-amber-600 hover:bg-amber-50'
    }
    if (action.variant === 'success') {
      return 'text-emerald-600 hover:bg-emerald-50'
    }
    return 'hover:bg-gray-100'
  }
})

onClickOutside(triggerRef, () => {
  close()
})
</script>

<style scoped>
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>

