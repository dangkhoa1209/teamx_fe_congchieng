<template>
  <header class="z-auto appearance-none user-select-none">
    <!-- header -->
    <div class="bg-primary">
      <x-content-place>
        <div class="flex py-8 gap-10 items-center">
          <div class="flex items-center justify-center">
              <img
                class="h-20 w-auto"
                :src="$image().urlSquare"
                alt="Logo"
                @error="onLogoError">
          </div>
          <div>
            <p class="font-mont font-semibold text-white text-[20px]">
              UBND TỈNH LÂM ĐỒNG
            </p>
            <p class="font-mont font-semibold text-white text-[28px]">
              SỞ VĂN HOÁ, THỂ THAO VÀ DU LỊCH
            </p>
          </div>
        </div>
      </x-content-place>
    </div>
    <!-- <menu></menu> -->
    <Menu class="sticky"></Menu>
  </header>
</template>
<script setup>
// const logo = '/assets/logo.png'
import Menu from './menu/index.vue'
const onLogoError = (event) => {
  const target = event.target
  target.style.display = 'none'
}


</script>

<style>

</style>

