import Home from './components/Home.vue';
import Header from './components/Header.vue';
//import Sidebar from './components/Sidebar.vue';
import Learn from './components/study/Learn.vue';
import Basic from './components/study/Basic/Basics.vue';
import Intermediate from './components/study/Intermediate/Intermediate.vue';
import Advanced from './components/study/Advanced/Advanced.vue';

//Importing basic lessons
import Lesson1 from './components/study/Basic/Lesson1';
import Lesson2 from './components/study/Basic/Lesson2';
import Lesson3 from './components/study/Basic/Lesson2';
import Lesson4 from './components/study/Basic/Lesson3';
import Lesson5 from './components/study/Basic/Lesson4';
import Lesson6 from './components/study/Basic/Lesson5';
import Lesson7 from './components/study/Basic/Lesson6';
import Lesson8 from './components/study/Basic/Lesson7';
import Lesson9 from './components/study/Basic/Lesson8';

export const routes = [
    { path: '', name: 'home',components: {
        default: Home,
        'header': Header
    } },
    { path: '/learn', components: {
        default: Learn,
        'header': Header
    } },
    { path: '/learn/basic', name: 'basics',components: {
        default: Basic,
        'header': Header
        // 'sidenav': Sidebar
    } },
    { path: '/learn/intermediate', name: 'intermediate',components: {
        default: Intermediate,
        'header': Header
        // 'sidenav': Sidebar 
    } },
    { path: '/learn/advanced', name: 'advanced',components: {
        default: Advanced,
        'header': Header
        // 'sidenav': Sidebar 
    } },
    { path: '/learn/basic/lesson1', name: 'lessonb1',components: {
        default: Lesson1,
        'header': Header
        // 'sidenav': Sidebar 
    } },
    { path: '/learn/basic/lesson2', name: 'lessonb2',components: {
        default: Lesson2,
        'header': Header
        // 'sidenav': Sidebar 
    } },
    { path: '/learn/basic/lesson3', name: 'lessonb3',components: {
        default: Lesson3,
        'header': Header
        // 'sidenav': Sidebar 
    } },
    { path: '/learn/basic/lesson4', name: 'lessonb4',components: {
        default: Lesson4,
        'header': Header
        // 'sidenav': Sidebar 
    } },
    { path: '/learn/basic/lesson5', name: 'lessonb5',components: {
        default: Lesson5,
        'header': Header
        // 'sidenav': Sidebar 
    } },
    { path: '/learn/basic/lesson6', name: 'lessonb6',components: {
        default: Lesson6,
        'header': Header
        // 'sidenav': Sidebar 
    } },
    { path: '/learn/basic/lesson7', name: 'lessonb7',components: {
        default: Lesson7,
        'header': Header
        // 'sidenav': Sidebar 
    } },
    { path: '/learn/basic/lesson8', name: 'lessonb8',components: {
        default: Lesson8,
        'header': Header
        // 'sidenav': Sidebar 
    } },
    { path: '/learn/basic/lesson9', name: 'lessonb9',components: {
        default: Lesson9,
        'header': Header
        // 'sidenav': Sidebar 
    } }
    // { path: '*', redirect: '/' }
];