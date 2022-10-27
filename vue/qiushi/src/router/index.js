import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MyView from '../views/MyView.vue';
import DynamicView from '../views/DynamicView.vue';
import LiveView from '../views/LiveView.vue';
import ScripView from '../views/ScripView.vue';
import SearchView from '../views/SearchView.vue';
import AllBSView from '../views/AllBSView.vue';
import BTView from '../views/BTView.vue';
import UserView from '../views/UserView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: { showNav: true },
      children: [
        {
          path: 'home',
          name: 'home',
          component: HomeView,
          // meta: { keepAlive: true }
        },
        {
          path: 'dynamic',
          name: 'dynamic',
          component: DynamicView
        },
        {
          path: 'live',
          name: 'live',
          component: LiveView
        },
        {
          path: 'scrip',
          name: 'scrip',
          component: ScripView
        },
        {
          path: 'my',
          name: 'my',
          component: MyView
        },
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/allbs',
      name: 'allbs',
      component: AllBSView,
      // meta: { animating: true }
    },
    {
      path: '/btview',
      name: 'btview',
      component: BTView,
    },
    {
      path: '/user',
      name: 'user',
      component: UserView,
    }
  ]
});

export default router;
