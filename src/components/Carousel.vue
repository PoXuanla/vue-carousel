<template>
  <div id="carousel" ref="carousel">
    <div class="container" :style="[containerStyle]">
      <template v-for="item in carouselItems" :key="item.id">
        <img
          class="item"
          :src="item.img"
          :style="{ width: `${carouselWidth}px` }"
        />
      </template>
    </div>
    <button class="btn btnPrev" @click="onPref">
      <span class="material-symbols-outlined"> arrow_back_ios_new </span>
    </button>
    <button class="btn btnNext" @click="onNext">
      <span class="material-symbols-outlined"> arrow_forward_ios </span>
    </button>
  </div>
</template>
<script setup lang="ts">
import type { CarouselItem } from "@/models/Carouserl";
import { onBeforeUnmount, onMounted, ref } from "vue";
import useCarousel from "../hooks/useCarousel";

const props = defineProps({
  items: { type: Array<CarouselItem>, default: [] },
  autoPlay: { type: Boolean, default: true },
});
const carousel = ref(null);
const carouselWidth = ref(0);
const { onNext, onPref, containerStyle, carouselItems } = useCarousel(
  props.items,
  props.autoPlay
);
const getCarouselWidth = () => {
  carouselWidth.value = carousel.value.offsetWidth;
};
onMounted(() => {
  getCarouselWidth();
  window.addEventListener("resize", getCarouselWidth);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", getCarouselWidth);
});
</script>
<style>
#carousel {
  position: relative;
  height: 500px;
  width: 100%;
  overflow: hidden;
}
.container {
  display: flex;
  position: absolute;
  height: 100%;
}
.item {
  object-fit: cover;
}
.btn {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.5);
}
.btnPrev {
  top: 50%;
  left: 50px;
}
.btnNext {
  top: 50%;
  right: 50px;
}
</style>
