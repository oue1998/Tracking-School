<template>
  <div id="headbar">
      <v-toolbar color="primary" dark height="120">
      <v-btn icon @click="$router.push(datahead.url)" class="mt-2"> <v-icon size="60">mdi-chevron-left</v-icon> </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title class="text-center"><h2>{{ nameUser }} <br>{{datahead.title}}</h2></v-toolbar-title>
      <v-spacer></v-spacer>
  </v-toolbar>
  </div>
</template>

<script>
import axios from 'axios'
export default {
name:'headbar',
props:['datahead'],
data() {
    return {
        nameUser:''
    }
},
async mounted () {
      await axios.get('authentication/profile').then((resp) => {
      if(resp.data.user.role.role_name == "apt"){
        this.nameUser = resp.data.aptUser.apt.aptName
      }
      if(resp.data.user.role.role_name == "school"){
        this.nameUser = resp.data.schoolUser.school.schoolName
      }
      })
    },
}
</script>

<style>
h2{
  font-size: 24px;
}
</style>