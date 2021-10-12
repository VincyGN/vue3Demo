<template>
  <div class="container">
    <div>今年:{{ age }}岁</div>
    <div>后年:{{ newAge }}岁</div>
    <!-- 使用v-model绑定计算属性 -->
    <input type="text" v-model="newAge" />
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
} from "vue";
export default {
  name: "App",
  setup() {
    // 计算属性
    // 1.依赖一个响应式数据，根据一定逻辑，得到一个新的响应式数据;
    const age = ref(19);
    // const newAge = computed(() => {
    //   // 该函数返回的值就是计算属性的值
    //   return age.value + 2;
    // });

    //2.计算属性是只读的，不能修改，如果要修改，就使用高级用法,修改原始值
    const newAge = computed({
      // get函数,获取计算属性的值
      get() {
        return age.value + 2;
      },
      //set函数，当给计算属性设置值的时候触发
      set(value) {
        age.value = value - 2;
      },
    });
    return { age, newAge };
  },
};
</script>

<style>
</style>