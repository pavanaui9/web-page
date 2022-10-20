import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('./views/Help.vue')
    },
    {
      path: '/explore',
      name: 'explore',
      component: () => import('./views/Explore.vue')
    },
    {
      path: '/stories',
      name: 'stories',
      component: () => import('./views/Stories.vue')
    }
  ]
})
