import { createApp } from 'vue'
import App from './App.vue'

import router, { setupRouter } from '@/router'
import { setupRouterGuard } from '@/router/guard'
import { setupStore } from '@/store'
import { initAppConfigStore } from '@/logics/initAppConfigStore'
// import { setupErrorHandle } from '@/logics/error-handle';
// import {registerGlobComp} from '@/components/registerGlobComp'
// import {setupGlobDirectives} from '@/directives'

const bootstrap = () => {
  const app = createApp(App)

  // 配置 store
  setupStore(app)

  // 初始化内部系统配置
  initAppConfigStore()

  // 注册全局组件
  // registerGlobComp(app)

  // 初始化路由
  setupRouter(app)

  // 路由守卫
  setupRouterGuard(router)

  // 注册全局指令
  // setupGlobDirectives(app)

  // 配置全局错误处理
  // setupErrorHandle(app);

  app.mount('#app')
}

bootstrap()
