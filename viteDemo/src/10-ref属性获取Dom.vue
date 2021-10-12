<template>
  <div class="container">
    <div ref="box">我是box</div>
    <hr />
    <button @click="count++">{{ count }}</button>
    <button @click="logList">打印list</button>
    <ul>
      <li v-for="i in 4" :key="i" :ref="setDom">第{{ i }}个li</li>
    </ul>
  </div>
</template>

<script>
import {
  computed,
  onBeforeMount,
  onBeforeUpdate,
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
    //   获取DOM或者组件实例，可以用ref属性，写法要跟vue2区分开
    // 1.获取单个组件的DOM,先用ref定义一个空的响应式数据,并返回，想获取哪个元素，就在哪个元素上绑定即可
    const box = ref(null);
    // 在onMounted生命周期之后可以访问
    onMounted(() => {
      console.log(box.value);
      console.log(domlis);
    });
    // 2.获取v-for遍历的dom,先定义一个空数组，接收所有的li
    // 再定义一个函数，在空数组push DOM
    //一定要在onBeforeUpdate视图更新之前，把数组清空，否则会一直push
    let domlis = [];
    const setDom = (el) => {
      //   console.log(el);
      domlis.push(el);
    };
    onBeforeUpdate(() => {
      domlis = [];
    });
    const count = ref(0);
    const logList = () => {
      console.log(domlis);
    };
    return { box, setDom, count, logList };
    // return { count, add, obj, update };
  },
};
</script>

<style>
</style>