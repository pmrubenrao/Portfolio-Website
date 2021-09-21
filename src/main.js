import { createApp } from 'vue';
import App from './App.vue';
// import NavigationMenu from './components/NavigationMenu.vue';
// import AboutMe from './components/AboutMe.vue';
import TheSubHeader from './components/TheSubHeader.vue';

const app = createApp(App);
// app.component('navigation-menu', NavigationMenu);
// app.component('about-me', AboutMe);
app.component('about-me', TheSubHeader);
app.mount('#app');
