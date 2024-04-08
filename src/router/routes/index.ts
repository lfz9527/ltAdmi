import { AppRouteRecordRaw, AppRouteModule } from '../types'
import { PageEnum } from '@/enums/pageEnum'

// 批量导入路由模块
const modules: Record<string, any> = import.meta.glob('./modules/**/*.ts', { eager: true })

const routeModuleList: AppRouteModule[] = []
Object.keys(modules).forEach(async (path) => {
  const mod = modules[path].default ?? {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
}

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/system/login/login.vue'),
  meta: {
    title: '登陆',
  },
}

export const basicRoutes = [LoginRoute, RootRoute, ...routeModuleList]
