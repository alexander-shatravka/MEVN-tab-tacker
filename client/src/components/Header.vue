<template>
  <v-app-bar fixed class="indigo">
    <v-toolbar-title class="mr-4">
      <span
        class="home-link"
        @click="navigateTo({name: 'root'})">
        TabTracker
      </span>
    </v-toolbar-title>
    <v-btn
      text
      dark
      @click="navigateTo({name: 'songs'})">
      Browse
    </v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        text
        dark
        @click="navigateTo({name: 'login'})">
        Login
      </v-btn>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        text
        dark
        @click="navigateTo({name: 'register'})">
        Sign Up
      </v-btn>
      <v-btn
        v-if="$store.state.isUserLoggedIn"
        text
        dark
        @click="logout()">
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'Hello'
      })
    }
  }
}
</script>

<style scoped>
  .v-toolbar__title {
    color: #fff;
  }
  .home-link {
    cursor: pointer;
    transition: color 0.3s ease;
  }
  .home-link:hover {
    color: #eee;
  }
</style>
