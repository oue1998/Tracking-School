<template>
  <div id="budgetform-DEPT">
      <v-toolbar color="primary" dark height="120" class="">
      <v-btn icon @click="$router.push(`/budget-DEPT/${id}`)" class="mt-5"> <v-icon size="60">mdi-chevron-left</v-icon> </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title class="text-center mt-5"><h2>{{ name }} <br>บันทึกการจัดสรรงบฯ</h2></v-toolbar-title>
      <v-spacer></v-spacer>
      </v-toolbar>
      <v-container>
        <v-row class="mt-5">
          <v-col cols="12" sm="6" md="3">
              <h4>หน่วยงาน</h4>
              <v-text-field v-model="aptName" solo-inverted></v-text-field>
              <h4>ปีการศึกษา</h4>
              <v-text-field label="ปีการศึกษา" solo outlined  v-model="budget.academicYear" @change="showdata()"></v-text-field>
               <h4>จำนวนวัน</h4>
              <v-text-field v-model="dataRE.totalDays" solo-inverted></v-text-field>
              <h4>จำนวนนักเรียน</h4>
              <v-text-field v-model="dataRE.totalStudent" solo-inverted></v-text-field>
              <h4>เป็นงบประมาณ</h4>
              <v-text-field v-model="dataRE.totalBudgetRequested" solo-inverted></v-text-field>
              <h4>งบฯที่เคยจัดสรรไป</h4>
              <v-text-field v-model="dataRE.totalAllocatedBudget" solo-inverted></v-text-field>
              <h4>คงเหลือ</h4>
              <v-text-field v-model="dataRE.remainingAllocatedBudget" solo-inverted></v-text-field>
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
                      <v-text-field label="เป็นจำนวนวันทั้งหมด" solo outlined  v-model="budget.totalDays"></v-text-field>
                      <h4>งบประมาณทั้งสิ้น</h4>
                        <v-text-field label="งบประมาณทั้งสิ้น" solo outlined v-model="budget.allocatedBudgetAmount"></v-text-field>
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
export default {
name:'budgetform-DEPT',
data: () => ({
     dialog: false,
    name: "กรมส่งเสริมการปกครอง",
    id:'',
    year: "2564",
    day: 200,
    date: [],
    menu: false,
    menu2: false,
    picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    aptName:'',
    dataRE:{},
    today:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    budget: {
    aptId:null,
    academicYear : ((new Date()).getFullYear() + 543)-1,
    startDate : null,
    endDate :  null,
    budgetExpectedDate :  null,
    totalDays : null,
    allocatedBudgetAmount : null,
    submissionDate :  (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
    },
  }),
  computed: {
      dateRangeText () {
        return this.date.join(' ~ ')
      },
      todayTH(){
        return (new Date(this.today)).toLocaleDateString("th-TH", { timeZone: "UTC" })
      }
    },
  created() {
      this.id = this.$route.params.id;
      this.aptName = this.$route.params.name;
      this.showdata()
    },
  methods:{
      showdata(){
        axios.get(`summary/dla/apt-budget-requested?academicYear=${this.budget.academicYear}&aptId=${this.id}`).then((resp) => {
        this.dataRE = resp.data
      })
      },
       dayTH(value){
        let day = (new Date(value)).toLocaleDateString("th-TH", { timeZone: "UTC" })
        return day
      },
      addBudget(){
        this.budget.aptId = this.id
        this.budget.academicYear = parseInt(this.budget.academicYear),
        this.budget.startDate = this.date[0]
        this.budget.endDate = this.date[1]
        this.budget.budgetExpectedDate = this.picker
        this.budget.totalDays = parseInt(this.budget.totalDays)
        this.budget.allocatedBudgetAmount = parseInt( this.budget.allocatedBudgetAmount)
        console.log('BG',this.budget)
        axios.post('dla-apt-transaction',this.budget).then((resp) => {
      console.log(resp)
        if(resp.status == 201){
       this.$router.push({name:`/budget-DEPT/${this.id}`})
        }
      })
      },

}

}
</script>

<style>
h2{
    font-size: 22px;
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