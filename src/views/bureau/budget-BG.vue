<template>
  <div id="budget-BG">
      <v-toolbar color="primary" dark height="120">
      <v-btn icon @click="$router.push('/bureau-BG')" class="mt-2"> <v-icon size="60">mdi-chevron-left</v-icon> </v-btn>
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
            <v-btn text class="primary--text" @click="$router.push('/budgetform-BG')">
            <v-icon left large class="mr-3">mdi-plus-circle-outline</v-icon>
            <h3>เพิ่มรายการ</h3>
            </v-btn>
        </v-row>
         <v-row>
          <v-col cols="12">
            <v-card class="mx-auto ma-5 pa-5" max-width="344" v-for="data in data" :key="data.transactionDate">
              <v-row>
              <v-col cols="12">
              <div class="text-h6 black--text text-right"> ส่งเมื่อวันที่ : {{dayTH(data.submissionDate)}} </div>
              <v-divider/>
              <div class="text-h6 black--text "> ปีการศึกษา : {{data.academicYear}} </div>
              <div class="text-h6 black--text"> งบประมาณทั้งสิ้น : {{data.allocatedBudgetAmount}} </div>
              <div class="text-h6 black--text"> จำนวนวัน : {{data.totalDays}} </div>
              <div class="text-h6 black--text"> วันที่บันทึก : {{dayTH(data.submissionDate)}} </div>
              </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
name:'budget-BG',
component:{},
data: () => ({
    name: "สำนักงบประมาณ",
    year: "2564",
    dialog: false,
    data:[],
    today:(new Date()).toLocaleDateString("th-TH", { timeZone: "UTC" })
  }),
  mounted () {
      this.showdata()
  
    },
    computed: {
      // reverseddataPro(){
      //   return this.data.slice().reverse()
      // },
    },
  methods:{
      async showdata(){
        let resp = await axios.get(`bob-dla-transaction?academicYear=${this.year}`)
        this.data = resp.data.slice().reverse()
        console.log('this.data',this.data)
      },
      dayTH(value){
        let day = (new Date(value)).toLocaleDateString("th-TH", { timeZone: "UTC" })
        return day
      },
}
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