<template>
  <div id="project">
       <headbar :datahead="datahead"/>
      <v-container>
        <v-row class="text-center mt-3">
          <v-col cols="12">
              <h3>รายการโครงการที่ขอไป</h3>
          </v-col>
        </v-row>
        <v-row class="justify-end mr-1">
            <v-btn text class="primary--text" @click="$router.push('/projectform')">
            <v-icon left large class="mr-3">mdi-plus-circle-outline</v-icon>
            <h3>เพิ่มรายการ</h3>
            </v-btn>
        </v-row>
        <v-row>
          <v-col cols="12">
          <v-card class="mx-auto ma-5 pa-5" max-width="344" v-for="dataPro in dataPro" :key="dataPro.id">
            <v-row>
            <v-col>
            <div class="text-h6 black--text"> ปีการศึกษา : {{dataPro.academicYear}} </div>
            <div class="text-h6 black--text"> โรงเรียน : {{dataPro.school.schoolName}} </div>
            <div class="text-h6 black--text"> จำนวนนักเรียน : {{dataPro.numberOfStudent}} คน </div>
            <div class="text-h6 black--text"> จำนวนวัน : {{dataPro.totalDays}} วัน </div>
            <div class="text-h6 black--text"> เป็นงบประมาณ : {{dataPro.budgetAmount}} </div>
            <div class="text-h6 black--text"> วันที่บันทึก : {{dayTH(dataPro.recordedDate)}} </div>
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
name:'project',
components:{headbar},
data: () => ({
    name: '',
    year: "2564",
    dataPro:[],
    datahead:{
      url: '/school',
      title:'บันทึกโครงการที่ขอ'
    },
  }),
  mounted () {
     this.showPro()
  
    },
    computed: {
      reverseddataPro(){
        return this.dataPro.slice().reverse()
      },
    },
  methods:{
      async showPro(){
        let resp = await axios.get('/school-budget-requested')
        this.dataPro = resp.data
      },
       dayTH(value){
        let a = new Date(value)
        this.day = a.toLocaleDateString("th-TH", { timeZone: "UTC" })
        return this.day
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