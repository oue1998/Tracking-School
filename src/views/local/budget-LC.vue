<template>
  <div id="budget-LC">
      <headbar :datahead="datahead"/>
      <v-container>
        <v-row class="text-center">
          <v-col cols="12" class="mt-5">
              <h3>{{name}}</h3>
          </v-col>
        </v-row>
        <v-row class="justify-end mr-1">
            <v-btn text class="primary--text" @click="$router.push(`/budgetform-LC/${id}`)">
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
              <div class="text-h6 black--text"> ชื่อ : {{name}} </div>
              <div class="text-h6 black--text"> งบประมาณทั้งสิ้น : {{data.allocatedBudgetAmount}} </div>
              <div class="text-h6 black--text"> จำนวนวัน : {{data.totalDays}} </div>
              </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
import headbar from '@/components/headbar.vue'
import axios from 'axios'
export default {
name:'budget-LC',
components:{headbar},
data: () => ({
    datahead:{
      url: '/pick-LC',
      title:'บันทึกการจัดสรรงบ'
    },
    data:[],
    today:(new Date()).toLocaleDateString("th-TH", { timeZone: "UTC" }),
    name:'',
    id:'',
    schoolID:[],
  }),
  created() {
    this.id = this.$route.params.id;
    this.name = this.$route.params.name;
    this.showdata()
  },
  methods:{
      async showdata(){
        let resp = await axios.get(`apt-school-transaction`)
        for (let i = 0; i < resp.data.length; i++) {
          if(this.id == resp.data[i].school.schoolId){
            this.data.push(resp.data[i]);
          }
          }
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