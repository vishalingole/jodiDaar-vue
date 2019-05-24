<template>
<v-container grid-list-md text-xs-center>
   <v-layout row wrap>
           <v-flex xs12>
              <v-toolbar :color="$root.themeColor" >
                <h3>Photo Gallary</h3>
                <v-spacer></v-spacer>
                <v-icon large color="white darken-2">album</v-icon>
               </v-toolbar>
            </v-flex>
    </v-layout>
  <v-card>
    <v-tabs
      background-color="white"
      color=""
      right
    >
      <v-tab>Instagram</v-tab>
      <v-tab>Facebook</v-tab>
      <v-tab>Favorites<v-icon>favorite</v-icon></v-tab>

      <v-tab-item
        v-for="n in 3"
        :key="n"
      >
        <v-container
          fluid
          grid-list-sm
        >
          <v-layout wrap>

            <div
              class="image"
              v-for="image, imageIndex in images"
              @click="index = imageIndex"
              :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px'}"
            ></div>
        </v-layout>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-card>
  <gallery :images="images" :index="index" @close="index = null"></gallery>

</v-container>

</template>


<script>

import gallery from 'vue-gallery'

export default {
     data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: require('../../assets/images/wedding.jpg'), dob: '28/01/1990', location : 'pune', education : 'Master of computer Application', job : 'Software Engineer', icon : 'work' },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', dob: '28/01/1990', location : 'pune', education : 'Master of computer Application', job : 'Software Engineer', icon : 'work' },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', dob: '28/01/1990', location : 'Mumbai', education : 'Master of computer Application', job : 'Software Engineer' , icon : 'work' },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', dob: '28/01/1990', location : 'Nagpur', education : 'Master of computer Application', job : 'Software Engineer' , icon : 'work' },
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', dob: '28/01/1990', location : 'Delhi', education : 'Master of computer Application', job : 'Software Engineer' , icon : 'work' },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', dob: '28/01/1990', location : 'Aurangabad', education : 'Master of computer Application', job : 'Software Engineer' , icon : 'work' },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', dob: '28/01/1990', location : 'pune', education : 'Master of computer Application', job : 'Software Engineer' , icon : 'work' },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', dob: '28/01/1990', location : 'pune', education : 'Master of computer Application', job : 'Software Engineer' , icon : 'work' },
      ],
      images: [
        require('../../assets/images/wedding.jpg'),
        require('../../assets/images/1.jpg'),
        require('../../assets/images/2.jpg'),
        require('../../assets/images/3.jpg'),
        require('../../assets/images/4.jpg'),
        require('../../assets/images/5.jpg'),
        'https://picsum.photos/500/300?image=20',
        'https://picsum.photos/500/300?image=25',
        'https://picsum.photos/500/300?image=30',
        'https://picsum.photos/500/300?image=35',
        'https://picsum.photos/500/300?image=40'
      ],
      index: null
    }),
    components: {
      gallery
    }
}
</script>
<style scoped>
.image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    /* border: 1px solid #ebebeb; */
    border: 1px solid gray;
    box-shadow: 2px;
    margin: 5px;
    cursor: pointer;
  }
</style>


