<template>
 <!-- App.vue -->

<v-app>

  <v-app-bar app>
    <!-- -->
    <h1>Weather Prediction</h1>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-content>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
      <!-- <HelloWorld/> -->
      <Testing/>
    </v-container>
  </v-content>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Testing from './components/Testing';

export default {
  name: 'App',

  components: {
    // HelloWorld,
    Testing,
  },

  data: () => ({
    //
  }),
};
</script>
