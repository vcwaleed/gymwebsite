import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from "./routes"
import App from './App.vue'
import "@fortawesome/fontawesome-free/css/all.css";
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
