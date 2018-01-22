import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/index';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  base: __dirname,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
});
