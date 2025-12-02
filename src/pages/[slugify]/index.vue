<template>
  <x-content-place class="font-robo text-body">
    <!-- title page -->
    <x-space :height="40" />
    <div>
      <h2 class="font-bold text-14 text-primary">TIN TỨC - SỰ KIỆN</h2>
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
      <div class="tablet:min-w-[400px] hidden laptop:block" />
    </div>
    <div v-if="newsData" class="flex gap-[40px]">
      <!-- news -->
      <section>
        <div class="flex justify-between align-middle mt-5">
          <div>
            <span class="">{{ $formatter().formatVNTime(newsData.createdAt) }}</span>
          </div>
          <div class="flex gap-4">
            <div
              class="border border-primary hover:border-primary hover:bg-primary hover:text-main p-[5px] rounded-full box-border cursor-pointer group"
            >
              <FBIcon
                class="h-3 w-3 laptop:w-4 laptop:h-4 fill-current text-primary group-hover:text-main"
              />
            </div>

            <div
              class="border border-primary hover:border-primary hover:bg-primary hover:text-main p-[5px] rounded-full box-border cursor-pointer group"
            >
              <YTIcon
                class="h-3 w-3 laptop:w-4 laptop:h-4 fill-current text-primary group-hover:text-main"
              />
            </div>

            <div
              class="border border-primary hover:border-primary hover:bg-primary hover:text-main p-[5px] rounded-full box-border cursor-pointer group"
            >
              <IGIcon
                class="h-3 w-3 laptop:w-4 laptop:h-4 fill-current text-primary group-hover:text-main"
              />
            </div>
          </div>
        </div>
        <x-space :height="15" class="mb-[1px]" />
        <x-line />

        <x-space :height="40" />

        <h3 class="font-bold text-subtitle text-justify">
          {{ newsData.subtitle }}
        </h3>
        <x-space :height="40" />

        <divs v-for="(content, index) in newsData.contents" :key="content">
          <div v-if="content.type == 'content-in-dam'">
            <pre class="font-bold whitespace-pre-line font-robo text-subtitle text-justify">{{
              content.data
            }}</pre>

            <x-space v-if="newsData.contents?.[index + 1]?.type != 'image'" :height="25" />
            <x-space v-else :height="40" />
          </div>
          <div v-else-if="content.type == 'content'">
            <pre class="font-normal whitespace-pre-line font-robo text-body text-justify">{{
              content.data
            }}</pre>

            <x-space v-if="newsData.contents?.[index + 1]?.type != 'image'" :height="25" />
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

        <section class="w-full max-w-[400px] block laptop:hidden">
          <div>
            <h2 class="font-bold text-subtitle text-primary mt-5 leading-[40px]">
              TIN TỨC NỔI BẬT
            </h2>
            <x-space :height="40" />

            <x-core-ttnb :exclude="[newsData._id]">
              <template #default="{ items }">
                <div class="flex flex-col gap-[25px]">
                  <x-page-news-thumb-hor
                    v-for="(item, index) in items"
                    :key="index"
                    :exclude="['subTitle']"
                    :news="item.news"
                  />
                </div>
              </template>
            </x-core-ttnb>
          </div>
        </section>

        <h2 class="font-bold text-subtitle text-primary mt-5 leading-[40px]">TIN TỨC KHÁC</h2>
        <x-space :height="40" />

        <x-core-ttk :exclude="[newsData._id]">
          <template #default="{ items }">
            <div class="grid grid-cols-2 gap-[25px]">
              <x-page-news-thumb-ver v-for="(item, index) in items" :key="index" :news="item" />
            </div>
          </template>
        </x-core-ttk>

        <x-space :height="80" />
      </section>
      <section class="w-full min-w-[400px] hidden laptop:block">
        <div>
          <h2 class="font-bold text-subtitle text-primary mt-5">TIN TỨC NỔI BẬT</h2>
          <x-space :height="15" />
          <x-line />
          <x-space :height="40" />
          <x-core-ttnb :exclude="[newsData._id]">
            <template #default="{ items }">
              <div class="flex flex-col gap-[25px]">
                <x-page-news-thumb-hor
                  v-for="(item, index) in items"
                  :key="index"
                  :exclude="['subTitle']"
                  :news="item.news"
                />
              </div>
            </template>
          </x-core-ttnb>
        </div>
      </section>
    </div>
  </x-content-place>
</template>
<script setup>
  import FBIcon from '~/public/assets/icon/fb.svg';
  import YTIcon from '~/public/assets/icon/youtube.svg';
  import IGIcon from '~/public/assets/icon/ig.svg';

  const slugify = computed(() => useRoute().params.slugify);
  const newsData = ref(null);

  const route = useRoute();
  const url = useRequestURL();
  const domain = url.origin;

  useSeoMeta({
    title: () => newsData.value?.title,
    description: () => newsData.value?.subtitle,
    ogUrl: () => domain + route.fullPath,
    ogImage: () => domain + (newsData.value?.thumbnail || '/default.jpg'),
  });

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
</script>
