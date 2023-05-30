import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { createPinia } from 'pinia' // Step 2

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
