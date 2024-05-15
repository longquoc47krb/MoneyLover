import { createApp } from 'vue'
import App from './App.vue'
import './style.scss'
import routers from './routes';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'

const app = createApp(App);
app.use(routers);
app.use(PrimeVue);
app.mount('#app');