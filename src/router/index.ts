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
      {
        path: '/drag',
        name: 'drag',
        component: () => import(/* webpackChunkName: "group-user" */ '@/views/study/drag/index.vue'),
        meta: {
          title: '拖拽',
        },
      },
      {
        path: '/diary-read',
        name: 'diary-read',
        component: () => import(/* webpackChunkName: "group-user" */ '@/views/diary/read/index.vue'),
        meta: {
          title: '日记列表',
        },
      },
      {
        path: '/diary-write',
        name: 'diary-write',
        component: () => import(/* webpackChunkName: "group-user" */ '@/views/diary/write/index.vue'),
        meta: {
          title: '写日记',
        },
      },
      {
        path: '/ordinary-war',
        name: 'ordinary-war',
        component: () => import(/* webpackChunkName: "group-user" */ '@/views/games/myriad-world-war/index.vue'),
        meta: {
          title: '万界争霸',
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
