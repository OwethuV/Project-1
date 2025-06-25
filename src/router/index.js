import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ManagementView from '@/views/ManagementView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/management',
    name: 'management',
    component: ManagementView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
