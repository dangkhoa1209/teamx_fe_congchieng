<template>
  <x-content-place>
    <x-space :height="40" />
    <section class="">
      <x-title title="TIN TỨC - SỰ KIỆN" variant="bottom" class-name="font-bold text-14" />
      <x-space :height="40" />
      <x-page-news />
    </section>
    <x-space :height="40" />
    <x-line />
    <x-space :height="40" />

    <section>
      <x-core-ttk :limit="18">
        <template #default="{ items, loadMore, hasMore }">
          <div class="grid grid-cols-2 laptop:grid-cols-3 gap-x-[40px] gap-y-[50px]">
            <x-page-news-thumb-ver v-for="(item, index) in items" :key="index" :news="item" />
          </div>

          <div v-if="hasMore">
            <x-space :height="50" />
            <div class="flex justify-center">
              <x-button theme="primary" outline :uppercase="false" @click="loadMore">
                Xem thêm
              </x-button>
            </div>
          </div>
        </template>
      </x-core-ttk>
    </section>

    <x-space :height="80" />
  </x-content-place>
</template>
