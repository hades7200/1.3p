import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
import About from './views/About.vue';
import Resume from './views/Resume.vue'; 
import Contact from './views/Contact.vue'; 

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About }, 
    { path: '/resume', name: 'resume', component: Resume }, 
    { path: '/contact', name: 'contact', component: Contact }, 
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
