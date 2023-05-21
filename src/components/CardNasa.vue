<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    datosNasa: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <div class="container">
        <div class="card">
            <p>{{ datosNasa.copyright }}</p>
            <p>{{ datosNasa.date }}</p>
            <p>{{ datosNasa.explanation }}</p>
            <div class="card_image"></div>
        </div>
    </div>
</template>

<style lang="scss">
.card {
    margin: 30px auto;
    width: 400px;
    height: 420px;
    border-radius: 40px;
    box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25), -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
    cursor: pointer;
    transition: 0.4s;
    background-color: black;


    .card_image {
        width: inherit;
        height: inherit;
        border-radius: 40px;


        img {
            width: inherit;
            height: inherit;
            border-radius: 40px;
            object-fit: cover;
        }
    }

    .card_title {
        text-align: center;
        border-radius: 0px 0px 40px 40px;
        font-family: sans-serif;
        font-weight: bold;
        font-size: 30px;
        margin-top: -80px;
        height: 40px;
    }


    &:hover {
        transform: scale(0.9, 0.9);
        box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
            -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
    }
}

p {
    color: white;
    margin: 1em;
}
</style>

            
      

        
