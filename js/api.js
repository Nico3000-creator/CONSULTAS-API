// Consultamos el TXT CON API
// Seleccionar el ID
const btnAbrirTXT = document.querySelector("#abrirTxt");
// agregamos evento
btnAbrirTXT.addEventListener('click', obtenerDatos);

// agregamos funcion para obtener los datos
function obtenerDatos() {
    const url = "data/datos.txt"
    fetch(url)
    .then(res => {
        
        return res.text()
    })

    // mostrar en HTML lo creado
    .then (datos => {
        mostrarHTML(datos);
    })

    // generar error 
    .catch(error => {

    })
}

// funcion para mostrar en HTML
function mostrarHTML(datos) {
    const body = document.querySelector("body")
    const parrafo = document.createElement("p")
    parrafo.textContent = datos
    body.appendChild(parrafo)
}