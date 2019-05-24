

<template>
   <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
           <v-flex xs12>
              <v-toolbar color="purple darken-2" >
                <h3 class="white--text">Search From Groom & Bride</h3>
                <v-spacer></v-spacer>
                <v-icon large color="white darken-2">search</v-icon>
               </v-toolbar>
            </v-flex>
      </v-layout>
      <v-layout row wrap>
         <v-flex
            v-for="card in cards"
            :key="card.title"
            xs4
            >
            <v-hover>
               <v-card
                  slot-scope="{ hover }"
                  class="mx-auto"
                  color="grey lighten-4"
                  max-width="600"
                  >
                  <v-img
                     :aspect-ratio="16/9"
                     :src="card.src"
                     >
                     <v-expand-transition>
                        <div
                           v-if="hover"
                           class="d-flex transition-fast-in-fast-out v-card--reveal display-2 white--text darken-2"
                           style="height: 100%;font-size:18px !important"
                           >
                           {{card.title}}
                        </div>
                     </v-expand-transition>
                  </v-img>
                  <v-card-text
                     class="pt-4"
                     style="position: relative;"
                     >
                     <v-btn
                        absolute
                       :color="$root.themeColor"
                        class="white--text"
                        fab
                        large
                        right
                        top
                        >
                        <v-icon>pageview</v-icon>
                     </v-btn>
                     <div class="font-weight-light grey--text title mb-2">{{card.title}}</div>
                    <div class=" mb-2"><v-icon>cake</v-icon> : {{card.dob}}</div>
                    <div class=" mb-2"><v-icon>location_city</v-icon> : {{card.location}}</div>
                    <div class="font-weight-light orange--text mb-2">{{card.education}}</div>
                    <h4 class="font-weight-light orange--text mb-2"><v-icon>{{card.icon}}</v-icon> : {{card.job}}</h4>
                     
                     <div class="font-weight-light title mb-2">
                        Our Vintage kitchen utensils delight any chef.<br>
                        Made of bamboo by hand
                     </div>
                  </v-card-text>
               </v-card>
            </v-hover>
         </v-flex>
      </v-layout>
   </v-container>
</template>


<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Priya', src: require('../../assets/images/wedding.jpg'), dob: '28/01/1990', location : 'pune', education : 'Master of computer Application', job : 'Software Engineer', icon : 'work' },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', dob: '28/01/1990', location : 'pune', education : 'Master of computer Application', job : 'Software Engineer', icon : 'work' },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', dob: '28/01/1990', location : 'Mumbai', education : 'Master of computer Application', job : 'Software Engineer' , icon : 'work' },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', dob: '28/01/1990', location : 'Nagpur', education : 'Master of computer Application', job : 'Software Engineer' , icon : 'work' },
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', dob: '28/01/1990', location : 'Delhi', education : 'Master of computer Application', job : 'Software Engineer' , icon : 'work' },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', dob: '28/01/1990', location : 'Aurangabad', education : 'Master of computer Application', job : 'Software Engineer' , icon : 'work' },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', dob: '28/01/1990', location : 'pune', education : 'Master of computer Application', job : 'Software Engineer' , icon : 'work' },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', dob: '28/01/1990', location : 'pune', education : 'Master of computer Application', job : 'Software Engineer' , icon : 'work' },
      ]
    })
  }
</script>

<style scoped>
.v-card--reveal {
  align-items: top;
  bottom: 0;
  justify-content: center;
  opacity:2;
  position: absolute;
  width: 100%;
}
</style>