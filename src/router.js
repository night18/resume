import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Publications from '@/components/Publications.vue'
import Projects from '@/components/Projects.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Publications',
    name: 'Publications',
    component: Publications,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  }
]


const router = new createRouter({
  history: createWebHistory(),
  routes
})

export default router
