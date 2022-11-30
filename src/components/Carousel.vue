<template>
  <div id="carousel">
    <div class="container" :style="[containerStyle]">
      <template v-for="item in carouselItems" :key="item.id">
        <div class="item" :style="{ backgroundColor: item.bgcolor }">
          {{ item.text }}
        </div>
      </template>
    </div>
  </div>
  <button @click="onPref">pref</button>
  <button @click="onNext">next</button>
</template>
<script setup lang="ts">
import useCarousel from "../hooks/useCarousel";

const props = defineProps({
  items: Array,
});

const { onNext, onPref, containerStyle, carouselItems } = useCarousel(
  props.items
);
</script>
<style>
#carousel {
  position: relative;
  width: 200px;
  height: 100px;
  overflow: hidden;
}
.container {
  display: flex;
  position: absolute;
  /* width: 200px; */
  height: 100%;
}
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100%;
}
</style>
