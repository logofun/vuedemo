import store from '@/store';
import { userInfo, getLocalStorage } from '@/utils/storage'

let isNeedGetRoutes = true

export const setPermissionRouter = (router) => {
  router.beforeEach(async (to, from, next) => {
    if (to.path === '/login') {
      next()
    } else {
      const userInfoData = getLocalStorage(userInfo)
      if (!userInfoData) {
        next({ path: '/login' })
      } else {
        if (isNeedGetRoutes) {
          /**
           * 获取动态路由列表
           * 此处只获取，路由权限过滤到：src/store/modules/actions.js处理
           */
          store.dispatch('getRouters')
          store.state.routers.forEach(route => {
            router.addRoute(route)
          })
          /**
           * 添加到路由options列表中，如果不执行此步骤会导致动态路由不能在左侧的菜单显示
           */
          router.options.routes.push(...store.state.routers)
          isNeedGetRoutes = false
          next({ ...to, replace: true })
        } else {
          next()
        }
      }
    }
  })
}
