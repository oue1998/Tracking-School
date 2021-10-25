<template>
  <div id="budget">
      <v-toolbar color="primary" dark height="120" class="">
      <v-btn icon @click="$router.push('/')"> <v-icon size="60">mdi-chevron-left</v-icon> </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title class="text-center"><h2>{{ name }} <br>รายการงบฯที่ได้รับ</h2></v-toolbar-title>
      <v-spacer></v-spacer>
      </v-toolbar>
      <v-container>
        <v-row class="text-center">
          <v-col cols="12">
              <h3>รายละเอียดงบฯที่ได้รับ</h3>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>

export default {
name:'budget',
component:{},
data: () => ({
    name: "โรงเรียน จ จาน",
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
    font-size: 25px;
}
h3{
    font-size: 20px;
    font-weight: 500;
}
</style>