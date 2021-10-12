<template>
  <div class="container">
    <div>{{ obj.name }}</div>
    <div>{{ obj.age }}</div>
    <button @click="updateName()">改名</button>
  </div>
</template>

<script>
import { onBeforeMount, onMounted, reactive } from "vue";
export default {
  name: "App",
  setup() {
    // reactive:使复杂数据成为响应式
    const obj = reactive({ name: "ls", age: 18 });
    const updateName = () => {
      obj.name = "zs";
      console.log(obj);
    };
    return { obj, updateName };
  },
};
</script>

<style>
</style>