import Vue from 'vue'
import Router from 'vue-router'
import map from '@/components/map'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'map',
      component: map
    }, {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
