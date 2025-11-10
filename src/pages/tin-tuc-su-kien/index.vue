<template>
  <x-content-place>
    <x-space :height="40"></x-space>
     <section class="">
        <h2 class="font-robo font-bold text-title text-primary">TIN TỨC - SỰ KIỆN</h2>
        <x-space :height="40"></x-space>
        <x-page-tin-tuc-su-kien></x-page-tin-tuc-su-kien>
      </section>
    <x-space :height="40"></x-space>
    <x-line></x-line>
    <x-space :height="40"></x-space>

    <section class="grid grid-cols-3 gap-5">
      <x-page-tin-tuc-su-kien-card></x-page-tin-tuc-su-kien-card>
      <x-page-tin-tuc-su-kien-card></x-page-tin-tuc-su-kien-card>
      <x-page-tin-tuc-su-kien-card></x-page-tin-tuc-su-kien-card>
      <x-page-tin-tuc-su-kien-card></x-page-tin-tuc-su-kien-card>
      <x-page-tin-tuc-su-kien-card></x-page-tin-tuc-su-kien-card>
      <x-page-tin-tuc-su-kien-card></x-page-tin-tuc-su-kien-card>
      <x-page-tin-tuc-su-kien-card></x-page-tin-tuc-su-kien-card>
      <x-page-tin-tuc-su-kien-card></x-page-tin-tuc-su-kien-card>
      <x-page-tin-tuc-su-kien-card></x-page-tin-tuc-su-kien-card>
      <x-page-tin-tuc-su-kien-card></x-page-tin-tuc-su-kien-card>
      <x-page-tin-tuc-su-kien-card></x-page-tin-tuc-su-kien-card>
      <x-page-tin-tuc-su-kien-card></x-page-tin-tuc-su-kien-card>
      <x-page-tin-tuc-su-kien-card></x-page-tin-tuc-su-kien-card>
      <x-page-tin-tuc-su-kien-card></x-page-tin-tuc-su-kien-card>
      <x-page-tin-tuc-su-kien-card></x-page-tin-tuc-su-kien-card>
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