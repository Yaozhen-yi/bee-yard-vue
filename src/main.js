import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vuetify from "./vuetify";
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

const app = createApp(App)
const pinia = createPinia();

app.use(createPinia())
app.use(router)

app.use(vuetify)
app.mount('#app')
