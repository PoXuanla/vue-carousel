<template>
  <Carousel :items="items"></Carousel>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Carousel from "./components/Carousel.vue";

const items = ref([
  {
    id: "122sdc",
    text: "1",
    bgcolor: "antiquewhite",
  },
  {
    id: "dfgbe4",
    text: "2",
    bgcolor: "violet",
  },
  {
    id: "sdvvsdv4e",
    text: "3",
    bgcolor: "gold",
  },
]);
</script>

<style scoped></style>
