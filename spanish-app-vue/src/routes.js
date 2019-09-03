import Home from './components/Home.vue';
import Learn from './components/study/Learn.vue';
import Basic from './components/study/Basic/Basics.vue';
import Intermediate from './components/study/Intermediate/Intermediate.vue';
import Advanced from './components/study/Advanced/Advanced.vue';

export const routes = [
    { path: '', component: Home },
    { path: '/learn', component: Learn },
    { path: '/learn/basic', name: 'basics',component: Basic },
    { path: '/learn/intermediate', name: 'intermediate',component: Intermediate },
    { path: '/learn/advanced', name: 'advanced',component: Advanced },
    { path: '*', redirect: '/' }
];