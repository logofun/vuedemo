import store from '@/store';

let isNeedGetRoutes = true

export const setPermissionRouter = (router) => {
  router.beforeEach(async (to, from, next) => {
    if (isNeedGetRoutes) {
      store.dispatch('getRouters')
      store.state.routers.forEach(route => {
        router.addRoute(route)
      })
      router.options.routes.push(...store.state.routers)
      isNeedGetRoutes = false
      next({...to, replace: true})
    } else {
      next()
    }
  })
}
