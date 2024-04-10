import { defineAsyncComponent } from 'vue'
import { Spin } from 'ant-design-vue'
import { noop } from '@/utils'

interface Options {
  size?: 'default' | 'small' | 'large'
  delay?: number
  timeout?: number
  loading?: boolean
  retry?: boolean
}

export const createAsyncComponent = (loader: Fn, options: Options = {}) => {
  const { size = 'small', delay = 100, timeout = 30000, loading = false, retry = true } = options

  return defineAsyncComponent({
    loader, // 异步组件
    loadingComponent: loading ? <Spin spinning={true} size={size} /> : undefined,
    // @TODO  如果超时则显示超时组件
    timeout,
    // errorComponent 错误时展示的组件
    // suspensible:true 定义组件是否挂起，默认为true
    delay,
    onError: !retry
      ? noop
      : (error, retry, fail, attempts) => {
          if (error.message.match(/fetch/) && attempts <= 3) {
            // 在获取错误时重试，最多3次尝试
            retry()
          } else {
            // 请注意，重试/失败类似于promise 的 resolve/reject
            // 必须调用其中一个以继续进行错误处理
            fail()
          }
        },
  })
}
