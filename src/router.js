import { createRouter, createWebHistory } from 'vue-router';
import ThePortfolio from './pages/ThePortfolio.vue';
import LandingPage from './pages/LandingPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/about' },
    { path: '/about', component: LandingPage },
    { path: '/portfolio', component: ThePortfolio },
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
