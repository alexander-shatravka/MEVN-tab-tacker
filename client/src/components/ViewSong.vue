<template>
  <v-row>
    <v-col class="col-6 col-md-12 col-lg-6">
      <panel title="Song Metadata">
        <v-row class="song">
          <v-col class="song-text col-md-8" align="left">
            <div class="song-title">{{song.title}}</div>
            <div class="song-artist">{{song.artist}}</div>
            <div class="song-genre">{{song.genre}}</div>
          </v-col>
          <v-col class="col-md-4" align="center">
            <div class="song-album-image">
              <img :src="song.albumImageUrl" alt="">
              <p class="song-album">{{song.album}}</p>
            </div>
          </v-col>
        </v-row>
      </panel>
    </v-col>
    <v-col class="col-6 col-md-12 col-lg-6">
      <panel title="Tabs">
        {{song.tab}}
      </panel>
    </v-col>
  </v-row>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  name: 'ViewSong',
  components: {Panel},
  data () {
    return {
      song: {}
    }
  },
  async created () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
    console.log(this.song)
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
