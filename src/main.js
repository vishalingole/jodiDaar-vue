// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import {setupComponents} from './config/setup-components'


Vue.use(Vuetify)
setupComponents(Vue)

Vue.config.productionTip = false

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
