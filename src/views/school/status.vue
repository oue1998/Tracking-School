<template>
  <div id="status">
      <v-toolbar color="primary" dark height="60" flat>
      <v-btn icon @click="$router.push('/school')"> <v-icon size="60">mdi-chevron-left</v-icon> </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title class="text-center"><h2>สถานการณ์งบฯที่จัดสรร</h2></v-toolbar-title>
      <v-spacer></v-spacer>
      </v-toolbar>
      <v-container class="primary">
          <v-row class="white--text" justify="space-around">
            <v-col cols="8">
                <v-progress-circular :rotate="-90" :size="80" :width="10" :value="value" color="accent"></v-progress-circular>
                <h3 class="d-inline ml-5">สำนักงบประมาณ</h3>
            </v-col>
            <v-col cols="7">
                <v-icon dark x-large>mdi-arrow-down</v-icon>
                <h4 class="d-inline ml-5">ส่ง : {{dayTH(this.data.bobSubmissionDate)}}</h4>
            </v-col>
            <v-col cols="8">
                <v-progress-circular :rotate="-90" :size="80" :width="10" :value="value" color="accent"></v-progress-circular>
                <h3 class="d-inline ml-5">กรมส่งเสริมฯ</h3>
            </v-col>
            <v-row justify="end">
            <v-col cols="7">
                <v-icon dark x-large>mdi-arrow-down</v-icon>
                <h4 class="d-inline ml-5">ส่ง : {{dayTH(this.data.dlaSubmissionDate)}}</h4>
            </v-col>
            </v-row>
          </v-row>
          <v-row class="text-center white--text">
           <v-col cols="12">
                <v-progress-circular :rotate="-90" :size="80" :width="10" :value="value" color="accent"></v-progress-circular>
                <h3 class="mt-1">{{this.APT}}</h3>
                <h3>รับ : {{dayTH(this.data.aptSubmissionDate)}}</h3>
            </v-col>
                <v-col cols="6">
                    <v-icon dark x-large>mdi-arrow-down</v-icon>
                </v-col>
                <v-col cols="6">
                    <v-icon dark x-large>mdi-arrow-down</v-icon>
                </v-col>
           <v-col cols="6">
                <v-progress-circular :rotate="-90" :size="80" :width="10" :value="data.schoolInAreaBudgetRecivedPercent" color="accent"><h4>{{Math.round(data.schoolInAreaBudgetRecivedPercent)}}%</h4></v-progress-circular>
                <h3 class="mt-1">โรงเรียนในพื้นที่</h3>
                <h3>วันล่าสุด : {{today}}</h3>
            </v-col>
           <v-col cols="6">
                <v-progress-circular :rotate="-90" :size="80" :width="10" :value="data.totalSchoolBudgetRecivedPercent" color="accent"><h4> {{Math.round(data.totalSchoolBudgetRecivedPercent)}}%</h4></v-progress-circular>
                <h3 class="mt-1">{{this.SCName}}</h3>
                <h3>รับ : {{dayTH(data.schoolAcceptedDate)}}</h3>
            </v-col>        
          </v-row>
      </v-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'status',
data: () => ({
    name: "เนคเทควิทยา",
    year: "2564",
    value: 100,
    data:{},
    APT:'',
    SCName:'',
    today:(new Date()).toLocaleDateString("th-TH", { timeZone: "UTC" }),
  }),
  async mounted () {
      const resp = await axios.get(`summary/school/monitor?academicYear=${this.year}`)
      // let a = resp.data.slice().reverse()
        this.data = resp.data
        this.APT = resp.data.school.apt.aptName
        this.SCName = resp.data.school.schoolName
        console.log(this.data)
    },
    methods: {
       dayTH(value){
         if(value != false){
        let a = new Date(value)
        this.todayTH = a.toLocaleDateString("th-TH", { timeZone: "UTC" })
        return this.todayTH
         }
        return ''
      },
    },
}
</script>

<style>

</style>