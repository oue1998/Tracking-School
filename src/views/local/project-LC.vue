<template>
  <div id="project-LC">
     <headbar :datahead="datahead"/>
      <v-container>
        <v-row class="text-center">
          <v-col cols="12" class="mt-5">
              <h3>รายละเอียดโครงการที่ได้รับ</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
             <v-card class="mx-auto ma-5 pa-5" max-width="344" v-for="dataPro in dataPro" :key="dataPro.id">
              <v-row>
              <v-col>
              <div class="text-h6 black--text text-right"> ปีการศึกษา : {{dataPro.academicYear}} </div>
              <v-divider/>
              <div class="text-h6 black--text"> โรงเรียน : {{dataPro.school.schoolName}} </div>
              <div class="text-h6 black--text"> จำนวนนักเรียน : {{dataPro.numberOfStudent}} คน </div>
              <div class="text-h6 black--text"> จำนวนวัน : {{dataPro.totalDays}} วัน </div>
              <div class="text-h6 black--text"> เป็นงบประมาณ : {{dataPro.budgetAmount}} </div>
              <div class="text-h6 black--text"> วันที่บันทึก : {{dayTH(dataPro.recordedDate)}} </div>
              </v-col>
              </v-row>
              
              <v-row v-if="(!dataPro.aptAccepted) & (dataPro.requestedIssue.length == 0)">
                  <v-col cols="6"><v-btn outlined color="error" height="50px" @click="reportissue(dataPro.id)">ไม่ได้รับโครงการ</v-btn></v-col>
                  <v-col cols="6"><v-btn color="accent" class="black--text" height="50px" @click="confirm(dataPro.id)">ยืนยันได้รับ<br>{{today}}</v-btn></v-col>
              </v-row>
              <v-row v-if="dataPro.aptAccepted">
                  <v-col><v-btn block outlined color="accent">ยืนยันแล้วเมื่อ {{dayTH(dataPro.acceptedDate)}}</v-btn></v-col>
              </v-row>
              <v-row v-if="dataPro.requestedIssue.length > 0">
                 <v-col><v-btn block outlined color="error">ไม่ได้รับเอกสารของบประมาณ</v-btn></v-col>
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
name:'project-LC',
components:{headbar},
data: () => ({
    datahead:{
      url: '/home-LC',
      title:'รายการโครงการ'
    },
    dataPro:[],
    day:null,
    today:(new Date()).toLocaleDateString("th-TH", { timeZone: "UTC" }),
    con:{accepted: true,acceptedDate: (new Date()).toISOString()},
    issue:{
    transactionId : null,
    issueCode : "RAPTSCH0001"
    },
  }),
   async mounted () {
      let resp = await axios.get('/school-budget-requested')
        //console.log(resp)
        this.dataPro = resp.data.slice().reverse()
  
    },
  methods:{
      dayTH(value){
        let a = new Date(value)
        this.day = a.toLocaleDateString("th-TH", { timeZone: "UTC" })
        return this.day
      },
      confirm(value){
            axios.patch(`school-budget-requested/${value}/accepted`,{accepted: true,acceptedDate: (new Date()).toISOString()});
            //location.reload();
      },
      reportissue(value){
        this.issue.transactionId = value
        console.log(this.issue)
        axios.post('school-budget-requested-issue',this.issue).then((resp) => {
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