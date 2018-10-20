import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import footerbar from '../components/footer/footerbar.vue'

import collect from '../components/footer/collect.vue'
import index from '../components/footer/index.vue'
import mine from '../components/footer/mine.vue'
import type from '../components/footer/type.vue'
import sail from '../components/footer/sail.vue'
// <<<<<<< HEAD
import search from '../components/footer/index/search.vue'
import searchfilm from '../components/footer/index/searchfilm.vue'
import searchpop from '../components/footer/index/searchpop.vue'
import searchpop2 from '../components/footer/index/searchpop2.vue'
import download from '../components/footer/index/download.vue'
// =======
import login from '../components/footer/mine/login.vue'
import register from '../components/footer/mine/register.vue'
import setter from '../components/footer/mine/setter.vue'
// >>>>>>> 13c9d312e43cfcb37f92da6aa32b47836990771a
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
            path:'index',
            component:index,
            children:[
                 {
                  path:'/index/search',
                  component:search,
                 },
            ]
          },
          {
            path:'collect',
            component:collect
          },
          {
            path:'mine',
            component:mine,
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
            redirect:'/footer/index'
          }
      ]
    },
// <<<<<<< HEAD
   {
      path:'/searchfilm',
      component:searchfilm,
      children:[
    {
      path:'/searchpop',
      component:searchpop
    },
    {
      path:'/searchpop2',
      component:searchpop2
    },
    {
      path:"/",
      redirect:"/searchpop"
    }

      ]
    },
    {
      path:'/download',
      component:download
    },
// =======
    {
      path:'/login',
      component:login
    },
    {
      path:'/register',
      component:register
    },
   {
      path:'/setter',
      component:setter
// >>>>>>> 13c9d312e43cfcb37f92da6aa32b47836990771a
    }

  ]
})
