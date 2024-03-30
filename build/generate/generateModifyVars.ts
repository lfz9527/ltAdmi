import { primaryColor } from '../config/themeConfig'

/**
 * less 全局变量
 */
const generateModifyVars = () => {
  return {
    'primary-color': primaryColor,
  }
}

export { generateModifyVars }
