<template>
  <v-container>
    <v-row class="center">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
      </v-col>
      <v-col class="mb-5" cols="12">
        <v-row justify="center">
          <v-row justify="center">
            <v-btn color="primary" dark @click="reset" @click.stop="dialog = true">Pick weather</v-btn>
          </v-row>
        </v-row>
      </v-col>
      <v-dialog v-model="dialog" max-width="100%" :show="show" v-on="$listeners">
        <Weather :hasVotedReset.sync="hasVotedReset" />
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import Weather from "./Weather";
export default {
  components: {
    Weather
  },
  name: "HelloWorld",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    dialog: false,
    toggle: false,
    hasVotedReset: false,
    whatsNext: [
      {
        id: 0,
        text: "Weather",
        page: "/weather"
      }
    ]
  }),
  methods: {
    reset() {
      this.hasVotedReset = false;
    }
  }
};
</script>

<style>
.v-dialog.v-dialog--active {
  background-color: white;
}
</style>