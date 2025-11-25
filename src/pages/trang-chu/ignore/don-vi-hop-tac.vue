<template>
  <x-slide :items="lists" :breakpoints="breakpoints">
    <template #default="{ item }">
      <x-image :url="item.image" />
    </template>
  </x-slide>
</template>
<script setup>
  const breakpoints = {
    640: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
    1280: { slidesPerView: 6 },
  };

  const lists = [
    {
      image: $image().url,
    },
    {
      image: $image().url,
    },
    {
      image: $image().url,
    },
    {
      image: $image().url,
    },
    {
      image: $image().url,
    },
    {
      image: $image().url,
    },
    {
      image: $image().url,
    },
  ];
</script>
