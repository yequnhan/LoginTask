import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Result from '@/components/Result'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    }
  ]
})
