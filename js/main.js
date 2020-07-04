let botonNavMovilMostrar = document.getElementById('span-nav-mov-mostrar');
let botonNavMovilOcultar = document.getElementById('span-nav-mov-ocultar');

botonNavMovilMostrar.addEventListener('click', desplegarNavegadorMovil);
botonNavMovilOcultar.addEventListener('click', ocultarNavegadorMovil);

function desplegarNavegadorMovil() {
    let nav = document.getElementById('nav-movil');
    nav.classList.add('nav-movil-mostrar');
}
function ocultarNavegadorMovil() {
    let nav = document.getElementById('nav-movil');
    nav.classList.remove('nav-movil-mostrar');
}