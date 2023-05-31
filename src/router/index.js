import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes';

const router = createRouter({
    history: createWebHistory(),
    routes,

    scrollBehavior: function(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'}
        } else {
            return { x: 0, y: 0 }
        }
    },
});

export default router