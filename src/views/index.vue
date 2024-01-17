<!--
 * @Author: huwanfei
 * @Date: 2024-01-15 17:01:11
 * @LastEditTime: 2024-01-16 11:25:00
 * @LastEditors: huwanfei
 * @Description: 基于dataV的全屏容器组件示例
 * @FilePath: /vue3-autofit/src/views/index.vue
-->
<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import fullScreenContainer from '../components/fullScreenContainer/index'

</script>

<template>
  <fullScreenContainer>
    <HelloWorld msg="数据可视化全屏容器组件!" />
  </fullScreenContainer>
</template>