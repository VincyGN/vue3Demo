<template>
  <div class="container">
    <h1>父组件</h1>
    <p>父组件的值：{{ money }}</p>
    <!-- <button @click="changeFather">改变父组件值</button> -->
    <hr />
    <Son :money="money" @change-money="updateMoney" />
  </div>
</template>

<script>
import { ref } from "vue";
import Son from "./son.vue";
export default {
  name: "App",
  components: { Son },
  setup() {
    //   父组件传值给子组件
    let money = ref(100);
    const changeFather = () => {
      money.value++;
    };
    const updateMoney = (newMoney) => {
      money.value = newMoney;
    };
    return { money, changeFather, updateMoney };
  },
};
</script>

<style>
</style>