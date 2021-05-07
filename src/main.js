import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// vue 路由器 地址
// 先安装vue-router 插件 再导入
import VueRouter from "vue-router"

import Work from "./components/Work.vue"
import Login from "./components/Login.vue"
import Book from "./components/Book.vue"
import Student from "./components/Student.vue"
import CNNode from "./components/CNNode.vue"

Vue.use(ElementUI)
// 通过use方法使用起来
Vue.use(VueRouter)
//路由  途径

const routes = [
  {
    path: "/work",
    component: Work
  },

  {
    path: "/login",
    component: Login
  },

  {
    path: "/book",
    component: Book
  },

  {
    path: "/student",
    component: Student
  },
  {  
    path: "/cnnode",
    component: CNNode
  },

]

Vue.config.productionTip = false
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
