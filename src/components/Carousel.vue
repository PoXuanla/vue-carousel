<template>
  <div id="carousel" ref="carouselRef" :style="carouselStyle">
    <div class="container" :style="containerStyle">
      <Slide
        v-for="item in carouselItems"
        :key="item.id"
        :src="item.img"
        :width="slideWidth"
        :height="props.height"
      />
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
import { ref, type Ref } from "vue";
import useCarousel from "../hooks/useCarousel";
import Slide from "./Slide.vue";

const props = defineProps({
  items: { type: Array<CarouselItem>, default: [] },
  autoPlay: { type: Boolean, default: true },
  width: { type: String, default: "100%" },
  height: { type: String, default: "100%" },
  autoSwitchInterval: { type: Number, default: 3000 },
  slideDuration: { type: Number, default: 1000 },
});

const carouselRef: Ref<HTMLElement | null> = ref(null);

const {
  onNext,
  onPref,
  containerStyle,
  carouselStyle,
  carouselItems,
  slideWidth,
} = useCarousel(
  props.items,
  props.autoPlay,
  props.width,
  props.height,
  carouselRef,
  props.autoSwitchInterval,
  props.slideDuration
);
</script>

<style>
#carousel {
  position: relative;
  overflow: hidden;
}
.container {
  display: flex;
  position: absolute;
  height: 100%;
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
