<template>
    <section class="footer-section">
        <div class="container">
            <div class="description-text">
                <p>This is just the beginning</p>
                <br>
                <p>I have big plans for continued development, community feedback, and meaningful updates</p>
                <br>
                <p>Thank you for checking out Hardship</p>
            </div>
            <a href="https://store.steampowered.com/app/1334570?utm_source=Website" class="steam-link" target="_blank" rel="noopener noreferrer">
                Wishlist now on Steam! <img src="/Pictures/Steam_icon_logo.svg.png" alt="Steam" class="steam-icon">
            </a>
        </div>
        <br/>
        <div class="container" style="display: flex; justify-content: center; flex-direction: row; align-items: center; gap: 10px;">
            <a href="https://github.com/NDISCOVER/Cinzel" class="blog-post-link">Font</a>
            <a href="https://marcusbloomfield.github.io/HardshipWebsite/PrivacyPolicy.md" class="blog-post-link">Privacy Policy</a>
            <a href="https://marcusbloomfield.github.io/HardshipWebsite/LICENSE.md" class="blog-post-link">License</a>
        </div>
    </section>
</template>

<style scoped>
.footer-section {
    background: linear-gradient(180deg, var(--secondary-bg),  var(--primary-bg));
    color: var(--text-color);
    padding: 3rem 0;
    text-align: center;
    border-top: 2px solid var(--border-color);
}

.footer-section p {
    margin-bottom: 1rem;
    line-height: 1.7;
}

.footer-section strong {
    font-family: 'Cinzel', serif;
    font-weight: 600;
}
</style>