<template>
  <div class="container">
    <div>{{ name }}</div>
    <button @click="updateName">改名</button>
  </div>
</template>

<script>
import { onBeforeMount, onMounted, reactive, toRef } from "vue";
export default {
  name: "App",
  setup() {
    // toRef:将响应式数据中的某个属性单独定义为响应式
    const obj = reactive({ name: "ls", age: 18 });
    // 模板中只使用name数据
    // let { name } = obj;
    let name = toRef(obj, "name");
    console.log(name);
    const updateName = () => {
      name.value = "zs";
      console.log(obj, name);
    };
    return { name, updateName };
  },
};
</script>

<style>
</style>