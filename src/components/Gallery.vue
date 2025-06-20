<template>
   <section class="gallery-section">
        <div class="container">
            <h2>Game Screenshots</h2>
            <div class="gallery-grid">
                <div class="gallery-item">
                    <img src="/Pictures/ESTATE.PNG" alt="Grand Estate">
                    <div class="overlay">
                        <h4>Player Estates</h4>
                        <p>Build and manage smaller villages split for your main city.</p>
                    </div>
                </div>
                <div class="gallery-item">
                    <img src="/Pictures/Huts.PNG" alt="Simple Huts">
                    <div class="overlay">
                        <h4>Starter Homes</h4>
                        <p>Provide basic shelter for your first citizens.</p>
                    </div>
                </div>
                <div class="gallery-item">
                    <img src="/Pictures/VillageSreenShot.PNG" alt="Village Life">
                    <div class="overlay">
                        <h4>Bustling Village</h4>
                        <p>Watch your small settlement grow into a lively village.</p>
                    </div>
                </div>
                <div class="gallery-item">
                    <img src="/Pictures/People.PNG" alt="Citizens and People Management">
                    <div class="overlay">
                        <h4>Citizen Management</h4>
                        <p>Manage your townspeople and their daily needs</p>
                    </div>
                </div>
                <div class="gallery-item">
                    <img src="/Pictures/FARMS.PNG" alt="Farming and Agriculture">
                    <div class="overlay">
                        <h4>Agriculture System</h4>
                        <p>Grow crops to feed your growing settlement</p>
                    </div>
                </div>
                <div class="gallery-item">
                    <img src="/Pictures/BuildingCreator.PNG" alt="Building Creation Tool">
                    <div class="overlay">
                        <h4>Building System</h4>
                        <p>Design and construct various structures</p>
                    </div>
                </div>
                <div class="gallery-item">
                    <img src="/Pictures/Mountain.PNG" alt="Mountain Landscape">
                    <div class="overlay">
                        <h4>Varied Terrain</h4>
                        <p>Explore different landscapes and environments</p>
                    </div>
                </div>
                <div class="gallery-item">
                    <img src="/Pictures/ForestMountatin.PNG" alt="Forest Mountain View">
                    <div class="overlay">
                        <h4>Scenic Views</h4>
                        <p>Beautiful landscapes surround your settlement</p>
                    </div>
                </div>
                <div class="gallery-item">
                    <img src="/Pictures/Planet.PNG" alt="World View">
                    <div class="overlay">
                        <h4>World Overview</h4>
                        <p>Plan your expansion across the land</p>
                    </div>
                </div>
                <div class="gallery-item">
                    <img src="/Pictures/MOOOON.PNG" alt="Night Cycle">
                    <div class="overlay">
                        <h4>Day/Night Cycle</h4>
                        <p>Adapt to changing conditions throughout the day</p>
                    </div>
                </div>
                <div class="gallery-item">
                    <img src="/Pictures/Forest.PNG" alt="Forest Environment">
                    <div class="overlay">
                        <h4>Natural Resources</h4>
                        <p>Gather wood and materials from forests</p>
                    </div>
                </div>
            </div>
        </div>
    </section> 
</template>

<style scoped>
.gallery-section {
    background: linear-gradient(135deg, var(--primary-bg), var(--secondary-bg));
    padding: 3rem 0;
}

.gallery-section h2 {
    text-align: center;
    font-family: 'Cinzel', serif;
    font-weight: 600;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--text-color);
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}

.gallery-item {
    position: relative;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    background: var(--secondary-bg);
}

.gallery-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
}

.gallery-item img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    display: block;
    border-bottom: 1px solid var(--border-color);
}

.gallery-item .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, var(--primary-bg));
    color: var(--text-color);
    padding: 1rem;
    transform: translateY(100%);
    transition: transform 0.3s ease;
}

.gallery-item:hover .overlay {
    transform: translateY(0);
}

.gallery-item .overlay h4 {
    font-family: 'Cinzel', serif;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

</style>