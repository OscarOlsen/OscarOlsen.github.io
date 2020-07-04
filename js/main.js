let elementoScrollMovil = document.getElementsByClassName('span-nav-movil');
let elementoScrollEscritorio = document.getElementsByClassName('span-nav-escritorio');
console.log(elementoScrollEscritorio);

for (let i = 0; i < elementoScrollMovil.length; i++) {
    elementoScrollMovil[i].addEventListener('click', function () {
        desplazarScroll(i);   
    });
    elementoScrollEscritorio[i].addEventListener('click', function () {
        desplazarScroll(i);   
    });
}
function desplazarScroll(i) {
    let elementoScroll2 = document.getElementsByClassName('article-scroll');
    let top = elementoScroll2[i].getBoundingClientRect().top
    window.scroll({
        top: top,
        left: 0,
        behavior: 'smooth'
    });
}





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