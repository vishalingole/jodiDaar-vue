<template>
  <g-signin-button
    :params="googleSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Google
  </g-signin-button>
</template>

<script>
export default {
  data: () => ({
    googleSignInParams: {
        client_id: '923520102308-9as89pke02s081g0irhfmolqaqka0b1i.apps.googleusercontent.com'
      },
  }),
  methods: {
    onSignInSuccess (googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile() // etc etc
      console.log(googleUser.getBasicProfile());
      console.log(googleUser.getAuthResponse());
      this.$router.push({name : 'Dashboard'})
    },
    onSignInError (error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
    }
  }
}
</script>

<style>

.g-signin-button {
      display: inline-block;
      background: white;
      color: #444;
      width: 190px;
      border-radius: 5px;
      border: thin solid #888;
      box-shadow: 1px 1px 1px grey;
      white-space: nowrap;
    }
    .g-signin-button:hover {
      cursor: pointer;
    }
    span.label {
      font-family: serif;
      font-weight: normal;
    }
    span.icon {
      background: url('/identity/sign-in/g-normal.png') transparent 5px 50% no-repeat;
      display: inline-block;
      vertical-align: middle;
      width: 42px;
      height: 42px;
    }
    span.buttonText {
      display: inline-block;
      vertical-align: middle;
      padding-left: 42px;
      padding-right: 42px;
      font-size: 14px;
      font-weight: bold;
      /* Use the Roboto font that is loaded in the <head> */
      font-family: 'Roboto', sans-serif;
    }


</style>