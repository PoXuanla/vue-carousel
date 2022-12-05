<template>
  <div>
    <vue3-xuan-carousel
      :items="items"
      width="100%"
      height="100px"
      max-width="500px"
      :slideDuration="1000"
      :autoPlay="true"
      :autoSwitchInterval="0"
    ></vue3-xuan-carousel>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import type { CarouselItem } from "./models/Carouserl";

const items: Array<CarouselItem> = reactive([
  // {
  //   id: "122sdc",
  //   img: "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/08/thumbs/800x531/142774.jpg",
  // },
  // {
  //   id: "dfgbe4",
  //   img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1200px-RedCat_8727.jpg",
  // },
  // {
  //   id: "sdvvsdv4e",
  //   img: "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
  // },
]);
</script>

<style scoped></style>
