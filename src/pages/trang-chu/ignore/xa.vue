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
        "Văn hóa cồng chiêng của dân tộc K'Ho, xã Lạc Dương là một bộ phận của Không gian văn hóa cồng chiêng Tây Nguyên. Nằm dưới chân núi Langbiang hùng vĩ, xã Lạc Dương được ví như “trái tim văn hóa” của người K’Ho tỉnh Lâm Đồng",
      image: $image().url,
    },
    {
      name: 'Xã Đạ Tẻh',
      description:
        'Với đồng bào người Mạ và người K’Ho tại xã Đạ Tẻh, tiếng chiêng là ngôn ngữ thiêng liêng của Yàng (thần linh), là sợi dây kết nối giữa con người với vũ trụ. Cồng chiêng nơi đây không chỉ là âm nhạc mà là lễ vật tinh thần, gắn liền với mọi nghi lễ nông nghiệp và vòng đời con người',
      image: $image().url,
    },
    {
      name: 'Xã Bảo Lâm 3',
      description:
        'Xã Bảo Lâm 3 được xem là một trong những “điểm sáng” của công tác bảo tồn và phát huy Không gian văn hóa cồng chiêng Tây Nguyên tại Lâm Đồng. Nơi đây, đồng bào K’Ho và Châu Mạ giữ vai trò chủ thể di sản, với niềm tin rằng cồng chiêng là “tiếng nói của thần linh”, là sợi dây kết nối các thế hệ – từ người già đến con trẻ',
      image: $image().url,
    },
    {
      name: 'Xã Đinh Trang Thượng',
      description:
        'Nằm ở cửa ngõ phía Đông Nam của vùng Di Linh, xã Đinh Trang Thượng là nơi hội tụ nhiều cộng đồng dân tộc cùng sinh sống, trong đó người K’Ho và Mạ giữ vai trò quan trọng trong việc gìn giữ những giá trị văn hóa nguyên sơ của đại ngàn',
      image: $image().url,
    },
    {
      name: 'Xã Đam Rông 4',
      description:
        'Nằm ở vùng Tây Bắc của tỉnh Lâm Đồng, xã Đam Rông 4 là một trong những không gian cư trú đặc trưng của các dân tộc Mạ và K’Ho - hai chủ thể quan trọng trong Không gian văn hóa Cồng chiêng Tây Nguyên được UNESCO ghi danh',
      image: $image().url,
    },
  ];
</script>
