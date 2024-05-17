import { createApp } from 'vue'
import App from './App.vue'
import './style.scss'
import routers from './routes';
import PrimeVue from 'primevue/config';
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'

const app = createApp(App);
app.use(routers);
app.use(PrimeVue);
app.component('Button', Button)
app.component('Sidebar', Sidebar)
app.mount('#app');