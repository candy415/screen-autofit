<!--
 * @Author: huwanfei
 * @Date: 2023-04-03 13:59:40
 * @LastEditTime: 2024-01-17 09:48:33
 * @LastEditors: huwanfei
 * @Description:  
 * @FilePath: /vue3-autofit/README.md
-->
# vue3-autofit

本文介绍了三种大屏自适应方案。

## 方案介绍
1. 基于dataV全屏容器封装的组件，可以在任何分辨率下全屏铺满，但效果不太好（示例：index.vue）

2. 和设计稿的尺寸比例一致的，可以同步放大或缩小，效果好，比例不一致，以设计稿比例为准，其余区域留白。这种方案完全可以保留设计效果。但会有留白，视觉可能不太好。（示例：demo.vue）

3. 在第二种方案基础上，非设计稿比例时，以短边比例来缩放，长边充满屏幕，这种方案可以实现任何分辨率下都铺满全屏，也最大程度的保留了设计稿效果。
（示例：about.vue）使用插件autofit.js实现。


## 项目启动

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
