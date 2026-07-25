import { createApp } from 'vue'
import { createPinia } from 'pinia'
import  "./assets/main.css"
import App from './App.vue'
import router from './router'
import "./assets/logo.webp"
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
