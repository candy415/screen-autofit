<!--
 * @Author: huwanfei
 * @Date: 2024-01-17 10:07:56
 * @LastEditTime: 2024-01-17 10:24:40
 * @LastEditors: huwanfei
 * @Description: 自适应大屏组件
 * @FilePath: /vue3-autofit/src/components/screenFit/index.vue
-->
<template>
  <div ref="appRef" id="screenFit" :style="`width:${props.designWidth}px;height:${props.designHeight}px`">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
// 引入封装好的方法
import useDraw from '../../hooks/useDraw'

const props = defineProps({
  // 设计稿的宽高
  designWidth: {
    type: Number,
    default: 1920
  },
  designHeight: {
    type: Number,
    default: 1080
  }
})

// 适配处理
const { appRef } = useDraw(props.designWidth, props.designHeight)
</script>

<style scoped>
#screenFit {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left top;
}
</style>
