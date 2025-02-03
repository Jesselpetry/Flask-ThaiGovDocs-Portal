/* script.js */
document.addEventListener('DOMContentLoaded', function() {
    const mainButton = document.getElementById('mainButton');
    
    mainButton.addEventListener('click', (e) => {
        e.preventDefault();
        // Add your link here
        window.location.href = 'https://649f-2403-6200-8832-2fc2-5dfc-ceb8-32d3-dda0.ngrok-free.app';
    });
});