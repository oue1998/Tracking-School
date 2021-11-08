<template>
  <div id="appeal-DEPT">
      <v-toolbar color="primary" dark height="120">
      <v-btn icon @click="$router.push('/home-DEPT')" class="mt-2"> <v-icon size="60">mdi-chevron-left</v-icon> </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title class="text-center"><h2>{{ name }} <br>รายการร้องเรียนที่ได้รับ</h2></v-toolbar-title>
      <v-spacer></v-spacer>
      </v-toolbar>
      <v-container>
        <v-row class="text-center">
          <v-col cols="12" class="mt-5">
              <h3>รายการร้องเรียน</h3>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>

export default {
name:'appeal-DEPT',
component:{},
data: () => ({
    name: "กรมส่งเสริมการปกครองท้องถิ่น",
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