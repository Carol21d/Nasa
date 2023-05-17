<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Planets from './components/Planets.vue';
import Ellipse from './components/Ellipse.vue'
</script>

<template>
  <!-- <Planets/> -->
 <Ellipse/>
  <RouterView />
</template>

<style scoped></style>
