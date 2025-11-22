<template>
  <x-content-place class="font-robo text-body">
    <!-- title page -->
    <x-space :height="40"></x-space>
    <h2 class="font-bold text-subtitle text-primary">
      TIN TỨC - SỰ KIỆN
    </h2>
    <x-space :height="40"></x-space>
    <!-- body -->

    <!-- header news -->
    <div v-if="newsData" class="flex gap-[40px]">
      <div>
        <h2 class="font-bold text-title-news text-primary">{{ newsData.title }}</h2>
      </div>
      <div class=" min-w-[400px] w-[400px]">

      </div>
    </div>
    <div class="flex gap-[40px]" v-if="newsData">
      <!-- news -->
      <section >
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
       <x-line className=""></x-line>
        
        <x-space :height="40"></x-space>

        <h3 class="font-bold text-primary text-body ">{{ newsData.subtitle }}</h3>
        <x-space :height="40"></x-space>

        <divs v-for="content in newsData.contents" :key="content">
          <div v-if="content.type == 'content'" >
            <p class="font-normal">{{ content.data }}</p>
            <x-space :height="40"></x-space>
          </div>
          <div v-else-if="content.type == 'image'">
            <x-image 
              :path="content.url" 
              :title="content.imageTitle"
              :radius="0"
              ></x-image>
            <x-space :height="40"></x-space>
          </div>
        </divs>

        <div v-if="newsData.author">
          <x-space :height="50"></x-space>
          <p class="text-right font-bold text-body">{{ newsData.author }}</p>
        </div>
        <x-space :height="80"></x-space>
       <x-line className=""></x-line>

        <h2 class="font-bold text-subtitle text-primary  mt-5 leading-[40px]">TIN TỨC KHÁC</h2>
        <x-space :height="40"></x-space>
        <div class="flex gap-[25px]">
          <x-page-news-thumb-ver></x-page-news-thumb-ver>
          <x-page-news-thumb-ver></x-page-news-thumb-ver>
        </div>
         <x-space :height="80"></x-space>
      </section>
      <section class=" min-w-[400px] w-[400px]">
        <div>
          <h2 class="font-bold text-subtitle text-primary  mt-5 leading-[40px]">TIN TỨC NỔI BẬT</h2>
         <x-line className=""></x-line>
          <x-space :height="40"></x-space>
          <div class="flex flex-col gap-[25px]">
            <x-page-news-thumb-hor :exclude="['subTitle']"></x-page-news-thumb-hor>
            <x-page-news-thumb-hor :exclude="['subTitle']"></x-page-news-thumb-hor>
            <x-page-news-thumb-hor :exclude="['subTitle']"></x-page-news-thumb-hor>
          </div>
        </div>
      </section> 
    </div>
  </x-content-place>
</template>
<script setup>
import { nextTick, onMounted } from 'vue';

const slugify = computed(() => useRoute().params.slugify)
const newsData = ref(null)

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
      slugify: slugify.value
    }
  })

  const { data, success } = response?.data?.value || { data: null, success: false }

  newsData.value = success ? data : null
}

watch(
  () => slugify.value,
  async (val) => {
    if (!val) return
    await nextTick()
    load()
  },
  { immediate: true }
)



  // if(success) {
  // $toast().success('Cập nhật mật khẩu thành công')
  // reset()
  // emits('refresh')
  // close()
  // }

</script>