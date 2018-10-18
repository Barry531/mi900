import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import footerbar from '../components/footer/footerbar.vue'

import collect from '../components/footer/collect.vue'
import index from '../components/footer/index.vue'
import mine from '../components/footer/mine.vue'
import type from '../components/footer/type.vue'
import sail from '../components/footer/sail.vue'
import login from '../components/footer/mine/login.vue'
import register from '../components/footer/mine/register.vue'
// import home from '../components/home/home.vue'


export default new Router({
  routes: [
    // {
    //   path: '/home',
    //   component:home
    // },
    
    {
      path:'/footerbar',
      component:footerbar,
      children:[
          {
            path:'/index',
            component:index
          },
          {
            path:'collect',
            component:collect
          },
          {
            path:'mine',
            component:mine,
            children:[
              {
                path:'login',
                component:login
              },
              {
                path:'register',
                component:register
              }
            ]
          },
          {
            path:'sail',
            component:sail
          },
          {
            path:'type',
            component:type
          },
             {
            path:'*',
            redirect:'/index'
          }
      ]
    }
    
  ]
})
