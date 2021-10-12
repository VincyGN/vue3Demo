<template>
  <div class="container">
    <div>
      <p>{{ count }}</p>
      <button @click="add">增加</button>
    </div>
    <hr />
    <div>{{ obj }}</div>
    <!-- <div>{{ obj.age }}</div>
    <div>{{ obj.name }}</div> -->
    <button @click="update">更新名字</button>
  </div>
</template>

<script>
import {
  computed,
  onBeforeMount,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  toRef,
  toRefs,
  watch,
} from "vue";
export default {
  name: "App",
  setup() {
    // watch侦听
    // 1.监听ref定义的响应式数据
    const count = ref(0);
    const add = () => {
      count.value++;
    };
    watch(count, (newVllue, oldValue) => {
      console.log(newVllue, oldValue);
    });
    // 2.监听reactive数据
    const obj = reactive({
      name: "ls",
      age: 18,
      brand: {
        id: 1,
        name: "宝马",
      },
    });
    const update = () => {
      //   obj.name = "李易峰";
      obj.brand.name = "劳斯莱斯";
    };
    // watch(
    //   obj,
    //   (newVllue, oldValue) => {
    //     console.log(newVllue, oldValue);
    //   },
    //   {
    //     // 深度监听
    //     deep: true,
    //     // 默认执行
    //     immediate: true,
    //   }
    // );

    // 3.监听多个数据的变化，第一个参数用数组
    // watch([count, obj], (newVllue, oldValue) => {
    //   console.log("哈哈", newVllue, oldValue);
    // });

    // 4.只监听对象中某一个属性的变化，例如obj.age,第一个参数要用函数
    watch(
      () => obj.name,
      () => {
        console.log("监听name");
      }
    );
    watch(
      () => obj.brand,
      () => {
        console.log("brand");
      },
      {
        // 深度监听
        deep: true,
        // 默认执行
        immediate: true,
      }
    );

    return { count, add, obj, update };
  },
};
</script>

<style>
</style>