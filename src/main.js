import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router/index";

import App from "./App.vue";
import './index.css'

const app = createApp(App)
.use(router, createPinia())
.mount('#app');
