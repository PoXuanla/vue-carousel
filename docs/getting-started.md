# Getting-started
## Installation

```vue
npm i vue3-xuan-carousel
```
## Setup the plugin
```javascript
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import vue3XuanCarousel from "vue3-xuan-carousel"; //import plugin
import "../../../node_modules/vue3-xuan-carousel/style.css" //import css from node_modules

createApp(App)
.use(vue3XuanCarousel) // use component at global
.mount("#app");
```