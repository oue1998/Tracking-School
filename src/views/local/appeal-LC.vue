<template>
  <div id="appeal-LC">
      <headbar :datahead="datahead"/>
      <v-container>
        <v-row class="text-center">
          <v-col cols="12" class="mt-5">
              <h3>รายการร้องเรียน</h3>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
import headbar from '@/components/headbar.vue'
export default {
name:'appeal-LC',
components:{headbar},
data: () => ({
    datahead:{
      url: '//home-LC',
      title:'รายการร้องเรียนที่ได้รับ'
    },
  }),

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