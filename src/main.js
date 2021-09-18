import { createApp } from 'vue';
import App from './App.vue';
import NavigationMenu from './components/NavigationMenu.vue';

const app = createApp(App);
app.component('navigation-menu', NavigationMenu);
app.mount('#app');
