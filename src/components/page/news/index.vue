<template>
  <x-core-ttnb>
    <template #default="{ items }">
      <!-- <div class="flex flex-col gap-[25px]">
        <x-page-news-thumb-hor
          v-for="(item, index) in items"
          :key="index"
          :exclude="['subTitle']"
          :news="item.news"
        />
      </div> -->

      <div class="flex gap-[40px] flex-col laptop:flex-row">
        <div v-if="items.length >= 1" class="flex flex-col gap-5 laptop:w-[56.6%]">
          <x-page-news-thumb-ver :news="items[0].news" />
        </div>
        <div v-if="items.length >= 2" class="laptop:w-[43.4%] flex flex-col gap-4">
          <x-page-news-thumb-hor
            v-for="(item, index) in items.slice(1)"
            :key="index"
            :exclude="['subTitle']"
            :news="item.news"
          />
        </div>
      </div>
    </template>
  </x-core-ttnb>
</template>
<script setup></script>
