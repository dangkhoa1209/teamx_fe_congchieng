<!-- tin tức thumbnail content ngang -->
<!-- x-page-news-thumb-hor :exclude="['subTitle']" -->

<template>
  <div class="flex gap-4">
    <div class="w-[40%] min-w-[40%]">
      <x-image :path="news?.thumbnail" :url="news?.url" :click-to="news?.slugify" />
    </div>
    <div class="w-[60%] flex flex-col gap-[25px]">
      <p
        v-if="!exclude.includes('title')"
        class="font-robo font-medium text-subtitle text-primary hover:opacity-[79%] cursor-pointer line-clamp-3"
        @click="handleClick"
      >
        {{ news?.title }}
      </p>
      <p
        v-if="!exclude.includes('subTitle')"
        class="font-robo font-normal text-body text-justify line-clamp-3"
      >
        {{ news?.subTitle }}
      </p>
    </div>
  </div>
</template>
<script setup>
  const props = defineProps({
    news: {
      type: Object,
      default: {},
    },
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
