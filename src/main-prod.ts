import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { useElements } from '@/init/init_element'
import { startTimer } from './utils/timer'
// import element from 'element-plus'
const app = createApp(App)
app.use(store)
app.use(router)
startTimer();
useElements(app);
// app.use(element)
app.mount('#app')