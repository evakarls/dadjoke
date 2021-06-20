import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueScreen from "vue-screen";

createApp(App)
  .use(VueAxios, axios)
  .use(VueScreen)
  .mount("#app");
