<template>
  <div id="projectform">
    <headbar :datahead="datahead"/>
      <v-container>
        <v-row class="text-center">
          <v-col cols="12">
              <h3>รายละเอียดโครงการที่ขอ</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="3">
              <h4>โรงเรียน</h4>
              <v-text-field v-model="name" solo-inverted></v-text-field>
              <h4>ปีการศึกษา</h4>
               <!-- <v-select :items="items" label="ปีการศึกษา" outlined v-model="dataPro.academicYear"></v-select> -->
               <v-text-field label="ปีการศึกษา" solo outlined v-model="dataPro.academicYear"></v-text-field>
              <v-menu
              ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="auto">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="dateRangeText" label="ตั่งแต่-ถึง" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                </template>
                <v-date-picker v-model="date" scrollable range>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.menu.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
              <v-text-field label="รวม" solo outlined v-model="day"></v-text-field>
              <h4>จำนวนนักเรียน</h4>
              <v-text-field label="จำนวนนักเรียน" solo outlined v-model="student"></v-text-field>
              <h4>เป็นงบประมาณ</h4>
              <v-text-field label="บาท/คน" solo outlined v-model="bath"></v-text-field>
              <v-text-field label="รวม" solo outlined v-model="totalbudget"></v-text-field>
              <h4>วันที่บันทึก</h4>
              <v-text-field v-model="today" solo-inverted></v-text-field>
          </v-col>
          <v-row justify="center">
            <v-col cols="4">
              <v-btn color="accent" class="black--text pa-5" @click="addProject"><h3>บันทึก</h3></v-btn>
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
name:'projectform',
components:{headbar},
data: () => ({
     dialog: false,
    datahead:{
      url: '/project',
      title:'บันทึกโครงการที่ขอ'
    },
    name: "",
    year: null,
    student: null,
    day: null,
    bath: null,
    budget:null,
    today:(new Date()).toLocaleDateString("th-TH", { timeZone: "UTC" }),
    // have: 0,
    // items: ['2563', '2564', '2565', '2566'],
    date: [],
    menu: false,
    dataPro:{
      documentNumber : '2564/1023',
      academicYear : '',
      startDate : '',
      endDate : '',
      numberOfStudent : null,
      recordedDate : (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      budgetAmount : null,
      totalDays:null,
      budgetRate : null,
      budgetRatePerStudent : 21.50
    },
          // document_number : "2564/1023",
      // academicYear : '',
      // startDate : '',
      // endDate : '',
      // numberOfStudent : '',
      // recordedDate : ''
  }),
    async mounted () {
      await axios.get('authentication/profile').then((resp) => {
        let SC = resp.data.schoolUser.school
        //console.log(SC.schoolName)
        this.name = SC.schoolName
      })
    },
  computed: {
      dateRangeText () {
        return this.date.join(' - ')
      },
      totalbudget () {
        return (parseInt(this.student)*parseInt(this.bath))*parseInt(this.day)
      },
    },
  methods:{
      //async 
      addProject(){
        this.dataPro.startDate = this.date[0]
        this.dataPro.endDate = this.date[1]
        this.dataPro.numberOfStudent = parseInt(this.student)
        this.dataPro.totalDays = parseInt(this.day)
        this.dataPro.budgetRate = parseInt(this.bath)
        this.dataPro.budgetAmount = this.totalbudget
        axios.post('/school-budget-requested',this.dataPro).then((resp) => {
        //console.log(resp)
        //console.log('this.dataPro.totalDays',this.dataPro.totalDays)
        if(resp.status == 201){
       this.$router.push({name:'project'})
    }
      })
      // console.log('budgetAmount',this.dataPro.budgetAmount)
      //console.log('dataPro',this.dataPro)
      },
      
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
h4{
    font-size: 18px;
    font-weight: 400;
    color: black; 
}
</style>