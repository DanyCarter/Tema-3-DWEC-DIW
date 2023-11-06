const abrirNuevaVentana = () => {
    /* Hay que pasarle minimo 2 valores (admite hasta3) */
    /* El segundo seria para abrir una nueva pestaña */
    window.open("https://www.tuniversformacion.es", "_blank")
}

const abrirMismaVentana = () => {
    /* con self significa que abrimos la ventana en un pestaña nueva */
    window.open("https://www.tuniversformacion.es", "_self")
}

//Acceder a las propiedades de los objetos

document.getElementById("anchoVentana").textContent = window.innerWidth;
document.getElementById("alturaVentana").textContent = window.innerHeight;
document.getElementById("urlActual").textContent = window.location.href;
document.getElementById("navegadorInfo").textContent = window.navigator.userAgent;
document.getElementById("numeroEnlaces").textContent = document.links.length;