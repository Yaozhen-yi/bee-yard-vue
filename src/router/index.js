import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../components/homeView.vue';
import AboutView from '../components/about.vue';
import Honey_myth from '../components/honey_myth.vue';
import Product from '../components/product.vue'
import Webform from "../components/webform.vue";
import FormDisplay from "../components/formDisplay.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/honey_myth',
      name: 'honey_myth',
      component: Honey_myth
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
      
    },
    {
      path: '/webform',
      name: 'webform',
      component: Webform,
    },
    {
      path: '/formDisplay',
      name: 'formDisplay',
      component: FormDisplay,
    },
  ]
})

export default router