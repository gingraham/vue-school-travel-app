/* creates the vue instance, brings in the app.vue file and router linking them together. This is injested by the index.html file. */

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
    createApp(App).use(router).mount('#app')
