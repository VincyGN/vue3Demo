<template>
  <div class="container">
    <h2>子组件</h2>
    <p>子组件的值：{{ money }}</p>
    <button @click="changeMoney">改变父组件的值</button>
  </div>
</template>

<script>
export default {
  name: "son",
  props: {
    money: Number,
  },
  // 想在setup里获取父组件的数据，需要给setup传参
  //想使用emit\attr\slot等，需要传context参数
  setup(props, context) {
    console.log(props, context);
    // 向父组件传值
    const changeMoney = () => {
      context.emit("change-money", 50);
    };
    return { changeMoney };
  },
};
</script>

<style>
</style>