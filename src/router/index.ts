import { createRouter, createWebHashHistory } from 'vue-router'
import { App } from 'vue'
import routes from './routes'
import { DEFAULT_TITLE } from '@/config'
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  //记录单页面滚动的距离
  scrollBehavior(_to, _from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      return {
        top: 0
      }
    }
  }
})
router.beforeEach((to, _from, next) => {
  if (to.meta.title) {
    //判断是否有标题
    document.title = to.meta.title as string
  } else {
    document.title = DEFAULT_TITLE
  }
  next()
})
export function setupRouter(app: App<Element>) {
  app.use(router)
}
