import { createApp } from "vue";
import App from "./App.vue";
import BootstrapVue3 from 'bootstrap-vue-3';
import router from '@/router.js'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import "./assets/main.css";


library.add(fas)
library.add(fab)


const app = createApp(App);
app.use(BootstrapVue3);
app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");