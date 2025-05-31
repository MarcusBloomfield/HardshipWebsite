document.addEventListener('DOMContentLoaded', function() {
    try {
        const backgroundImages = document.querySelectorAll('.background-grid img');
        
        // Validate that we have images to process
        if (!backgroundImages || backgroundImages.length === 0) {
            console.warn('No background images found to load');
            return;
        }
        
        // Validate maximum number of images 
        const maxImages = 20;
        if (backgroundImages.length > maxImages) {
            console.warn(`Too many background images (${backgroundImages.length}), limiting to ${maxImages}`);
        }
        
        const imagesToProcess = Array.from(backgroundImages).slice(0, maxImages);
        
        imagesToProcess.forEach(function(image, index) {
            // Validate image element
            if (!image || !(image instanceof HTMLImageElement)) {
                console.warn('Invalid image element found, skipping');
                return;
            }
            
            // Validate delay to prevent excessive timeouts
            const maxDelay = 5000; // 5 seconds max
            const delay = Math.min(index * 150, maxDelay);
            
            const addLoadedClasses = function() {
                try {
                    // Validate element still exists in DOM
                    if (image && image.parentNode) {
                        image.classList.add('loaded', 'fade-in');
                    }
                } catch (error) {
                    console.error('Error adding classes to image:', error);
                }
            };
            
            image.addEventListener('load', function() {
                setTimeout(addLoadedClasses, delay);
            });
            
            // Handle already loaded images
            if (image.complete && image.naturalWidth > 0) {
                setTimeout(addLoadedClasses, delay);
            }
            
            // Add error handling for failed image loads
            image.addEventListener('error', function() {
                console.warn('Failed to load background image:', image.src);
                // Optionally add an error class for styling
                try {
                    if (image && image.parentNode) {
                        image.classList.add('load-error');
                    }
                } catch (error) {
                    console.error('Error handling image load failure:', error);
                }
            });
        });
        
    } catch (error) {
        console.error('Error in background image loader:', error);
    }
}); 