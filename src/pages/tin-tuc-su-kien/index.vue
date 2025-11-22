<template>
  <x-content-place>
    <x-space :height="40"></x-space>
     <section class="">
      <h2 class="font-bold text-subtitle text-primary">
        GIỚI THIỆU
      </h2>
        <x-space :height="40"></x-space>
        <x-page-news></x-page-news>
      </section>
    <x-space :height="40"></x-space>
    <x-line></x-line>
    <x-space :height="40"></x-space>

    <section>
      <div class="grid grid-cols-3 gap-5">
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
        <x-page-news-thumb-ver></x-page-news-thumb-ver>
      </div>
    </section>
    <x-space :height="50"></x-space>
    <div class="flex justify-center">
       <x-button theme="primary" outline :uppercase="false">
          Xem thêm
        </x-button>
    </div>
     <x-space :height="50"></x-space>
  </x-content-place>

</template>