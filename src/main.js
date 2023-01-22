import "bootstrap/dist/css/bootstrap.min.css"
import 'primeicons/primeicons.css';
import { createApp } from 'vue'
import App from './App.vue'

import router from './router.js';
import store from './store/index.js';

import BaseCard from './components/base/BaseCard.vue';
import BaseButton from './components/base/BaseButton.vue';
import BaseCollapsible from './components/base/BaseCollapsible.vue';

const app = createApp(App); 

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-collapsible', BaseCollapsible);

app.mount('#app');

import "bootstrap/dist/js/bootstrap.js"
