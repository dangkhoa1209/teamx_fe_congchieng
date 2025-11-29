<template>
  <div class="w-full bg-gray-100 overflow-hidden" :style="{ borderRadius: radiusStyle }">
    <div class="w-full" :style="{ aspectRatio: width / height }">
      <NuxtImg
        v-if="cUrl"
        ref="imgRef"
        :src="cUrl"
        :alt="alt"
        class="w-full h-full object-cover object-center rounded-[inherit] transition-transform duration-300"
        :width="width"
        :height="height"
        :class="{
          'cursor-pointer': clickTo,
        }"
        lazy
        @error="onError"
        @click="onClick"
      />

      <div
        v-else
        class="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 text-sm rounded-[inherit]"
      >
        No Image
      </div>
    </div>
  </div>
  <p v-if="title" class="text-center font-light text-14 italic leading-[25px] pt-[10px]">
    {{ title }}
  </p>
</template>

<script setup>
  import { computed, ref, toRefs } from 'vue';
  import { NuxtImg } from '#components';
  const config = useRuntimeConfig().public;

  const props = defineProps({
    url: String,
    path: String,
    alt: { type: String, default: 'Image' },
    radius: { type: [Number, String], default: '' },
    width: { type: Number, default: 900 },
    height: { type: Number, default: 600 },
    title: { type: String },
    clickTo: { type: String, default: '' },
  });

  const { width, height, path, url, clickTo } = toRefs(props);
  const windowWidth = ref(window?.innerWidth);

  onMounted(() => {
    const handleResize = () => (windowWidth.value = window?.innerWidth);
    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', () => {});
  });

  const radiusStyle = computed(() => {
    if (['number', 'string'].includes(typeof props.radius)) {
      return typeof props.radius === 'number' ? `${props.radius}px` : props.radius;
    }

    if (windowWidth.value >= 1024) return '15px'; // desktop
    if (windowWidth.value >= 640) return '12px'; // tablet
    return '10px'; // mobile
  });
  const imgRef = ref(null);

  const cUrl = computed(() => {
    if (path.value) {
      return `${config.apiURLFile}${path.value}`;
    }

    if (url.value) {
      return url.value;
    }

    return null;
  });

  const router = useRouter();

  const onClick = () => {
    if (clickTo.value) {
      router.push({ path: `/${clickTo.value}` });
    }
  };
  const onError = () => {
    if (imgRef.value && imgRef.value.style) imgRef.value.style.display = 'none';
  };
</script>
