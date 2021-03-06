import Vue from 'vue';
import VueRouter from 'vue-router';
import { ROUTES } from '../constants/routes';
import Home from '../views/home/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: ROUTES.HOME.path,
    name: ROUTES.HOME.name,
    component: Home
  },
  {
    path: ROUTES.ADD.path,
    name: ROUTES.ADD.name,
    component: () => import('@/views/add/index.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
