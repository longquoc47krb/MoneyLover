import { createApp } from 'vue'
import App from './App.vue'
import './style.scss'
import 'primeicons/primeicons.css';
import routers from './routes';

const app = createApp(App);
app.use(routers);
app.mount('#app');