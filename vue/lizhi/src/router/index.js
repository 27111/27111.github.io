import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ChannelView from '../views/ChannelView.vue';
import TypeView from '../views/TypeView.vue';
import ItemView from '../views/ItemView.vue';
import PlayingView from '../views/PlayingView.vue';
import UserView from '../views/UserView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
    // meta: { keepAlive: true }
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: { keepAlive: true, showbar: true }
  },
  {
    path: '/channel',
    name: 'channel',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ChannelView,
    meta: { showHomeItem: true, showbar: true },
    children: [
      {
        path: 'types',
        component: TypeView,
        meta: { showbar: true }
      }
    ]
  },
  {
    path: '/item',
    component: ItemView,
    meta: { showbar: true }
  },
  {
    path: '/playing',
    component: PlayingView,
    meta: { showbar: false }
  },
  {
    path: '/user',
    component: UserView,
    meta: { showbar: true }
  },
];

const router = new VueRouter({
  routes
});

export default router;
