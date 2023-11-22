var inventario = document.getElementById("card-inventario");
var materia = document.getElementById("card-materia");
var venta = document.getElementById("card-venta");
var recetas = document.getElementById("card-recetas");
var corte = document.getElementById("card-corte");

inventario.addEventListener("click", function () {
    window.location.href = "html/inventario/inventario.html";
});

materia.addEventListener("click", function () {
    window.location.href = "html/materia/materias.html";
});

venta.addEventListener("click", function () {
    window.location.href = "html/venta/venta.html";
});

recetas.addEventListener("click", function () {
    window.location.href = "html/receta/recetas.html";
});

corte.addEventListener("click", function () {
    window.location.href = "html/corte/corte.html";
});

function toggleNavbar() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

function closeNavbarOutsideClick(event) {
    var navbar = document.querySelector('.navbar');
    var icon = document.querySelector('#navbar-icon');
    
    if (!navbar.contains(event.target) && event.target !== icon) {
        navbar.classList.remove('active');
    }
}

document.addEventListener('click', closeNavbarOutsideClick);
