<template>
<v-container grid-list-md text-xs-center>
    <v-layout row wrap>
           <v-flex xs12>
              <v-toolbar color="purple" >
                <h3>Contact Us</h3>
                <v-spacer></v-spacer>
                <v-icon large color="white darken-2">phone</v-icon>
               </v-toolbar>
            </v-flex>
    </v-layout>
  <v-form>
    <v-container>
      <v-layout row wrap>

        <v-flex xs12 sm6>
          <v-text-field
            v-model="first"
            label="First Name"
            solo
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          <v-text-field
            v-model="last"
            label="Last Name"
            solo-inverted
          ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>
  </v-form>
</v-container>
</template>