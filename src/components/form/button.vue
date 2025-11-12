<template>
    <button
      type="button",
      :disabled="disabled"
      class="inline-flex items-center gap-2 rounded-lg px-4 py-2 cursor-pointer"
      :class="cClass"
      @click="emits('click')"
    >
      <div class="flex gap-1 items-center">
        <Icon v-if="cIcon" :name="cIcon" class="h-5 w-5" />
        <p><slot></slot></p>
      </div>
    </button>
</template>
<script setup>
import { computed } from 'vue';

const props = defineProps({

    icon: {
        type: String,
        default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
       type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'main' // main: nền trắng chữ màu, primary: nền màu chữ trắng
    },
    uppercase: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    }
})

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

const cIcon = computed(() => {
  if(props.loading) {
    return 'svg-spinners:180-ring-with-bg'
  }

  return props.icon || ''
})
const emits = defineEmits(['click'])
</script>