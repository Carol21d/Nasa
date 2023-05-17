<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    planets: {
        type: Array,
        default: () => [

            { name: "Mercurio" },
            { name: "Venus" },
            { name: "Tierra" },
            { name: "Marte" },
            { name: "Júpiter" },
            { name: "Saturno" },
            { name: "Urano" },
            { name: "Neptuno" },
        ],

    },
});






</script>
<template>
    <div class="planets">
        <ul>
            <li v-for="planet in planets" :key="planets.name">{{ planet.name }}</li>
        </ul>
    </div>
</template>
  
  
<style lang="scss" scoped></style>
  
