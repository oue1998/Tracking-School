<template>
  <div id="budgetform-BG">
      <v-toolbar color="primary" dark height="120" class="">
      <v-btn icon @click="$router.push('/budget-BG')" class="mt-5"> <v-icon size="60">mdi-chevron-left</v-icon> </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title class="text-center mt-5"><h2>{{ name }} <br>บันทึกการจัดสรรงบฯ</h2></v-toolbar-title>
      <v-spacer></v-spacer>
      </v-toolbar>
      <v-container>
        <v-row class="mt-5">
          <v-col cols="12" sm="6" md="3">
              <h4>หน่วยงาน</h4>
              <v-banner color="press" class="mb-5">กรมส่งเสริมการปกครองส่วนท้องถิ่น</v-banner>
              <h4>ปีการศึกษา</h4>
               <v-select :items="items" label="ปีการศึกษา" outlined></v-select>
               <h4>จำนวนวัน</h4>
              <v-banner color="press" class="mb-5">14 มิ.ย. 64 - 31 มี.ค. 65</v-banner>
              <v-banner color="press" class="mb-5">{{day}}</v-banner>
              <h4>จำนวนนักเรียน</h4>
              <v-banner color="press" class="mb-5">4,296,000 คน</v-banner>
              <h4>เป็นงบประมาณ</h4>
              <v-banner color="press" class="mb-5">17,184,000,000 บาท</v-banner>
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
                <v-banner color="press" class="mb-5">พ.ศ. 2564</v-banner>
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
                      <v-banner color="press" class="mb-5">{{day}}</v-banner>
                      <h4>งบประมาณทั้งสิ้น</h4>
                        <v-text-field label="งบประมาณทั้งสิ้น" solo outlined></v-text-field>
                      <h4>วันที่ส่งงบฯ</h4>
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
                                label="วันที่ส่งงบฯ"
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
            </v-col>
        </v-row>
          <v-row justify="center">
            <v-col cols="4">
              <v-btn color="accent" class="black--text pa-5"><h3>บันทึก</h3></v-btn>
            </v-col>
          </v-row>
      </v-container>
  </div>
</template>


<script>
export default {
name:'budgetform-BG',
data: () => ({
     dialog: false,
    name: "สำนักงบประมาณ",
    year: "2564",
    student: 100,
    day: 200,
    budget: 0,
    have: 0,
    items: ['2563', '2564', '2565', '2566'],
    units:['กรมส่งเสริมการปกครองส่วนท้องถิ่น','สถ'],
    date: [],
    menu: false,
    menu2: false,
    picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
  }),
  computed: {
      dateRangeText () {
        return this.date.join(' ~ ')
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