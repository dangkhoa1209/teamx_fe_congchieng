<template>
  <x-content-place class="font-robo text-body">
    <!-- title page -->
    <x-space :height="40" />
    <div>
      <h2 class="font-bold text-body text-primary">TIN TỨC - SỰ KIỆN</h2>
      <x-space :height="10" />
      <x-line className="w-[60px] h-[2px]" />
    </div>
    <x-space :height="40" />
    <!-- body -->

    <!-- header news -->
    <div v-if="newsData" class="flex gap-[40px]">
      <div>
        <h2 class="font-bold text-title-news text-primary">
          {{ newsData.title }}
        </h2>
      </div>
      <div class="min-w-[400px] w-[400px]" />
    </div>
    <div v-if="newsData" class="flex gap-[40px]">
      <!-- news -->
      <section>
        <div class="flex justify-between align-middle mt-5 leading-[40px]">
          <div>
            <span>{{ $formatter().formatVNTime(newsData.createdAt) }}</span>
          </div>
          <div class="flex gap-2">
            <span>icon</span>
            <span>icon</span>
            <span>icon</span>
          </div>
        </div>
        <x-line className="" />

        <x-space :height="40" />

        <h3 class="font-bold text-primary text-body">
          {{ newsData.subtitle }}
        </h3>
        <x-space :height="40" />

        <divs v-for="(content, index) in newsData.contents" :key="content">
          <div v-if="content.type == 'content'">
            <pre class="font-normal whitespace-pre-line font-robo">{{ content.data }}</pre>

            <x-space v-if="newsData.contents?.[index + 1]?.type == 'content'" :height="25" />
            <x-space v-else :height="40" />
          </div>
          <div v-else-if="content.type == 'image'">
            <x-image :path="content.url" :title="content.imageTitle" :radius="0" />
            <x-space :height="40" />
          </div>
        </divs>

        <div v-if="newsData.author">
          <x-space :height="50" />
          <p class="text-right font-bold text-body">{{ newsData.author }}</p>
        </div>
        <x-space :height="80" />
        <x-line className="" />

        <section class="min-w-[400px] block laptop:hidden">
          <div>
            <h2 class="font-bold text-subtitle text-primary mt-5 leading-[40px]">
              TIN TỨC NỔI BẬT
            </h2>
            <x-space :height="40" />
            <div class="flex flex-col gap-[25px]">
              <x-page-news-thumb-hor :exclude="['subTitle']" />
              <x-page-news-thumb-hor :exclude="['subTitle']" />
              <x-page-news-thumb-hor :exclude="['subTitle']" />
            </div>
          </div>
        </section>

        <h2 class="font-bold text-subtitle text-primary mt-5 leading-[40px]">TIN TỨC KHÁC</h2>
        <x-space :height="40" />
        <div class="flex gap-[25px]">
          <x-page-news-thumb-ver />
          <x-page-news-thumb-ver />
        </div>
        <x-space :height="80" />
      </section>
      <section class="min-w-[400px] w-[400px] hidden laptop:block">
        <div>
          <h2 class="font-bold text-subtitle text-primary mt-5 leading-[40px]">TIN TỨC NỔI BẬT</h2>
          <x-line className="" />
          <x-space :height="40" />
          <div class="flex flex-col gap-[25px]">
            <x-page-news-thumb-hor :exclude="['subTitle']" />
            <x-page-news-thumb-hor :exclude="['subTitle']" />
            <x-page-news-thumb-hor :exclude="['subTitle']" />
          </div>
        </div>
      </section>
    </div>
  </x-content-place>
</template>
<script setup>
  import { nextTick, onMounted } from 'vue';

  const slugify = computed(() => useRoute().params.slugify);
  const newsData = ref(null);

  // onMounted(async() => {
  //    await nextTick()
  //   const response = await $api($url.news.detail, {
  //     body: {
  //       slugify: slugify.value
  //     }
  //   })

  //   console.log('response', response);

  //   const { data, success } = response?.data?.value || { data: null, success: false }

  //   console.log('data', data);
  // })

  const load = async () => {
    const response = await $api($url.news.detail, {
      body: {
        slugify: slugify.value,
      },
    });

    const { data, success } = response?.data?.value || {
      data: null,
      success: false,
    };

    newsData.value = success ? data : null;
  };

  watch(
    () => slugify.value,
    async (val) => {
      if (!val) return;
      await nextTick();
      load();
    },
    { immediate: true }
  );

  // if(success) {
  // $toast().success('Cập nhật mật khẩu thành công')
  // reset()
  // emits('refresh')
  // close()
  // }
</script>
