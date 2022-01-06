<template>
  <div id="school">
    <v-container class="primary hidden-md-and-up">
      <v-row class="white--text justify-end mr-1">
        <v-col cols="2">
          <v-btn dark text @click="$router.push('/login')">
            <v-icon>mdi-power</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="text-center white--text">
        <v-col cols="12">
          <h2 class="mb-5">{{ name }}</h2>
          <v-progress-circular
            :rotate="-90"
            :size="200"
            :width="20"
            :value="data.revicedBudgetPercent"
            color="accent"
          >
          <h1> {{ Math.round(data.revicedBudgetPercent) }}%</h1>
          </v-progress-circular>
          <h3 class="mb-5">ปีการศึกษา : {{ data.academicYear }}</h3>
          <h3 class="d-inline mr-2">นักเรียน : {{ data.totalStudent }} คน</h3>
          <h3 class="d-inline ml-2">สำหรับ : {{ data.totalDays }} วัน</h3>
          <h3>เป็นงบประมาณ : {{ data.totalRequestedBudget }} บาท</h3>
          <h3 class="mb-5">งบประมาณที่ได้รับ : {{ data.revicedBudget }} บาท</h3>
        </v-col>
      </v-row>
      <v-row class="text-center ">
          <v-col cols="12 pa-0">
            <div class="pa-5 white rounded-t-pill"></div>
          </v-col>
          <v-col class="white">
                <v-btn block v-for="list in lists" :key="list.name" :color="list.color" class="mb-5 black--text" @click="$router.push(list.route)"><h4>{{list.name}}</h4></v-btn>
          <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn block color="#B32208" dark class="mb-5 mt-10" v-bind="attrs" v-on="on"><h4>แจ้งสถานการณ์</h4></v-btn>
      </template>
      <v-card>
        <v-card-text class="text-h6 pa-5">แจ้งสถานการณ์ได้รับงบประมาณล่าช้าหรือยังไม่ได้รับงบประมาณ</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="error darken-1"
            class="text-h6"
            text
            @click="dialog = false"
          >
            ยกเลิก
          </v-btn>
          <v-btn
            color="secondary darken-1"
            class="text-h6"
            text
            @click="reportissue()"
          >
            ยืนยัน
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
          </v-col>
      </v-row>
      <v-row justify="center">
    
  </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "school",
  data() {
    return {
    name: null,
    year: "2564",
    dialog: false,
    have: 0,
    interval: {},
    value: 0,
    lists:[
      {name:"บันทึกโครงการที่ขอไป",color:"#EDEAE4",route:"/project"},
      {name:"รายการงบฯที่ได้รับ",color:"#EDEAE4",route:"/budget"},
      {name:"สถานการณ์งบที่จัดสรร",color:"#EDEAE4",route:"/status"},
      {name:"แจ้งงบที่ใช้",color:"#EDEAE4",route:"/used"}
    ],
    username:null,
    data:{},
    issue:{
    schoolIssueReportCode : 'SCHAPT001',
    academicYear : "TSCHAPT0001"
    },
    }
  },
  beforeDestroy () {
      //clearInterval(this.interval)
    },
  async mounted () {
      await axios.get('authentication/profile').then((resp) => {
        let SC = resp.data.schoolUser.school
        //console.log(SC.schoolName)
        this.name = SC.schoolName
      })
      let resp = await axios.get(`/summary/school/academic-year-budget-allocated?academicYear=${this.year}`)
      // let a = resp.data.slice().reverse()
        this.data = resp.data
        console.log(this.data)
    },
    created() {
    },
    methods: {
     reportissue(){
        this.issue.academicYear = parseInt(this.data.academicYear)
        console.log(this.issue)
        axios.post('/issue-report/school',this.issue).then((resp) => {
        console.log(resp)
        this.dialog = false
      })
      }
    },
};
</script>
<style scoped>
h1{
  font-size: 50px;
}
h3 {
  font-weight: 400;
  margin-top: 15px;
}
h4{
  font-size: 18px;
  font-weight: 300;

}
.menu{
  background: white;
  border-radius: 30px 30px 0px 0px;
  height: 100px;
  padding: 0;
}
</style>
