<!-- eslint-disable vue/multi-word-component-names -->
<!--
 * @Author: huwanfei
 * @Date: 2023-04-03 16:37:17
 * @LastEditTime: 2023-04-06 18:51:36
 * @LastEditors: huwanfei
 * @Description: 全屏容器
 * @FilePath: /vite-components/src/components/fullScreenContainer/src/index.vue
-->
<template>
  <div id="dv-full-screen-container" :ref="autoBindRef">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useAutoResize } from '../../../hooks/useAutoResize'

const { autoBindRef } = useAutoResize()
</script>

<style scoped>
#dv-full-screen-container {
  position: fixed;
  top: 0px;
  left: 0px;
  overflow: hidden;
  transform-origin: left top;
  z-index: 999;
}
</style>
