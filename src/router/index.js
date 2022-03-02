import Vue from 'vue';
import VueRouter from 'vue-router';
const home = () => import('@views/index/home/home');
Vue.use(VueRouter);
const routes = [
  { path: '/', name: 'home', component: home },
];
const router = new VueRouter({ routes, mode: 'history' });
export default router;
