import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

import { createRouter, createWebHashHistory } from 'vue-router'

const basicRoutes: RouteRecordRaw[] = []

const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

// 初始化路由
export function setupRouter(app: App<Element>) {
  app.use(router)
}

export default router
