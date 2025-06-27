import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmploymentView from '@/views/EmploymentView.vue'
import DashboardViews from '@/views/DashboardViews.vue'
import EmployeeViews from '@/views/EmployeeViews.vue'
import AttendanceView from '@/views/AttendanceView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/employment',
    name: 'employment',
    component: EmploymentView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardViews
  },
  {
    path: '/attendance',
    name: 'attendance',
    component: AttendanceView
  },
  {
    path: '/employee',
    name: 'employee',
    component: EmployeeViews
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
