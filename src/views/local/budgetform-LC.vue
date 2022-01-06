<template>
  <div id="budgetform-LC">
    <headbar :datahead="datahead"/>
      <v-container>
        <v-row class="mt-5">
          <v-col cols="12" sm="6" md="3">
              <h4>โรงเรียน</h4>
              <v-text-field v-model="SCname" solo-inverted></v-text-field>
              <h4>ปีการศึกษา</h4>
              <v-text-field label="ปีการศึกษา" solo outlined  v-model="budget.academicYear" @change="showdata()"></v-text-field>
               <h4>จำนวนวัน</h4>
              <v-text-field v-model="dataRE.totalDays" solo-inverted></v-text-field>
              <h4>จำนวนนักเรียน</h4>
              <v-text-field v-model="dataRE.totalStudent" solo-inverted></v-text-field>
              <h4>เป็นงบประมาณ</h4>
              <v-text-field v-model="dataRE.totalRequestedBudget" solo-inverted></v-text-field>
              <h4>งบฯที่เคยจัดสรรไป</h4>
              <v-text-field v-model="dataRE.allocatedBudget" solo-inverted></v-text-field>
              <h4>คงเหลือ</h4>
              <v-text-field v-model="dataRE.revicedBudget" solo-inverted></v-text-field>
          </v-col>
        </v-row>
                <v-row class="text-center">
          <v-col cols="12">
              <h3>ข้อมูลการจัดสรรงบฯ</h3>
          </v-col>
        </v-row>
        <v-row>
            <v-col>
                <h4>ปีการศึกษา</h4>
                <v-text-field v-model="budget.academicYear" solo-inverted></v-text-field>
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  :nudge-right="30"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="dateRangeText"
                        label="ตั่งแต่-ถึง"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      
                      scrollable
                      range
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="menu = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(date)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                      <v-text-field label="รวมทั้งสิ้น" solo outlined v-model="budget.totalDays"></v-text-field>
                      <h4>จำนวนนักเรียน</h4>
                      <v-text-field label="งบประมาณทั้งสิ้น" v-model="budget.numberOfStudent" solo outlined></v-text-field>
                      <h4>งบประมาณทั้งสิ้น</h4>
                      <v-text-field label="งบประมาณทั้งสิ้น" v-model="budget.allocatedBudgetAmount" solo outlined></v-text-field>
                      <h4>วันที่คาดว่าจะได้รับ</h4>
                       <v-menu
                            v-model="menu2"
                            :close-on-content-click="false"
                            :nudge-right="30"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field
                                v-model="picker"
                                label="วันที่คาดว่าจะได้รับ"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker
                              v-model="picker"
                              @input="menu2 = false"
                            ></v-date-picker>
                        </v-menu>
                      <h4>วันที่บันทึก</h4>
                      <v-text-field v-model="todayTH" solo-inverted></v-text-field>
            </v-col>
        </v-row>
          <v-row justify="center">
            <v-col cols="4">
              <v-btn color="accent" class="black--text pa-5" @click="addBudget()"><h3>บันทึก</h3></v-btn>
            </v-col>
          </v-row>
      </v-container>
  </div>
</template>


<script>
import axios from 'axios'
import headbar from '@/components/headbar.vue'
export default {
name:'budgetform-LC',
components:{headbar},
data: () => ({
     dialog: false,
    datahead:{
      url: '/pick-LC',
      title:'บันทึกการจัดสรรงบฯ'
    },
    year: "2564",
    id:'',
    budget: {
    schoolId:null,
    academicYear : ((new Date()).getFullYear() + 543)-1,
    startDate : null,
    endDate :  null,
    budgetExpectedDate :  null,
    totalDays : null,
    numberOfStudent:null,
    allocatedBudgetAmount : null,
    submissionDate :  (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
    },
    date: [],
    menu: false,
    menu2: false,
    picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    dataRE:{},
    SCname:'',
    today:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
  }),
  computed: {
      dateRangeText () {
        return this.date.join(' ~ ')
      },
      todayTH(){
        return (new Date(this.today)).toLocaleDateString("th-TH", { timeZone: "UTC" })
      }
    },
    mounted () {
      //this.showdata()
  
    },
    created() {
      this.showdata()
    },
  methods:{
      showdata(){
        this.id = this.$route.params.id;
        axios.get(`summary/apt/school-budget-requested?academicYear=${this.budget.academicYear}&school=${this.id}`).then((resp) => {
        this.dataRE = resp.data
        this.SCname = resp.data.school.schoolName
        this.budget.schoolId = resp.data.school.schoolId
        //console.log(this.dataRE)
      })
      },
       dayTH(value){
        let day = (new Date(value)).toLocaleDateString("th-TH", { timeZone: "UTC" })
        return day
      },
      addBudget(){
        this.budget.schoolId = this.id
        this.budget.academicYear = parseInt(this.budget.academicYear),
        this.budget.startDate = this.date[0]
        this.budget.endDate = this.date[1]
        this.budget.budgetExpectedDate = this.picker
        this.budget.totalDays = parseInt(this.budget.totalDays)
        this.budget.allocatedBudgetAmount = parseInt( this.budget.allocatedBudgetAmount)
        this.budget.numberOfStudent = parseInt(this.budget.numberOfStudent)
        console.log('BG',this.budget)
        axios.post('apt-school-transaction',this.budget).then((resp) => {
      console.log(resp)
        if(resp.status == 201){
       this.$router.push({name:'pick-LC'})
        }
      })
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