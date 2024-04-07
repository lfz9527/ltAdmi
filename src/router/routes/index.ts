import { AppRouteRecordRaw } from '../types'

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/system/login/login.vue'),
  meta: {
    title: '登陆',
  },
}

export const basicRoutes = [LoginRoute]
