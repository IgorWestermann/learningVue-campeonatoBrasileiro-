import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/HomePage';
import ClubesLista from '../views/ClubesLista.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/classificacao',
    name: 'ClubesLista',
    component: ClubesLista
  },
]

const router = new VueRouter({
  routes
})

export default router
