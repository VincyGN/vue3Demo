<template>
  <div class="container">
    <div>{{ num }}</div>
    <button @click="updateName()">改名</button>
  </div>
</template>

<script>
import { onBeforeMount, onMounted, reactive, ref, toRef, toRefs } from "vue";
export default {
  name: "App",
  setup() {
    // ref:将简单数据变成响应式
    // 在修改值、获取值的时候，需要用.value
    // 在模板中使用ref的值时，不用写.value
    const num = ref(1);
    console.log(num);
    const updateName = () => {
      num.value = "李易峰";
    };
    return { num, updateName };
  },
};
</script>

<style>
</style>