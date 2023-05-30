import Home from '../Pages/Home.vue';
import Experiences from '../Pages/Experiences.vue';
import Blog from '../Pages/Blog.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/experiences',
        name: 'Experiences',
        component: Experiences,
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog,
    },
];

export default routes;