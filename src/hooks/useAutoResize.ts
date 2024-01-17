/*
 * @Author: huwanfei
 * @Date: 2023-04-03 16:46:44
 * @LastEditTime: 2024-01-16 16:30:56
 * @LastEditors: huwanfei
 * @Description: 自适应全屏容器
 * @FilePath: /vue3-autofit/src/hooks/useAutoResize.ts
 */
import { ref, onMounted, onUnmounted } from 'vue'
import { debounce, once, isElement } from 'lodash-es'

import type { ComponentPublicInstance } from 'vue'

export const useAutoResize = () => {
  const domRef = ref()
  const domSizeEffectDisposer: (() => void)[] = [];

  // 初始化dom
  const handleInitDom = () => {
    initDom(domRef.value)
  }

  const debounceInitDomFun = debounce(handleInitDom, 100)

  /**
   * 自动绑定组件DomRef
   */
  const autoBindRef = once((ref: HTMLElement | ComponentPublicInstance) => {
    const dom = getRefDom(ref)
    if (!dom) {
      console.warn('autofitScreen: 绑定组件Dom失败!')
      return
    }

    domRef.value = dom
  })

  onMounted(() => {
    // 初始化
    handleInitDom()
    initConfig(domRef.value)

    // 监听
    window.addEventListener('resize', debounceInitDomFun)
    let observer:MutationObserver | null = observerDomResize(domRef.value, debounceInitDomFun)

    domSizeEffectDisposer.push(
      () => {
        if (!observer) return
        observer.disconnect();
        observer.takeRecords();
        observer = null;
      },
      () => {
        window.removeEventListener('resize', debounceInitDomFun);
      }
    );
  })

  onUnmounted(() => {
    domSizeEffectDisposer.forEach(disposer => disposer())
  })

  return {
    autoBindRef
  }
}

// 初始化dom
function initDom(
  dom: HTMLElement
) {
  const { clientWidth = 0, clientHeight = 0 } = dom || {}

  if (!dom) {
    console.warn('autofitScreen: 获取dom节点失败，可能导致组件呈现异常!')
  } else if (!clientWidth || !clientHeight) {
    console.warn('autofitScreen: 组件宽度或高度为0px，可能会出现渲染异常!')
  }

  if (typeof setAppScale === 'function') setAppScale(dom)
}

// 初始化设备屏幕，将设备的宽高设置给dom
function initConfig(dom: HTMLElement) {
  const { width, height } = screen

  dom.style.width = `${width}px`
  dom.style.height = `${height}px`
}

// 设置缩放比例
function setAppScale(dom: HTMLElement) {
  // 可视宽度
  const currentWidth = document.body.clientWidth

  // 分辨率
  const { width } = screen
  console.log('currentWidth :>> ', currentWidth);
  console.log('width :>> ', width);

  dom.style.transform = `scale(${currentWidth / width})`
}

// 监听DOM元素
function observerDomResize(dom: HTMLElement, callback: () => void) {
  const observer = new MutationObserver(callback);

  observer.observe(dom, {
    attributes: true,
    attributeFilter: ['class', 'style'],
    attributeOldValue: true,
  });

  return observer;
}

function getRefDom(ref: HTMLElement | ComponentPublicInstance): HTMLElement | null {
  // 检查指定的值是否为DOM元素
  if (isElement(ref)) {
    return ref as HTMLElement
  }

  if (isElement((ref as ComponentPublicInstance).$el)) {
    return (ref as ComponentPublicInstance).$el
  }

  return null
}

