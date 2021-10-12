<template>
  <div class="container">
    <h2>孙组件</h2>
    <p>孙组件的值：{{ money }}</p>
    <button @click="fn">消费20</button>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "son",
  // props: {
  //   money: Number,
  // },
  setup() {
    // 接收外层组件提供的数据
    const money = inject("money");
    // 接收最外层提供的方法
    const changeMoney = inject("changeMoney");
    // 消费20，单向数据流, 触发父组件的方法修改
    const fn = () => {
      changeMoney(20);
    };
    return { money, fn };
  },
};
</script>

<style>
</style>