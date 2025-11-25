<template>
  <div class="flex gap-[40px]">
    <div class="flex flex-col gap-5 w-[56.6%]">
      <x-page-news-thumb-ver />
    </div>
    <div class="w-[43.4%] flex flex-col gap-4">
      <x-page-news-thumb-hor :exclude="['subTitle']" />
      <x-page-news-thumb-hor :exclude="['subTitle']" />
      <x-page-news-thumb-hor :exclude="['subTitle']" />
    </div>
  </div>
</template>
<script setup></script>
