import Vue from 'vue'
import Router from 'vue-router'
import Home from 'page/Home/Home'
import List from 'page/List/List'
import User from 'page/User/User'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
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
  ]
})
