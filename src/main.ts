import { createApp } from 'vue';
import 'virtual:svg-icons-register';
import '@/styles/theme.less';
import '@/styles/style.less';
import { createPinia } from 'pinia';

import App from './App.vue';
const app = createApp(App);

app.use(createPinia());

app.mount('#app');
