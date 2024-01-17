<!--
 * @Author: huwanfei
 * @Date: 2023-04-03 13:59:40
 * @LastEditTime: 2024-01-16 13:50:31
 * @LastEditors: huwanfei
 * @Description: 示例
 * @FilePath: /vue3-autofit/src/components/HelloWorld.vue
-->

<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <div class="card">
      <h1>基础设置</h1>
      <p>{{ msg }}</p>
    </div>
    <div class="card">
      <h1>能耗设置</h1>
      <p>{{ msg }}</p>
    </div>
    <div class="card">
      <h1>电费设置</h1>
      <p>{{ msg }}</p>
    </div>
    <div class="card">
      <h1>水费设置</h1>
      <p>{{ msg }}</p>
    </div>
  </div>
</template>

<style scoped>
.greetings {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;

  padding: 20px;
  height: 100%;
  box-sizing: border-box;
}
.card {
  background-color: #f0f0f0;
  padding: 10px;

  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
