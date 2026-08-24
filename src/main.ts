import { createApp } from 'vue'
import { createPinia } from 'pinia'
import  "./assets/main.css"
import App from './App.vue'
import router from './router'
import "./assets/logo.webp"
import"./assets/image/حسین محمدی.jpg"
import"./assets/image/ارمان عظیمی.jpg"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
