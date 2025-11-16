document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('interactive-gallery');
    const wrapper = gallery.parentElement;

    // Define the initial offset set in CSS (e.g., -50%)
    const initialOffset = -50; // Represents -50% translation

    wrapper.addEventListener('mousemove', (e) => {
        const wrapperRect = wrapper.getBoundingClientRect();
        const mouseX = e.clientX - wrapperRect.left; 

        // Normalized percentage (0 to 1)
        const percentageX = mouseX / wrapperRect.width - 0.5; 

        // Define the maximum shift amount (e.g., 50 pixels)
        const maxShift = 50; 
        
        // Calculate the pixel shift based on mouse
        const mouseShiftX = -percentageX * maxShift; 

        // COMBINE the initial -50% shift with the new pixel shift
        // Using a percentage transform for the initial offset is easier to manage a long list
        // Note: For simplicity and better control, we'll keep the mouseShiftX in pixels
        gallery.style.transform = `translateX(calc(${initialOffset}% + ${mouseShiftX}px))`;
    });

    wrapper.addEventListener('mouseleave', () => {
        // When mouse leaves, return to the initial centered position
        gallery.style.transform = `translateX(${initialOffset}%)`;
    });
});