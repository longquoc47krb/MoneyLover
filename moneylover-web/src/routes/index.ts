import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';

interface RouteConfig {
    path: string;
    component: any; // Use Promise for lazy loading
    name?: string;
    props?: boolean;
}

const routes: RouteConfig[] = [
    {
        path: "/",
        component: Home,
        name: "Home"
    },
    {
        path: "/profile",
        component: Profile,
        name: "Profile"
    },

]
const routers = createRouter({
    history: createWebHistory(),
    routes
});

export default routers;