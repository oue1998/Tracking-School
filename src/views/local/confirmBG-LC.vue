<template>
  <div id="confirmBG-LC">
      <v-toolbar color="primary" dark height="120">
      <v-btn icon @click="$router.push('/home-LC')" class="mt-2"> <v-icon size="60">mdi-chevron-left</v-icon> </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title class="text-center"><h2>{{ name }} <br>รายการงบฯที่ได้รับ</h2></v-toolbar-title>
      <v-spacer></v-spacer>
      </v-toolbar>
      <v-container>
        <v-row class="text-center">
          <v-col cols="12" class="mt-5">
              <h3>รายละเอียดงบฯที่ได้รับ</h3>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>

export default {
name:'confirmBG-LC',
component:{},
data: () => ({
    name: "อปท. กำแพงเพชร",
    dialog: false
  }),

}
</script>

<style>
h2{
    font-size: 25px;
}
h3{
    font-size: 20px;
    font-weight: 500;
}
</style>