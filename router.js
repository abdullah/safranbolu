import Home from './Home';
import User from './User';
import UserDetail from './UserDetail';
import Dashboard from './Dashboard';

import Router from 'vue-router';
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      alias: '/home',
      redirect: '/user',
      name: 'home',
      meta: { breadcrumb: 'Home' },
      component: Home,
      children: [
        {
          path: '/user',
          name: 'user',
          meta: {
            breadcrumb: 'User',
          },
          component: User,
        },
      ],
    },
    {
      path: '/user/:id?',
      name: 'user-detail',
      meta: {
        breadcrumb: 'User Detail',
      },
      component: UserDetail,
    },
    {
      path: '/dashboard/',
      name: 'dashboard',
      meta: {
        breadcrumb: 'Dashboard',
      },
      component: Dashboard,
    },
  ],
});

export default router;
