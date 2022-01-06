<template>
<div id="budgetcard">
    <v-card class="mx-auto ma-5 pa-5" max-width="344" v-for="data in data" :key="data.schoolBudgetRequestedId">
      <v-row>
      <v-col>
      <div class="text-h6 black--text"> ส่งเมื่อวันที่ : {{dayTH(data.submissionDate)}} </div>
      <div class="text-h6 black--text"> ปีการศึกษา : {{data.academicYear}} </div>
      <div class="text-h6 black--text"> เป็นงบประมาณ : {{data.allocatedBudgetAmount}} </div>
      </v-col>
      </v-row>
      <v-row v-if="!data.schoolAccepted">
          <v-col cols="6"><v-btn outlined color="accent" height="50px">แจ้งไม่ได้รับงบ</v-btn></v-col>
          <v-col cols="6"><v-btn color="accent" class="black--text" height="50px" @click="confirm(data.transactionId)">ยืนยันได้รับงบ<br>{{today}}</v-btn></v-col>
      </v-row>
      <v-row v-if="data.schoolAccepted">
          <v-col><v-btn block outlined color="accent">ยืนยันแล้วเมื่อ {{dayTH(data.schoolAccpetedDate)}} </v-btn></v-col>
      </v-row>
    </v-card>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name:'budgetcard',
  props:['data'],
  data() {
    return {
      todayTH:null,
      today:(new Date()).toLocaleDateString("th-TH", { timeZone: "UTC" }),
    }
  },
   mounted () {
    },
  computed: {
    },
    methods: {
      dayTH(value){
        let a = new Date(value)
        this.todayTH = a.toLocaleDateString("th-TH", { timeZone: "UTC" })
        return this.todayTH
      },
      confirm(value){
          //let url = value.transactionId
          const resp = axios.patch(`/apt-school-transaction/${value}/accept`,{accept : true});
          console.log('resp',resp)
      },

    },
}
</script>

<style>
</style>