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
          :key="song.id"
          class="song">
            <v-col class="song-text col-md-8" align="left">
              <div class="song-title">{{song.title}}</div>
              <div class="song-artist">{{song.artist}}</div>
              <div class="song-genre">{{song.genre}}</div>
              <v-btn
                dark
                class="indigo btn-view-song"
                :to="{
                  name: 'song',
                  params: {
                    songId: song.id
                  }
                }">
                View
              </v-btn>
            </v-col>
            <v-col class="col-md-4" align="center">
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
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async created () {
    this.songs = (await SongsService.index()).data
    console.log(this.songs)
  }
}
</script>

<style scoped>
  .song {
    border-bottom: 2px solid #e1e1e1;
  }
  .song-album-image img {
    max-width: 100%;
  }
  .song-title {
    font-size: 36px;
  }
  .song-artist {
    font-size: 24px;
  }
  .song-genre {
    font-size: 18px;
  }
  .btn-view-song {
    margin-top: 20px;
  }
  .song-text {
    padding: 20px;
  }
</style>
