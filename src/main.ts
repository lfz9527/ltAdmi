import { createApp } from 'vue'
import App from './App.vue'

import router, { setupRouter } from '@/router'
import { setupRouterGuard } from '@/router/guard'
import { setupStore } from '@/store'

const bootstrap = async () => {
  const app = createApp(App)

  // 配置 store
  setupStore(app)

  // 初始化路由
  setupRouter(app)

  // 路由守卫
  setupRouterGuard(router)

  app.mount('#app')
}

await bootstrap()
