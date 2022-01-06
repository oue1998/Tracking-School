<template>
  <div id="pick-LC">
    <headbar :datahead="datahead"/>
    <v-container class="primary hidden-md-and-up">
      <v-row class="text-center white--text" align-content="center">
             <v-col cols="12">
               <v-progress-circular :rotate="-90" :size="200" :width="15" :value="dataBudget.schoolInAreaBudgetRecivedPercent" color="accent"><h1>{{Math.round(dataBudget.schoolInAreaBudgetRecivedPercent)}}%</h1></v-progress-circular>
           </v-col>
          <v-col>
          <h3 class="mb-5">ปีการศึกษา : {{ year }}</h3>
          <h3>งบประมาณทั้งสิ้น : {{ dataBudget.totalBudgetAptRecived }} บาท</h3>
          <h3 class="mb-5">ยืนยันได้รับงบฯแล้ว : {{ dataBudget.schoolBudgetRecived }} บาท</h3>
          </v-col>
      </v-row>
      <v-row class="menu">
          <v-col class="white">
               <div class="pa-1 white rounded-t-pill"></div>
          </v-col>
      </v-row>
      <v-row class="text-center">
          <v-col class="white">
              <v-btn v-for="statu in status" :key="statu.name" :color="statu.color" class="ml-1 mr-1 mb-5 pa-2 black--text" @click="$router.push(statu.route)"><h5>{{statu.name}}</h5></v-btn>
                <v-btn block v-for="list in lists" :key="list.schoolId" :color="colorbutton(list.status)" class="black--text" @click="$router.push(`/budget-LC/${list.schoolId}/${list.schoolName}`)"><h4>{{list.schoolName}}</h4></v-btn>
          </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import headbar from '@/components/headbar.vue'
import axios from 'axios'
export default {
  name: "pick-LC",
  components:{headbar},
  data: () => ({
    datahead:{
      url: '/home-LC',
      title:null
    },
    year: "2564",
    budget: '0',
    have: 0,
    value: 0,
    status:[
      {name:"ทั้งหมด",color:"press",route:"#"},
      {name:"รอยืนยัน",color:"wait",route:"#"},
      {name:"ยืนยันแล้ว",color:"accent",route:"#"},
      {name:"เสร็จสิ้น",color:"full",route:"#"},
    ],
    // ex:[
    //   {name:"โรงเรียน ก ไก่",status:"pending"},
    //   {name:"โรงเรียน ข ไข่",status:"accepted"},
    //   {name:"โรงเรียน ค ควาย",status:"accepted"},
    //   {name:"โรงเรียน จ จาน",status:"accepted"},
    // ],
    lists:[],
    dataBudget:{},

  }),
    created() {
      this.getdataBudget()
    },
    methods:{
    colorbutton(value){
      if(value == "pending"){
           return "wait"
          }
          if(value == "accepted"){
            return "accent"
          }
          if(value == "complete"){
            return "full"
          }
    },
    getdataBudget(){
      axios.get('/summary/apt/school-budget-status?academicYear=2564').then((resp) => {
        this.lists = resp.data
        //console.log(this.lists)
      }),
      axios.get(`summary/apt/monitor?academicYear=${this.year}`).then((resp) => {
        this.dataBudget = resp.data
        //console.log('dataBudget',this.dataBudget)
      })
    }
  }
};
</script>
<style scoped>
h1{
  font-size: 50px;
}
h2{
    font-size: 20px;
}
h3 {
  font-weight: 400;
  margin-top: 15px;
}
h4{
  font-size: 18px;
  font-weight: 300;

}
h5{
    font-size: 15px;
    font-weight: 400;
}
.menu{
  background: white;
  border-radius: 30px 30px 0px 0px;
  padding: 1vh;
  
}
</style>
