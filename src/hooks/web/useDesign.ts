import { useAppProviderContext } from '@/components/Application'

export const useDesign = (scope: String) => {
  const values = useAppProviderContext()

  return {
    prefixCls: `${values.prefixCls}-${scope}`,
    prefixVar: values.prefixCls,
  }
}
