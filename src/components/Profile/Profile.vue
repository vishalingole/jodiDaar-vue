<template>
    <v-container grid-list-md text-xs-center>
    <v-stepper v-model="e6" vertical dark >
    <v-stepper-step :complete="e6 > 1" step="1" >
      Personal Details
      <small>Summarize if needed</small>
    </v-stepper-step>

    <v-stepper-content step="1" >
      <v-container class="purple darken-2 black--text">
      <v-layout wrap align-center >
      <v-flex xs12 sm6 d-flex>
         <v-text-field
            label="First Name"
            persistent-hint
            outline
          ></v-text-field>
      </v-flex>

      <v-flex xs12 sm6 d-flex>
        <v-text-field
            label="Middle Name"
            persistent-hint
            outline
          ></v-text-field>
      </v-flex>

      <v-flex xs12 sm6 d-flex>
        <v-text-field
            label="Last Name"
            persistent-hint
            outline
          ></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 d-flex>
        <v-select
        :items="status"
        label="Maritial Status"
        solo
        outline
        ></v-select>
      </v-flex>
      <v-flex xs12 sm6 d-flex>
        <v-select
          :items="caste"
          label="Caste"
          solo
          outline
        ></v-select>
      </v-flex>
       <v-flex xs12 sm6 d-flex>
        <v-dialog
          ref="dialog"
          v-model="modal"
          :return-value.sync="date"
          persistent
          lazy
          full-width
          width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date"
              label="Date Of Birth"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
            <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
          </v-date-picker>
        </v-dialog>
      </v-flex>
      <v-flex xs12 sm6 d-flex>
        <v-select
          :items="items"
          label="Height"
          solo
          outline
        ></v-select>
      </v-flex>
       <v-flex xs12 sm6 d-flex>
        <v-select
          :items="[30]"
          label="Weight"
          solo
          outline
        ></v-select>
      </v-flex>
      <v-flex xs12 sm6 d-flex>
        <v-select
          :items="blood_group"
          label="Blood Group"
          solo
          outline
        ></v-select>
      </v-flex>
       <v-flex xs12 sm6 d-flex>
        <v-select
          :items="complexion_list"
          label="Complexion"
          solo
          outline
        ></v-select>
      </v-flex>
      <v-flex xs12 sm4 -flex>
        <div class="left white--text"><h4>Physical Disablities</h4></div>
        <div style="width:100%;float:left">
        <v-radio-group v-model="disablities" :mandatory="false" row >
          <v-radio label="Yes" value="yes"></v-radio>
          <v-radio label="No" value="no"></v-radio>
        </v-radio-group>
        </div>
      </v-flex>

      <v-flex xs12 sm4>
        <div class="left white--text"><h4>Spectacles</h4></div>
        <div style="width:100%;float:left">
        <v-radio-group v-model="spectacles" :mandatory="false" row >
          <v-radio label="Yes" value="yes"></v-radio>
          <v-radio label="No" value="no"></v-radio>
        </v-radio-group>
        </div>
      </v-flex>
      <v-flex xs12 sm4 >
        <div class="left white--text"><h4>Diet</h4></div>
        <div style="width:100%;float:left">
        <v-radio-group v-model="diet" :mandatory="false" row >
          <v-radio label="Vegetarian" value="vegetarian"></v-radio>
          <v-radio label="Non Vegetarian" value="nonvegetarian"></v-radio>
        </v-radio-group>
        </div>
      </v-flex>
       <v-flex xs12 sm6 d-flex >
         <v-text-field
            hint="Please Specify Physical Disablities"
            persistent-hint
            v-model="disablities_reason"
            outline
            v-if="disablities == 'yes'"
          ></v-text-field>
      </v-flex>
    </v-layout>
    </v-container>
      <v-btn color="primary" @click="e6 = 2" small>Next</v-btn>
      <v-btn text small>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">Education Details</v-stepper-step>

    <v-stepper-content step="2">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click="e6 = 1" small>Previous</v-btn>
      <v-btn color="primary" @click="e6 = 3" small>Next</v-btn>
      <v-btn text small>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">Professional Details</v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click="e6 = 2" small>Previous</v-btn>
      <v-btn color="primary" @click="e6 = 4" small>Next</v-btn>
      <v-btn text small>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step  :complete="e6 > 4" step="4">Horoscop Details</v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click="e6 = 3" small>Previous</v-btn>
      <v-btn color="primary" @click="e6 = 5" small>Next</v-btn>
      <v-btn text small>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step  :complete="e6 > 5" step="5">Address</v-stepper-step>
    <v-stepper-content step="5">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click="e6 = 4" small>Previous</v-btn>
      <v-btn color="primary" @click="e6 = 6" small>Next</v-btn>
      <v-btn text small>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step  :complete="e6 > 6" step="6">Family Background</v-stepper-step>
    <v-stepper-content step="6">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click="e6 = 5" small>Previous</v-btn>
      <v-btn color="primary" @click="e6 = 7" small>Next</v-btn>
      <v-btn text small>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step  :complete="e6 > 7" step="7">Expectation</v-stepper-step>
    <v-stepper-content step="7">
      <v-container class="purple darken-2 black--text">
        <v-layout wrap align-center >
          <v-flex xs12 sm6 d-flex>
             <v-select
              :items="status"
              label="Preferred Cities"
              solo
              outline
              ></v-select>
          </v-flex>
          <v-flex xs12 sm6 d-flex>
            <v-select
              :items="caste"
              label="Caste"
              solo
              outline
            ></v-select>
            </v-flex>
            <v-flex xs12 sm6 d-flex>
            <v-select
              :items="caste"
              label="Age Difference"
              solo
              outline
            ></v-select>
          </v-flex>
          <v-flex xs12 sm6 d-flex>
            <v-select
              :items="caste"
              label="Height"
              solo
              outline
            ></v-select>
          </v-flex>
          <v-flex xs12 sm6 d-flex>
            <v-select
              :items="caste"
              label="Eduction"
              solo
              outline
            ></v-select>
          </v-flex>
          <v-flex xs12 sm6 d-flex>
            <v-select
              :items="caste"
              label="Occupation"
              solo
              outline
            ></v-select>
          </v-flex>
           <v-flex xs12 sm6 d-flex>
            <v-select
              :items="caste"
              label="Working Industry"
              solo
              outline
            ></v-select>
          </v-flex>
          <v-flex xs12 sm6 d-flex>
            <v-select
              :items="caste"
              label="Package"
              solo
              outline
            ></v-select>
          </v-flex>
          <v-flex xs12 sm2 mt-12>
            <div class="left white--text mt-10"><h4>Marital Status</h4></div>
          </v-flex>
          <v-flex xs12 sm2>
            <v-checkbox
              v-model="ex4"
              label="Unmarried Boy"
              color="red"
              value="unmarried"
              hide-details
            ></v-checkbox>
          </v-flex>
          <v-flex xs12 sm2>
            <v-checkbox
              v-model="ex4"
              label="Windower"
              color="red"
              value="windower"
              hide-details
            ></v-checkbox>
          </v-flex>
            <v-flex xs12 sm2>
            <v-checkbox
              v-model="ex4"
              label="Divorcess"
              color="red"
              value="divorcess"
              hide-details
            ></v-checkbox>
          </v-flex>
        </v-layout>
        <v-btn color="primary" @click="e6 = 6" small>Previous</v-btn>
        <v-btn color="primary" @click="e6 = 8" small>Next</v-btn>
        <v-btn text small>Cancel</v-btn>
      </v-container>

    </v-stepper-content>

    <v-stepper-step  :complete="e6 > 8" step="8">Profile Photo</v-stepper-step>
    <v-stepper-content step="8">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click="e6 = 7" small>Previous</v-btn>
      <v-btn color="primary" @click="e6 = 1" small>Save</v-btn>
      <v-btn text small>Cancel</v-btn>
    </v-stepper-content>
  </v-stepper>
    </v-container>
</template>


<script>
  export default {
    data: () => ({
        e6: 7,
        diet: 'vegetarian',
        spectacles: 'no',
        disablities: 'no',
        disablities_reason: '',
        status: ['Unmarried Boy', 'Unmarried Girl', 'Divorcess Boy', 'Divorcess Girl', 'Windower', 'Window'],
        caste: ['96 Kuli', 'Maratha', 'Kunbi', 'Deshmukh Maratha', '96 Kuli Maratha', 'Tirale Kunbi'],
        items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        weight: '',
        blood_group: ['A+','A-','B+','B-','AB+', 'AB-', 'O+', 'O-', 'Don\'t Know'],
        complexion_list: ['Fair', 'Gora', 'Sawala', 'Gavhal', 'Nimgora', 'Black'],
        date: new Date().toISOString().substr(0, 10),
        menu: false,
        modal: false,

    })
  }
</script>