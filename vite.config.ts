import type { ConfigEnv, UserConfig } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'

import { createVitePlugins } from './build/vite/plugin'
import { generateModifyVars } from './build/generate/generateModifyVars'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const { VITE_PUBLIC_PATH } = loadEnv(mode, root)
  const timestamp = new Date().getTime()
  const isBuild = command === 'build'

  return {
    root,
    base: VITE_PUBLIC_PATH,
    define: {
      //@TODO 定义全局常量替换方式。其中每项在开发环境下会被定义在全局，而在构建时被静态替换。
    },
    resolve: {
      alias: [
        {
          find: /@\//,
          replacement: pathResolve('src') + '/',
        },
        {
          find: /#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    },
    plugins: createVitePlugins(isBuild),
    build: {
      target: 'es2015', // 设置最终构建的浏览器兼容目标
      outDir: 'dist',
      cssTarget: 'chrome80', // 此选项允许用户为 CSS 的压缩设置一个不同的浏览器 target
      rollupOptions: {
        output: {
          // 入口文件名
          entryFileNames: `assets/entry/[name]-[hash]-${timestamp}.js`,
          manualChunks: {
            vue: ['vue', 'pinia', 'vue-router'],
          },
        },
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: generateModifyVars(), // less 全局变量
          javascriptEnabled: true,
        },
      },
    },
    optimizeDeps: {
      // @TODO 配置依赖预构建
    },
    server: {
      open: true, // 项目启动后，自动打开
      //@TODO 代理
    },
  }
})
