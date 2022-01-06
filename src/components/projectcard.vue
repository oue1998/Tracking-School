<template>
<div id="card">
    <v-card class="mx-auto ma-5 pa-5" max-width="344" v-for="dataPro in dataPro" :key="dataPro.id">
      <v-row>
      <v-col>
      <div class="text-h6 black--text"> ปีการศึกษา : {{dataPro.academicYear}} </div>
      <div class="text-h6 black--text"> โรงเรียน : {{dataPro.school.schoolName}} </div>
      <div class="text-h6 black--text"> จำนวนนักเรียน : {{dataPro.numberOfStudent}} คน </div>
      <div class="text-h6 black--text"> จำนวนวัน : {{dataPro.totalDays}} วัน </div>
      <div class="text-h6 black--text"> เป็นงบประมาณ : {{dataPro.budgetAmount}} </div>
      <div class="text-h6 black--text"> วันที่บันทึก : {{dayTH(dataPro.recordedDate)}} </div>
      </v-col>
      </v-row>
    </v-card>
</div>
</template>

<script>
export default {
  name:'card',
  props:['dataPro'],
  data() {
    return {
      day:null
    }
  },
   mounted () {
    },
  computed: {
    },
    methods: {
      dayTH(value){
        let a = new Date(value)
        this.day = a.toLocaleDateString("th-TH", { timeZone: "UTC" })
        return this.day
      }
    },
}
</script>

<style>

</style>