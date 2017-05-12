import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Nug from '@/components/Nug'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/nug',
      name: 'Nug!',
      component: Nug
    }
  ]
})
