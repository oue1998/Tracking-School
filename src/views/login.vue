<template>
  <div id="login">
    <v-container class="primary">
      <v-row class="text-center justify-center white--text" align-content="center">
        <v-col cols="12 mt-15">
          <h1>เข้าสู่ระบบ</h1>
        </v-col>
        <v-card class="mx-auto pa-10">
          <v-container>
            <v-row>
              <v-col>
                <v-form>
            <v-text-field
              solo
              outlined
              v-model="log.username"
              name="username"
              label="Username"
              type="text"
            ></v-text-field>
            <v-text-field
              solo
              outlined
              v-model="log.password"
              id="password"
              name="password"
              label="Password"
              type="password"
            ></v-text-field>
          </v-form>
              </v-col>
            </v-row>
          </v-container>
          <v-btn color="primary" block dark @click="login"><h2>Login</h2></v-btn>
           <p v-if="showError" id="error">Username or Password is incorrect</p>
        </v-card>
        <v-col class="mb-10" cols="12"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "login",
  data: () => ({
    todu:true,
    log:
      {
        username:'',
        password:'',
      }
    ,
    showError: false,
    articleId:null,
    success:null,
    error:null
  }),
  methods:{
    async login(){
    try{
    const response = await axios.post("authentication/login",
    this.log);
    //console.log('data',response.data)
    this.showError=false
    // console.log("resp",response.data.role.role_name)
    if(response.status == 200){
      if(response.data.role.role_name == "apt"){
        this.$router.push({name:'home-LC'})
      }
      if(response.data.role.role_name == "school"){
        this.$router.push({name:'school'})
      }
      if(response.data.role.role_name == "dla"){
        this.$router.push({name:'home-DEPT'})
      }
      if(response.data.role.role_name == "bob"){
        this.$router.push({name:'bureau-BG'})
      }
      //  localStorage.setItem("user-info",JSON.stringify(response.data))
      // console.log('Login succeed',response.status)
    }
    }catch(error){
      console.log('error')
      this.showError=true
      this.log.username = ''
      this.log.password = ''
    }
    },
}
}
</script>

<style>
#login{
  background: #203E5F;
  height: 100vh;
}
</style>
