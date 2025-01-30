/* script.js */
document.addEventListener('DOMContentLoaded', function() {
    const mainButton = document.getElementById('mainButton');
    
    mainButton.addEventListener('click', (e) => {
        e.preventDefault();
        // Add your link here
        window.location.href = 'https://www.youtube.com/watch?v=nmn9mXBCsU8&ab_channel=Babyboi';
    });
});