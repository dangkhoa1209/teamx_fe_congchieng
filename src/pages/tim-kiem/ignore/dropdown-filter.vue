<template>
  <div ref="triggerRef" class="relative inline-flex text-left bg-main user-select-none">
    <!-- Trigger button -->
    <div class="flex items-center cursor-pointer px-3" @click="toggle">
      <p class="leading-[40px]">{{ selectedLabel || 'Kết quả' }}</p>
      <Icon name="mdi:dots-vertical" class="h-4 w-4 ml-1" />
    </div>

    <!-- Dropdown -->
    <Transition name="dropdown-fade">
      <div
        v-if="open"
        class="absolute left-0 bottom-0 translate-y-[100%] origin-top-right border border-gray-100 bg-main shadow-lg ring-1 ring-black/5 focus:outline-none z-50"
      >
        <ul>
          <li
            v-for="action in actions"
            :key="action.value"
            @click="selectAction(action)"
          >
           <!-- actionButtonClasses(action), -->
            <p
              :class="[
                'leading-[40px] px-3 cursor-pointer whitespace-nowrap',
               
                modelValue == action.value ? 'bg-primary text-main' : ''
              ]"
            >
              {{ action.label || action.value }}
            </p>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, watch, toRefs } from 'vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
  modelValue: [String, Number],
  actions: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['update:modelValue', 'select'])

const triggerRef = ref(null)
const open = ref(false)

const toggle = () => {
  open.value = !open.value
}

const close = () => {
  open.value = false
}

// Handle action click
const selectAction = (action) => {
  emit('update:modelValue', action.value) // v-model update
  emit('select', action)
  close()
}

// Dynamic classes based on variant
const actionButtonClasses = (action) => {
  if (action.variant === 'danger') return 'text-red-600 hover:bg-red-50'
  if (action.variant === 'warning') return 'text-amber-600 hover:bg-amber-50'
  if (action.variant === 'success') return 'text-emerald-600 hover:bg-emerald-50'
  return 'hover:bg-gray-100 text-gray-700'
}

// Display selected label
const selectedLabel = computed(() => {
  const selected = props.actions.find(a => a.value === props.modelValue)
  return selected ? selected.label || selected.value : ''
})

// Close dropdown when click outside
onClickOutside(triggerRef, () => {
  close()
})
</script>

<style scoped>
/* .dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
} */
</style>
