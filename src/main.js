import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRouter, createWebHistory } from 'vue-router';
import List from './components/pages/List.vue';
import Create from './components/pages/Create.vue';
import Edit from './components/pages/Edit.vue';
import Show from './components/pages/Show.vue';

 
axios.defaults.baseURL = 'http://localhost:8000/api'


axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json'


 
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: List },
    { path: '/create', component: Create },
    { path: '/edit/:id', component: Edit },
    { path: '/show/:id', component: Show },
  ],
});


 
createApp(App).use(router).mount('#app');