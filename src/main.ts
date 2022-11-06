import { createApp, VueElement } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

createApp(App).use(router).mount('#app')

