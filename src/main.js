import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import LoadScript from 'vue-plugin-load-script';

const app = createApp(App);
app.use(router);
router.isReady().then(function() {
  app.mount('#app');
});
app.use(LoadScript);
