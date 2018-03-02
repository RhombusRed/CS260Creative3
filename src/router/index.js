import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Creation from '@/components/Creation'
import MyCharacter from '@/components/MyCharacter'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/',
      name: 'Creation',
      component: Creation
    },
    {
      path: '/',
      name: 'MyCharacter',
      component: MyCharacter
    },
    {
      path: '/',
      name: 'About',
      component: About
    }
  ]
})
