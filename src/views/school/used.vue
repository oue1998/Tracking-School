<template>
  <div id="used">
      <headbar :datahead="datahead"/>
      <v-container>
        <v-row class="text-center">
          <v-col cols="12">
              <h3>รายละเอียดโครงการ</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="3">
              <h4>โรงเรียน</h4>
              <v-text-field v-model="name" solo-inverted></v-text-field>
              <h4>ปีการศึกษา</h4>
              <v-text-field label="ปีการศึกษา" solo outlined v-model="year" @change="showdata()"></v-text-field>
              <v-text-field v-model="dataBG.totalDays" solo-inverted></v-text-field>
              <h4>จำนวนนักเรียน</h4>
              <v-text-field v-model="dataBG.totalStudent" solo-inverted></v-text-field>
              <h4>งบฯที่ได้รับ</h4>
              <v-text-field v-model="dataBG.revicedBudget" solo-inverted></v-text-field>
              <h4>งบที่ใช้</h4>
              <v-text-field label="งบที่ใช้" solo outlined v-model="dataUse.budgetUsed"></v-text-field>
          </v-col>
          <v-row justify="center">
            <v-col cols="4">
              <v-btn color="accent" class="black--text pa-5" @click="addbudgetUse()"><h3>บันทึก</h3></v-btn>
            </v-col>
          </v-row>
        </v-row>
      </v-container>
  </div>
</template>


<script>
import axios from 'axios'
import headbar from '@/components/headbar.vue'
export default {
name:'used',
components:{headbar},
data: () => ({
    datahead:{
      url: '/school',
      title:'บันทึกโครงการที่ขอ'
    },
    dialog: false,
    year: ((new Date()).getFullYear()+543)-1,
    name:null,
    // student: 100,
    // day: 200,
    // budget: 0,
    //have: '800,000',
    dataBG:{},
    dataUse:{
    academicYear : null,
    totalDays : null,
    reportedDate : (new Date()).toISOString(),
    numberOfStudent : null,
    budgetRecived : null,
    budgetUsed : null
    },
  }),
  created() {
    this.showdata()
  },
  computed: {
    },
  methods:{
    showdata(){
      axios.get(`/summary/school/academic-year-budget-allocated?academicYear=${this.year}`).then((resp) => {
        this.dataBG = resp.data
        this.name = resp.data.school.schoolName
        //console.log(this.dataBG)
      })
    },
     addbudgetUse(){
       this.dataUse.academicYear = parseInt(this.year)
       this.dataUse.totalDays = parseInt(this.dataBG.totalDays)
       this.dataUse.numberOfStudent = parseInt(this.dataBG.totalStudent)
       this.dataUse.budgetRecived = parseInt(this.dataBG.revicedBudget)
       this.dataUse.budgetUsed = parseInt( this.dataUse.budgetUsed)
       console.log('this.dataUse',this.dataUse)
        axios.post('school-budget-used',this.dataUse).then((resp) => {
        if(resp.status == 201){
        this.$router.push({name:'school'})
        console.log('yesss')
        }
      })
      },
      
},

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
h4{
    font-size: 18px;
    font-weight: 400;
    color: black; 
}
</style>