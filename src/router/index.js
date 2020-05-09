import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List,
      meta: {
        title: '列表页'
      }
    },
    {
      path: '/movie/:id',
      name: 'Detail',
      component: Detail,
      meta: {
        title: '详情页'
      }
    }
  ]
})
