import { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layout/Index.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        meta: {
          title: '移动运营服务'
        },
        component: () => import('@/views/home/Index.vue')
      }
    ]
  }
]
export default routes
