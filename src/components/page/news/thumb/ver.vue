<!-- tin tức thumbnail content dọc -->
<!-- x-page-news-thumb-ver -->
<template>
  <div>
    <x-image :path="news?.thumbnail" :url="news?.url" :click-to="news?.slugify" />
    <div class="pt-[15px] tablet:pt-[25px] flex flex-col gap-[10px] tablet:gap-[25px]">
      <p
        class="font-robo font-medium text-subtitle text-primary hover:opacity-[79%] cursor-pointer"
        @click="handleClick"
      >
        {{ news?.title }}
      </p>
      <p class="font-robo font-normal text-body text-justify">
        {{ news?.subtitle }}
      </p>
    </div>
  </div>
</template>
<script setup>
  const props = defineProps({
    news: Object,
    exclude: {
      type: Array,
      default: [],
    },
    imageClass: {
      type: String,
      default: '',
    },
    contentClass: {
      type: String,
      default: '',
    },
    titleClass: {
      type: String,
      default: '',
    },
    subTitleClas: {
      type: String,
      default: '',
    },
  });
  const router = useRouter();
  const handleClick = () => {
    if (props.news?.slugify) {
      router.push({ path: `/${props.news.slugify}` });
    }
  };
</script>
