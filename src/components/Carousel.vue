<template>
  <div id="carousel">
    <div class="container" :style="[containerStyle]">
      <template v-for="item in carouselItems" :key="item.id">
        <img class="item" :src="item.img" />
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
import useCarousel from "../hooks/useCarousel";

const props = defineProps({
  items: { type: Array<CarouselItem>, default: [] },
  autoPlay: { type: Boolean, default: true },
});

const { onNext, onPref, containerStyle, carouselItems } = useCarousel(
  props.items,
  props.autoPlay
);
</script>

<style>
#carousel {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.container {
  display: flex;
  position: absolute;
  height: 100%;
}
.item {
  width: 100%;
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
