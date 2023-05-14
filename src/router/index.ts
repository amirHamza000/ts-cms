import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsersVue from '@/views/Users.vue'
import AdminVue from '@/views/Admin.vue'
import ProfileVue from '@/views/Profile.vue'
import EarningsVue from '@/views/Earnings.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/users',
    name: 'user',
    component: UsersVue
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminVue
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileVue
  },
  {
    path: '/earnings',
    name: 'earnings',
    component: EarningsVue
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
