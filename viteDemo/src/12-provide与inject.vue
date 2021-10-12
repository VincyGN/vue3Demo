<template>
  <div class="container">
    <h1>父组件</h1>
    <p>父组件的值：{{ money }}</p>
    <button @click="money = 1000">发钱</button>
    <hr />
    <Son />
  </div>
</template>

<script>
import { provide, ref } from "vue";
import Son from "./son.vue";
export default {
  name: "App",
  components: { Son },
  setup() {
    let money = ref(100);
    let changeMoney = (newMoney) => {
      console.log("changeMoney");
      money.value -= newMoney;
    };
    // 将数据给后代
    provide("money", money);
    // 将函数给后代
    provide("changeMoney", changeMoney);

    return { money };
  },
};
</script>

<style>
</style>