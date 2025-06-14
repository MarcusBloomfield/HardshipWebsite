<script setup>
import { onMounted, ref } from 'vue'

const backgroundGridRef = ref(null)

onMounted(() => {
    if (backgroundGridRef.value) {
        const backgroundImages = backgroundGridRef.value.querySelectorAll('img')
        
        backgroundImages.forEach((image, index) => {
            image.addEventListener('load', () => {
                setTimeout(() => {
                    image.classList.add('loaded', 'fade-in')
                }, index * 111)
            })
        })
    }
})
</script>


<template>
    <div class="background-image">
        <div class="background-grid" ref="backgroundGridRef">
            <img src="Pictures/People.PNG" alt="Citizens and People Management">
            <img src="Pictures/FARMS.PNG" alt="Farming and Agriculture">
            <img src="Pictures/BuildingCreator.PNG" alt="Building Creation Tool">
            <img src="Pictures/SomeHouses.PNG" alt="Town Housing">
            <img src="Pictures/MOOOON.PNG" alt="Night Cycle">
            <img src="Pictures/Forest.PNG" alt="Forest Environment">
            <img src="Pictures/ForestMountatin.PNG" alt="Forest Mountain View">
            <img src="Pictures/Planet.PNG" alt="World View">
            <img src="Pictures/Mountain.PNG" alt="Mountain Landscape">
        </div>
    </div>
</template>


<style scoped>

.background-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: .8;
    overflow: hidden;
}

.background-grid {
    display: flex;
    flex-direction: row;
    flex-basis: 100%;
    gap: 5px;
    width: 100%;
    height: 100%;
}

.background-grid img {
    width: 11%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 1.2s ease-in-out;
}

.background-grid img.loaded {
    opacity: 1;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: .8;
    }
}

.background-grid img.fade-in {
    animation: fadeIn 1.5s ease-out forwards;
} 
</style>