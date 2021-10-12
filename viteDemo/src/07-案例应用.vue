<template>
  <div class="container">
    坐标位置：
    <div>x:{{ x }}</div>
    <div>x:{{ y }}</div>
  </div>
</template>

<script>
import {
  onBeforeMount,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  toRef,
  toRefs,
} from "vue";
export default {
  name: "App",
  setup() {
    // 1. 记录鼠标坐标
    const mouse = reactive({ x: 0, y: 0 });
    const move = (e) => {
      //   console.log(e);
      mouse.x = e.pageX;
      mouse.y = e.pageY;
    };
    // 2.dom渲染完毕监听事件
    onMounted(() => {
      document.addEventListener("mousemove", move);
    });
    // 3.组件销毁时删除事件
    onUnmounted(() => {
      document.removeEventListener("mousemove", move);
    });
    return { ...toRefs(mouse) };
  },
};
</script>

<style>
</style>