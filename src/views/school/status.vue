<template>
  <div id="status">
      <v-toolbar color="primary" dark height="60" class="">
      <v-btn icon @click="$router.push('/')"> <v-icon size="60">mdi-chevron-left</v-icon> </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title class="text-center"><h2>สถานการณ์งบฯที่จัดสรร</h2></v-toolbar-title>
      <v-spacer></v-spacer>
      </v-toolbar>
      <v-container class="primary">
          <v-row class="white--text" justify="space-around">
            <v-col cols="8">
                <v-progress-circular :rotate="-90" :size="80" :width="10" :value="value" color="accent"></v-progress-circular>
                <h3 class="d-inline ml-5">สำนักงบประมาณ</h3>
            </v-col>
            <v-col cols="7">
                <v-icon dark x-large>mdi-download</v-icon>
                <h4 class="d-inline ml-5">ส่ง : 30 ต.ค. 64</h4>
            </v-col>
            <v-col cols="8">
                <v-progress-circular :rotate="-90" :size="80" :width="10" :value="value" color="accent"></v-progress-circular>
                <h3 class="d-inline ml-5">กรมส่งเสริมฯ</h3>
            </v-col>
            <v-row justify="end">
            <v-col cols="7">
                <v-icon dark x-large>mdi-download</v-icon>
                <h4 class="d-inline ml-5">ส่ง : 30 ต.ค. 64</h4>
            </v-col>
            </v-row>
          </v-row>
          <v-row class="text-center white--text">
           <v-col cols="12">
                <v-progress-circular :rotate="-90" :size="80" :width="10" :value="value" color="accent"></v-progress-circular>
                <h3 class="mt-1">อปท. กำแพงเพชร</h3>
                <h3>รับ : 30 ต.ค. 64</h3>
            </v-col>
                <v-col cols="6">
                    <v-icon dark x-large>mdi-download</v-icon>
                </v-col>
                <v-col cols="6">
                    <v-icon dark x-large>mdi-download</v-icon>
                </v-col>
           <v-col cols="6">
                <v-progress-circular :rotate="-90" :size="80" :width="10" :value="50" color="accent"><h4> 50%</h4></v-progress-circular>
                <h3 class="mt-1">โรงเรียนในพื้นที่</h3>
                <h3>วันล่าสุด : 30 ต.ค. 64</h3>
            </v-col>
           <v-col cols="6">
                <v-progress-circular :rotate="-90" :size="80" :width="10" :value="50" color="accent"><h4> 50%</h4></v-progress-circular>
                <h3 class="mt-1">โรงเรียนของคุณ</h3>
                <h3>รับ : 30 ต.ค. 64</h3>
            </v-col>        
          </v-row>
      </v-container>
  </div>
</template>

<script>
export default {
    name:'status',
data: () => ({
    name: "โรงเรียน จ จาน",
    year: "2564",
    value: 100,
  }),
}
</script>

<style>

</style>