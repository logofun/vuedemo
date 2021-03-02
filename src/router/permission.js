import { asyncRoutes } from './routes'

let isNeedGetRoutes = true

export const setPermissionRouter = (router) => {
  router.beforeEach(async (to, from, next) => {
    if (isNeedGetRoutes) {
      router.options.routes.push(...asyncRoutes)
      asyncRoutes.forEach(route => {
        router.addRoute(route);
        isNeedGetRoutes = false
      })
      next({...to, replace: true});
    } else {
      next()
    }
  })
}
