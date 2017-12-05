import Vue from 'vue'
import Router from 'vue-router'
import Home from 'page/Home/Home'
import List from 'page/List/List'
import User from 'page/User/User'
import Other from 'page/Other/Other'
import Detail from 'page/Detail/Detail'
import NotFound from 'page/NotFound/NotFound'

import store from 'src/store'
import {setStore,getStore} from 'src/utils/mUtils.js'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home,
      beforeEnter: (to, from, next) => {
        // alert('beforeHomeRouter....')
        // setStore('uid','USERjIMHXdT1')
        // setStore('theme', 'dark')
        store.commit('SAVE_USERID', getStore('uid'))
        // store.commit('SAVE_THEME', getStore('theme'))
        next()
      }
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
      path: '/detail/:id',
      component: Detail
    },
    {
      path: '/notFound',
      component: NotFound
    }
  ]
})
