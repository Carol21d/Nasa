<script setup>
import Planets from '../components/Planets.vue';
import Ellipse from '../components/Ellipse.vue';
import Menu from '../components/Menu.vue';
import LogoNasa from '../components/LogoNasa.vue';
import CardNasa from '../components/CardNasa.vue';
import { onMounted,ref } from 'vue';
import axios from 'axios';

const nasa_Key = 'yds1vF2MmbffnsvsoXVTwLdREgR16GUSChKQ1oaP';
const url = `https://api.nasa.gov/planetary/apod?api_key=${nasa_Key}`;

let datosNasa = ref([]);

onMounted(()  =>{
   axios.get(url)
   .then(response => {
   datosNasa.value =response.data;
   })

   .catch(error => {
        console.log(error);
   });
})

</script>
<template>
  <div class="container">
     <div class="aside">
      <!-- <Planets /> -->
    </div>
    
    <div class="main">
       <!-- <Ellipse class="container-ellipse" />
        <CardNasa  class="container-nasa"  :datosNasa="datosNasa"/> -->
       <Menu class="container-menu" /> 
      <!-- <LogoNasa class="nasa"/>  -->
    </div>
  </div>
</template>
<style lang="scss">

body{
  background: url('../assets/background.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
   -moz-background-size: cover;
   -o-background-size: cover;
   background-size: cover;
 
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;


  .aside {
    display: flex;
    position: relative; 
    right: .9em;
    top: 4.9em;
  }

  .main {
    display: flex;
    flex-direction: row;
    justify-content: center;

    .container-ellipse {
      display: flex;
      justify-content: center;
      position: relative;
      left: 15.9em;
      top: 7.9em;
    }

    .container-nasa{
      display: flex;
      justify-content: center;
      z-index: 1;
      position: relative;
      right: 14.9em;
      top: 11em;
    }

    .container-menu {
      display: flex;
    }

    .nasa{
      
      position: relative;
      left: 2em;
      
    }
  }

}







</style>
