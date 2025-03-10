import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from "./routes"
import App from './App.vue'
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
