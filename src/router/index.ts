import * as vueRouter from 'vue-router';

export const constantRoutes = [{
  path: '/',
  redirect: '/config-center',
  component: () => import('../views/config-center.vue'),
  children: [{
    path: 'config-center',
    name: 'config-center',
    meta: {
      title: '首页',
      icon: 'config-center'
    },
    component: () => import('../views/config-center.vue')
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