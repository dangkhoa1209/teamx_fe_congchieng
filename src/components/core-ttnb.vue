<template>
  <slot :items="featuredSlots" />
</template>
<script setup>
  const props = defineProps({
    type: {
      type: String,
      default: 'tin-tuc-su-kien',
    },
  });

  const featuredSlots = ref([]);
  const fetchFeatured = async () => {
    try {
      await nextTick();
      const response = await $api($url.featuredNews.get, {
        body: {
          type: props.type,
        },
      });

      const { data, success } = response?.data?.value || {
        data: null,
        success: false,
      };

      if (success) {
        featuredSlots.value = data;
      }
    } catch (err) {
      featuredSlots.value = [];
    }
  };

  onMounted(async () => {
    await fetchFeatured();
  });
</script>
