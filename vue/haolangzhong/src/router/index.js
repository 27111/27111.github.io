import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ShopView from '../views/ShopView.vue';
import NewsShop from '../views/NewsShop.vue';
import MyView from '../views/MyView.vue';
import PlayingView from '../views/PlayingView.vue';
import SearchView from '../views/SearchView.vue';
import HealthArticleView from '../views/HealthArticleView.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: HomeView,
    meta: { showNav: true },
    children: [],
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopView,
    meta: { showNav: true },
  },
  {
    path: '/news',
    name: 'news',
    component: NewsShop,
    meta: { showNav: true },
  },
  {
    path: '/my',
    name: 'my',
    component: MyView,
    meta: { showNav: true },
  },
  {
    path: '/playing',
    name: 'playing',
    component: PlayingView,
    meta: { showNav: true },
  },
  {
    path: '/search',
    component: SearchView
  },
  {
    path: '/healtharticle',
    component: HealthArticleView
  },
];

const router = new VueRouter({
  routes
});

export default router;
