import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/HomeView.vue'
import About from '../pages/AboutView.vue'
import Resume from '../pages/ResumeView.vue'
import Blog from '../pages/BlogView.vue'
import Contact from '../pages/ContactView.vue'
import ComingSoon from '../pages/ComingSoonVue.vue'

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
    },
    {
      path: '/about',
      name: 'about',
      component: ComingSoon,
      meta: {
        title: 'Berra\'s Page - About',
        metaTags: [
          {
            name: 'description',
            content: 'The about page for the site'
          }
        ]
      }
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume,
      meta: {
        title: 'Berra\'s Page - Resume',
        metaTags: [
          {
            name: 'description',
            content: 'The resume page for the site'
          }
        ]
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: ComingSoon,
      meta: {
        title: 'Berra\'s Page - Blog',
        metaTags: [
          {
            name: 'description',
            content: 'The blog page for the site'
          }
        ]
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ComingSoon,
      meta: {
        title: 'Berra\'s Page - Contact',
        metaTags: [
          {
            name: 'description',
            content: 'The content page for the site'
          }
        ]
      }
    }
  ]
})
