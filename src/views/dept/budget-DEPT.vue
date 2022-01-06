<template>
  <div id="budget-DEPT">
      <v-toolbar color="primary" dark height="120">
      <v-btn icon @click="$router.push('/pick-DEPT')" class="mt-2"> <v-icon size="60">mdi-chevron-left</v-icon> </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title class="text-center"><h2>{{ name }} <br>บันทึกการจัดสรรงบฯ</h2></v-toolbar-title>
      <v-spacer></v-spacer>
      </v-toolbar>
      <v-container>
        <v-row class="text-center">
          <v-col cols="12" class="mt-5">
              <h3>{{apt}}</h3>
          </v-col>
        </v-row>
        <v-row class="justify-end mr-1">
            <v-btn text class="primary--text" @click="$router.push(`/budgetform-DEPT/${id}/${apt}`)">
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
              </v-col>
              </v-row>
              <v-row v-if="!data.aptAccepted">
                  <v-col><v-btn block outlined color="black">ยังไม่ยืนยัน</v-btn></v-col>
              </v-row>
              <v-row v-if="data.aptAccepted">
                  <v-col><v-btn block outlined color="accent">ยืนยันแล้วเมื่อ {{dayTH(data.aptAcceptedDate)}} </v-btn></v-col>
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
name:'budget-DEPT',
component:{},
data: () => ({
    name: "กรมส่งเสริมการปกครองท้องถิ่น",
    year: "2564",
    id:'',
    data:[],
    apt:'',
  }),
  created() {
      this.showdata()
    },
  methods:{
      showdata(){
        this.id = this.$route.params.id;
        axios.get(`dla-apt-transaction?academicYear=${this.year}&aptId=${this.id}`).then((resp) => {
        this.data = resp.data
        this.apt = resp.data[0].apt.aptName
        //console.log(this.data)
      })
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
    font-size: 23px;
}
h3{
    font-size: 20px;
    font-weight: 500;
}
</style>