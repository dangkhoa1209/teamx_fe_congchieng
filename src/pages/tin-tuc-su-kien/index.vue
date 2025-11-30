<template>
  <x-content-place>
    <x-space :height="40" />
    <section class="">
      <x-title title="TIN TỨC - SỰ KIỆN" variant="bottom" class-name="font-bold text-subtitle" />
      <x-space :height="40" />
      <x-page-news />
    </section>
    <x-space :height="40" />
    <x-line />
    <x-space :height="40" />

    <section>
      <div class="grid grid-cols-2 laptop:grid-cols-3 gap-x-[40px] gap-y-[50px]">
        <x-page-news-thumb-ver />
        <x-page-news-thumb-ver />
        <x-page-news-thumb-ver />
        <x-page-news-thumb-ver />
        <x-page-news-thumb-ver />
        <x-page-news-thumb-ver />
        <x-page-news-thumb-ver />
        <x-page-news-thumb-ver />
        <x-page-news-thumb-ver />
        <x-page-news-thumb-ver />
        <x-page-news-thumb-ver />
        <x-page-news-thumb-ver />
        <x-page-news-thumb-ver />
        <x-page-news-thumb-ver />
        <x-page-news-thumb-ver />
      </div>
    </section>
    <x-space :height="50" />
    <div class="flex justify-center">
      <x-button theme="primary" outline :uppercase="false">Xem thêm</x-button>
    </div>
    <x-space :height="50" />
  </x-content-place>
</template>
