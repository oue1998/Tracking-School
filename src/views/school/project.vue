<template>
  <div id="project">
      <v-toolbar color="primary" dark height="120">
      <v-btn icon @click="$router.push('/')" class="mt-5"> <v-icon size="60">mdi-chevron-left</v-icon> </v-btn>
      <v-toolbar-title class="text-center mt-5"><h2>{{ name }} <br>บันทึกโครงการที่ขอไป</h2></v-toolbar-title>
      </v-toolbar>
      <v-container>
        <v-row class="text-center mt-3">
          <v-col cols="12">
              <h3>รายการโครงการที่ขอไป</h3>
          </v-col>
        </v-row>
        <v-row class="justify-end mr-1">
            <v-btn text class="mb-5 primary--text" @click="$router.push('/projectform')">
            <v-icon left large>mdi-plus</v-icon>
            <h3>เพิ่มรายการ</h3>
            </v-btn>
        </v-row>
      </v-container>
  </div>
</template>

<script>
import projectform from '@/components/projectform.vue';
export default {
name:'project',
component:{projectform},
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