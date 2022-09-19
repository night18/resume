import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Publications from '@/components/Publications.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Publications',
    name: 'Publications',
    component: Publications
  }
]


const router = new createRouter({
  history: createWebHistory('/index.html'),
  routes
})

export default router
