import type { Router } from 'vue-router'
export const createStateGuard = (router: Router) => {
  router.afterEach((to) => {
    // 只需进入登录页面并清除身份验证信息
    console.log('to==>', to)
  })
}
