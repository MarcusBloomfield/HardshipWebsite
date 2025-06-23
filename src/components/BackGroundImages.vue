<script setup>
import { ref, reactive } from 'vue'
import peopleImg from '/Pictures/People.PNG'
import farmsImg from '/Pictures/FARMS.PNG'
import buildingCreatorImg from '/Pictures/BuildingCreator.PNG'
import someHousesImg from '/Pictures/SomeHouses.PNG'
import moonImg from '/Pictures/MOOOON.PNG'
import forestImg from '/Pictures/Forest.PNG'
import forestMountainImg from '/Pictures/ForestMountatin.PNG'
import estateImg from '/Pictures/ESTATE.PNG'
import mountainImg from '/Pictures/Mountain.PNG'

const backgroundImages = [
    { src: peopleImg, alt: "Citizens and People Management" },
    { src: farmsImg, alt: "Farming and Agriculture" },
    { src: buildingCreatorImg, alt: "Building Creation Tool" },
    { src: someHousesImg, alt: "Town Housing" },
    { src: moonImg, alt: "Night Cycle" },
    { src: forestImg, alt: "Forest Environment" },
    { src: forestMountainImg, alt: "Forest Mountain View" },
    { src: estateImg, alt: "World View" },
    { src: mountainImg, alt: "Mountain Landscape" }
]

const imageStates = reactive(
    backgroundImages.map(() => ({
        fadeIn: false
    }))
)

const handleImageLoad = (index) => {
    setTimeout(() => {
        imageStates[index].fadeIn = true
    }, index * 111)
}

const getImageClasses = (index) => {
    return imageStates[index].fadeIn ? 'fade-in' : ''
}
</script>


<template>
    <div class="background-image">
        <div class="background-grid">
            <img 
                v-for="(image, index) in backgroundImages"
                :key="index"
                :src="image.src" 
                :alt="image.alt"
                :class="getImageClasses(index)"
                @load="handleImageLoad(index)"
            >
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

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.background-grid img.fade-in {
    animation: fadeIn 1.5s ease-out forwards;
} 
</style>