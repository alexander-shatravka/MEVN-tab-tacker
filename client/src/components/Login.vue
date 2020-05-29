<template>
  <v-row align="center" justify="center">
    <v-col class="col-12 col-md-6 col-lg-4">
      <v-card class="pb-5">
        <v-toolbar flat dense dark class="indigo">
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <form
          class="pt-5 pl-5 pr-5"
          name="tab-tracker-form">
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
        </form>
        <br>
        <div class="danger-alert" v-html="error" />
        <br>
        <v-btn
          dark
          class="indigo"
          @click="login">
          Login
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        // eslint-disable-next-line no-unused-vars
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .danger-alert {
    color: red;
  }
</style>
