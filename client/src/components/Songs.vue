<template>
  <v-row align="center" justify="center">
    <v-col class="col-12 col-md-10 col-lg-8">
      <v-card class="pb-5">
        <v-toolbar flat dense dark class="indigo">
          <v-toolbar-title>Songs</v-toolbar-title>
        </v-toolbar>
        <v-btn
          dark
          class="indigo"
          @click="register">
          Register
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Songs'
}
</script>

<style scoped>

</style>
