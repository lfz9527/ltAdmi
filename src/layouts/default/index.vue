<template>
  <Layout :class="[layoutClass]">
    <LayoutSideBar />
    <Layout :class="`${Cls.prefixCls}-main`"> </Layout>
  </Layout>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { Layout } from 'ant-design-vue'
  import { useDesign } from '@/hooks/web/useDesign'

  import LayoutSideBar from '../sider/index.vue'

  // import {createAsyncComponent} from '@/utils/factory/createAsyncComponent'

  const Cls = useDesign('default-layout') // itAdmin-default-layout

  // 布局动态添加类
  const layoutClass = computed(() => {
    const cls: string[] = ['ant-layout']
    cls.push('ant-layout-has-sider')

    return cls
  })
</script>

<style lang="less">
  @prefix-cls: ~'@{namespace}-default-layout';

  .@{prefix-cls} {
    display: flex;
    width: 100%;
    min-height: 100%;
    background: @content-bg;
    flex-direction: column;

    > .ant-layout {
      min-height: 100%;
    }
    &-main {
      margin-left: 1px;
    }
  }
</style>
