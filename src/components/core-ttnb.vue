<template>
  <div v-if="!featuredSlots.length && show">
    <p class="text-body text-center">Chưa có tin tức sự kiện nổi bật</p>
  </div>
  <slot :items="featuredSlots" />
</template>
<script setup>
  const props = defineProps({
    type: {
      type: String,
      default: 'tin-tuc-su-kien',
    },
    exclude: { type: Array, default: () => [] },
  });

  const featuredSlots = ref([]);
  const show = ref(false);
  const fetchFeatured = async () => {
    try {
      await nextTick();
      const response = await $api($url.featuredNews.get, {
        body: {
          type: props.type,
          exclude: props.exclude || [],
        },
      });

      const { data, success } = response?.data?.value || {
        data: null,
        success: false,
      };

      if (success) {
        featuredSlots.value = data;
        show.value = true;
      }
    } catch (err) {
      featuredSlots.value = [];
      show.value = true;
    }
  };

  onMounted(async () => {
    await fetchFeatured();
  });
</script>
