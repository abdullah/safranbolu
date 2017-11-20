/* eslint-disable no-param-reassign, no-unused-vars  */

// Register in main.js
// safranbolu(store, router);
// Using in App
// ...mapGetters('Safranbolu', ['breadcrumbs']),

import pathToReqexp from 'path-to-regexp';

let breadcrumb = [];

const matchRoutes = (route, to) => {
  try {
    const regex = pathToReqexp(route.path, null, { end: false });
    const matched = regex.exec(to.fullPath);

    if (matched) {
      const text = route.meta.custom ? route.meta.render(to) : route.meta.breadcrumb;

      breadcrumb.push({
        text: `${text} `,
        path: matched[0],
      });
    }
  } catch (error) {
    console.warn('[safranbolu] ', error);
  }

  if (route.children) {
    route.children.map(e => matchRoutes(e, to));
  }
};

export const safranbolu = (store, router, options) => {
  const moduleName = (options || {}).moduleName || 'Safranbolu';

  router.beforeEach((to, from, next) => {
    breadcrumb = [];
    router.options.routes.map(e => matchRoutes(e, to));
    store.commit(moduleName + '/ROUTE_CHANGED');
    next();
  });

  store.registerModule(moduleName, {
    namespaced: true,
    state: breadcrumb,
    getters: {
      breadcrumbs: state => state,
    },
    mutations: {
      ROUTE_CHANGED(state) {
        store.state[moduleName] = breadcrumb;
      },
    },
  });
};
