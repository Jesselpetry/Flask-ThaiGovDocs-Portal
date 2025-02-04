/* script.js */
document.addEventListener('DOMContentLoaded', function() {
    const mainButton = document.getElementById('mainButton');
    
    mainButton.addEventListener('click', (e) => {
        e.preventDefault();
        // Add your link here
        window.location.href = 'https://fd2e-2403-6200-8832-2fc2-28bd-434c-13d3-6b11.ngrok-free.app';
    });
});