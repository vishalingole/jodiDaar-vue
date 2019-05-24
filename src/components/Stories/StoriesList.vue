<template>
   <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
           <v-flex xs12>
              <v-toolbar :color="$root.themeColor" >
                <h3 class="white--text">Success Stories</h3>
                <v-spacer></v-spacer>
                <v-icon large color="white darken-2">history</v-icon>
               </v-toolbar>
            </v-flex>
      </v-layout>
      <v-layout row wrap>
         <v-flex
            v-for="card in cards"
            :key="card.groom"
            xs4
            >
            <v-hover>
              <v-card color="" class="" >
              <v-layout row>
                <v-flex xs7>
                  <v-card-title primary-title
                  >
                    <div>
                      <div class="headline">{{card.groom}}</div>
                      <div><v-icon color="red">favorite</v-icon></div>
                      <div>{{card.bride}}</div>
                      <div>(2013)</div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img
                    :src="card.src"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                <v-btn :color="$root.themeColor" @click="openModal" small>View Story</v-btn>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
              </v-card-actions>
            </v-card>
            </v-hover>
         </v-flex>
      </v-layout>
      <v-dialog v-model="dialog" max-width="500px">
       <v-card>
        <v-img
          class="white--text"
          height="200px"
          :src="require('../../assets/images/wedding.jpg')"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Top 10 Australian beaches</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
      </v-dialog>
   </v-container>
</template>


<script>
  export default {
    data: () => ({
      cards: [
        { groom: 'Priya Ingole', bride: 'Mangesh Divate' , src: require('../../assets/images/wedding.jpg'), dob: '28/01/1990', location : 'pune', education : 'Master of computer Application', job : 'Software Engineer', icon : 'work' },
        { groom: 'Neha Bobade', bride: 'Vishal Ingole' ,src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', dob: '28/01/1990', location : 'pune', education : 'Master of computer Application', job : 'Software Engineer', icon : 'work' },
        { groom: 'Best airlines', bride: 'Vishal Ingole' , src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', dob: '28/01/1990', location : 'Mumbai', education : 'Master of computer Application', job : 'Software Engineer' , icon : 'work' },
        { groom: 'Best airlines', bride: 'Vishal Ingole' , src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', dob: '28/01/1990', location : 'Nagpur', education : 'Master of computer Application', job : 'Software Engineer' , icon : 'work' },
        { groom: 'Pre-fab homes', bride: 'Vishal Ingole' ,src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', dob: '28/01/1990', location : 'Delhi', education : 'Master of computer Application', job : 'Software Engineer' , icon : 'work' },
        { groom: 'Best airlines', bride: 'Vishal Ingole' ,src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', dob: '28/01/1990', location : 'Aurangabad', education : 'Master of computer Application', job : 'Software Engineer' , icon : 'work' },
        { groom: 'Favorite road', bride: 'Vishal Ingole' ,src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', dob: '28/01/1990', location : 'pune', education : 'Master of computer Application', job : 'Software Engineer' , icon : 'work' },
        { groom: 'Best airlines', bride: 'Vishal Ingole' , src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', dob: '28/01/1990', location : 'pune', education : 'Master of computer Application', job : 'Software Engineer' , icon : 'work' },
      ],
      dialog: false
    }),
    methods : {
      openModal () {
        this.dialog = true        
      }
    }
  }
</script>

<style scoped>
.v-card--reveal {
  align-items: top;
  bottom: 0;
  justify-content: center;
  opacity: 2;
  position: absolute;
  width: 100%;
}
</style>