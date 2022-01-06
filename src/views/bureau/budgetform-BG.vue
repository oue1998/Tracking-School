<template>
  <div id="budgetform-BG">
      <v-toolbar color="primary" dark height="120" class="">
      <v-btn icon @click="$router.push('/budget-BG')" class="mt-5"> <v-icon size="60">mdi-chevron-left</v-icon> </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title class="text-center mt-5"><h2>สำนักงบ <br>บันทึกการจัดสรรงบฯ</h2></v-toolbar-title>
      <v-spacer></v-spacer>
      </v-toolbar>
      <v-container>
        <v-row class="mt-5">
          <v-col cols="12" sm="6" md="3">
              <h4>หน่วยงาน</h4>
              <v-text-field v-model="name" solo-inverted></v-text-field>
              <h4>ปีการศึกษา</h4>
               <v-text-field label="ปีการศึกษา" solo outlined  v-model="budget.academicYear" @change="showdata()"></v-text-field>
              <h4>จำนวนนักเรียน</h4>
              <v-text-field v-model="dataRE.totalStudents" solo-inverted></v-text-field>
              <h4>เป็นงบประมาณ</h4>
              <v-text-field v-model="dataRE.totalBudgetRequested" solo-inverted></v-text-field>
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
                                v-model="pickerTH"
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
export default {
name:'budgetform-BG',
data: () => ({
     dialog: false,
    name: "กรมส่งเสริมการปกครองส่วนท้องถิ่น",
    today:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    budget: {
    academicYear : (new Date()).getFullYear() + 543,
    startDate : null,
    endDate :  null,
    budgetExpectedDate :  null,
    totalDays : null,
    allocatedBudgetAmount : null,
    submissionDate :  (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
    },
    date: [],
    menu: false,
    menu2: false,
    picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    dataRE:{}
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
      this.showdata()
  
    },
  methods:{
      showdata(){
        axios.get(`summary/bob/budget-requested?academicYear=${this.budget.academicYear}`).then((resp) => {
        this.dataRE = resp.data
        console.log(this.dataRE)
      })
      },
       dayTH(value){
        let day = (new Date(value)).toLocaleDateString("th-TH", { timeZone: "UTC" })
        return day
      },
      addBudget(){
        this.budget.academicYear = parseInt(this.budget.academicYear),
        this.budget.startDate = this.date[0]
        this.budget.endDate = this.date[1]
        this.budget.budgetExpectedDate = this.picker
        this.budget.totalDays = parseInt(this.budget.totalDays)
        this.budget.allocatedBudgetAmount = parseInt( this.budget.allocatedBudgetAmount)
        console.log('BG',this.budget)
        axios.post('bob-dla-transaction',this.budget).then((resp) => {
      //console.log(resp)
        if(resp.status == 201){
       this.$router.push({name:'budget-BG'})
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