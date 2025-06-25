<template>
 <section class="dev-blog-section">
    <div class="container">
        <h2>Development Blog</h2>
        <div class="blog-posts">

            <div class="blog-post">
                <div class="blog-post-date">Wed, June 18, 2025</div>
                <div class="blog-post-title">Tech, Roads and Buildings!</div>
                <div class="blog-post-excerpt">I've implemented the first iteration of the road network, these roads are not only visual they boost movement speed and also offer the citizen a more performant path finding allowing the game to run faster and help citizens navigate the world with ease. Additionally there is only one road network system, meaning all roads will be connected and will function as the life line of the city.</div>
                <a href="https://store.steampowered.com/news/app/1334570/view/535478910131901782" class="blog-post-link" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>

            <div class="blog-post">
                <div class="blog-post-date">Fri, May 30, 2025</div>
                <div class="blog-post-title">Visual Rework</div>
                <div class="blog-post-excerpt">I've been working on refining the visual style of my city-building game, and I've decided to transition to a cleaner, orthographic-ish look. This update brings a sharper and more structured visual idea to my game whilst maintaining some depth.</div>
                <a href="https://store.steampowered.com/news/app/1334570/view/509581849759057424" class="blog-post-link" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
            
            <div class="blog-post">
                <div class="blog-post-date">Sat, May 17, 2025</div>
                <div class="blog-post-title">It Begins!</div>
                <div class="blog-post-excerpt">I'm Marcus, the solo developer behind Hardship and I am excited to bring to life my dream game. It still needs quite a bit of work but I am beyond confident that I can bring my vision to reality along side a hopefully growing community!</div>
                <a href="https://store.steampowered.com/news/app/1334570/view/564749771124769801" class="blog-post-link" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
            
        </div>
        <div class="steam-news-link">
            <a href="https://store.steampowered.com/news/app/1334570" class="steam-news-button" target="_blank" rel="noopener noreferrer">View More Updates</a>
        </div>
    </div>
</section>
</template>

<style scoped>

.dev-blog-section {
    background: var(--primary-bg);
    padding: 3rem 0;
    border-bottom: 1px solid var(--border-color);
}

.dev-blog-section h2 {
    text-align: center;
    font-family: 'Cinzel', serif;
    font-weight: 600;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--text-color);
}

.blog-posts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.blog-post {
    background: linear-gradient(135deg, var(--secondary-bg), var(--primary-bg));
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 2rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.blog-post:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
}

.blog-post-date {
    color: var(--text-color);
    font-size: 0.9rem;
    margin-bottom: 1rem;
    font-family: 'Cinzel', serif;
    font-weight: 400;
}

.blog-post-title {
    font-family: 'Cinzel', serif;
    font-weight: 600;
    font-size: 1.4rem;
    color: var(--text-color);
    margin-bottom: 1rem;
    line-height: 1.3;
}

.blog-post-excerpt {
    color: var(--text-color);
    line-height: 1.6;
    margin-bottom: 1.5rem;
    opacity: 0.9;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 100px;
}
</style>