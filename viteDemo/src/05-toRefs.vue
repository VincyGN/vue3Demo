<template>
  <div class="container">
    <div>{{ name }}</div>
    <div>{{ age }}</div>
    <button @click="updateName">改名</button>
  </div>
</template>

<script>
import { onBeforeMount, onMounted, reactive, toRef, toRefs } from "vue";
export default {
  name: "App",
  setup() {
    // toRefs:将响应式数据中的所有属性单独定义为响应式，常用于展开或解构
    const obj = reactive({ name: "ls", age: 18 });
    console.log(obj);
    // 解构或展开后的数据，都不是响应式的数据
    // const { name, age } = obj;
    // console.log(name, age);
    // const obj2 = { ...obj };
    // console.log(obj2);

    // 用toRefs代理
    const obj2 = toRefs(obj);
    console.log(obj2);

    const updateName = () => {
      //   obj2.name.value = "zs";
      obj.name = "李易峰";
      obj2.age.value = 35;
    };
    return { ...obj2, updateName };
  },
};
</script>

<style>
</style>