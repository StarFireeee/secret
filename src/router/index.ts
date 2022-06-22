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
      {
        path: '/todolist',
        name: 'todolist',
        component: () => import(/* webpackChunkName: "group-user" */ '@/views/todolist/index.vue'),
        meta: {
          title: '任务清单',
        },
      },
      {
        path: '/finance',
        name: 'finance',
        component: () => import(/* webpackChunkName: "group-user" */ '@/views/finance/index.vue'),
        meta: {
          title: '财政数据',
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
