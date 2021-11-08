<template>
  <div id="home">
      <v-container class="hidden-md-and-up">
          <v-row class="text-center">
              <v-col cols="12">
                  <router-link to="/school">School</router-link>
              </v-col>
              <v-col cols="12">
                  <router-link to="/bureau-BG">Bureau</router-link>
              </v-col>
              <v-col cols="12">
                  <router-link to="home-DEPT">DEPT</router-link>
              </v-col>
              <v-col cols="12">
                  <router-link to="home-LC">local</router-link>
              </v-col>
          </v-row>
          
      </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>