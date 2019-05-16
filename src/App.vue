<template>
<div>
<template v-if="!$route.meta.allowAnonymous">
  <v-app >
     <Header></Header>
     <Sidebar></Sidebar>
    <Footer></Footer>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
  </template>
   <template v-else>
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </template>
  </div>
</template>

<script>

import Header from './components/Layout/Header'
import Sidebar from './components/Layout/Sidebar'
import Footer from './components/Layout/Footer'

export default {
  name: 'App',
   data() {
    return {
      drawer: true
    }
  },
   components: {
        Header,
        Sidebar,
        Footer,
    },
}
</script>
<style scoped>
.my-background {
  background-image: url(./assets/images/background.jpg);
  background-size: cover;
  overflow:hidden;
}

</style>



