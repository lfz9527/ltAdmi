import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

import { createRouter, createWebHashHistory } from 'vue-router'
import { LoginRoute, basicRoutes } from './routes'

// 白名单路由名字
const WHITE_NAME_LIST = [LoginRoute.name]

// 路由重置
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !WHITE_NAME_LIST.includes(name as string)) {
      // 如果当前路由存在，则移除路由
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

// 初始化路由
export function setupRouter(app: App<Element>) {
  app.use(router)
}

export default router
