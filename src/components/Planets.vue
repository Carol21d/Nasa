<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
    planets: {
        type: Array,
        default: () => [
            { name: "Sol" },
            { name: "Mercurio" },
            { name: "Venus" },
            { name: "Tierra" },
            { name: "Marte" },
            { name: "Jupiter" },
            { name: "Saturno" },
            { name: "Urano" },
            { name: "Neptuno" },
        ],
    },
});


const getPlanet = (planetName) => {
    switch (planetName) {
        case "Sol":
            return "../../src/assets/TimelinePlanets/sol.png";
        case "Mercurio":
            return "../../src/assets/TimelinePlanets/mercurio.png";
        case "Venus":
            return "../../src/assets/TimelinePlanets/venus.png";
        case "Tierra":
            return "../../src/assets/TimelinePlanets/earth.png";
        case "Marte":
            return "../../src/assets/TimelinePlanets/mars.png";
        case "Jupiter":
            return "../../src/assets/TimelinePlanets/jupiter.png";
        case "Saturno":
            return "../../src/assets/TimelinePlanets/saturn.png";
        case "Urano":
            return "../../src/assets/TimelinePlanets/urano.png";
        case "Neptuno":
            return "../../src/assets/TimelinePlanets/neptuno.png";
        default:
            return "";
    }
};
</script>

<template>
    <ol class="timeline">
        <li v-for="planet in planets" :key="planet.name" class="timeline-item">

            <span class="timeline-item-icon | avatar-icon">
                <i class="avatar">
                    <img :src="getPlanet(planet.name)" alt="name of planet" />
                </i>
            </span>
            <span class="timeline-item-name">{{ planet.name }}</span>
        </li>
    </ol>
</template>
   
<style lang="scss" scoped>
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

li {
    top: 3em;
    left: .1rem;
}

.timeline {
    width: 85%;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    padding: 32px 0 32px 32px;
    border-left: 2px solid rgb(255, 255, 255);
    font-size: 1.125rem;
    height: 34em;
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
    box-shadow: 0 0 0 6px #faf9f9;

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

.timeline-item-name {
    display: none;
}

.timeline-item:hover .timeline-item-name {
    display: block;
    text-decoration: underline;
    display: flex;
    margin-top: 0.2em;
    color: white;
}
</style>




   






  




  















  
