import { createRouter, createWebHistory } from 'vue-router';
import PortfolioPage from './pages/PortfolioPage.vue';
import LandingPage from './pages/LandingPage.vue';
import ContactPage from './pages/ContactPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/about' },
    { path: '/about', component: LandingPage },
    { path: '/portfolio', component: PortfolioPage },
    { path: '/contact', component: ContactPage },
    { path: '/:notFound(.*)', redirect: '/about' },
  ],
  scrollBehaviour(savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

export default router;
