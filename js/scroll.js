// ******************* Codigo para hacer scroll dinamico ******************* //

let elementoScrollMovil = document.getElementsByClassName('span-nav-movil');
let elementoScrollEscritorio = document.getElementsByClassName('span-nav-escritorio');

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