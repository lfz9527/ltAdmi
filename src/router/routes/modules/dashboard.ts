import type { AppRouteModule } from '../../types'
import { LAYOUT } from '@/router/constant'

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/dashboard/analysis',
  meta: {
    title: '首页',
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('@/views/dashboard/analysis/index.vue'),
      meta: {
        affix: true,
        title: '统计分析',
      },
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('@/views/dashboard/workbench/index.vue'),
      meta: {
        title: '工作台',
      },
    },
  ],
}

export default dashboard
