<!--
 * @Author: huwanfei
 * @Date: 2024-01-15 17:01:33
 * @LastEditTime: 2024-01-16 19:37:03
 * @LastEditors: huwanfei
 * @Description:  基于插件autofix的实例
 * @FilePath: /vue3-autofit/src/views/about.vue
-->
<template>
  <div id="about">
    <HelloWorld msg="数据可视化全屏容器组件!" />
  </div>
</template>

<script setup lang="ts">
import autofit from 'autofit.js'
import { onMounted, onBeforeUnmount } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
onMounted(() => {
  autofit.init(
    {
      dh: 1080,
      dw: 1920,
      el: '#about',
      resize: true
    },
    false
  )
})
// 3. 如果是单个页面做自适应,需要在页面销毁后删除插件,不然可能会影响其他页面,为了保险个人建议App.vue也加上组件销毁的生命周期
onBeforeUnmount(() => {
  autofit.off()
})
</script>

<style scoped>
</style>
