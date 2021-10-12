<template>
  <div class="container">根组件</div>
</template>

<script>
import { onBeforeMount, onMounted } from "vue";
export default {
  name: "App",
  setup() {
    // vue3.0生命周期钩子函数
    // 1.setup 创建实例前,不能使用this,所有其他生命周期都写在setup中
    // 2.onBeforeMount 挂载DOM前
    onBeforeMount(() => {
      console.log("挂载DOM前", document.querySelector(".container"));
    });
    // 3.onMounted 挂载DOM后
    onMounted(() => {
      console.log("挂载DOM后", document.querySelector(".container"));
    });
    // 4.onBeforeUpdate 更新组件前
    // 5.onUpdated 更新组件后
    // 6.onBeforeUnmount 卸载销毁前
    // 7.onUnmounted 卸载销毁后
    return {};
  },
};
</script>

<style>
</style>