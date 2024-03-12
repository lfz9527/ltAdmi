import { defineStore } from 'pinia'
import { store } from '@/store'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({}),
  getters: {},
  actions: {},
})

// @ts-ignore
export function useAppStoreWithOut() {
  return useAppStore(store)
}
