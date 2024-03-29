/*
 * @Author: huwanfei
 * @Date: 2024-01-16 16:31:38
 * @LastEditTime: 2024-01-17 10:24:12
 * @LastEditors: huwanfei
 * @Description:
 * @FilePath: /vue3-autofit/src/hooks/useDraw.ts
 */
import { ref, onMounted, onUnmounted } from 'vue'

export default function useDraw(designWidth: Number, designHeight: Number) {
  // 指向最外层容器
  const appRef = ref()
  // 定时函数
  const timer = ref(0)
  // 默认缩放值
  const scale = {
    width: '1',
    height: '1'
  }
  // 设计稿尺寸（px）
  const baseWidth = +designWidth
  const baseHeight = +designHeight

  // 需保持的比例
  const baseProportion = parseFloat((baseWidth / baseHeight).toFixed(5))
  const calcRate = () => {
    // 当前宽高比
    const currentRate = parseFloat((window.innerWidth / window.innerHeight).toFixed(5))
    if (appRef.value) {
      if (currentRate > baseProportion) {
        // 表示更宽
        scale.width = ((window.innerHeight * baseProportion) / baseWidth).toFixed(5)
        scale.height = (window.innerHeight / baseHeight).toFixed(5)
        appRef.value.style.transform = `scale(${scale.width}, ${scale.height}) translate(-50%, -50%)`
      } else {
        // 表示更高
        scale.height = (window.innerWidth / baseProportion / baseHeight).toFixed(5)
        scale.width = (window.innerWidth / baseWidth).toFixed(5)
        appRef.value.style.transform = `scale(${scale.width}, ${scale.height}) translate(-50%, -50%)`
      }
    }
  }

  const resize = () => {
    clearTimeout(timer.value)
    timer.value = setTimeout(() => {
      calcRate()
    }, 200)
  }

  // 改变窗口大小重新绘制
  const windowDraw = () => {
    window.addEventListener('resize', resize)
  }

  // 改变窗口大小重新绘制
  const unWindowDraw = () => {
    window.removeEventListener('resize', resize)
  }

  // 生命周期
  onMounted(() => {
    windowDraw()
    calcRate()
  })

  onUnmounted(() => {
    unWindowDraw()
  })

  return {
    appRef
  }
}
