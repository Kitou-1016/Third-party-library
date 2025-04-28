import "./assets/main.css";
import "element-plus/dist/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import ElementPlus from "element-plus";
import "aos/dist/aos.css";

import App from "./App.vue";

console.log("123", ElementPlus.ElButton);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus, { size: "small", zIndex: 3000 });
app.mount("#app");
