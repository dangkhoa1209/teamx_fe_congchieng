<template>
  <div class="grid grid-cols-5 gap-[40px] w-full">
    <div
      v-for="(item, index) in items"
      :key="item.key"
      class="bg-extra rounded-xl cursor-pointer transition hover:shadow-md flex flex-col relative z-0"
      @click="toggle(index)"
    >
      <!-- TODO: title điều nhau, title kệ nó, chú ý cái cuôi cung (mt-40px) -->
      <div class="w-full aspect-[208/310] flex flex-col items-center justify-center">
        <div class="w-[40%] aspect-square bg-primary rounded-xl flex items-center justify-center">
          <span class="text-main text-xs">icon</span>
        </div>
        <h3 class="mt-4 text-primary font-medium text-[16px] uppercase text-center">
          {{ item.title }}
        </h3>
      </div>
      <div
        v-if="item.showDesc"
        class="absolute bottom-2 left-0 top-0 text-sm bg-primary text-main w-full h-full rounded-xl"
      >
        <div class="w-full aspect-[208/310]">
          <div
            class="px-2 flex gap-2 flex-col"
            :class="{
              'mt-8': index < items.length - 1,
              'mt-2': (index = items.length - 1),
            }"
          >
            <h3 class="font-medium text-body uppercase text-left">
              {{ item.title }}
            </h3>
            <p class="text-mini">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const items = ref([
    {
      key: 'nhac',
      title: 'NHẠC KHÍ',
      desc: 'là nhạc cụ để con người biểu diễn trong sinh hoạt cộng đồng, là tiếng nói của niềm vui và ngày hội.',
      showDesc: false,
    },
    {
      key: 'vu',
      title: 'VŨ KHÍ',
      desc: 'là sức mạnh chiến thắng, âm thanh vang dội khiến quân thù khiếp sợ.',
      showDesc: false,
    },
    {
      key: 'linh',
      title: 'LINH KHÍ',
      desc: 'là vật thờ phụng, truyền qua nhiều thế hệ như báu vật thiêng liêng.',
      showDesc: false,
    },
    {
      key: 'te',
      title: 'TẾ KHÍ',
      desc: 'là khí cụ linh thiêng dùng trong nghi lễ để con người giao hòa với thần linh.',
      showDesc: false,
    },
    {
      key: 'sinh',
      title: 'SINH KHÍ',
      desc: 'là dòng năng lượng đại diện cho vùng đất và cội nguồn của mỗi dân tộc. Khi một bộ chiêng được cất lên, ấy là lúc sức sống của cả buôn làng được đánh thức, kết nối quá khứ – hiện tại – tương lai.',
      showDesc: false,
    },
  ]);

  const active = ref(null);

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
