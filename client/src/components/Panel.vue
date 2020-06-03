<template>
  <v-card class="pb-5">
    <v-toolbar flat dense dark class="indigo">
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <slot name="action"/>
    </v-toolbar>
    <div class="pl-4 pr-4 pl-2 pl-2">
      <slot>
        No slot content defined
      </slot>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'Panel',
  data () {
    return {
    }
  },
  props: [
    'title'
  ]
}
</script>

<style scoped>

</style>
