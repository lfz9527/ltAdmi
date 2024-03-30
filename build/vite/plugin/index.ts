import { type PluginOption } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { configWindiCssPlugin } from './windicss'

//  @TODO 需要抽离插件，对插件进行不同环境不同处理
const createVitePlugins = (isBuild: boolean) => {
  const vitePlugins: PluginOption | PluginOption[] = [vue(), vueJsx()]

  // vite-plugin-windicss
  vitePlugins.push(configWindiCssPlugin())

  if (isBuild) {
    //  @TODO 生产环境
  } else {
    //  @TODO 开发环境
  }

  return vitePlugins
}

export { createVitePlugins }
