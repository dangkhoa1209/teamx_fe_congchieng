<template>
  <x-content-place class="font-robo">
    <x-space :height="40"></x-space>
    <h2 class="font-bold text-title text-primary uppercase">Liên hệ</h2>
    <x-space :height="40"></x-space>
    
    <div class="flex gap-5 ">
      <div class="w-[35%]">
        <p class="text-subtitle font-bold">Thông tin liên hệ</p>
        <x-space :height="50"></x-space>
        <div class="flex flex-col gap-[40px] text-body font-regular">
          <p>
            Ban Biên tập Chuyên Trang thông tin điện tử -<br>Văn hóa, Thể thao và Du lịch tỉnh Lâm Đồng
          </p>
          <div class="flex items-center gap-5"> 
            <Icon name="heroicons-solid:map-pin" class="text-primary w-8 h-8" />
            <p>
              Tầng 6 khu 9 tầng, số 36 Trần Phú,<br>
              phường Xuân Hương - Đà Lạt, tỉnh Lâm Đồng
            </p>
          </div>
          <div class="flex items-center gap-5">
            <Icon name="heroicons-solid:phone" class="text-primary w-8 h-8" />
            <p>(0263) 3540881</p>
          </div>
          <div class="flex items-center gap-5">
            <Icon name="heroicons-solid:phone" class="text-primary w-8 h-8" />
            <p>(0263) 3833086 </p>
          </div>
          <div class="flex items-center gap-5">
            <Icon name="heroicons-solid:envelope" class="text-primary w-8 h-8" />
            <p>svhttdl.lamdong.gov.vn</p>
          </div>
        </div>
      </div>

      
      <div class="w-[65%]">
        <p class="text-subtitle font-bold">Gửi yêu cầu liên hệ</p>
         <x-space :height="50"></x-space>
         <div>
          <x-form @submit="onSubmit" submitText="Lưu" :handle-error="false" :show-button="false">
            <div class="flex flex-col gap-10">
               <div class="flex gap-5">
                  <x-form-input v-model="formData.name" label="Họ và tên" name="name" rules="required" required></x-form-input>
                  <x-form-input v-model="formData.name" label="Số điện thoại" name="phone" rules="required" required></x-form-input>
                </div>
                <x-form-input v-model="formData.name" label="Email" name="email" rules="required" required></x-form-input>
                <x-form-text-area v-model="formData.des" label="Nội dung" name="content" rules="required" required></x-form-text-area>

                <div class="flex justify-end">
                  <x-button theme="primary" type="submit" :uppercase="false">Gửi yêu cầu</x-button>
                </div>
            </div>
          </x-form>
         
         </div>


         
      </div>
    </div>
     <x-space :height="60"></x-space>
  </x-content-place>

</template>
<script setup>
import { email } from '@vee-validate/rules';

const formData = ref({
  name: '',
  phone: '',
  email: '',
  content: ''
})

const onSubmit = () => {
  console.log('sdfsf');
  
  // elert('sdfsdfs')
}
</script>