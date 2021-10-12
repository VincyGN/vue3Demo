<template>
  <div class="container">根组件：{{ msg }}</div>
</template>

<script>
export default {
  name: "App",
  //1.组合api的起点
  //2.在beforeCreate之前执行，不能使用this
  //3.可以提供模板需要的数据和函数
  setup() {
    const msg = "hello";
    return {
      msg,
    };
  },
};
</script>

<style>
</style>