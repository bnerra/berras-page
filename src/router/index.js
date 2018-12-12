import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/HomeView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Berra\'s Page',
        metaTags: [
          {
            name: 'description',
            content: 'The main page of the site'
          }
        ]
      }
    }
  ]
})
