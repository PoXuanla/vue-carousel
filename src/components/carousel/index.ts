import type { App } from "vue";
import Carousel from "../Carousel.vue";

const install = (app: App) => {
  app.component("vue3-xuan-carousel", Carousel);
};

export default install;
