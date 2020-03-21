import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// menu路由
import Vip from '../pages/vip'
import Book from '../pages/book'
import TopOne from '../pages/topOne'
import Listen from '../pages/listen'
import Super from '../pages/super'
export default new Router({
  routes: [
    {
      path: '/vip',
      name: 'vip',
      component: Vip
    },
    {
      path: '/book',
      name: 'book',
      component: Book
    },
    {
      path: '/topOne',
      name: 'topOne',
      component: TopOne
    },
    {
      path: '/listen',
      name: 'listen',
      component: Listen
    },
    {
      path: '/super',
      name: 'super',
      component: Super
    },
  ]
})
