<template>
  <div id="home-LC">
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
        </v-col>
      </v-row>
       <v-row class="ml-5 white--text" align-content="center">
           <v-col cols="3">
               <v-progress-circular :rotate="-90" :size="60" :width="7" :value="colorBOB.value" :color="colorBOB.color"></v-progress-circular>
           </v-col>
           <v-col cols="9">
               <h3 class="ma-0 pa-0">สำนักงบ</h3>
           </v-col>
           <v-col cols="12" class="ml-2">
                <v-icon dark x-large>mdi-arrow-down</v-icon>
                <h4 class="d-inline ml-5">ส่ง : {{dayTH(data.bobSubmissionDate)}}</h4>
            </v-col>
      </v-row>
      <v-row class="ml-5 white--text" align-content="center">
           <v-col cols="3">
               <v-progress-circular :rotate="-90" :size="60" :width="7" :value="colorDLA.value" :color="colorDLA.color"></v-progress-circular>
           </v-col>
           <v-col cols="9">
               <h3 class="ma-0 pa-0">กรมส่งเสริมการปกครอง</h3>
               <h3 class="ma-0 pa-0">รับ : {{dayTH(data.dlaAcceptedDate)}}</h3>
           </v-col>
           <v-col cols="12" class="ml-2">
                <v-icon dark x-large>mdi-arrow-down</v-icon>
                <!-- <h4 class="d-inline ml-5">ส่ง : {{}}</h4> -->
            </v-col>
      </v-row>
      <v-row class="ml-5 white--text" align-content="center">
           <v-col cols="3">
               <v-progress-circular :rotate="-90" :size="60" :width="7" :value="colorAPT.value" :color="colorAPT.color"></v-progress-circular>
           </v-col>
           <v-col cols="9">
               <h3 class="ma-0 pa-0">{{name}}</h3>
               <h3 class="ma-0 pa-0">รับ : {{dayTH(data.aptAcceptedDate)}}</h3>
           </v-col>
           <v-col cols="12" class="ml-2">
                <v-icon dark x-large>mdi-arrow-down</v-icon>
                <!-- <h4 class="d-inline ml-5">ส่ง : {{}}</h4> -->
            </v-col>
      </v-row>
      <v-row class="ml-5 white--text" align-content="center">
             <v-col cols="4">
               <v-progress-circular :rotate="-90" :size="100" :width="8" :value="data.schoolInAreaBudgetRecivedPercent" :color="colorSC">{{Math.round(data.schoolInAreaBudgetRecivedPercent)}}%</v-progress-circular>
           </v-col>
           <v-col cols="8">
               <h3 class="mt-5">โรงเรียนและศูนย์เด็กเล็กในพื้นที่</h3>
               <h3 class="ma-0 pa-0">{{today}}</h3>
           </v-col>
        </v-row>
      <v-row class="text-center white--text">
          <v-col>
          <h3 class="mb-5">ปีการศึกษา : {{ data.academicYear }}</h3>
          <h3>งบประมาณทั้งสิ้น : {{ data.totalBudgetAptRecived }} บาท</h3>
          <h3 class="mb-5">ยืนยันได้รับงบฯแล้ว : {{ data.schoolBudgetRecived }} บาท</h3>
          </v-col>
      </v-row>
      <v-row class="menu">
          <v-col class="white">
               <div class="pa-5 white rounded-t-pill"></div>
                <v-btn block v-for="list in lists" :key="list.name" :color="list.color" class="mb-5 black--text" @click="$router.push(list.route)"><h4>{{list.name}}</h4></v-btn>
          </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "home-LC",
  data: () => ({
    name: null,
    year: "2564",
    budget: '0',
    have: 0,
    value: 0,
    lists:[
      {name:"บันทึกการจัดสรรงบฯ",color:"#EDEAE4",route:"/pick-LC"},
      {name:"รายการงบฯที่ได้รับ",color:"#EDEAE4",route:"/confirmBG-LC"},
      {name:"รายการโครงการที่ได้รับ",color:"#EDEAE4",route:"/project-LC"},
      {name:"การร้องเรียนที่ได้รับ",color:"#EDEAE4",route:"/appeal-LC"},
    ],
    data:{},
    today:(new Date()).toLocaleDateString("th-TH", { timeZone: "UTC" }),
    colorSC:'white',
    colorAPT:{value:0,color:'white'},
    colorBOB:{value:0,color:'white'},
    colorDLA:{value:0,color:'white'}
  }),
  beforeDestroy () {
    },
   async mounted () {
    let resp = await axios.get(`summary/apt/monitor?academicYear=${this.year}`)
    this.name = resp.data.apt.aptName
    this.data = resp.data
    if(resp.data.schoolBudgetRecived >= 1){
      this.colorSC = 'accent'
    }
    if(resp.data.bobSubmissionDate != "ไม่มีข้อมูล"){
      this.colorBOB.value = 100
      this.colorBOB.color = 'accent'
      this.colorDLA.value = 100
    }
    if(resp.data.bobSubmissionDate == "ไม่มีข้อมูล"){
      resp.data.bobSubmissionDate = ''
    }
    if(resp.data.dlaAcceptedDate == false){
      resp.data.dlaAcceptedDate = ''
    }
    if(resp.data.dlaAcceptedDate != false){
      this.colorDLA.color = 'accent'
    }
    if(resp.data.aptAcceptedDate == false){
      resp.data.aptAcceptedDate = ''
    }
    if(resp.data.aptAcceptedDate != false){
      this.colorAPT.color = 'accent'
      this.colorAPT.value = 100
    }
    //console.log('data',this.data)
    //console.log('resp',resp.data)
    },
    computed: {
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
  padding: 1vh;
  
}
</style>
