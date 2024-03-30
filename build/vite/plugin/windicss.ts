import { type PluginOption } from 'vite'
import windicCSS from 'vite-plugin-windicss'
export const configWindiCssPlugin = (): PluginOption[] => {
  return windicCSS({
    safelist: 'no-select',
    preflight: {
      enableAll: true,
    },
  })
}
