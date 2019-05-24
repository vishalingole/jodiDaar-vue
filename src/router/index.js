import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard/dashboard'
import PhotoGallary from '@/components/Gallary/PhotoGallary'
import Search from '@/components/Search/Search'
import StoriesList from '@/components/Stories/StoriesList'
import Contact from '@/components/Contact/Index'
import Login from '@/components/Login/Login'
import ForgotPassword from '@/components/Login/ForgotPassword'
import Register from '@/components/Login/Register'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/gallary',
      name: 'Gallary',
      component: PhotoGallary
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/success-stories',
      name: 'StoriesList',
      component: StoriesList
    },
    {
      path: '/contact-us',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        allowAnonymous: true
      }
    },
    {
      path: '/forgot-password',
      name: 'ForgotPassword',
      component: ForgotPassword,
      meta: {
        allowAnonymous: true
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        allowAnonymous: true
      }
    }
  ]
})
