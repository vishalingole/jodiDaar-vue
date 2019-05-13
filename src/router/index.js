import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard/dashboard'
import PhotoGallary from '@/components/Gallary/PhotoGallary'
import Search from '@/components/Search/Search'
import StoriesList from '@/components/Stories/StoriesList'
import Contact from '@/components/Contact/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
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
    }
  ]
})
