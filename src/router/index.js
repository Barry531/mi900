import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import footerbar from '../components/footer/footerbar.vue'

import collect from '../components/footer/collect.vue'
import index from '../components/footer/index.vue'
import mine from '../components/footer/mine.vue'
import type from '../components/footer/type.vue'
import sail from '../components/footer/sail.vue'
import search from '../components/footer/index/search.vue'
import searchpop from '../components/footer/index/searchpop.vue'
import download from '../components/footer/index/download.vue'
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
            component:mine
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
   {
      path:'/searchpop',
      component:searchpop
    },
    {
      path:'/download',
      component:download
    }
    
  ]
})
