import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path:'/', name:'homePage', redirect:'/seminar/1'},
    { path: '/seminar/:seminarNumber', name:'seminarPage', component:()=> import('./pages/SeminarPage.vue')},
    { path: '/lab/:labNumber', name: 'labPage', component: () => import('./pages/LabPage.vue')},
    {path: '/sixtyPoints', name:'sixtyPointsTask', component: () => import ('./pages/SixtyPointsTaskPage.vue')}
];

const router = createRouter({
    history:createWebHistory(),
    routes
});


export default router;