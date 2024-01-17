/*
 * @Author: huwanfei
 * @Date: 2024-01-11 15:40:20
 * @LastEditTime: 2024-01-16 16:34:46
 * @LastEditors: huwanfei
 * @Description: 路由文件配置
 * @FilePath: /vue3-autofit/src/router/index.ts
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/demo.vue')
    }
  ]
})

export default router
