import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
// import NavigationMenu from './components/NavigationMenu.vue';
// import AboutMe from './components/AboutMe.vue';
// import TheSubHeader from './components/TheSubHeader.vue';
import ThePortfolio from './components/ThePortfolio.vue';
import LandingPage from './components/LandingPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/portfolio', component: ThePortfolio },
    { path: '/about', component: LandingPage },
    { path: '/', component: LandingPage },
  ],
});
const app = createApp(App);
app.use(router);
app.mount('#app');
