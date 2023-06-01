import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router/index";
import { MotionPlugin } from "@vueuse/motion";

import App from "./App.vue";
import './index.css'

const app = createApp(App)
.use(router,MotionPlugin,  createPinia())
.mount('#app');
