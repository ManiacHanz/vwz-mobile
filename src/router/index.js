import Vue from 'vue'
import Router from 'vue-router'
import Home from 'page/Home/Home'
import List from 'page/List/List'
import User from 'page/User/User'
import Other from 'page/Other/Other'
import Detail from 'page/Detail/Detail'
import NotFound from 'page/NotFound/NotFound'

import store from 'src/store'
import {setStore,getStore,jsonParse} from 'src/utils/mUtils.js'

import axios from 'axios'
import {baseUrl} from 'src/utils/env'


var firstIn = ''


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      beforeEnter: (to,from,next) => {
        store.commit('SAVE_USERID', getStore('uid'))
        axios.get(baseUrl+'/front/menu?uid='+ getStore('uid'))
          .then( res => {
            let button = jsonParse(res.data.data).button
            for (let i in button) {
              if (button[i].display) {
                firstIn = '/' + button[i].type
                store.commit('SET_FOOTACTIVE', i*1)
                break
              }
            }
            next(firstIn)
          })
      },
    },
    {
      path: '/home',
      component: Home,
      beforeEnter: (to, from, next) => {
        // alert('beforeHomeRouter....')
        // setStore('uid','USERDGcfrI6i')
        // setStore('theme', 'dark')
        // store.commit('SAVE_USERID', getStore('uid'))
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
      component: Detail,
      meta: {noKeepAlive:true}
    },
    {
      path: '/notFound',
      component: NotFound
    }
  ]
})
