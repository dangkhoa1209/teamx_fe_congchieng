<template>
  <button
    class="font-robo text-[16px] font-medium h-[48px] rounded-[24px] transition-colors"
    :class="cClass"
    :type="type"
    :disabled="disabled"
    @click="handleClick"
  >
    <div class="px-10">
      <slot></slot>
    </div>
  </button>
</template>

<script setup>
import { computed, toRefs } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Button'
  },
  type: {
    type: String,
    default: 'button' // 'button' | 'submit' | 'reset'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  theme: {
    type: String,
    default: 'main' // main: nền trắng chữ màu, primary: nền màu chữ trắng
  },
  uppercase: {
    type: Boolean,
    default: true
  },
  outline: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['click'])
const { theme, uppercase, outline } = toRefs(props)

const cClass = computed(() => {
  const results = []

  if (outline.value) {
    // outline = true
    if (theme.value === 'primary') {
      results.push('bg-transparent', 'text-primary', 'border', 'border-primary')
    } else {
      results.push('bg-transparent', 'text-main', 'border', 'border-main')
    }
  } else {
    // normal filled button
    if (theme.value === 'main') {
      results.push('bg-main', 'text-primary')
    } else {
      results.push('bg-primary', 'text-main')
    }
  }

  if (uppercase.value) {
    results.push('uppercase')
  }

  return results.join(' ')
})

const handleClick = (e) => {
  if (e instanceof MouseEvent) {
    if (props.type !== 'submit') e.preventDefault()
    e.stopPropagation()
  }
  emits('click', e)
}
</script>
