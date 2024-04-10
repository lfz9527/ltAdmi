<template>
  <Layout :class="[layoutClass]">
    <Layout :class="`${Cls.prefixCls}-main`"> </Layout>
  </Layout>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { Layout } from 'ant-design-vue'

  import { useDesign } from '@/hooks/web/useDesign'

  const Cls = useDesign('default-layout')

  console.log('Cls', Cls)

  // 布局动态添加类
  const layoutClass = computed(() => {
    const cls: string[] = ['ant-layout']
    cls.push('ant-layout-has-sider')

    return cls
  })
</script>

<style scoped></style>
