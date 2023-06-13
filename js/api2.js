// ABRIMOS JSON CON API
// seleccionamos el ID
const btnAbrirJson = document.querySelector("#abrirJSON")
// aplicamos el evento
btnAbrirJson.addEventListener("click", obtenerDatos);
// aplicamos funcion para obtener los datos

function obtenerDatos() {
    const url = 'data/nombre.json'

    fetch(url)
        .then(res => res.json())
        .then(datos => mostrarHTML(datos))
}   

// mostramos en html lo aplicado
function mostrarHTML(nombre) { 
    // desestructuramos el div class "nombre" de HTML    
    const { name, username, phone, address: {city} } = nombre
    console.log(nombre);
    const body = document.querySelector("body");
    const div = document.createElement("div");
    // mostramos lo que queremos en html
    div.innerHTML = `
    <div class= 'nombre'> Nombre: ${name} </div>
    <div class= 'nombre'> Usuario: ${username} </div>
    <div class= 'nombre'> Direccion: ${city} </div>
    <div class= 'nombre'> Telefono: ${phone} </div>
    `
    body.appendChild(div)
}