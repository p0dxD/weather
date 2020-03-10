<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Pick current weather.</h2>

        <v-row justify="center">
          <a v-for="(next, i) in weather" :key="i">
            <v-card class="mx-auto" max-width="344">
              <v-img :src="next.src" height="200px"></v-img>

              <v-card-title>{{next.text}}</v-card-title>

              <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>

              <v-card-actions>
                <v-btn
                  :disabled="hasVotedReset"
                  color="purple"
                  text
                  @click="handleChildClick(next.text);snackbar = true"
                >Select</v-btn>

                <v-spacer></v-spacer>
                <v-snackbar v-model="snackbar">
                  Your selection has been saved.
                  <v-btn color="red" text @click="snackbar = false">Close</v-btn>
                </v-snackbar>
              </v-card-actions>
            </v-card>
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["hasVotedReset"],
  data: () => ({
    show: false,
    snackbar: false,
    weather: [
      {
        text: "Sunny",
        src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      },
      {
        text: "Cloudy",
        src:
          "http://4.bp.blogspot.com/_NctzEl6V7eQ/TCdkz0Mn9EI/AAAAAAAADUc/lby1rUS0TFY/s1600/cloudy+6.26.10.JPG"
      }
    ]
  }),
  methods: {
    handleChildClick(data) {
      console.log("User picked " + data + " ");
      //TODO: make ajax call of API here
      this.$emit("update:hasVotedReset", true);
    }
  }
};
</script>
