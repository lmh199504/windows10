import { createApp } from 'vue';
import 'virtual:svg-icons-register';
import '@/styles/theme.less';
import '@/styles/style.less';
import { createPinia } from 'pinia';
import i18n from './i18n';

import App from './App.vue';
const app = createApp(App);
app.use(i18n);
app.use(createPinia());

app.mount('#app');
