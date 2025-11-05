<template>
  <div
    class="w-full bg-gray-100 overflow-hidden"
    :style="{ borderRadius: radiusStyle }"
  >
    <div class="w-full" style="aspect-ratio: 565 / 386;">
      <!-- NuxtImg lazy load + placeholder -->
      <NuxtImg
        v-if="url"
        ref="imgRef"
        :src="url"
        :alt="alt"
        class="w-full h-full object-cover object-center rounded-[inherit] transition-transform duration-300"
        :width="565"
        :height="386"
        lazy
        @error="onError"
      />

      <!-- Placeholder khi không có ảnh -->
      <div
        v-else
        class="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 text-sm rounded-[inherit]"
      >
        No Image
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { NuxtImg } from '#components'

const props = defineProps({
  url: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: 'Image'
  },
  radius: {
    type: [Number, String],
    default: 15
  }
})

const radiusStyle = computed(() =>
  typeof props.radius === 'number' ? `${props.radius}px` : props.radius
)

const imgRef = ref(null)

const onError = (event) => {
  if (imgRef.value) imgRef.value.style.display = 'none'
}
</script>
