<script setup>
import Planets from '../components/Planets.vue';
import Ellipse from '../components/Ellipse.vue';
import Menu from '../components/Menu.vue';
import LogoNasa from '../components/LogoNasa.vue';
import CardNasa from '../components/CardNasa.vue';
import { onMounted, ref } from 'vue';
import axios from 'axios';

const nasa_Key = 'yds1vF2MmbffnsvsoXVTwLdREgR16GUSChKQ1oaP';
const url = `https://api.nasa.gov/planetary/apod?api_key=${nasa_Key}`;

let datosNasa = ref([]);

onMounted(() => {
  axios.get(url)
    .then(response => {
      datosNasa.value = response.data;
    })

    .catch(error => {
      console.log(error);
    });
})

</script>
<template>
  <div>
    <!-- <h1>The Universe</h1> -->

  </div>
  <div class="container">
    <div class="aside">
      <Planets />
    </div>

    <div class="main">
      <Ellipse class="container-ellipse" />
        <CardNasa  class="container-nasa"  :datosNasa="datosNasa"/> 
        <LogoNasa class="nasa"/> 
      </div>
    </div>
    <Menu class="container-menu" />
</template>
<style lang="scss">
body {
  background: url('../assets/background.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

}

.container {
  display: flex;
  justify-content: space-evenly;



  .aside {
    display: flex;
    position: relative;
    right: 14em;
    top: 5.9em;
 
  }

  .main {
    display: flex;
    flex-direction: column;
    // justify-content: center;

    .container-ellipse {
      display: flex;
      justify-content: center;
      position: relative;
      left:-10.1em;
      top: 7.9em;
    }

    .container-nasa {
      display: flex;
      justify-content: center;
      z-index: 1;
      position: relative;
      right: 9.899999999999999em;
      top: -25em;
    }

    .container-menu {
      display: flex;
      flex-direction: row;
    }

    .nasa {

      position: absolute;
    right: 4em;
      

    }
  }

}

h1{
  font-size: 18px;
  text-align: justify;
  text-align: center;
  color: white;
}
</style>
