import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/system/login.vue'
import Layout from '@/layout/index.vue'
import Home from '@/views/index/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/',
    name: 'index',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
          title: '首页',
        },
      },
      {
        path: '/history',
        name: 'history',
        component: () => import(/* webpackChunkName: "group-user" */ '@/views/history/index.vue'),
        meta: {
          title: '历史',
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
