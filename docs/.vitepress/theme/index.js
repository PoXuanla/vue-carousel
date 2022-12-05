import DefaultTheme from "vitepress/theme";
import vue3XuanCarousel from "vue3-xuan-carousel";

export default {
    ...DefaultTheme,
    enhanceApp: async ({ app, router, siteData }) => {
      // app is the Vue 3 app instance from `createApp()`. router is VitePress'
      // custom router. `siteData`` is a `ref`` of current site-level metadata.
        app.use(vue3XuanCarousel)
    },
  };
  