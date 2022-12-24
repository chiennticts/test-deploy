<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{success}}</h1>
  <button @click="getTestApi">check</button>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
 
  data(){
    return {
     success:false
    }
  },
  methods: {
    async getTestApi(){
      const data= await axios.get("/test",{baseURL:process.env.VUE_APP_SERVER_URL})
      this.success = data.data.success
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
