import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history', // 没有#
  // 应用中所有路由
  routes
})

export default router
