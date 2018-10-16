import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/home/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component:home
    },
    {
    	path:'*',
    	redirect:'/home'
    }
  ]
})
