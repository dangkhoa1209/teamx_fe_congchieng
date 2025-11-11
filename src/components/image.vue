<template>
  <div
    class="w-full bg-gray-100 overflow-hidden"
    :style="{ borderRadius: radiusStyle }"
  >
    <div class="w-full" :style="{ aspectRatio: width / height }">
      <NuxtImg
        v-if="url"
        ref="imgRef"
        :src="url"
        :alt="alt"
        class="w-full h-full object-cover object-center rounded-[inherit] transition-transform duration-300"
        :width="width"
        :height="height"
        lazy
        @error="onError"
      />

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
import { computed, ref, toRefs } from 'vue'
import { NuxtImg } from '#components'

const props = defineProps({
  url: String,
  alt: { type: String, default: 'Image' },
  radius: { type: [Number, String], default: 15 },
  width: { type: Number, default: 565 },
  height: { type: Number, default: 386 },
})

const { width, height } = toRefs(props)
const radiusStyle = computed(() => typeof props.radius === 'number' ? `${props.radius}px` : props.radius)
const imgRef = ref(null)

const onError = () => {
  if (imgRef.value) imgRef.value.style.display = 'none'
}
</script>
