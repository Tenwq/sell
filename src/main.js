// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
// import router from './router';
import goods from './components/goods/goods';

// Vue.use(VueRouter);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});

const routes = [
  { path: '/goods', component: goods }
];

const router = new VueRouter({
  routes
});

const app = new Vue({
  router
});
app.$mount('#app');
// Now the app has started!
