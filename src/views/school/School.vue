<template>
  <div id="school">
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
          <v-progress-circular
            :rotate="-90"
            :size="200"
            :width="20"
            :value="value"
            color="accent"
          >
          <h1> {{ value }}%</h1>
          </v-progress-circular>
          <h3 class="mb-5">ปีการศึกษา : {{ year }}</h3>
          <h3 class="d-inline mr-2">นักเรียน : {{ student }} คน</h3>
          <h3 class="d-inline ml-2">สำหรับ : {{ day }} วัน</h3>
          <h3>เป็นงบประมาณ : {{ budget }} บาท</h3>
          <h3 class="mb-5">เป็นงบประมาณ : {{ budget }} บาท</h3>
        </v-col>
      </v-row>
      <v-row class="text-center ">
          <v-col cols="12 pa-0">
            <div class="pa-5 white rounded-t-pill"></div>
          </v-col>
          <v-col class="white">
                <v-btn block v-for="list in lists" :key="list.name" :color="list.color" class="mb-5 black--text" @click="$router.push(list.route)"><h4>{{list.name}}</h4></v-btn>
                <v-btn block color="#B32208" dark class="mb-5 mt-10" @click="$router.push('/school')"><h4>แจ้งสถานการณ์</h4></v-btn> -->
          </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "school",
  data: () => ({
    name: "โรงเรียน จ จาน",
    year: "2564",
    student: 100,
    day: 200,
    budget: 0,
    have: 0,
    interval: {},
    value: 0,
    lists:[
      {name:"บันทึกโครงการที่ขอไป",color:"#EDEAE4",route:"/project"},
      {name:"รายการงบฯที่ได้รับ",color:"#EDEAE4",route:"/budget"},
      {name:"สถานการณ์งบที่จัดสรร",color:"#EDEAE4",route:"/status"},
      {name:"แจ้งงบที่ใช้",color:"#EDEAE4",route:"/used"}
    ],
  }),
  beforeDestroy () {
      clearInterval(this.interval)
    },
  mounted () {
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0)
        }
        this.value += 10
      }, 1000)
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
