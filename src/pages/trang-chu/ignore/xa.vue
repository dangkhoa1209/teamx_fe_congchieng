<template>
  <x-slide :items="xaList">
    <template #default="{ item }">
      <div class="h-full flex flex-col bg-extra rounded-2xl overflow-hidden">
        <div class="w-full">
          <x-image
            :url="item.image || $image().url"
            class="w-full h-full object-cover"
            alt="{{ item.name }}"
          />
        </div>

        <div class="flex-1 p-6 flex flex-col justify-between">
          <div>
            <h3 class="font-robo font-medium text-subtitle text-primary mb-3 line-clamp-2">
              {{ item.name }}
            </h3>
            <hr class="border-0 h-px bg-primary/20 mb-4" />

            <p class="font-robo font-normal text-body text-gray-700 leading-relaxed line-clamp-5">
              {{ item.description }}
            </p>
          </div>

          <div class="mt-6 pt-4">
            <x-button
              theme="primary"
              outline
              :uppercase="false"
              class="w-full laptop:w-auto whitespace-nowrap"
            >
              Tìm hiểu thêm
            </x-button>
          </div>
        </div>
      </div>
    </template>
  </x-slide>
</template>
<script setup>
  const xaList = [
    {
      name: 'Xã Lạc Dương',
      description:
        'Lạc Dương là trái tim của văn hoá Cồng Chiêng Lâm Đồng, nơi hội tụ của cộng đồng dân tộc K’Ho với truyền thống lâu đời trong nghệ thuật diễn tấu và lễ hội.',
      image: $image().url,
    },
    {
      name: 'Xã Đạ Tẻh',
      description:
        'Đạ Tẻh là vùng đất còn lưu giữ nhiều nghệ nhân cồng chiêng lớn tuổi, nơi các giá trị truyền thống được truyền dạy qua nhiều thế hệ.',
      image: $image().url,
    },
    {
      name: 'Xã Bảo Lâm 3',
      description:
        'Bảo Lâm 3 là vùng đất giao thoa giữa văn hoá bản địa và hiện đại, nơi tiếng cồng chiêng vẫn vang lên trong đời sống thường nhật của người Mạ, K’Ho và Chu Ru.',
      image: $image().url,
    },
    {
      name: 'Xã Đinh Trang Thượng',
      description: 'Bộ cồng chiêng cổ nhất Lâm Đồng...',
      image: $image().url,
    },
    {
      name: 'Xã Đam Rông',
      description: 'Lễ hội cồng chiêng lớn nhất năm...',
      image: $image().url,
    },
    // có thể thêm 10, 20 xã cũng được → tự động slide
  ];
</script>
