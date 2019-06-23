import Vue from 'vue'
import Router from 'vue-router'
import Doviz from './views/Doviz.vue'
import Gold from './views/Gold.vue'
import Developer from './views/Developer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'doviz',
      component: Doviz
    },    
    {
      path: '/gold',
      name: 'gold',
      component: Gold
    },
    {
      path: '/developer',
      name: 'developer',
      component: Developer
    }
  ]
})
