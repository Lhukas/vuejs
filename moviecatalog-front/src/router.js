import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./components/home.vue'),
    },
    {
        path: '/movie/:id',
        name: 'Movie',
        component: () => import('./components/movie.vue'),
    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;





