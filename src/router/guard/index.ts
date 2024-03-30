import type { Router, RouteLocationNormalized } from 'vue-router'

import { createStateGuard } from './stateGuard'
import { createPermissionGuard } from './permissionGuard'
import { createParamMenuGuard } from './paramMenuGuard'

// 不要轻易更改创建顺序
export function setupRouterGuard(router: Router) {
  createPageGuard(router)
  createPageLoadingGuard(router)
  createHttpGuard(router)
  createScrollGuard(router)
  createMessageGuard(router)
  createProgressGuard(router)
  createPermissionGuard(router)
  createParamMenuGuard(router)
  createStateGuard(router)
}

// 用于处理页面状态
const createPageGuard = (router: Router) => {
  const loadedPageMap = new Map<string, boolean>()
  router.beforeEach(async (to) => {
    // 页面已经加载，再次打开会更快，不需要进行加载和其他处理
    to.meta.loaded = !!loadedPageMap.get(to.path)
    // @TODO 需要通知路由更改

    return true
  })
  router.afterEach((to) => {
    loadedPageMap.set(to.path, true)
  })
}

// @TODO 用于处理页面加载状态
const createPageLoadingGuard = (router: Router) => {
  router.beforeEach(() => {})
}

// @TODO 用于在路由切换时关闭当前页面以完成请求的接口
const createHttpGuard = (router: Router) => {
  router.beforeEach(() => {})
}

// 路由切换回到顶部
const createScrollGuard = (router: Router) => {
  const isHash = (href: string) => {
    return /^#/.test(href)
  }
  const body = document.body

  router.afterEach(async (to) => {
    // scroll top
    isHash((to as RouteLocationNormalized & { href: string })?.href) && body.scrollTo(0, 0)
    return true
  })
}

// @TODO 路由切换时关闭通知消息等实例
export const createMessageGuard = (router: Router) => {
  router.beforeEach(() => {})
}

// @TODO 页面顶部进度条
export const createProgressGuard = (router: Router) => {
  router.beforeEach(() => {})
}
