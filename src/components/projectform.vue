<template>
  <div id="projectform">
      <v-toolbar color="primary" dark height="120" class="">
      <v-btn icon @click="$router.push('/project')" class="mt-5"> <v-icon size="60">mdi-chevron-left</v-icon> </v-btn>
      <v-toolbar-title class="text-center mt-5"><h2>{{ name }} <br>บันทึกโครงการที่ขอไป</h2></v-toolbar-title>
      </v-toolbar>
      <v-container>
        <v-row class="text-center">
          <v-col cols="12">
              <h3>รายละเอียดโครงการที่ขอ</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="3">
              <h4>โรงเรียน</h4>
              <v-text-field label="โรงเรียน" solo outlined v-model="name" disabled></v-text-field>
              <h4>ปีการศึกษา</h4>
               <v-select :items="items" label="ปีการศึกษา" outlined></v-select>
               <v-text-field v-model="dateRangeText" label="ตั้งแต่ - ถึง" prepend-icon="mdi-calendar" readonly></v-text-field>
                <v-date-picker v-model="dates" range></v-date-picker>
              <v-text-field label="รวม" solo outlined v-model="day" disabled></v-text-field>
              <h4>จำนวนนักเรียน</h4>
              <v-text-field label="จำนวนนักเรียน" solo outlined></v-text-field>
              <h4>เป็นงบประมาณ</h4>
              <v-text-field label="บาท/คน" solo outlined></v-text-field>
              <v-text-field label="รวม" solo outlined></v-text-field>
              <h4>วันที่บันทึก</h4>
               <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="วันที่บันทึก"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="modal = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.dialog.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>
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
name:'projectform',
data: () => ({
     dialog: false,
    name: "โรงเรียน จ จาน",
    year: "2564",
    student: 100,
    day: 200,
    budget: 0,
    have: 0,
    items: ['2563', '2564', '2565', '2566'],
    dates: ['2021-10-10', '2021-10-20'],
    modal: false,
  }),
  computed: {
      dateRangeText () {
        return this.dates.join(' ~ ')
      },
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