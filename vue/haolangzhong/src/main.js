import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import router from './router';
import store from './store';
import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload } from 'vant';
import { List } from "vant";
Vue.use(List);

Vue.use(Lazyload, {
  lazyComponent: true,
  attempt: 1,
  loading: "",
});
Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
