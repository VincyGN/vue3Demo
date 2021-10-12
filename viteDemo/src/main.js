// 创建一个vue应用
// 1.从vue导入createApp
import { createApp } from 'vue'
// 2.创建一个根组件App.vue,导入至main
import App from './App.vue'
// 3.使用createApp创建应用实例，并将应用实例挂载到#app容器中
createApp(App).mount('#app')