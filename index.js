// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import store from './store';
import Router from 'vue-router';
import { safranbolu } from './safranbolu';

import App from './App.vue';
import router from './router';

// General Plugins
Vue.use(Router);

safranbolu(store, router);
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
