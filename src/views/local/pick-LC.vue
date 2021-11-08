<template>
  <div id="pick-LC">
    <v-container class="primary hidden-md-and-up">
      <v-row class="white--text justify-start">
        <v-col cols="2">
          <v-btn icon @click="$router.push('/home-LC')" class="mt-2 white--text"> <v-icon size="60">mdi-chevron-left</v-icon> </v-btn>
        </v-col>
      </v-row>
      <v-row class="text-center white--text">
        <v-col cols="12">
          <h2 class="mb-5">{{ name }}</h2>
        </v-col>
      </v-row>
      <v-row class="text-center white--text" align-content="center">
             <v-col cols="12">
               <v-progress-circular :rotate="-90" :size="200" :width="15" :value="value" color="accent"><h1>{{value}}%</h1></v-progress-circular>
           </v-col>
          <v-col>
          <h3 class="mb-5">ปีการศึกษา : {{ year }}</h3>
          <h3>งบประมาณทั้งสิ้น : {{ budget }} บาท</h3>
          <h3 class="mb-5">ยืนยันได้รับงบฯแล้ว : {{ have }} บาท</h3>
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
                <v-btn block v-for="list in lists" :key="list.name" :color="list.color" class="black--text" @click="$router.push(list.route)"><h4>{{list.name}}</h4></v-btn>
          </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "pick-LC",
  data: () => ({
    name: "อปท. กำแพงเพชร",
    year: "2564",
    budget: '0',
    have: 0,
    value: 0,
    status:[
      {name:"ทั้งหมด",color:"press",route:""},
      {name:"รอยืนยัน",color:"wait",route:""},
      {name:"ยืนยันแล้ว",color:"accent",route:""},
      {name:"เสร็จสิ้น",color:"full",route:""},
    ],
    lists:[
      {name:"โรงเรียน ก ไก่",color:"wait",route:""},
      {name:"โรงเรียน ข ไข่",color:"accent",route:""},
      {name:"โรงเรียน ค ควาย",color:"full",route:""},
      {name:"โรงเรียน จ จาน",color:"press",route:"/budget-LC"},
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
