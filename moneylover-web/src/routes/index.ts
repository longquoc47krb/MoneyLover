import HelloWorld from '../components/HelloWorld.vue';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import { createRouter, createWebHistory } from 'vue-router';

interface RouteConfig {
    path: string;
    component: any; // Use Promise for lazy loading
    name?: string;
    props?: boolean;
}

const routes: RouteConfig[] = [
    {
        path: "/",
        component: HelloWorld,
        name: "HelloWorld"
    },
    {
        path: "/home",
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