<template>
  <div
    id="carousel"
    ref="carouselRef"
    :style="carouselStyle"
    v-if="items.length !== 0"
  >
    <div id="carousel-container" :style="containerStyle">
      <Slide
        v-for="item in carouselItems"
        :key="item.id"
        :src="item.img"
        :width="slideWidth"
        :height="props.height"
      />
    </div>
    <button class="carousel-btn btnPrev" @click="onPref">
      <img
        src="../assets/icon/btn-Prev.svg"
        style="width: 25px; height: 25px; margin-left: 10px"
      />
    </button>
    <button class="carousel-btn btnNext" @click="onNext">
      <img
        src="../assets/icon/btn-Next.svg"
        style="width: 25px; height: 25px"
      />
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
  autoPlay: { type: Boolean, default: false },
  width: { type: String, default: "100%" },
  maxWidth: { type: String, default: "" },
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
  props.maxWidth,
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
#carousel-container {
  display: flex;
  position: absolute;
  height: 100%;
}

.carousel-btn {
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
