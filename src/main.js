// main.js는 vue 애플리케이션의 시작점이다

import { createApp } from 'vue'
import App from './App.vue'

// src/router/index.js 파일의 router를 사용하겠다는 선언
import VueRouter from '@/router/index.js';

// createApp(App).mount('#app')
const app = createApp(App);

app.use(VueRouter);
app.mount('#app');
