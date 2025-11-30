<template>
  <x-slide :items="lists" :breakpoints="breakpoints">
    <template #default="{ item }">
      <div class="w-full h-[100px] flex items-center justify-center overflow-hidden">
        <img :src="item.image" class="h-[100px] object-contain" />
      </div>
    </template>
  </x-slide>
</template>
<script setup>
  const breakpoints = {
    100: { slidesPerView: 4 },
    1280: { slidesPerView: 6 },
  };

  const lists = [
    {
      image: '/assets/hoptac/lienminhgr.svg',
    },
    {
      image: '/assets/hoptac/cityofmusic.svg',
    },
    {
      image: '/assets/hoptac/tcddl.svg',
    },
    {
      image: '/assets/hoptac/namabank.svg',
    },
    {
      image: '/assets/hoptac/seameo.png',
    },
    {
      image: '/assets/hoptac/kingcafe.svg',
    },
  ];
</script>
