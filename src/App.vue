<template>
  <v-app>
     <Header></Header>
     <Sidebar></Sidebar>
    <Footer></Footer>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

import Header from './components/Layout/Header'
import Sidebar from './components/Layout/Sidebar'
import Footer from './components/Layout/Footer'

export default {
  name: 'App',
   components: {
        Header,
        Sidebar,
        Footer,
    },
}
</script>


