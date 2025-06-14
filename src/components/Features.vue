<template>
    <section class="features-section">
        <div class="container">
            <h2>Key Features</h2>
       <div class="description-text">
            <p>Hardship is a survival-focused city builder, where managing people, resources, expanding your settlement and progressing through an in depth tech tree is key to survival</p>
            <br>
            <p>You'll gather materials, craft tools and buildings to deal with the daily needs of your citizens.</p>
            <br>
            <p>Every system ties into your town's ability to survive and grow, all within a changing environment with unseen dangers.</p>
        </div>
            <div class="features-grid">
                <div class="feature-card">
                    <h3>🏗️ Custom Building System</h3>
                    <p>Build your city in whatever style you would like. With a simple blueprint system combined with a robust building system you can easily design your own houses, factories, workshops, taverns and place them anywhere on your planet.</p>
                </div>
                <div class="feature-card">
                    <h3>⛏️ Resource Gathering</h3>
                    <p>Collect vital materials like wood, stone, food, and more. These resources are the backbone of your settlement and must be managed wisely to sustain your population and support construction efforts.</p>
                </div>
                <div class="feature-card">
                    <h3>🏘️ Town-Building & Management</h3>
                    <p>Plan your settlement layout, assign roles to citizens, and manage their tasks. A strong infrastructure and well-organized workforce are key to survival and expansion.</p>
                </div>
                <div class="feature-card">
                    <h3>🌌 Dynamic Environment</h3>
                    <p>Set on a planet with a shifting day/night cycle and an approaching winter add a layer of strategy. Who knows what threats are lurking in this unfamiliar solar system.</p>
                </div>
                <div class="feature-card">
                    <h3>🎒 Citizen Equipment System</h3>
                    <p>Equip your citizens with the means of production and defense, from headgear and to hammers. A well-equipped citizen is not only more productive but stands a better chance against the elements.</p>
                </div>
                <div class="feature-card">
                    <h3>🔬 Technology Research</h3>
                    <p>Research technologies to advance your civilization all the way from primitive techs to electricity to modern technology like the internet.</p>
                </div>
                <div class="feature-card">
                    <h3>🏥 Survival Mechanics</h3>
                    <p>Hunger, thirst, fatigue, and exposure to harsh temperatures will directly affect citizen health, morale, and productivity.</p>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
    .features-section {
        background: var(--secondary-bg);
        padding: 3rem 0;
        border-bottom: 1px solid var(--border-color);
    }

    .features-section h2 {
        text-align: center;
        font-family: 'Cinzel', serif;
        font-weight: 600;
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: var(--text-color);
    }

    .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-bottom: 3rem;
    }

    .feature-card {
        background: var(--primary-bg);
        padding: 1.5rem;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
    }

    .feature-card:hover {
        background: var(--secondary-bg);
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
    }

    .feature-card h3 {
        color: var(--text-color);
        margin-bottom: 1rem;
        font-size: 1.3rem;
        font-family: 'Cinzel', serif;
        font-weight: 600;
    }

    .feature-card p {
        line-height: 1.7;
    }

</style>