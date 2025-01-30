/* script.js */
document.addEventListener('DOMContentLoaded', function() {
    const mainButton = document.getElementById('mainButton');
    
    mainButton.addEventListener('click', (e) => {
        e.preventDefault();
        // Add your link here
        window.location.href = 'https://drive.google.com/drive/folders/1WIC8hkWUdACAMZZ_fU1HVlJJUZOPmN2r';
    });
});