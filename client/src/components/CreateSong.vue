<template>
  <v-row>
    <v-col class="col-4 col-md-12 col-lg-4">
      <panel title="Song Metadata">
        <v-text-field
          label="Title"
          :rules="[required]"
          v-model="song.title"
        >
        </v-text-field>
        <v-text-field
          label="Artist"
          :rules="[required]"
          v-model="song.artist"
        >
        </v-text-field>
        <v-text-field
          label="Genre"
          :rules="[required]"
          v-model="song.genre"
        >
        </v-text-field>
        <v-text-field
          label="Album"
          :rules="[required]"
          v-model="song.album"
        >
        </v-text-field>
        <v-text-field
          label="Album Image Url"
          :rules="[required]"
          v-model="song.albumImageUrl"
        >
        </v-text-field>
        <v-text-field
          label="Youtube ID"
          :rules="[required]"
          v-model="song.youtubeId"
        >
        </v-text-field>
      </panel>
    </v-col>
    <v-col class="col-8 col-md-12 col-lg-8">
      <panel title="Song Structure">
        <v-textarea
          label="Lyrics"
          :rules="[required]"
          v-model="song.lyrics"
        >
        </v-textarea>
        <v-textarea
          label="Tab"
          :rules="[required]"
          v-model="song.tab"
        >
        </v-textarea>
      </panel>
      <div class="danger-alert" v-if="error">
        {{error}}
      </div>
      <v-btn
        dark
        class="indigo mt-5"
        @click="create">
        Create Song
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  name: 'CreateSongs.vue',
  components: {Panel},
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields'
        return false
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
