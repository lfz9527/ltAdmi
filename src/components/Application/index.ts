export { useAppProviderContext } from './src/useAppContext'
import { withInstall } from '@/utils/index'

import appProvider from './src/AppProvider.vue'

export const AppProvider = withInstall(appProvider)
