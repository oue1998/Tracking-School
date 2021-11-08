<template>
  <div id="used">
      <v-toolbar color="primary" dark height="120" class="">
      <v-btn icon @click="$router.push('/school')" class="mt-5"> <v-icon size="60">mdi-chevron-left</v-icon> </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title class="text-center mt-5"><h2>{{ name }} <br>แจ้งงบฯที่ใช้</h2></v-toolbar-title>
      <v-spacer></v-spacer>
      </v-toolbar>
      <v-container>
        <v-row class="text-center">
          <v-col cols="12">
              <h3>รายละเอียดโครงการ</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="3">
              <h4>โรงเรียน</h4>
              <v-banner color="press" class="mb-5">{{name}}</v-banner>
              <h4>ปีการศึกษา</h4>
               <v-select :items="items" label="ปีการศึกษา" outlined></v-select>
              <v-banner color="press" class="mb-5">{{day}}</v-banner>
              <h4>จำนวนนักเรียน</h4>
              <v-banner color="press" class="mb-5">{{student}}</v-banner>
              <h4>งบฯที่ได้รับ</h4>
              <v-banner color="press" class="mb-5">{{have}}</v-banner>
              <h4>งบที่ใช้</h4>
              <v-text-field label="งบที่ใช้" solo outlined></v-text-field>
          </v-col>
          <v-row justify="center">
            <v-col cols="4">
              <v-btn color="accent" class="black--text pa-5"><h3>บันทึก</h3></v-btn>
            </v-col>
          </v-row>
        </v-row>
      </v-container>
  </div>
</template>


<script>
export default {
name:'used',
data: () => ({
     dialog: false,
    name: "โรงเรียน จ จาน",
    year: "2564",
    student: 100,
    day: 200,
    budget: 0,
    have: '800,000',
    items: ['2563', '2564', '2565', '2566'],
  }),
  computed: {
    },

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
h4{
    font-size: 18px;
    font-weight: 400;
    color: black; 
}
</style>