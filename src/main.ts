import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { useElements } from '@/init/init_element'
import { startTimer } from './utils/timer'
const app = createApp(App)
app.use(store)
app.use(router)
useElements(app);
startTimer();
app.mount('#app')