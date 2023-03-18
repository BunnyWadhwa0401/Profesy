import { createApp } from 'vue'
import router from './routers'
import App from './App.vue'
// import style from './style.css?inline'

createApp(App).use(router).mount('#app')
