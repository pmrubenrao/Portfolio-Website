import { createRouter, createWebHistory } from 'vue-router';
import ThePortfolio from './pages/ThePortfolio.vue';
import LandingPage from './pages/LandingPage.vue';
import TheContact from './pages/TheContact.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/about' },
    { path: '/about', component: LandingPage },
    { path: '/portfolio', component: ThePortfolio },
    { path: '/contact', component: TheContact },
    // { path: '/', component: LandingPage },
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
