<!--
 * @Author: huwanfei
 * @Date: 2024-01-16 16:32:06
 * @LastEditTime: 2024-01-16 19:57:46
 * @LastEditors: huwanfei
 * @Description:  
 * @FilePath: /vue3-autofit/src/views/demo.vue
-->
<template>
  <div ref="appRef" id="index">
    <HelloWorld msg="数据可视化全屏容器组件!" />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import { onMounted, onUnmounted } from 'vue'
// 引入封装好的方法
import useDraw from '@/hooks/useDraw'
// 适配处理
const { appRef, calcRate, windowDraw, unWindowDraw } = useDraw()
// 生命周期
onMounted(() => {
  windowDraw()
  calcRate()
})

onUnmounted(() => {
  unWindowDraw()
})
</script>

<style scoped>
#index {
  /*根据设计稿的宽高进行修改*/
  width: 1920px;
  height: 1080px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left top;
}
</style>
