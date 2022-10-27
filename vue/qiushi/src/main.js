import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'vant/lib/index.css';
import './assets/main.css';

const app = createApp(App);

import { Tab, Tabs, Skeleton, List, PullRefresh, Grid, GridItem, Lazyload, Image as VanImage, Loading } from 'vant';
app.use(Tab);
app.use(Tabs);
app.use(Skeleton);
app.use(List);
app.use(PullRefresh);
app.use(Grid);
app.use(GridItem);
app.use(Lazyload);
app.use(VanImage);
app.use(Loading);

app.use(router);

app.mount('#app');
