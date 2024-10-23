// Espera que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');
    
    menuToggle.addEventListener('click', function() {
        // Alterna la clase 'show' para mostrar/ocultar el menú
        dropdownMenu.classList.toggle('show');
    });
});
