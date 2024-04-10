<template>
  <Layout :class="[layoutClass]">
    <Layout :class="`${Cls.prefixCls}-main`"> </Layout>
  </Layout>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { Layout } from 'ant-design-vue'
  import { useDesign } from '@/hooks/web/useDesign'

  // import {createAsyncComponent} from '@/utils/factory/createAsyncComponent'

  const Cls = useDesign('default-layout') // itAdmin-default-layout

  // 布局动态添加类
  const layoutClass = computed(() => {
    const cls: string[] = ['ant-layout']
    cls.push('ant-layout-has-sider')

    return cls
  })
</script>

<style scoped></style>
