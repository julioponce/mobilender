import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import routes from '@/router/routes';

Vue.use(Router);

var router = new Router({
  routes: routes,
  mode: 'history',
  linkExactActiveClass: 'active',
});

router.beforeEach((to, from, next) => {
  const privateAccess = to.meta.privateAccess;
  const accessGranted = store.getters.account.data?.token;

  if (privateAccess && !accessGranted) next('/');

  document.getElementById('app').scrollTop = 0;
  next();
});

export default router;
