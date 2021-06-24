import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.ts'
import store from './store'
import elementPlus from 'element-plus'

const vueApp = createApp(App)
vueApp.use(router)
vueApp.use(store)
vueApp.use(elementPlus)
vueApp.mount('#app')
