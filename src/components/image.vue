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
        :class="{ 'cursor-pointer': clickTo }"
        lazy
        @load="onLoad"
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

  <p v-if="title" class="text-center font-light text-[14px] italic leading-[25px] pt-[10px]">
    {{ title }}
  </p>
</template>

<script setup>
  import { NuxtImg } from '#components';

  const config = useRuntimeConfig().public;
  const router = useRouter();

  const props = defineProps({
    url: String,
    path: String,
    alt: { type: String, default: 'Image' },
    radius: { type: [Number, String], default: null },
    width: { type: Number, default: 900 },
    height: { type: Number, default: 600 },
    title: { type: String },
    clickTo: { type: String, default: '' },
  });

  const { width, height, path, url, clickTo } = toRefs(props);

  const imgRef = ref(null);
  const displayWidth = ref(0);
  let resizeObserver = null;

  const radiusStyle = computed(() => {
    if (['number', 'string'].includes(typeof props.radius)) {
      return typeof props.radius === 'number' ? `${props.radius}px` : props.radius;
    }

    if (displayWidth.value < 640) return '10px';
    return '15px';
  });

  const cUrl = computed(() => {
    if (path.value) return `${config.apiURLFile}${path.value}`;
    if (url.value) return url.value;
    return null;
  });

  const onLoad = () => {
    const el = imgRef.value?.$el || imgRef.value;
    if (!el) return;

    displayWidth.value = el.clientWidth;

    resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        displayWidth.value = entry.contentRect.width;
      }
    });

    resizeObserver.observe(el);
  };

  const onError = () => {
    const el = imgRef.value?.$el || imgRef.value;
    if (el) el.style.display = 'none';
  };

  const onClick = () => {
    if (clickTo.value) {
      router.push({ path: `/${clickTo.value}` });
    }
  };

  onUnmounted(() => {
    if (resizeObserver) resizeObserver.disconnect();
  });
</script>
