import Vue from 'vue';
import VueRouter from 'vue-router';
const home = () => import('@views/index/home/home');
const test = () => import('@views/test');
Vue.use(VueRouter);
const routes = [
  { path: '/', name: 'home', component: home },
  { path: '/test', name: 'test', component: test },
];
const router = new VueRouter({ routes, mode: 'history' });
export default router;
