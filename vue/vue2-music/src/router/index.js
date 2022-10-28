import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SearchView from '../views/SearchView.vue';
import PlayListView from '../views/PlayListView.vue';
import ArtistView from '../views/ArtistView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { showNav: true },

  },
  {
    path: '/hot',
    name: 'hot',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HotView.vue'),
    // meta: { showNav: true },
  },
  {
    path: '/ou',
    name: 'ou',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/OuView.vue'),
    // meta: { showNav: true },
  },
  {
    path: '/xin',
    name: 'xin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/XinView.vue'),
    // meta: { showNav: true },
  },
  {
    path: '/biao',
    name: 'biao',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BiaoView.vue'),
    // meta: { showNav: true },
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView,
    // meta: { showNav: true },
  },
  {
    path: '/playlist',
    name: 'playlist',
    component: PlayListView,
  },
  {
    path: '/artist',
    name: 'artist',
    component: ArtistView,
  }
];

const router = new VueRouter({
  routes
});

export default router;
