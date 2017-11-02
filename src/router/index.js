import Vue from 'vue'
import Router from 'vue-router'
import Home from 'page/Home/Home'
import List from 'page/List/List'
import User from 'page/User/User'
import Other from 'page/Other/Other'
import Detail from 'page/Detail/Detail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/detail'
    },
    {
    	path: '/home',
    	component: Home
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/other',
      component: Other
    },
    {
      path: '/detail',
      component: Detail
    },
  ]
})
