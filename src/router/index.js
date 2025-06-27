import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PayrollView from '@/views/PayrollView.vue'
import Attendance from '@/views/Attendance.vue'
import PerformanceReview from '@/views/PerformanceReview.vue'
import AddReview from '@/views/AddReview.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/payroll',
    name: 'payroll',
    component: PayrollView
  },
  {
    path: '/attendance',
    name: 'attendance',
    component:Attendance
  },
  {
    path: '/performancereview',
    name: 'performancereview',
    component:PerformanceReview
  },
  {
    path: '/addreview',
    name: 'addreview',
    component: AddReview
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
