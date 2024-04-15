<template>
  <slot></slot>
</template>
<script lang="ts" setup>
  import { toRefs } from 'vue'
  import { prefixCls as pCls } from '@/setting/designSetting'
  import { createAppProviderContext } from './useAppContext'

  type Props = {
    prefixCls: string
  }

  const props = withDefaults(defineProps<Props>(), {
    prefixCls: pCls,
  })

  // 把 一个响应式对象转换成普通对象
  const { prefixCls } = toRefs(props)

  // 创建应用上下文
  createAppProviderContext({ prefixCls })
</script>
