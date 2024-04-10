import { Ref } from 'vue'
import type { InjectionKey } from 'vue'
import { useContext, createContext } from '@/hooks/core/useContext'

export interface AppProviderContextProps {
  prefixCls: Ref<string>
}

const key: InjectionKey<AppProviderContextProps> = Symbol()

export function createAppProviderContext(context: AppProviderContextProps) {
  return createContext<AppProviderContextProps>(context, key)
}

// 获取应用注入上下文
export function useAppProviderContext() {
  return useContext<AppProviderContextProps>(key)
}
