<template>
  <div id="budget-LC">
      <v-toolbar color="primary" dark height="120">
      <v-btn icon @click="$router.push('/pick-LC')" class="mt-2"> <v-icon size="60">mdi-chevron-left</v-icon> </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title class="text-center"><h2>{{ name }} <br>บันทึกการจัดสรรงบฯ</h2></v-toolbar-title>
      <v-spacer></v-spacer>
      </v-toolbar>
      <v-container>
        <v-row class="text-center">
          <v-col cols="12" class="mt-5">
              <h3>รายการจัดสรรงบฯ</h3>
          </v-col>
        </v-row>
        <v-row class="justify-end mr-1">
            <v-btn text class="primary--text" @click="$router.push('/budgetform-LC')">
            <v-icon left large class="mr-3">mdi-plus-circle-outline</v-icon>
            <h3>เพิ่มรายการ</h3>
            </v-btn>
        </v-row>
      </v-container>
  </div>
</template>

<script>

export default {
name:'budget-LC',
component:{},
data: () => ({
    name: "อปท. กำแพงเพชร",
    year: "2564",
    student: 100,
    day: 200,
    budget: 0,
    have: 0,
    dialog: false
  }),

}
</script>

<style>
h2{
    font-size: 23px;
}
h3{
    font-size: 20px;
    font-weight: 500;
}
</style>