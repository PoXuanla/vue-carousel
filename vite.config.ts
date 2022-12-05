import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    outDir: "vue3-xuan-carousel",
    lib: {
      entry: resolve(__dirname, "./src/components/carousel/index.ts"),
      name: "vue3-xuan-carousel",
      fileName: "vue3-xuan-carousel",
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },

  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
