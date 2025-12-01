<template>
  <x-slide :items="items" :breakpoints="breakpoints">
    <template #default="{ item, index }">
      <div
        class="w-full aspect-[208/310] bg-extra rounded-xl cursor-pointer transition hover:shadow-md flex flex-col items-center justify-center relative"
        @click.stop="toggle(index)"
      >
        <!-- ICON -->
        <div class="w-[40%] aspect-square flex items-center justify-center">
          <img :src="item.icon" class="object-contain" />
        </div>

        <!-- TITLE -->
        <h3
          class="mt-4 text-primary font-medium text-[14px] md:text-[16px] uppercase text-center px-2"
        >
          {{ item.title }}
        </h3>

        <!-- DESC OVERLAY -->
        <div
          v-if="item.showDesc"
          class="absolute inset-0 bg-primary text-main rounded-xl animate-fadeIn p-3"
        >
          <div class="mt-4">
            <h3 class="font-medium text-body uppercase mb-1">{{ item.title }}</h3>
            <p class="text-mini leading-relaxed mt-4">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </template>
  </x-slide>
</template>

<script setup>
  import { ref } from 'vue';

  const breakpoints = {
    100: { slidesPerView: 2 }, // mobile nhỏ
    640: { slidesPerView: 3 }, // mobile lớn
    768: { slidesPerView: 4 }, // tablet
    1024: { slidesPerView: 5 }, // laptop
  };

  const items = ref([
    {
      key: 'nhac',
      title: 'NHẠC KHÍ',
      desc: 'là nhạc cụ để con người biểu diễn trong sinh hoạt cộng đồng, là tiếng nói của niềm vui và ngày hội.',
      showDesc: false,
      icon: '/assets/chi-khi/1.svg',
    },
    {
      key: 'vu',
      title: 'VŨ KHÍ',
      desc: 'là sức mạnh chiến thắng, âm thanh vang dội khiến quân thù khiếp sợ.',
      showDesc: false,
      icon: '/assets/chi-khi/2.svg',
    },
    {
      key: 'linh',
      title: 'LINH KHÍ',
      desc: 'là vật thờ phụng, truyền qua nhiều thế hệ như báu vật thiêng liêng.',
      showDesc: false,
      icon: '/assets/chi-khi/3.svg',
    },
    {
      key: 'te',
      title: 'TẾ KHÍ',
      desc: 'là khí cụ linh thiêng dùng trong nghi lễ để con người giao hòa với thần linh.',
      showDesc: false,
      icon: '/assets/chi-khi/4.svg',
    },
    {
      key: 'sinh',
      title: 'SINH KHÍ',
      desc: 'là dòng năng lượng đại diện cho vùng đất và cội nguồn của mỗi dân tộc. Khi một bộ chiêng được cất lên, ấy là lúc sức sống của cả buôn làng được đánh thức, kết nối quá khứ – hiện tại – tương lai.',
      showDesc: false,
      icon: '/assets/chi-khi/5.svg',
    },
  ]);

  function toggle(index) {
    items.value[index].showDesc = !items.value[index].showDesc;
  }
</script>

<style>
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fadeIn {
    animation: fadeIn 0.25s ease-out;
  }
</style>
