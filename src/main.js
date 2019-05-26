// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import {setupComponents} from './config/setup-components'
import GSignInButton from 'vue-google-signin-button'
// import Vuex from 'vuex'
// import 'es6-promise/auto'
// import store from './store'


// Vue.use(Vuex)
Vue.use(Vuetify)
Vue.use(GSignInButton)
setupComponents(Vue)

Vue.config.productionTip = false
// const token = localStorage.getItem('token')
// if (token) {
//   Vue.prototype.$http.defaults.headers.common['Authorization'] = token
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {
    themeColor: 'purple darken-2',
    userEmail: 'ashish1.sarode12@infobeans.com',
    userPassword: 'ashish123'
  }
})
