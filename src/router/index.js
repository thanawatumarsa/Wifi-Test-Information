import Vue from 'vue'
import Router from 'vue-router'
import VueFire from 'vue-fire'
import Login from '@/components/login'
import Register from '@/components/register'
import main from '@/components/main'
import dashboard from '@/components/dashboard'

Vue.use(Router, VueFire)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    }
  ]
})
