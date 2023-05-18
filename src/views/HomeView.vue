<script setup>
import Planets from '../components/Planets.vue';
import Ellipse from '../components/Ellipse.vue';
import Menu from '../components/Menu.vue';
import LogoNasa from '../components/LogoNasa.vue';

</script>

<template>
  <div class="container">
    <div class="aside">
      <Planets />
    </div>
    
    <div class="main">
      <Ellipse class="container-ellipse" />
      <Menu class="container-menu" />
      <LogoNasa class="nasa"/>
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
    right: 6.9em;
    top: 3em;
  }

  .main {
    display: flex;
    flex-direction: row;
    justify-content: center;

    .container-ellipse {
      display: flex;
      justify-content: center;
      position: relative;
      right: 3.9em;
      top: 7.9em;
    }

    .container-menu {
      display: flex;
    }

    .nasa{
      position: relative;
      left: 7em;
      
    }
  }

}
</style>
