<template>
  <div id="budget">
       <headbar :datahead="datahead"/>
      <v-container>
        <v-row class="text-center">
          <v-col cols="12" class="mt-5">
              <h3>รายละเอียดงบฯที่ได้รับ</h3>
          </v-col>
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
              <div class="text-h6 black--text"> ต้องได้รัภายใน : {{dayTH(data.budgetExpectedDate)}} </div>
              </v-col>
              </v-row>
              <v-divider class="mt-3 mb-3"/>
              <v-row v-if="(!data.schoolAccepted) & (data.transactionIssue.length == 0)">
                  <v-col cols="6"><v-btn outlined color="error" height="50px" @click="reportissue(data.transactionId)">แจ้งไม่ได้รับงบ</v-btn></v-col>
                  <v-col cols="6"><v-btn color="accent" class="black--text" height="50px" @click="confirm(data.transactionId)">ยืนยันได้รับงบ<br>{{today}}</v-btn></v-col>
              </v-row>
              <v-row v-if="data.schoolAccepted">
                  <v-col><v-btn block outlined color="accent">ยืนยันแล้วเมื่อ {{dayTH(data.schoolAccpetedDate)}} </v-btn></v-col>
              </v-row>
              <v-row v-if="data.transactionIssue.length > 0">
                 <v-col><v-btn block outlined color="error">ไม่ได้รับงบ</v-btn></v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import headbar from '@/components/headbar.vue'
export default {
name:'budget',
components:{headbar},
data: () => ({
    data:[],
    datahead:{
      url: '/school',
      title:'รายการงบฯที่ได้รับ'
    },
    todayTH:null,
    today:(new Date()).toLocaleDateString("th-TH", { timeZone: "UTC" }),
    issue:{
    transactionId : null,
    issueCode : "TSCHAPT0001"
    },
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
        let resp = await axios.get('/apt-school-transaction')
        this.data = resp.data.slice().reverse()
        console.log('this.data',this.data)
      },
      dayTH(value){
        let a = new Date(value)
        this.todayTH = a.toLocaleDateString("th-TH", { timeZone: "UTC" })
        return this.todayTH
      },
      confirm(value){
          let resp = axios.patch(`/apt-school-transaction/${value}/accept`,{accept : true});
          console.log(resp)
          if(resp.status == 201){
          //location.reload();
          this.showdata()
        }
      },
      reportissue(value){
        this.issue.transactionId = value
        //console.log(this.issue)
        axios.post('apt-school-transaction-issue',this.issue).then((resp) => {
        console.log(resp)
        if(resp.status == 201){
        //location.reload();
        this.showdata()
        }
      })
      }
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