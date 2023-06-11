import Home from '../Pages/Home.vue';
import Experiences from '../Pages/Experiences.vue';
import Blog from '../Pages/Blog.vue';
import LegalNotice from '../Pages/legal/LegalNotice.vue';
import Projects from '../Pages/Projects.vue';

import MarketPlace from '../Pages/projects/MarketPlace.vue'
import SnS from '../Pages/projects/SnS.vue';
import Regie from '../Pages/projects/Regie.vue';
import Club from '../Pages/projects/Club.vue';
import PageBuilder from '../Pages/projects/PageBuilder.vue';
import SmartCampaign from '../Pages/projects/SmartCampaign.vue';
import Network from '../Pages/projects/Network.vue';
import Rejoindre from '../Pages/projects/Rejoindre.vue';
import PortfolioFirst from '../Pages/projects/PortfolioFirst.vue';
import Portfolio2023 from '../Pages/projects/Portfolio2023.vue';
import Coffee from '../Pages/projects/Coffee.vue';
import NotFound from '../Pages/404.vue';

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
    {
        path: '/projets/marketplace',
        name: 'marketplace',
        component: MarketPlace,
    },
    {
        path: '/projets/regie',
        name: 'regie',
        component: Regie,
    },
    {
        path: '/projets/pwa',
        name: 'sns',
        component: SnS,
    },
    {
        path: '/projets/club',
        name: 'club',
        component: Club,
    },
    {
        path: '/projets/page-builder',
        name: 'page-builder',
        component: PageBuilder,
    },
    {
        path: '/projets/outil-seo',
        name: 'smartcampaign',
        component: SmartCampaign,
    },
    {
        path: '/projets/network',
        name: 'network',
        component: Network,
    },
    {
        path: '/projets/rejoindre',
        name: 'rejoindre',
        component: Rejoindre,
    },
    {
        path: '/projets/portfolio-2021',
        name: 'portfolio-first',
        component: PortfolioFirst,
    },
    {
        path: '/projets/portfolio-2023',
        name: 'portfolio-second',
        component: Portfolio2023,
    },
    {
        path: '/projets/cafe-tech',
        name: 'coffee',
        component: Coffee,
    },
    {
        // path: "*",
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound,
    }
];

export default routes;