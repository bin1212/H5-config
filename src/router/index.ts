import * as vueRouter from 'vue-router';
import Layout from '@/layout/index.vue'

export const constantRoutes:Array<vueRouter.RouteRecordRaw> = [{
  path: '/',
  component: Layout,
  name:"config-layout",
  redirect: '/config-center',
  children: [{
    path: 'config-center',
    name: 'config-center',
    meta: {
      title: '首页',
    },
    component: () => import('@/views/config-center/index.vue')
  }],
},
// {
//   path: '*',
//   redirect: '/noFound',
//   hidden: true
// }
]

const createRouter = () => vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes: constantRoutes,
});

const router = createRouter()

export default router