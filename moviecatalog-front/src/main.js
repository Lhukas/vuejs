import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router); // Intégrer le routeur dans l'application

app.mount('#app');
