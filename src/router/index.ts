import Home from '@/views/home/index.vue'
import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
