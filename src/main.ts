/*
 * @Author: huwanfei
 * @Date: 2023-04-03 13:59:40
 * @LastEditTime: 2024-01-15 17:09:31
 * @LastEditors: huwanfei
 * @Description:  
 * @FilePath: /vue3-autofit/src/main.ts
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router).mount('#app')
