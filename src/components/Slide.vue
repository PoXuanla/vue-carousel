<template>
  <img :src="src" :style="slideStyle" />
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  width: { type: String, default: "" },
  height: { type: String, default: "" },
  src: { type: String, default: "" },
});

const slideStyle = computed(() => {
  return {
    width: props.width,
    height: props.height,
    maxWidth: props.width,
  };
});
</script>

<style scoped>
.slide {
  object-fit: cover;
}
</style>
