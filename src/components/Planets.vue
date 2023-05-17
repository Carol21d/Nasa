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
    <!-- <div class="planets">
        <ul class="lista">
            <li :class="AnimationTimeline" v-for="planet in planets" :key="planets.name">{{ planet.name }}</li>
        </ul>
    </div> -->



    <ol class="timeline">
        <li class="timeline-item">
            <span class="timeline-item-icon | avatar-icon">
                <i class="avatar">
                    <img src="https://assets.codepen.io/285131/hat-man.png" />
                </i>
            </span>

        </li>

        <li class="timeline-item">
            <span class="timeline-item-icon | avatar-icon">
                <i class="avatar">
                    <img src="https://assets.codepen.io/285131/hat-man.png" />
                </i>
            </span>

        </li>
        <li class="timeline-item">
            <span class="timeline-item-icon | avatar-icon">
                <i class="avatar">
                    <img src="https://assets.codepen.io/285131/hat-man.png" />
                </i>
            </span>

        </li>
        <li class="timeline-item">
            <span class="timeline-item-icon | avatar-icon">
                <i class="avatar">
                    <img src="https://assets.codepen.io/285131/hat-man.png" />
                </i>
            </span>

        </li>
        <li class="timeline-item">
            <span class="timeline-item-icon | avatar-icon">
                <i class="avatar">
                    <img src="https://assets.codepen.io/285131/hat-man.png" />
                </i>
            </span>

        </li>
        <li class="timeline-item">
            <span class="timeline-item-icon | avatar-icon">
                <i class="avatar">
                    <img src="https://assets.codepen.io/285131/hat-man.png" />
                </i>
            </span>

        </li>
        <li class="timeline-item">
            <span class="timeline-item-icon | avatar-icon">
                <i class="avatar">
                    <img src="https://assets.codepen.io/285131/hat-man.png" />
                </i>
            </span>

        </li>
        <li class="timeline-item">
            <span class="timeline-item-icon | avatar-icon">
                <i class="avatar">
                    <img src="https://assets.codepen.io/285131/hat-man.png" />
                </i>
            </span>

        </li>
        Ñ<li class="timeline-item">
            <span class="timeline-item-icon | avatar-icon">
                <i class="avatar">
                    <img src="https://assets.codepen.io/285131/hat-man.png" />
                </i>
            </span>

        </li>

    </ol>
</template>
  
  
<style lang="scss" scoped>
//  .planets{

//     display: flex;
//     gap: 2px;
//     margin: 4px;

//     .lista{

//         display:flex;
//         justify-content: center;
//         flex-direction: column;


//         .enume{
//             color:rebeccapurple;
//             width: 4px;
//         }
//     }
//  }




*,
*:before,
*:after {
    box-sizing: border-box;
}



body {
    line-height: 1.5;
    min-height: 100vh;
    font-family: "Outfit", sans-serif;
    padding-top: 20vh;
    padding-bottom: 20vh;
}





img {
    display: block;
    max-width: 100%;
}



.timeline {
    width: 85%;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    padding: 32px 0 32px 32px;
    border-left: 2px solid rgb(0, 0, 0);
    font-size: 1.125rem;
}

.timeline-item {
    display: flex;
    gap: 24px;

    &+* {
        margin-top: 24px;
    }

    &+.extra-space {
        margin-top: 48px;
    }
}



.timeline-item-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: -52px;
    flex-shrink: 0;
    overflow: hidden;
    box-shadow: 0 0 0 6px #fff;

    svg {
        width: 20px;
        height: 20px;
    }

    &.faded-icon {
        background-color: var(--c-grey-100);
        color: var(--c-grey-400);
    }

    &.filled-icon {
        background-color: var(--c-blue-500);
        color: #fff;
    }
}



.avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    flex-shrink: 0;
    width: 40px;
    height: 40px;

    img {
        object-fit: cover;
    }
}
</style>
  
