<template>
  <div class="flex gap-[40px] flex-col laptop:flex-row">
    <div class="flex flex-col gap-5 laptop:w-[56.6%]">
      <x-page-news-thumb-ver />
    </div>
    <div class="laptop:w-[43.4%] flex flex-col gap-4">
      <x-page-news-thumb-hor :exclude="['subTitle']" />
      <x-page-news-thumb-hor :exclude="['subTitle']" />
      <x-page-news-thumb-hor :exclude="['subTitle']" />
    </div>
  </div>
</template>
<script setup></script>
