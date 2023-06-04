import Home from '../Pages/Home.vue';
import Experiences from '../Pages/Experiences.vue';
import Blog from '../Pages/Blog.vue';
import LegalNotice from '../Pages/legal/LegalNotice.vue';
import Projects from '../Pages/Projects.vue'

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
        path: '/projets',
        name: 'Projects',
        component: Projects,
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog,
    },
    {
        path: '/mentions-legales',
        name: 'Mentions-Legales',
        component: LegalNotice,
    },

];

export default routes;