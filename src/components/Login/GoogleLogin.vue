<template>
  <v-btn v-google-signin-button="clientId" class="google-signin-button"> Continue with Google</v-btn>
</template>

<script>
// import GoogleSignInButton from 'vue-google-signin-button-directive'
export default {
  directives: {
    // GoogleSignInButton
  },
  data: () => ({
    clientId: '923520102308-hp0omb593013p6ndmniho6mq39vb8v7o.apps.googleusercontent.com'
  }),
  methods: {
    OnGoogleAuthSuccess (idToken) {
      // Receive the idToken and make your magic with the backend
    },
    OnGoogleAuthFail (error) {
      console.log(error)
    }
  }
}
</script>

<style>
.google-signin-button {
  color: white;
  background-color: red;
  height: 30px;
  font-size: 16px;
  border-radius: 5px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>