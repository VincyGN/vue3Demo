<template>
  <div class="container">
    <h2>子组件</h2>
    <p>子组件的值：{{ money }}</p>
    <!-- <button @click="changeMoney">改变父组件的值</button> -->
    <hr />
    <GrandSon />
  </div>
</template>

<script>
import { inject } from "vue";
import GrandSon from "./grandSon.vue";
export default {
  name: "son",
  components: { GrandSon },
  // props: {
  //   money: Number,
  // },
  setup() {
    // 接收外层组件提供的数据
    const money = inject("money");
    return { money };
  },
};
</script>

<style>
</style>