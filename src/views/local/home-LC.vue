<template>
  <div id="home-LC">
    <v-container class="primary hidden-md-and-up">
      <v-row class="white--text justify-end mr-1">
        <v-col cols="2">
          <v-btn dark text @click="$router.push('/')">
            <v-icon>mdi-power</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="text-center white--text">
        <v-col cols="12">
          <h2 class="mb-5">{{ name }}</h2>
        </v-col>
      </v-row>
      <v-row class="ml-5 white--text" align-content="center" v-for="statu in status" :key="statu.name">
           <v-col cols="3">
               <v-progress-circular :rotate="-90" :size="60" :width="7" :value="statu.value" :color="statu.color"></v-progress-circular>
           </v-col>
           <v-col cols="9">
               <h3 class="ma-0 pa-0">{{statu.name}}</h3>
               <h3 class="ma-0 pa-0">รับ : {{statu.get}}</h3>
           </v-col>
           <v-col cols="12" class="ml-2">
                <v-icon dark x-large>mdi-arrow-down</v-icon>
                <h4 class="d-inline ml-5">ส่ง : {{statu.send}}</h4>
            </v-col>
      </v-row>
      <v-row class="ml-5 white--text" align-content="center">
             <v-col cols="4">
               <v-progress-circular :rotate="-90" :size="100" :width="8" :value="0" color="white">{{0}}%</v-progress-circular>
           </v-col>
           <v-col cols="8">
               <h3 class="mt-5">โรงเรียนและศูนย์เด็กเล็ก</h3>
               <h3 class="ma-0 pa-0">ว / ด / ป</h3>
           </v-col>
        </v-row>
      <v-row class="text-center white--text">
          <v-col>
          <h3 class="mb-5">ปีการศึกษา : {{ year }}</h3>
          <h3>งบประมาณทั้งสิ้น : {{ budget }} บาท</h3>
          <h3 class="mb-5">ยืนยันได้รับงบฯแล้ว : {{ budget }} บาท</h3>
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
export default {
  name: "home-LC",
  data: () => ({
    name: "อปท. กำแพงเพชร",
    year: "2564",
    budget: '0',
    have: 0,
    value: 100,
    lists:[
      {name:"บันทึกการจัดสรรงบฯ",color:"#EDEAE4",route:"/pick-LC"},
      {name:"รายการงบฯที่ได้รับ",color:"#EDEAE4",route:"/confirmBG-LC"},
      {name:"รายการโครงการที่ได้รับ",color:"#EDEAE4",route:"/project-LC"},
      {name:"การร้องเรียนที่ได้รับ",color:"#EDEAE4",route:"/appeal-LC"},
    ],
    status:[
      {name:"สำนักงบ",send:"30 ต.ค. 64",get:"-",value:'100',color:'accent'},
      {name:"กรมส่งเสริมการปกครอง",send:"1 พ.ย. 64",get:"31 ต.ค. 64",value:'100',color:'accent'},
      {name:"อปท",send:"",get:"3 พ.ย. 64",value:'100',color:'accent'},
    ],
  }),
  beforeDestroy () {
    },
  mounted () {
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
