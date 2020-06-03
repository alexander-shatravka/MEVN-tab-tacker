<template>
  <v-row align="center" justify="center">
    <v-col class="col-12 col-md-10 col-lg-8">
      <panel title="Songs">
        <v-btn
          :to="{name: 'songs-create'}"
          slot="action"
          fab
          absolute
          right
          middle
          class="indigo lighten-1">
          <v-icon>add</v-icon>
        </v-btn>
        <v-row v-for="song in songs"
          :key="song.id">
            <v-col class="col-md-6" align="left">
              <div class="song-title">{{song.title}}</div>
              <div class="song-title">{{song.artist}}</div>
              <div class="song-title">{{song.genre}}</div>
            </v-col>
            <v-col class="col-md-6" align="center">
              <div class="song-album-image">
                <img :src="song.albumImageUrl" alt="">
              </div>
            </v-col>
        </v-row>
      </panel>
    </v-col>
  </v-row>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  name: 'Songs',
  components: {Panel},
  data () {
    return {
      songs: [
        {}
      ]
    }
  },
  async created () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>

</style>
